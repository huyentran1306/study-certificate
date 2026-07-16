export interface Question {
  id: string;
  questionNumber: number;
  text: string;
  options: {
    key: string; // A, B, C, D, etc.
    text: string;
  }[];
  correctAnswers: string[]; // ['B'] or ['A', 'B'] for multi-select
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

export interface Certificate {
  id: string;
  name: string;
  code: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung cấp' | 'Nâng cao';
  estimatedHours: string;
  colorClass: string; // CSS styling preset
  iconName: string; // name matching Lucide icons
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

