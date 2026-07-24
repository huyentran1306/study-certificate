import { supabase } from './supabase';
import { Question, ProgressState, GroupMemberProgress } from '../types';

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
      tags: q.tags || [],
      imageUrl: q.image_url || undefined
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
      tags: q.tags || [],
      image_url: q.imageUrl || null
    }));

    let { error } = await supabase
      .from('questions')
      .upsert(rows, { onConflict: 'id' });

    if (error) {
      // If error is about missing image_url column, retry without it
      const isMissingImageUrl = error.message?.includes('image_url') || error.message?.includes('column');
      if (isMissingImageUrl) {
        console.warn('DB schema lacks image_url column. Retrying upsert without image_url...');
        const rowsWithoutImage = rows.map(({ image_url, ...rest }) => rest);
        const { error: retryError } = await supabase
          .from('questions')
          .upsert(rowsWithoutImage, { onConflict: 'id' });
        
        if (retryError) {
          console.error('Retry upserting questions to DB without image_url failed:', retryError);
          return false;
        }
        return true;
      }

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

// ----------------- USER PROGRESS TRACKING FOR ADMIN -----------------

export interface UserProgressRecord {
  username: string;
  cert_id: string;
  answered_count: number;
  correct_count: number;
  incorrect_count: number;
  streak: number;
  bookmarked_question_ids: string[];
  last_updated: string;
}

// Fetch all student learning progress records
export async function fetchAllUserProgressFromDb(): Promise<UserProgressRecord[] | null> {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .order('last_updated', { ascending: false });

    if (error) {
      console.error('Error fetching all user progress:', error);
      return null;
    }

    return (data || []).map((row: any) => ({
      username: row.username,
      cert_id: row.cert_id,
      answered_count: row.answered_count || 0,
      correct_count: row.correct_count || 0,
      incorrect_count: row.incorrect_count || 0,
      streak: row.streak || 0,
      bookmarked_question_ids: Array.isArray(row.bookmarked_question_ids) ? row.bookmarked_question_ids : [],
      last_updated: row.last_updated
    }));
  } catch (err) {
    console.error('Failed to fetch user progress from DB:', err);
    return null;
  }
}

// Delete single student progress record
export async function deleteUserProgressFromDb(username: string, certId: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_progress')
      .delete()
      .eq('username', username)
      .eq('cert_id', certId);

    if (error) {
      console.error('Error deleting user progress:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to delete user progress:', err);
    return false;
  }
}

// Clear all student progress records
export async function clearAllUserProgressFromDb(): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_progress')
      .delete()
      .neq('username', 'non_existent_placeholder_wildcard_to_match_all_records');

    if (error) {
      console.error('Error clearing all user progress:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to clear user progress:', err);
    return false;
  }
}

// ----------------- STUDY GROUPS STORAGE & SYNC -----------------

export async function fetchGroupsFromDb(): Promise<any[] | null> {
  try {
    const { data, error } = await supabase
      .from('study_groups')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching study groups:', error);
      return null;
    }

    return (data || []).map((g: any) => ({
      id: g.id,
      name: g.name,
      description: g.description || '',
      createdBy: g.created_by,
      token: g.token,
      createdAt: g.created_at
    }));
  } catch (err) {
    console.error('Failed to fetch groups from DB:', err);
    return null;
  }
}

export async function createGroupInDb(name: string, description: string, createdBy: string, token: string): Promise<string | null> {
  try {
    const groupId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const { error } = await supabase
      .from('study_groups')
      .insert({
        id: groupId,
        name,
        description,
        created_by: createdBy,
        token
      });

    if (error) {
      console.error('Error creating study group:', error);
      return null;
    }

    // Auto join the creator
    await joinGroupInDb(groupId, createdBy);

    return groupId;
  } catch (err) {
    console.error('Failed to create group in DB:', err);
    return null;
  }
}

export async function joinGroupInDb(groupId: string, username: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('group_members')
      .upsert({
        group_id: groupId,
        username
      }, { onConflict: 'group_id,username' });

    if (error) {
      console.error('Error joining group:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to join group in DB:', err);
    return false;
  }
}

export async function fetchGroupByTokenFromDb(token: string): Promise<any | null> {
  try {
    const { data, error } = await supabase
      .from('study_groups')
      .select('*')
      .eq('token', token)
      .maybeSingle();

    if (error || !data) return null;

    return {
      id: data.id,
      name: data.name,
      description: data.description || '',
      createdBy: data.created_by,
      token: data.token,
      createdAt: data.created_at
    };
  } catch (err) {
    console.error('Failed to fetch group by token from DB:', err);
    return null;
  }
}

export async function joinGroupByTokenInDb(token: string, username: string): Promise<any | null> {
  try {
    const { data, error } = await supabase
      .from('study_groups')
      .select('*')
      .eq('token', token)
      .maybeSingle();

    if (error || !data) {
      console.error('Error checking group token:', error);
      return null;
    }

    const joined = await joinGroupInDb(data.id, username);
    if (!joined) return null;

    return {
      id: data.id,
      name: data.name,
      description: data.description || '',
      createdBy: data.created_by,
      token: data.token,
      createdAt: data.created_at
    };
  } catch (err) {
    console.error('Failed to join group by token in DB:', err);
    return null;
  }
}

export async function leaveGroupInDb(groupId: string, username: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('group_members')
      .delete()
      .eq('group_id', groupId)
      .eq('username', username);

    if (error) {
      console.error('Error leaving group:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to leave group in DB:', err);
    return false;
  }
}

export async function fetchGroupMembersProgress(groupId: string): Promise<GroupMemberProgress[] | null> {
  try {
    // 1. Fetch group members
    const { data: members, error: membersError } = await supabase
      .from('group_members')
      .select('*')
      .eq('group_id', groupId);

    if (membersError || !members) {
      console.error('Error fetching group members:', membersError);
      return null;
    }

    if (members.length === 0) return [];

    const usernames = members.map((m: any) => m.username);

    // 2. Fetch progress of these members
    const { data: progressData, error: progressError } = await supabase
      .from('user_progress')
      .select('*')
      .in('username', usernames);

    if (progressError) {
      console.error('Error fetching members progress:', progressError);
      return null;
    }

    // Build map of username -> list of progress
    const progressMap: Record<string, any[]> = {};
    usernames.forEach(uname => {
      progressMap[uname] = [];
    });

    (progressData || []).forEach((p: any) => {
      if (progressMap[p.username]) {
        progressMap[p.username].push({
          certId: p.cert_id,
          certCode: p.cert_id.toUpperCase(),
          answeredCount: p.answered_count || 0,
          correctCount: p.correct_count || 0,
          streak: p.streak || 0,
          lastUpdated: p.last_updated
        });
      }
    });

    return members.map((m: any) => ({
      username: m.username,
      joinedAt: m.joined_at,
      certProgress: progressMap[m.username] || []
    }));
  } catch (err) {
    console.error('Failed to fetch group progress from DB:', err);
    return null;
  }
}

// ----------------- VIP KEYS CONFIGURATION DB SYNC -----------------

export async function fetchVipKeyConfigsFromDb(): Promise<Record<string, any[]> | null> {
  try {
    const { data, error } = await supabase
      .from('vip_key_configs')
      .select('*');

    if (error) {
      console.warn('Could not fetch VIP key configs from DB (table might not exist yet):', error.message);
      return null;
    }

    if (!data) return {};

    const result: Record<string, any[]> = {};
    data.forEach((row: any) => {
      const certId = row.cert_id;
      if (!result[certId]) result[certId] = [];
      result[certId].push({
        key: row.key,
        expiryDate: row.expiry_date || '2026-09-30',
        disabled: row.disabled === true
      });
    });

    return result;
  } catch (err) {
    console.error('Failed to fetch VIP key configs from DB:', err);
    return null;
  }
}

export async function saveVipKeyConfigToDb(certId: string, config: { key: string; expiryDate: string; disabled?: boolean }): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('vip_key_configs')
      .upsert({
        cert_id: certId,
        key: config.key,
        expiry_date: config.expiryDate || '2026-09-30',
        disabled: config.disabled === true
      }, { onConflict: 'cert_id,key' });

    if (error) {
      console.error('Error saving VIP key config to DB:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to save VIP key config to DB:', err);
    return false;
  }
}

export async function deleteVipKeyConfigFromDb(certId: string, keyToDelete: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('vip_key_configs')
      .delete()
      .eq('cert_id', certId)
      .eq('key', keyToDelete);

    if (error) {
      console.error('Error deleting VIP key config from DB:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to delete VIP key config from DB:', err);
    return false;
  }
}

export async function updateVipKeyDisabledInDb(certId: string, keyToToggle: string, disabled: boolean): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('vip_key_configs')
      .update({ disabled })
      .eq('cert_id', certId)
      .eq('key', keyToToggle);

    if (error) {
      console.error('Error updating VIP key disabled state in DB:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to update VIP key disabled state in DB:', err);
    return false;
  }
}

export async function updateVipKeyExpiryInDb(certId: string, keyToUpdate: string, expiryDate: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('vip_key_configs')
      .update({ expiry_date: expiryDate })
      .eq('cert_id', certId)
      .eq('key', keyToUpdate);

    if (error) {
      console.error('Error updating VIP key expiry in DB:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to update VIP key expiry in DB:', err);
    return false;
  }
}

// ----------------- USER JOINED GROUPS SYNC -----------------

export async function fetchUserJoinedGroupIds(username: string): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('group_members')
      .select('group_id')
      .eq('username', username);

    if (error) {
      console.warn('Could not fetch joined group IDs:', error.message);
      return [];
    }

    return (data || []).map((row: any) => row.group_id);
  } catch (err) {
    console.error('Failed to fetch joined group IDs:', err);
    return [];
  }
}

// ----------------- USER PET MASCOT CONFIGURATION DB SYNC -----------------

export async function fetchUserPetFromDb(username: string): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('user_pets')
      .select('pet_id')
      .eq('username', username)
      .maybeSingle();

    if (error) {
      console.warn('Could not fetch user pet from DB:', error.message);
      return null;
    }

    return data?.pet_id || null;
  } catch (err) {
    console.error('Failed to fetch user pet from DB:', err);
    return null;
  }
}

export async function saveUserPetToDb(username: string, petId: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_pets')
      .upsert({
        username,
        pet_id: petId,
        updated_at: new Date().toISOString()
      }, { onConflict: 'username' });

    if (error) {
      console.error('Error saving user pet to DB:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed to save user pet to DB:', err);
    return false;
  }
}




