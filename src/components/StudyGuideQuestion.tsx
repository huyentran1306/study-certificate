import { CalendarCheck, Check, ExternalLink, Image as ImageIcon, Info } from 'lucide-react';
import { Question } from '../types';
import { QUESTION_TYPE_LABELS } from '../data/questionImportSamples';
import FormattedText from './FormattedText';
import HotspotQuestion from './HotspotQuestion';
import MatchingQuestion from './MatchingQuestion';
import { isSafeExternalUrl } from '../utils/url';

interface StudyGuideQuestionProps {
  question: Question;
}

const normalizeYesNo = (answer: string) =>
  /^(?:yes|đúng|true)$/i.test(answer.trim()) ? 'Yes' : 'No';

export default function StudyGuideQuestion({ question }: StudyGuideQuestionProps) {
  const type = question.questionType || (question.statements?.length ? 'statement_matrix' : 'multiple_choice');
  const statements = question.statements || [];
  const choices = question.choices || question.options;
  const isMatching = type === 'matching_dropdown' || type === 'matching_drag_drop' || type === 'drag_drop';
  const isMatrix = type === 'statement_matrix';
  const isHotspot = type === 'image_hotspot';
  const correctMatchingSelections = Object.fromEntries(
    statements.map(statement => [statement.id, statement.correctAnswer])
  );

  const correctAnswerSummary = (() => {
    if (isMatrix) {
      return statements.map(statement => `${statement.id}: ${normalizeYesNo(statement.correctAnswer)}`).join(' · ');
    }
    if (isMatching) {
      const choiceMap = new Map(choices.map(choice => [choice.key, choice.text]));
      return statements
        .map(statement => `${statement.id}: ${choiceMap.get(statement.correctAnswer) || statement.correctAnswer}`)
        .join(' · ');
    }
    if (isHotspot) {
      const correctLabels = question.options
        .filter(option => question.correctAnswers.includes(option.key))
        .map(option => option.text);
      return correctLabels.join(' · ') || question.correctAnswers.join(', ');
    }
    return question.correctAnswers.join(', ');
  })();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-indigo-700">
          {QUESTION_TYPE_LABELS[type] || type}
        </span>
        {type === 'multiple_choice' && question.correctAnswers.length > 1 && (
          <span className="rounded-lg border border-rose-100 bg-rose-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-rose-600">
            Chọn {question.correctAnswers.length} đáp án
          </span>
        )}
      </div>

      <FormattedText text={question.text} className="text-sm font-bold leading-relaxed text-slate-800" />

      {question.imageUrl && !isHotspot && !isMatching && !isMatrix && (
        <div className="overflow-auto rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <img
            src={question.imageUrl}
            alt={`Hình câu hỏi ${question.questionNumber}`}
            referrerPolicy="no-referrer"
            className="mx-auto max-h-[520px] max-w-full rounded-xl object-contain"
          />
        </div>
      )}

      {isHotspot && question.imageUrl ? (
        <HotspotQuestion
          imageUrl={question.imageUrl}
          questionNumber={question.questionNumber}
          options={question.options}
          selectedKeys={question.correctAnswers}
          correctAnswers={question.correctAnswers}
          onChange={() => undefined}
          submitted
          multiple={question.correctAnswers.length > 1}
        />
      ) : isMatching && statements.length > 0 ? (
        <MatchingQuestion
          statements={statements}
          choices={choices}
          selections={correctMatchingSelections}
          onChange={() => undefined}
          mode={type === 'matching_dropdown' ? 'matching_dropdown' : 'matching_drag_drop'}
          submitted
        />
      ) : isMatrix && statements.length > 0 ? (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70">
          <div className="hidden grid-cols-[minmax(0,1fr)_72px_72px] border-b border-slate-200 bg-slate-100 px-4 py-2.5 text-[10px] font-black uppercase tracking-wider text-slate-500 sm:grid">
            <span>Phát biểu</span>
            <span className="text-center text-emerald-700">Yes</span>
            <span className="text-center text-rose-700">No</span>
          </div>
          <div className="divide-y divide-slate-200">
            {statements.map((statement, index) => {
              const correct = normalizeYesNo(statement.correctAnswer);
              return (
                <div key={statement.id} className="grid gap-3 bg-white p-3.5 sm:grid-cols-[minmax(0,1fr)_72px_72px] sm:items-center sm:px-4">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-black text-white">
                      {statement.id || index + 1}
                    </span>
                    <p className="text-xs font-medium leading-relaxed text-slate-800 sm:text-sm">{statement.text}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:contents">
                    {(['Yes', 'No'] as const).map(answer => {
                      const selected = correct === answer;
                      return (
                        <div
                          key={answer}
                          className={`flex min-h-10 items-center justify-center gap-1 rounded-xl border text-xs font-black ${
                            selected
                              ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                              : 'border-slate-200 bg-slate-50 text-slate-300'
                          }`}
                        >
                          {selected && <Check className="h-3.5 w-3.5" />}
                          {answer}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
          {question.options.map(option => {
            const correct = question.correctAnswers.includes(option.key);
            return (
              <div
                key={option.key}
                className={`flex min-h-12 items-start gap-2.5 rounded-xl border p-3 ${
                  correct
                    ? 'border-emerald-300 bg-emerald-50/70 font-semibold text-emerald-900'
                    : 'border-slate-200 bg-slate-50/40 text-slate-500'
                }`}
              >
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                  correct ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {correct ? <Check className="h-3 w-3" /> : option.key}
                </span>
                <FormattedText text={option.text} variant="option" className="min-w-0 flex-1 leading-relaxed" />
              </div>
            );
          })}
        </div>
      )}

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-3.5 text-xs leading-relaxed text-slate-700 sm:p-4">
        <div className="flex items-start gap-2">
          {isHotspot ? <ImageIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />}
          <p>
            <span className="font-black uppercase tracking-wide text-emerald-800">Đáp án đúng: </span>
            <span className="font-semibold">{correctAnswerSummary}</span>
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700 sm:p-5">
        <div className="mb-2 flex items-center gap-2 font-black uppercase tracking-wide text-indigo-900">
          <Info className="h-4 w-4 shrink-0 text-indigo-500" />
          Giải thích & hướng dẫn chi tiết
        </div>
        <FormattedText text={question.explanation} variant="explanation" />
      </div>

      {(question.sourceTitle || question.sourceUrl || question.lastVerifiedAt) && (
        <div className="flex flex-col gap-2 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <ExternalLink className="h-4 w-4 shrink-0 text-indigo-500" />
            {isSafeExternalUrl(question.sourceUrl) ? (
              <a href={question.sourceUrl} target="_blank" rel="noopener noreferrer" className="truncate font-bold text-indigo-700 hover:underline">
                {question.sourceTitle || 'Xem nguồn tham khảo'}
              </a>
            ) : (
              <span className="truncate font-semibold">{question.sourceTitle || 'Nguồn chưa hợp lệ'}</span>
            )}
          </div>
          {question.lastVerifiedAt && (
            <span className="flex shrink-0 items-center gap-1 font-semibold">
              <CalendarCheck className="h-3.5 w-3.5" />
              Kiểm chứng {new Date(question.lastVerifiedAt).toLocaleDateString('vi-VN')}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
