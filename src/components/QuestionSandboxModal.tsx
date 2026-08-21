import React from 'react';
import { Eye, X } from 'lucide-react';
import { Question } from '../types';
import { QUESTION_TYPE_LABELS } from '../data/questionImportSamples';
import InteractiveQuestionSandbox from './InteractiveQuestionSandbox';

interface QuestionSandboxModalProps {
  question: Question;
  onClose: () => void;
}

export default function QuestionSandboxModal({ question, onClose }: QuestionSandboxModalProps) {
  return (
    <div className="fixed inset-0 z-[130] flex flex-col bg-slate-950/70 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950 px-3 py-3 text-white sm:px-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-indigo-300" />
            <h2 className="truncate text-sm font-black sm:text-base">Sandbox xem trước câu {question.questionNumber}</h2>
          </div>
          <p className="mt-1 text-[11px] text-slate-300">
            {question.category} · {QUESTION_TYPE_LABELS[question.questionType || 'multiple_choice']}
          </p>
        </div>
        <button type="button" aria-label="Đóng sandbox" onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 hover:bg-white/20">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto bg-slate-100 p-3 sm:p-5 lg:p-7">
        <div className="mx-auto max-w-5xl">
          <InteractiveQuestionSandbox question={question} />
        </div>
      </div>
    </div>
  );
}
