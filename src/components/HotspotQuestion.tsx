import React, { useState } from 'react';
import { Check, Image as ImageIcon, Maximize2, MousePointer2, X } from 'lucide-react';
import { QuestionChoice } from '../types';

interface HotspotQuestionProps {
  imageUrl: string;
  questionNumber: number;
  options: QuestionChoice[];
  selectedKeys: string[];
  correctAnswers: string[];
  onChange: (keys: string[]) => void;
  submitted?: boolean;
  multiple?: boolean;
}

export default function HotspotQuestion({
  imageUrl,
  questionNumber,
  options,
  selectedKeys,
  correctAnswers,
  onChange,
  submitted = false,
  multiple = false,
}: HotspotQuestionProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const hotspots = options.filter(option => option.hotspot);

  const select = (key: string) => {
    if (submitted) return;
    if (!multiple) {
      onChange([key]);
      setIsZoomOpen(false);
      return;
    }
    onChange(selectedKeys.includes(key) ? selectedKeys.filter(item => item !== key) : [...selectedKeys, key]);
  };

  if (!imageUrl || hotspots.length === 0) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium text-amber-800">
        Câu hỏi hotspot chưa có ảnh hoặc vùng bấm hợp lệ.
      </div>
    );
  }

  const renderHotspotCanvas = (expanded = false) => (
    <div className={`relative mx-auto overflow-hidden rounded-xl bg-white shadow-sm ${
      expanded
        ? 'w-[1050px] max-w-none'
        : 'w-fit min-w-[560px] max-w-none sm:min-w-0 sm:max-w-full'
    }`}>
      <img
        src={imageUrl}
        alt={`Hình tương tác câu hỏi ${questionNumber}`}
        referrerPolicy="no-referrer"
        className={`block h-auto select-none object-contain ${expanded ? 'w-full' : 'max-w-full'}`}
        draggable={false}
      />
      {hotspots.map(option => {
        const area = option.hotspot!;
        const selected = selectedKeys.includes(option.key);
        const correct = correctAnswers.includes(option.key);
        const revealCorrect = submitted && correct;
        const revealWrong = submitted && selected && !correct;

        return (
          <button
            key={option.key}
            type="button"
            disabled={submitted}
            onClick={() => select(option.key)}
            aria-label={`Chọn ${option.text}`}
            title={option.text}
            style={{ left: `${area.x}%`, top: `${area.y}%`, width: `${area.width}%`, height: `${area.height}%` }}
            className={`group absolute flex items-center justify-center rounded-md border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${
              revealCorrect
                ? 'border-emerald-500 bg-emerald-400/25 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]'
                : revealWrong
                  ? 'border-rose-500 bg-rose-400/25 shadow-[0_0_0_2px_rgba(244,63,94,0.2)]'
                  : selected
                    ? 'border-indigo-600 bg-indigo-400/20 shadow-[0_0_0_2px_rgba(79,70,229,0.18)]'
                    : 'border-transparent bg-transparent hover:border-indigo-400 hover:bg-indigo-300/10'
            }`}
          >
            {(selected || revealCorrect) && (
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow-md ${revealWrong ? 'bg-rose-600' : revealCorrect ? 'bg-emerald-600' : 'bg-indigo-600'}`}>
                {revealWrong ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
          <MousePointer2 className="h-4 w-4 shrink-0" />
          <span>
            {multiple ? 'Bấm trực tiếp vào các vùng đúng trên hình.' : 'Bấm trực tiếp vào vùng đúng trên hình.'}
            <span className="sm:hidden"> Vuốt ngang ảnh khi cần.</span>
          </span>
        </div>
        {!submitted && (
          <button
            type="button"
            onClick={() => setIsZoomOpen(true)}
            className="flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-xs font-black text-indigo-700 shadow-sm transition-colors hover:bg-indigo-100"
          >
            <Maximize2 className="h-4 w-4" />
            Phóng to để chọn
          </button>
        )}
      </div>

      <div className="max-h-[680px] overflow-auto rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-3">
        {renderHotspotCanvas()}
      </div>

      <div className="flex min-h-9 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600">
        <ImageIcon className="h-4 w-4 shrink-0 text-slate-400" />
        {selectedKeys.length > 0
          ? <span>Đã chọn: <strong className="text-slate-800">{options.filter(option => selectedKeys.includes(option.key)).map(option => option.text).join(', ')}</strong></span>
          : <span>Chưa chọn vùng nào.</span>}
      </div>

      {isZoomOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 text-white backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-wider text-indigo-300">Chọn đáp án trên hình phóng to</p>
              <p className="mt-0.5 text-[11px] text-slate-300">Vuốt ngang hoặc dọc để tìm đúng vùng.</p>
            </div>
            <button
              type="button"
              aria-label="Đóng hình phóng to"
              onClick={() => setIsZoomOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-auto overscroll-contain p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5">
            {renderHotspotCanvas(true)}
          </div>
        </div>
      )}
    </div>
  );
}
