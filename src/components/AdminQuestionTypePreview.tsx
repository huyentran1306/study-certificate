import React from 'react';
import { Check } from 'lucide-react';
import { Question } from '../types';
import FormattedText from './FormattedText';
import HotspotQuestion from './HotspotQuestion';
import MatchingQuestion from './MatchingQuestion';

interface AdminQuestionTypePreviewProps {
  question: Question;
}

export default function AdminQuestionTypePreview({ question }: AdminQuestionTypePreviewProps) {
  const isMatching = question.questionType === 'matching_dropdown' || question.questionType === 'matching_drag_drop';
  const isMatrix = question.questionType === 'statement_matrix';
  const isHotspot = question.questionType === 'image_hotspot';

  if (isHotspot) {
    return (
      <HotspotQuestion
        imageUrl={question.imageUrl || ''}
        questionNumber={question.questionNumber}
        options={question.options}
        selectedKeys={question.correctAnswers}
        correctAnswers={question.correctAnswers}
        onChange={() => undefined}
        submitted
        multiple={question.correctAnswers.length > 1}
      />
    );
  }

  if (isMatching) {
    const selections = Object.fromEntries(
      (question.statements || []).map(statement => [statement.id, statement.correctAnswer])
    );
    return (
      <MatchingQuestion
        statements={question.statements || []}
        choices={question.choices || question.options}
        selections={selections}
        onChange={() => undefined}
        mode={question.questionType === 'matching_dropdown' ? 'matching_dropdown' : 'matching_drag_drop'}
        submitted
      />
    );
  }

  if (isMatrix) {
    return (
      <div className="space-y-2">
        {(question.statements || []).map((statement, index) => (
          <div key={statement.id} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-black text-white">
                {statement.id || index + 1}
              </span>
              <FormattedText text={statement.text} className="text-xs font-semibold leading-relaxed text-slate-700" />
            </div>
            <span className="flex min-h-8 shrink-0 items-center justify-center gap-1 rounded-lg bg-emerald-50 px-3 text-[11px] font-black text-emerald-700">
              <Check className="h-3.5 w-3.5" />
              {statement.correctAnswer}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
      {question.options.map(option => {
        const isCorrect = question.correctAnswers.includes(option.key);
        return (
          <div
            key={option.key}
            className={`flex items-start gap-2.5 rounded-xl border p-3 ${
              isCorrect ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : 'border-slate-200 bg-white text-slate-500'
            }`}
          >
            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg text-[10px] font-black ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
              {option.key}
            </span>
            <FormattedText text={option.text} className="min-w-0 flex-1 font-semibold leading-relaxed" />
          </div>
        );
      })}
    </div>
  );
}
