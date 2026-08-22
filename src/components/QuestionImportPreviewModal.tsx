import React from 'react';
import { AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Database, Eye, Loader2, X } from 'lucide-react';
import { Question } from '../types';
import { QUESTION_TYPE_LABELS } from '../data/questionImportSamples';
import InteractiveQuestionSandbox from './InteractiveQuestionSandbox';
import { isSafeExternalUrl } from '../utils/url';

interface QuestionImportPreviewModalProps {
  questions: Question[];
  activeIndex: number;
  duplicateCount: number;
  mergeMode: 'append' | 'replace';
  isSaving: boolean;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  onConfirm: () => void;
}

const typeLabel = (question: Question) => QUESTION_TYPE_LABELS[question.questionType || 'multiple_choice'];

export default function QuestionImportPreviewModal({
  questions,
  activeIndex,
  duplicateCount,
  mergeMode,
  isSaving,
  onIndexChange,
  onClose,
  onConfirm,
}: QuestionImportPreviewModalProps) {
  const question = questions[activeIndex];
  if (!question) return null;
  const qualityWarnings = questions.reduce((total, item) => {
    if (!item.explanation?.trim()) total += 1;
    if (!item.sourceTitle && !item.sourceUrl) total += 1;
    if (item.sourceUrl && !isSafeExternalUrl(item.sourceUrl)) total += 1;
    if (item.questionType === 'image_hotspot' && (!item.imageUrl || item.options.some(option => !option.hotspot))) total += 1;
    return total;
  }, 0);
  const currentWarnings = [
    !question.explanation?.trim() ? 'Thiếu giải thích' : '',
    !question.sourceTitle && !question.sourceUrl ? 'Thiếu nguồn tham khảo' : '',
    question.sourceUrl && !isSafeExternalUrl(question.sourceUrl) ? 'URL nguồn không hợp lệ' : '',
    question.questionType === 'image_hotspot' && (!question.imageUrl || question.options.some(option => !option.hotspot)) ? 'Hotspot chưa hợp lệ' : '',
  ].filter(Boolean);

  return (
    <div className="fixed inset-0 z-[120] flex flex-col bg-slate-950/70 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950 px-3 py-3 text-white sm:px-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-indigo-300" />
            <h2 className="truncate text-sm font-black sm:text-base">Xem trước dữ liệu trước khi import</h2>
          </div>
          <p className="mt-1 text-[11px] text-slate-300">
            {questions.length} câu sẽ được nạp · {duplicateCount} câu trùng bị bỏ · {mergeMode === 'replace' ? 'Ghi đè dữ liệu cũ' : 'Trộn với dữ liệu hiện có'}
          </p>
        </div>
        <button type="button" aria-label="Đóng xem trước" onClick={onClose} disabled={isSaving} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 disabled:opacity-50">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] bg-slate-100 lg:grid-cols-[290px_minmax(0,1fr)] lg:grid-rows-1">
        <aside className="max-h-44 overflow-y-auto border-b border-slate-200 bg-white p-2 lg:max-h-none lg:border-b-0 lg:border-r lg:p-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {questions.map((item, index) => (
              <button
                key={`${item.id}-${index}`}
                type="button"
                onClick={() => onIndexChange(index)}
                className={`min-w-0 rounded-xl border p-2.5 text-left transition-all ${
                  index === activeIndex ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase text-slate-500">Câu {item.questionNumber}</span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[8px] font-bold text-slate-500">{typeLabel(item)}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-[11px] font-semibold leading-relaxed text-slate-700">{item.text}</p>
              </button>
            ))}
          </div>
        </aside>

        <main className="min-h-0 overflow-y-auto p-3 sm:p-5 lg:p-7">
          <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-indigo-700">{question.category}</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">{typeLabel(question)}</span>
              </div>
              <span className="text-xs font-black text-slate-400">{activeIndex + 1}/{questions.length}</span>
            </div>

            <div className={`mb-4 flex flex-wrap items-center gap-2 rounded-2xl border p-3 text-[11px] font-bold ${
              currentWarnings.length ? 'border-amber-200 bg-amber-50 text-amber-800' : 'border-emerald-100 bg-emerald-50 text-emerald-700'
            }`}>
              {currentWarnings.length ? <AlertTriangle className="h-4 w-4 shrink-0" /> : <CheckCircle2 className="h-4 w-4 shrink-0" />}
              {currentWarnings.length ? currentWarnings.map(warning => <span key={warning} className="rounded-lg bg-white/70 px-2 py-1">{warning}</span>) : 'Câu hỏi này đã qua kiểm tra cấu trúc cơ bản.'}
            </div>

            <InteractiveQuestionSandbox question={question} />
          </div>
        </main>
      </div>

      <div className="flex flex-col gap-2 border-t border-slate-200 bg-white px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-center justify-between gap-2 sm:justify-start">
          <button type="button" onClick={() => onIndexChange(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0 || isSaving} className="flex min-h-10 items-center gap-1 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 disabled:opacity-40"><ChevronLeft className="h-4 w-4" />Trước</button>
          <button type="button" onClick={() => onIndexChange(Math.min(questions.length - 1, activeIndex + 1))} disabled={activeIndex === questions.length - 1 || isSaving} className="flex min-h-10 items-center gap-1 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 disabled:opacity-40">Tiếp<ChevronRight className="h-4 w-4" /></button>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className={`text-[10px] font-bold ${qualityWarnings ? 'text-amber-700' : 'text-emerald-700'}`}>
            {qualityWarnings ? `${qualityWarnings} cảnh báo chất lượng cần review sau import` : 'Không phát hiện cảnh báo chất lượng'}
          </span>
          <button type="button" onClick={onConfirm} disabled={isSaving} className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-black text-white shadow-md hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60">
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Database className="h-4 w-4" />}
          {isSaving ? 'Đang lưu Database...' : `Xác nhận import ${questions.length} câu`}
          </button>
        </div>
      </div>
    </div>
  );
}
