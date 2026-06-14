import { Award, Trophy, Bookmark, BarChart2, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { Question, ProgressState } from '../types';

interface StatsPanelProps {
  questions: Question[];
  progress: ProgressState;
  onReset: () => void;
}

export default function StatsPanel({ questions, progress, onReset }: StatsPanelProps) {
  const answeredIds = new Set(progress.history.map(h => qIdOf(h.questionId)));
  const totalQuestions = questions.length;
  const answeredCount = progress.history.length;
  
  // Calculate average accuracy
  const totalCorrect = progress.correctCount;
  const accuracy = answeredCount > 0 ? Math.round((totalCorrect / answeredCount) * 100) : 0;

  // Breakdown by Category
  const categories = Array.from(new Set(questions.map(q => q.category)));
  const categoryStats = categories.map(cat => {
    const catQuestions = questions.filter(q => q.category === cat);
    const catTotal = catQuestions.length;
    
    // Count user's history for this category
    const catQuestionsIds = catQuestions.map(q => q.id);
    const catHistory = progress.history.filter(h => catQuestionsIds.includes(h.questionId));
    const catAnswered = catHistory.length;
    const catCorrect = catHistory.filter(h => h.isCorrect).length;
    const catAccuracy = catAnswered > 0 ? Math.round((catCorrect / catAnswered) * 100) : 0;

    return {
      name: cat,
      total: catTotal,
      answered: catAnswered,
      correct: catCorrect,
      accuracy: catAccuracy
    };
  });

  function qIdOf(id: string) {
    return id;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Overview Stat Widgets */}
      <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Streak CounterCard */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm flex items-center justify-between border border-slate-800">
          <div>
            <span className="block text-xs text-slate-400 font-medium">Chuỗi đúng liên tiếp</span>
            <span className="block text-3xl font-bold tracking-tight mt-1">{progress.streak}🔥</span>
          </div>
          <div className="bg-slate-800 text-amber-400 p-3 rounded-xl">
            <Trophy className="w-6 h-6" />
          </div>
        </div>

        {/* Accuracy */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="block text-xs text-slate-500 font-medium">Tỷ lệ chính xác</span>
            <span className="block text-3xl font-bold text-slate-800 mt-1">{accuracy}%</span>
          </div>
          <div className={`p-3 rounded-xl ${accuracy >= 80 ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
            <Award className="w-6 h-6" />
          </div>
        </div>

        {/* Answered */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="block text-xs text-slate-400 font-medium">Tiến độ tổng quát</span>
            <span className="block text-3xl font-bold text-slate-800 mt-1">{answeredCount}/{totalQuestions}</span>
          </div>
          <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl">
            <BarChart2 className="w-6 h-6" />
          </div>
        </div>

        {/* Bookmarked */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="block text-xs text-slate-400 font-medium">Đã đánh dấu lưu</span>
            <span className="block text-3xl font-bold text-slate-800 mt-1">{progress.bookmarkedQuestionIds.length}</span>
          </div>
          <div className="bg-rose-50 text-rose-500 p-3 rounded-xl">
            <Bookmark className="w-6 h-6 fill-rose-500 text-rose-500" />
          </div>
        </div>
      </div>

      {/* Categories Mastery Index */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm md:col-span-2">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-500" />
          Chỉ Số Thành Thạo Theo Chủ Đề
        </h3>
        <div className="space-y-4">
          {categoryStats.map(cat => (
            <div key={cat.name} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">{cat.name}</span>
                <span className="text-slate-500 font-medium">
                  Chính xác {cat.accuracy}% ({cat.correct}/{cat.answered || 0} câu)
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    cat.accuracy >= 80 
                      ? 'bg-emerald-500' 
                      : cat.accuracy >= 50 
                        ? 'bg-amber-500' 
                        : cat.answered === 0 
                          ? 'bg-slate-250' 
                          : 'bg-rose-500'
                  }`}
                  style={{ width: `${cat.accuracy || 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Summary / Reset Controls */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-800">Thông Số Luyện Tập</h4>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Trả lời đúng
              </span>
              <span className="font-bold text-slate-800">{progress.correctCount} câu</span>
            </div>
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/50">
              <span className="flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-500" /> Trả lời sai
              </span>
              <span className="font-bold text-slate-800">{progress.incorrectCount} câu</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Hệ thống chấm tự động</span>
              <span className="text-indigo-600 font-semibold">Bật</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200">
          <button
            onClick={() => {
              if (window.confirm('Bạn có chắc muốn xóa sạch toàn bộ lịch sử luyện tập và quay về làm lại từ đầu?')) {
                onReset();
              }
            }}
            className="w-full text-slate-500 hover:text-slate-800 text-xs py-2 px-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center gap-1.5 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Xóa dữ liệu tiến độ cũ
          </button>
        </div>
      </div>
    </div>
  );
}
