import React from 'react';
import { Check, Image as ImageIcon, MousePointer2, X } from 'lucide-react';
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
  const hotspots = options.filter(option => option.hotspot);

  const select = (key: string) => {
    if (submitted) return;
    if (!multiple) {
      onChange([key]);
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

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2 text-xs font-bold text-indigo-700">
        <MousePointer2 className="h-4 w-4 shrink-0" />
        <span>
          {multiple ? 'Bấm trực tiếp vào các vùng đúng trên hình.' : 'Bấm trực tiếp vào vùng đúng trên hình.'}
          <span className="sm:hidden"> Vuốt ngang ảnh khi cần.</span>
        </span>
      </div>

      <div className="max-h-[680px] overflow-auto rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-3">
        <div className="relative mx-auto w-fit min-w-[560px] max-w-none overflow-hidden rounded-xl bg-white shadow-sm sm:min-w-0 sm:max-w-full">
          <img
            src={imageUrl}
            alt={`Hình tương tác câu hỏi ${questionNumber}`}
            referrerPolicy="no-referrer"
            className="block h-auto max-w-full select-none object-contain"
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
      </div>

      <div className="flex min-h-9 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600">
        <ImageIcon className="h-4 w-4 shrink-0 text-slate-400" />
        {selectedKeys.length > 0
          ? <span>Đã chọn: <strong className="text-slate-800">{options.filter(option => selectedKeys.includes(option.key)).map(option => option.text).join(', ')}</strong></span>
          : <span>Chưa chọn vùng nào.</span>}
      </div>
    </div>
  );
}
