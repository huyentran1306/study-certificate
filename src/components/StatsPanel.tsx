import { useState } from 'react';
import { Award, Trophy, Bookmark, BarChart2, CheckCircle2, XCircle, RotateCcw, AlertTriangle } from 'lucide-react';
import { Question, ProgressState } from '../types';

interface StatsPanelProps {
  questions: Question[];
  progress: ProgressState;
  onReset: () => void;
}

export default function StatsPanel({ questions, progress, onReset }: StatsPanelProps) {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const totalQuestions = questions.length;
  const answeredCount = progress.history.length;
  
  // Calculate average accuracy
  const totalCorrect = progress.correctCount;
  const accuracy = answeredCount > 0 ? Math.round((totalCorrect / answeredCount) * 100) : 0;

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-sm mb-4 md:mb-6 space-y-3 sm:space-y-4">
      {/* Overview Stat Widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {/* Streak CounterCard */}
        <div className="bg-slate-900 text-white rounded-xl p-3 sm:p-4 shadow-sm flex items-center justify-between border border-slate-800 min-w-0">
          <div>
            <span className="block text-[11px] text-slate-400 font-medium">Chuỗi liên tiếp</span>
            <span className="block text-xl sm:text-2xl font-bold tracking-tight mt-0.5">{progress.streak}🔥</span>
          </div>
          <div className="hidden min-[380px]:block bg-slate-800 text-amber-400 p-2 sm:p-2.5 rounded-lg shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
        </div>

        {/* Accuracy */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 shadow-sm flex items-center justify-between min-w-0">
          <div>
            <span className="block text-[11px] text-slate-500 font-medium">Tỷ lệ chính xác</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-800 mt-0.5">{accuracy}%</span>
          </div>
          <div className={`hidden min-[380px]:block p-2 sm:p-2.5 rounded-lg shrink-0 ${accuracy >= 80 ? 'bg-emerald-100/70 text-emerald-700' : 'bg-indigo-100/70 text-indigo-700'}`}>
            <Award className="w-5 h-5" />
          </div>
        </div>

        {/* Answered */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 shadow-sm flex items-center justify-between min-w-0">
          <div>
            <span className="block text-[11px] text-slate-500 font-medium">Tiến độ tổng quát</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-800 mt-0.5">{answeredCount}/{totalQuestions}</span>
          </div>
          <div className="hidden min-[380px]:block bg-indigo-100/70 text-indigo-700 p-2 sm:p-2.5 rounded-lg shrink-0">
            <BarChart2 className="w-5 h-5" />
          </div>
        </div>

        {/* Bookmarked */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 shadow-sm flex items-center justify-between min-w-0">
          <div>
            <span className="block text-[11px] text-slate-500 font-medium">Đã đánh dấu</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-800 mt-0.5">{progress.bookmarkedQuestionIds.length}</span>
          </div>
          <div className="hidden min-[380px]:block bg-rose-100/70 text-rose-600 p-2 sm:p-2.5 rounded-lg shrink-0">
            <Bookmark className="w-5 h-5 fill-rose-500 text-rose-500" />
          </div>
        </div>
      </div>

      {/* Footer bar with Correct/Incorrect stats + Reset button */}
      <div className="pt-3 border-t border-slate-150 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4 text-slate-600">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            Đúng: <strong className="text-slate-800">{progress.correctCount}</strong>
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
            Sai: <strong className="text-slate-800">{progress.incorrectCount}</strong>
          </span>
        </div>

        <div>
          {!showConfirmReset ? (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="text-slate-500 hover:text-rose-600 text-xs py-1.5 px-3 rounded-lg border border-slate-200 bg-white hover:bg-rose-50 flex items-center gap-1.5 font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              Xóa dữ liệu tiến độ cũ
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-lg p-1.5 px-2.5">
              <div className="flex items-center gap-1 text-[11px] text-rose-700 font-bold shrink-0">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Xóa sạch tiến độ môn này?</span>
              </div>
              <button
                onClick={() => {
                  onReset();
                  setShowConfirmReset(false);
                }}
                className="bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold py-1 px-2.5 rounded transition-colors shadow-sm"
              >
                Xác nhận
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-medium py-1 px-2 rounded transition-colors"
              >
                Hủy
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
