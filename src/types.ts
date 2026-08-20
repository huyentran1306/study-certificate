export interface StatementItem {
  id: string; // e.g. "1", "2", "3"
  text: string;
  correctAnswer: 'Yes' | 'No' | string;
  /** Optional subset/order of choices shown for this matching row. */
  choiceKeys?: string[];
}

export interface QuestionChoice {
  key: string;
  text: string;
}

export type QuestionType =
  | 'multiple_choice'
  | 'statement_matrix'
  | 'matching_dropdown'
  | 'matching_drag_drop'
  | 'drag_drop'
  | 'case_study';

export interface Question {
  id: string;
  questionNumber: number;
  text: string;
  questionType?: QuestionType;
  statements?: StatementItem[];
  options: QuestionChoice[];
  /** Shared answer bank for matching questions. Falls back to options for legacy data. */
  choices?: QuestionChoice[];
  correctAnswers: string[]; // ['B'] or ['A', 'B'] for multi-select, or ['1:Yes', '2:No'] for statements
  explanation: string;
  category: string; // e.g. "Responsible AI", "Copilot CLI", "Features & Optimization", "Security & Licensing"
  tags?: string[];
  imageUrl?: string;
}

export type StudyMode = 'home' | 'practice' | 'exam' | 'guide' | 'admin' | 'group';

export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  token: string;
  createdAt: string;
}

export interface GroupMemberProgress {
  username: string;
  joinedAt: string;
  certProgress: {
    certId: string;
    certCode: string;
    answeredCount: number;
    correctCount: number;
    streak: number;
    lastUpdated: string;
  }[];
}

export interface VipKeyConfig {
  key: string;
  expiryDate: string; // YYYY-MM-DD
  disabled?: boolean;
}

export interface Certificate {
  id: string;
  name: string;
  code: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung cấp' | 'Nâng cao';
  estimatedHours: string;
  colorClass: string; // CSS styling preset
  iconName: string; // name matching Lucide icons
  isVIP?: boolean; // Requires access key / passcode
  isDisabled?: boolean; // If true, certification is hidden from normal views
  accessKeys?: string[]; // Allowed keys for this certification
  vipKeyConfigs?: VipKeyConfig[]; // Detailed VIP key configurations
}

export interface ProgressState {
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  streak: number;
  bookmarkedQuestionIds: string[];
  history: {
    questionId: string;
    selectedOptions: string[];
    isCorrect: boolean;
    timestamp: number;
  }[];
}

export interface ExamSession {
  isActive: boolean;
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswers: Record<string, string[]>; // questionId -> selectedOptionKeys
  submitted: boolean;
  startTime: number;
  durationMs: number; // Duration of exam session e.g. 15 minutes
  elapsedTimeSeconds: number;
}

