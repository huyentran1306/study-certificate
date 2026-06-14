import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cfiifhfruyjcgikjotne.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DD6l7mKVEkHXIEG-1r7KDg_CbrfVdWA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface DbQuestion {
  id: string;
  cert_id: string;
  question_number: number;
  text: string;
  options: { key: string; text: string }[];
  correct_answers: string[];
  explanation: string;
  category: string;
  tags?: string[];
}

export interface DbUserProgress {
  username: string;
  cert_id: string;
  answered_count: number;
  correct_count: number;
  incorrect_count: number;
  streak: number;
  bookmarked_question_ids: string[];
}

export interface DbStudyHistory {
  username: string;
  cert_id: string;
  question_id: string;
  selected_options: string[];
  is_correct: boolean;
  timestamp?: string;
}

export interface DbExamResult {
  username: string;
  cert_id: string;
  score: number;
  total_questions: number;
  elapsed_time_seconds: number;
}
