import React, { useState } from 'react';
import { Check, GripVertical, MousePointer2, X } from 'lucide-react';
import { QuestionChoice, StatementItem } from '../types';

interface MatchingQuestionProps {
  statements: StatementItem[];
  choices: QuestionChoice[];
  selections: Record<string, string>;
  onChange: (statementId: string, choiceKey: string) => void;
  mode: 'matching_dropdown' | 'matching_drag_drop';
  submitted?: boolean;
}

export default function MatchingQuestion({
  statements,
  choices,
  selections,
  onChange,
  mode,
  submitted = false,
}: MatchingQuestionProps) {
  const [activeChoice, setActiveChoice] = useState<string | null>(null);
  const choiceByKey = new Map(choices.map(choice => [choice.key, choice]));
  const selectedChoiceKeys = new Set(Object.values(selections).filter(Boolean));
  const availableChoices = choices.filter(choice => !selectedChoiceKeys.has(choice.key));

  const assign = (statementId: string, choiceKey: string) => {
    if (submitted || !choiceByKey.has(choiceKey)) return;
    onChange(statementId, choiceKey);
    setActiveChoice(null);
  };

  if (mode === 'matching_dropdown') {
    return (
      <div className="space-y-3">
        {statements.map((statement, index) => {
          const selectedKey = selections[statement.id] || '';
          const isCorrect = selectedKey === statement.correctAnswer;
          const rowChoices = statement.choiceKeys?.length
            ? statement.choiceKeys.map(key => choiceByKey.get(key)).filter(Boolean) as QuestionChoice[]
            : choices;
          return (
            <div
              key={statement.id}
              className={`rounded-2xl border p-4 ${
                !submitted
                  ? 'border-slate-200 bg-white'
                  : isCorrect
                    ? 'border-emerald-300 bg-emerald-50/50'
                    : 'border-rose-300 bg-rose-50/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-black text-white">
                  {statement.id || index + 1}
                </span>
                <div className="grid min-w-0 flex-1 items-center gap-3 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)]">
                  <p className="text-sm font-medium leading-relaxed text-slate-800">{statement.text}</p>
                  <div className="space-y-2">
                    <select
                      aria-label={`Đáp án cho dòng ${statement.id}`}
                      value={selectedKey}
                      disabled={submitted}
                      onChange={event => assign(statement.id, event.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:opacity-80"
                    >
                      <option value="">Chọn đáp án phù hợp...</option>
                      {rowChoices.map(choice => (
                        <option key={choice.key} value={choice.key}>{choice.text}</option>
                      ))}
                    </select>
                    {submitted && !isCorrect && (
                      <p className="text-xs font-bold text-rose-600">
                        Đáp án đúng: <span className="text-emerald-700">{choiceByKey.get(statement.correctAnswer)?.text}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-700">
          <GripVertical className="h-4 w-4" /> Ngân hàng đáp án
        </div>
        <div className="flex min-h-9 flex-wrap items-center gap-2">
          {availableChoices.map(choice => (
            <button
              key={choice.key}
              type="button"
              draggable={!submitted}
              disabled={submitted}
              onDragStart={event => {
                event.dataTransfer.setData('text/plain', choice.key);
                event.dataTransfer.effectAllowed = 'move';
                setActiveChoice(choice.key);
              }}
              onDragEnd={() => setActiveChoice(null)}
              onClick={() => setActiveChoice(current => current === choice.key ? null : choice.key)}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs font-bold transition-all ${
                activeChoice === choice.key
                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                  : 'border-indigo-200 bg-white text-slate-700 hover:border-indigo-400 hover:bg-indigo-50'
              } disabled:cursor-default`}
            >
              <GripVertical className="h-3.5 w-3.5 shrink-0" />
              {choice.text}
            </button>
          ))}
          {availableChoices.length === 0 && !submitted && (
            <p className="text-xs font-semibold text-indigo-500">
              Đã ghép hết đáp án. Bấm vào một dòng đã ghép để trả đáp án về ngân hàng.
            </p>
          )}
        </div>
        {!submitted && (
          <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-indigo-600">
            <MousePointer2 className="h-3.5 w-3.5" /> Kéo đáp án vào từng dòng, hoặc chọn đáp án rồi bấm vào dòng cần ghép.
          </p>
        )}
      </div>

      <div className="space-y-3">
        {statements.map((statement, index) => {
          const selectedKey = selections[statement.id];
          const selectedChoice = selectedKey ? choiceByKey.get(selectedKey) : undefined;
          const correctChoice = choiceByKey.get(statement.correctAnswer);
          const isCorrect = selectedKey === statement.correctAnswer;
          return (
            <button
              key={statement.id}
              type="button"
              disabled={submitted}
              onDragOver={event => {
                if (!submitted) {
                  event.preventDefault();
                  event.dataTransfer.dropEffect = 'move';
                }
              }}
              onDrop={event => {
                event.preventDefault();
                assign(statement.id, event.dataTransfer.getData('text/plain'));
              }}
              onClick={() => {
                if (activeChoice) {
                  assign(statement.id, activeChoice);
                } else if (selectedChoice) {
                  onChange(statement.id, '');
                }
              }}
              className={`w-full rounded-2xl border p-4 text-left transition-all ${
                !submitted
                  ? selectedChoice
                    ? 'border-indigo-300 bg-white shadow-sm'
                    : activeChoice
                      ? 'border-dashed border-indigo-500 bg-indigo-50/50'
                      : 'border-dashed border-slate-300 bg-slate-50/60'
                  : isCorrect
                    ? 'border-emerald-300 bg-emerald-50/50'
                    : 'border-rose-300 bg-rose-50/50'
              } disabled:cursor-default`}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-black text-white">
                  {statement.id || index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-relaxed text-slate-800">{statement.text}</p>
                  <div className={`mt-3 flex min-h-10 items-center rounded-xl border px-3 py-2 text-xs font-bold ${
                    selectedChoice ? 'border-indigo-200 bg-indigo-50 text-indigo-800' : 'border-slate-200 bg-white text-slate-400'
                  }`}>
                    {selectedChoice ? selectedChoice.text : 'Thả đáp án vào đây'}
                    {!submitted && selectedChoice && (
                      <X className="ml-auto h-4 w-4 text-indigo-500" />
                    )}
                    {submitted && (
                      isCorrect
                        ? <Check className="ml-auto h-4 w-4 text-emerald-600" />
                        : <X className="ml-auto h-4 w-4 text-rose-600" />
                    )}
                  </div>
                  {submitted && !isCorrect && (
                    <p className="mt-2 text-xs font-bold text-rose-600">
                      Đáp án đúng: <span className="text-emerald-700">{correctChoice?.text}</span>
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
