import React, { useEffect, useState } from 'react';
import { CheckCircle, MousePointer2, RotateCcw, XCircle } from 'lucide-react';
import { Question } from '../types';
import QuizCard from './QuizCard';

interface InteractiveQuestionSandboxProps {
  question: Question;
}

export default function InteractiveQuestionSandbox({ question }: InteractiveQuestionSandboxProps) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    setAttempt(0);
    setResult(null);
  }, [question.id]);

  const reset = () => {
    setAttempt(current => current + 1);
    setResult(null);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 rounded-2xl border border-indigo-100 bg-indigo-50/70 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
          <MousePointer2 className="h-4 w-4 shrink-0" />
          Thao tác thử như lúc học. Kết quả trong sandbox không lưu vào tiến độ hay Database.
        </div>
        <div className="flex items-center gap-2">
          {result !== null && (
            <span className={`flex min-h-9 items-center gap-1 rounded-lg px-2.5 text-[11px] font-black ${result ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
              {result ? <CheckCircle className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
              {result ? 'Đúng định dạng & đáp án' : 'Đáp án thử chưa đúng'}
            </span>
          )}
          <button
            type="button"
            onClick={reset}
            className="flex min-h-9 items-center gap-1.5 rounded-lg border border-indigo-200 bg-white px-3 text-[11px] font-black text-indigo-700 hover:bg-indigo-100"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </div>

      <div key={`${question.id}-${attempt}`}>
        <QuizCard
          question={question}
          isBookmarked={false}
          onToggleBookmark={() => undefined}
          onAnswerSubmitted={(_questionId, _selectedOptions, isCorrect) => setResult(isCorrect)}
          onNext={() => undefined}
          isFirst
          isLast
          previewMode
        />
      </div>
    </div>
  );
}
