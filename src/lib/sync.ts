import { supabase } from './supabase';
import { Question, ProgressState } from '../types';

// Fetch questions for a certification from Database
export async function fetchQuestionsFromDb(certId: string): Promise<Question[] | null> {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('cert_id', certId)
      .order('question_number', { ascending: true });

    if (error) {
      console.error('Error fetching questions from DB:', error);
      return null;
    }

    if (!data || data.length === 0) return null;

    return data.map((q: any) => ({
      id: q.id,
      questionNumber: q.question_number,
      text: q.text,
      options: Array.isArray(q.options) ? q.options : JSON.parse(q.options),
      correctAnswers: q.correct_answers,
      explanation: q.explanation || '',
      category: q.category || 'General',
      tags: q.tags || []
    }));
  } catch (err) {
    console.error('Failed to fetch questions from Db:', err);
    return null;
  }
}

// Bulk sync questions of a cert to DB
export async function uploadQuestionsToDb(certId: string, questionsList: Question[]): Promise<boolean> {
  try {
    const rows = questionsList.map(q => ({
      id: q.id,
      cert_id: certId,
      question_number: q.questionNumber,
      text: q.text,
      options: q.options,
      correct_answers: q.correctAnswers,
      explanation: q.explanation,
      category: q.category,
      tags: q.tags || []
    }));

    const { error } = await supabase
      .from('questions')
      .upsert(rows, { onConflict: 'id' });

    if (error) {
      console.error('Error upserting questions to DB:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to upload questions to Db:', err);
    return false;
  }
}

// Fetch user's history and overall progress
export async function fetchUserProgressFromDb(username: string, certId: string): Promise<ProgressState | null> {
  try {
    // 1. Fetch from user_progress
    const { data: progressData, error: progressError } = await supabase
      .from('user_progress')
      .select('*')
      .eq('username', username)
      .eq('cert_id', certId)
      .maybeSingle();

    if (progressError) {
      console.error('Error fetching progress from DB:', progressError);
      return null;
    }

    // 2. Fetch from study_history (to rebuild exact question logs)
    const { data: historyData, error: historyError } = await supabase
      .from('study_history')
      .select('*')
      .eq('username', username)
      .eq('cert_id', certId);

    if (historyError) {
      console.error('Error fetching study logs from DB:', historyError);
      return null;
    }

    const historyMapped = (historyData || []).map((h: any) => ({
      questionId: h.question_id,
      selectedOptions: h.selected_options,
      isCorrect: h.is_correct,
      timestamp: new Date(h.timestamp).getTime()
    }));

    if (!progressData) {
      // User doesn't have progress in DB yet
      return {
        answeredCount: historyMapped.length,
        correctCount: historyMapped.filter(h => h.isCorrect).length,
        incorrectCount: historyMapped.length - historyMapped.filter(h => h.isCorrect).length,
        streak: 0,
        bookmarkedQuestionIds: [],
        history: historyMapped
      };
    }

    let bookmarkedIds: string[] = [];
    if (progressData.bookmarked_question_ids) {
      if (Array.isArray(progressData.bookmarked_question_ids)) {
        bookmarkedIds = progressData.bookmarked_question_ids;
      } else {
        try {
          bookmarkedIds = typeof progressData.bookmarked_question_ids === 'string'
            ? JSON.parse(progressData.bookmarked_question_ids)
            : progressData.bookmarked_question_ids;
        } catch {
          // ignore
        }
      }
    }

    return {
      answeredCount: historyMapped.length,
      correctCount: historyMapped.filter(h => h.isCorrect).length,
      incorrectCount: historyMapped.length - historyMapped.filter(h => h.isCorrect).length,
      streak: progressData.streak || 0,
      bookmarkedQuestionIds: bookmarkedIds,
      history: historyMapped
    };
  } catch (err) {
    console.error('Failed to fetch user progress from DB:', err);
    return null;
  }
}

// Sync overall progress State
export async function syncUserProgressStateToDb(
  username: string, 
  certId: string, 
  progress: ProgressState
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        username,
        cert_id: certId,
        answered_count: progress.answeredCount,
        correct_count: progress.correctCount,
        incorrect_count: progress.incorrectCount,
        streak: progress.streak,
        bookmarked_question_ids: progress.bookmarkedQuestionIds,
        last_updated: new Date().toISOString()
      }, { onConflict: 'username,cert_id' });

    if (error) {
      console.error('Error upserting user progress in DB:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to sync user progress state:', err);
    return false;
  }
}

// Sync single history entry (question answer)
export async function syncSingleHistoryEntryToDb(
  username: string,
  certId: string,
  questionId: string,
  selectedOptions: string[],
  isCorrect: boolean
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('study_history')
      .upsert({
        username,
        cert_id: certId,
        question_id: questionId,
        selected_options: selectedOptions,
        is_correct: isCorrect,
        timestamp: new Date().toISOString()
      }, { onConflict: 'username,cert_id,question_id' });

    if (error) {
      console.error('Error upserting study history log:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to sync single study log:', err);
    return false;
  }
}

// Sync entire history logs in bulk (for full local-db synchronization)
export async function syncBulkHistoryToDb(
  username: string,
  certId: string,
  historyEntries: ProgressState['history']
): Promise<boolean> {
  try {
    if (historyEntries.length === 0) return true;

    const rows = historyEntries.map(h => ({
      username,
      cert_id: certId,
      question_id: h.questionId,
      selected_options: h.selectedOptions,
      is_correct: h.isCorrect,
      timestamp: new Date(h.timestamp).toISOString()
    }));

    const { error } = await supabase
      .from('study_history')
      .upsert(rows, { onConflict: 'username,cert_id,question_id' });

    if (error) {
      console.error('Error in bulk study history sync:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to sync bulk study history:', err);
    return false;
  }
}

// ----------------- EXAM RESULTS STORAGE & SYNC -----------------

export interface ExamHistoryRecord {
  id: string;
  username: string;
  cert_id: string;
  cert_code: string;
  score: number;
  total_questions: number;
  accuracy: number;
  elapsed_seconds: number;
  timestamp: number;
}

// Fetch all exam results from DB
export async function fetchAllExamResultsFromDb(): Promise<ExamHistoryRecord[] | null> {
  try {
    const { data, error } = await supabase
      .from('exam_results')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Error fetching exam results:', error);
      return null;
    }

    return (data || []).map((row: any) => ({
      id: row.id?.toString() || Math.random().toString(),
      username: row.username,
      cert_id: row.cert_id,
      cert_code: row.cert_code || '',
      score: row.score,
      total_questions: row.total_questions,
      accuracy: row.accuracy || Math.round((row.score / row.total_questions) * 100),
      elapsed_seconds: row.elapsed_seconds || 0,
      timestamp: new Date(row.timestamp).getTime()
    }));
  } catch (err) {
    console.error('Failed to fetch exam results from DB:', err);
    return null;
  }
}

// Save single exam result to DB
export async function saveExamResultToDb(record: Omit<ExamHistoryRecord, 'id'>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('exam_results')
      .insert({
        username: record.username,
        cert_id: record.cert_id,
        cert_code: record.cert_code,
        score: record.score,
        total_questions: record.total_questions,
        accuracy: record.accuracy,
        elapsed_seconds: record.elapsed_seconds,
        timestamp: new Date(record.timestamp).toISOString()
      });

    if (error) {
      console.error('Error saving exam result:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to save exam result to DB:', err);
    return false;
  }
}

// Delete single exam result from DB
export async function deleteExamResultFromDb(id: string): Promise<boolean> {
  try {
    // If it's a numeric ID from Supabase
    if (!isNaN(Number(id))) {
      const { error } = await supabase
        .from('exam_results')
        .delete()
        .eq('id', Number(id));
      if (error) {
        console.error('Error deleting exam result by numeric ID:', error);
        return false;
      }
    } else {
      // Fallback: Delete using username and timestamp if it's a local fallback string ID or uuid
      const { error } = await supabase
        .from('exam_results')
        .delete()
        .eq('id', id);
      if (error) {
        console.error('Error deleting exam result by text ID:', error);
        return false;
      }
    }
    return true;
  } catch (err) {
    console.error('Failed to delete exam result from DB:', err);
    return false;
  }
}

// Delete all exam results from DB
export async function clearAllExamResultsFromDb(): Promise<boolean> {
  try {
    // Warning: Will truncate/delete all rows. In Supabase RLS allows deletions typically if admin/user is authorized.
    // For our app, we can run delete with a wildcard filter (e.g., neq 0 or text matches) or a simple delete everything.
    const { error } = await supabase
      .from('exam_results')
      .delete()
      .neq('username', 'non_existent_placeholder_wildcard_to_match_all_records');
    
    if (error) {
      console.error('Error clearing all exam results:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to clear exam results from DB:', err);
    return false;
  }
}
