import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, Target, TrendingUp } from 'lucide-react';
import type { ProgressState, Question } from '../types';

interface LearningCoachPanelProps {
  certId: string;
  questions: Question[];
  progress: ProgressState;
  onPracticeCategory: (category: string) => void;
  onReviewMistakes: () => void;
  onStartExam: () => void;
}

interface StudyPreferences {
  dailyGoal: number;
  examDate: string;
}

const todayKey = () => new Date().toISOString().slice(0, 10);

export default function LearningCoachPanel({
  certId,
  questions,
  progress,
  onPracticeCategory,
  onReviewMistakes,
  onStartExam,
}: LearningCoachPanelProps) {
  const storageKey = `study_plan_${certId}`;
  const [preferences, setPreferences] = useState<StudyPreferences>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      return { dailyGoal: Number(saved.dailyGoal) || 10, examDate: saved.examDate || '' };
    } catch {
      return { dailyGoal: 10, examDate: '' };
    }
  });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      setPreferences({ dailyGoal: Number(saved.dailyGoal) || 10, examDate: saved.examDate || '' });
    } catch {
      setPreferences({ dailyGoal: 10, examDate: '' });
    }
  }, [storageKey]);

  const updatePreferences = (next: StudyPreferences) => {
    setPreferences(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const insight = useMemo(() => {
    const historyByQuestion = new Map(progress.history.map(entry => [entry.questionId, entry]));
    const completion = questions.length ? (progress.answeredCount / questions.length) * 100 : 0;
    const accuracy = progress.answeredCount ? (progress.correctCount / progress.answeredCount) * 100 : 0;
    const readiness = Math.round((accuracy * 0.65) + (completion * 0.35));

    const categories = new Map<string, { total: number; answered: number; correct: number }>();
    questions.forEach(question => {
      const current = categories.get(question.category) || { total: 0, answered: 0, correct: 0 };
      current.total += 1;
      const history = historyByQuestion.get(question.id);
      if (history) {
        current.answered += 1;
        if (history.isCorrect) current.correct += 1;
      }
      categories.set(question.category, current);
    });

    const ranked = [...categories.entries()].map(([category, stats]) => ({
      category,
      ...stats,
      score: stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0,
    })).sort((a, b) => {
      if (a.answered === 0 && b.answered > 0) return -1;
      if (b.answered === 0 && a.answered > 0) return 1;
      return a.score - b.score;
    });

    const today = todayKey();
    const todayAnswered = progress.history.filter(entry =>
      new Date(entry.timestamp).toISOString().slice(0, 10) === today
    ).length;

    return {
      readiness,
      completion: Math.round(completion),
      accuracy: Math.round(accuracy),
      weakest: ranked[0],
      todayAnswered,
      mistakes: progress.history.filter(entry => !entry.isCorrect).length,
    };
  }, [questions, progress]);

  const daysUntilExam = preferences.examDate
    ? Math.ceil((new Date(`${preferences.examDate}T23:59:59`).getTime() - Date.now()) / 86_400_000)
    : null;
  const goalProgress = Math.min(100, Math.round((insight.todayAnswered / preferences.dailyGoal) * 100));

  return (
    <section className="overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-800 text-white shadow-lg shadow-indigo-100/60">
      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-indigo-100">
              Lộ trình hôm nay
            </span>
            {daysUntilExam !== null && (
              <span className={`rounded-full px-2.5 py-1 text-[9px] font-black ${daysUntilExam < 0 ? 'bg-rose-400/20 text-rose-100' : 'bg-emerald-400/20 text-emerald-100'}`}>
                {daysUntilExam < 0 ? 'Ngày thi đã qua' : `Còn ${daysUntilExam} ngày đến kỳ thi`}
              </span>
            )}
          </div>
          <h2 className="mt-3 text-xl font-black tracking-tight sm:text-2xl">
            {insight.weakest
              ? `Ưu tiên ôn: ${insight.weakest.category}`
              : 'Bắt đầu lộ trình ôn tập của bạn'}
          </h2>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-indigo-100/75 sm:text-sm">
            Chỉ số sẵn sàng kết hợp độ phủ câu hỏi và độ chính xác. Hệ thống ưu tiên chủ đề chưa học hoặc có tỷ lệ sai cao nhất.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => insight.weakest && onPracticeCategory(insight.weakest.category)}
              disabled={!insight.weakest}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-xs font-black text-slate-950 transition hover:bg-indigo-50 disabled:opacity-40"
            >
              Học chủ đề ưu tiên <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onReviewMistakes}
              disabled={insight.mistakes === 0}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 text-xs font-black text-white transition hover:bg-white/15 disabled:opacity-40"
            >
              Ôn lại {insight.mistakes} câu sai
            </button>
            <button
              type="button"
              onClick={onStartExam}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 px-4 text-xs font-black text-white transition hover:bg-white/10"
            >
              Thi thử
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-indigo-100">
              <TrendingUp className="h-4 w-4" />
              <span className="text-[9px] font-black uppercase tracking-wider">Sẵn sàng</span>
            </div>
            <p className="mt-2 text-3xl font-black">{insight.readiness}%</p>
            <p className="mt-1 text-[10px] text-indigo-100/65">Phủ {insight.completion}% · Đúng {insight.accuracy}%</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-indigo-100">
              <Target className="h-4 w-4" />
              <select
                aria-label="Mục tiêu số câu mỗi ngày"
                value={preferences.dailyGoal}
                onChange={event => updatePreferences({ ...preferences, dailyGoal: Number(event.target.value) })}
                className="rounded-lg border border-white/10 bg-slate-900/50 px-1.5 py-1 text-[10px] font-bold text-white"
              >
                {[5, 10, 15, 20, 30].map(goal => <option key={goal} value={goal}>{goal} câu/ngày</option>)}
              </select>
            </div>
            <p className="mt-2 text-3xl font-black">{insight.todayAnswered}<span className="text-base text-indigo-200">/{preferences.dailyGoal}</span></p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-emerald-400 transition-all" style={{ width: `${goalProgress}%` }} />
            </div>
          </div>
          <label className="col-span-2 flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 backdrop-blur-sm">
            <CalendarDays className="h-4 w-4 shrink-0 text-indigo-200" />
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-100">Ngày thi</span>
            <input
              type="date"
              value={preferences.examDate}
              onChange={event => updatePreferences({ ...preferences, examDate: event.target.value })}
              className="ml-auto min-h-9 rounded-xl border border-white/10 bg-slate-900/45 px-3 text-xs font-bold text-white [color-scheme:dark]"
            />
            {goalProgress >= 100 && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
          </label>
        </div>
      </div>
    </section>
  );
}
