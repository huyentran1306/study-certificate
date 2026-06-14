import { useState, useEffect } from 'react';
import { Bookmark, CheckCircle, AlertTriangle, AlertCircle, ArrowRight, HelpCircle, Info } from 'lucide-react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  isBookmarked: boolean;
  onToggleBookmark: (qId: string) => void;
  onAnswerSubmitted: (qId: string, selectedOptions: string[], isCorrect: boolean) => void;
  activeHistoryEntry?: { selectedOptions: string[]; isCorrect: boolean };
  onNext: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function QuizCard({
  question,
  isBookmarked,
  onToggleBookmark,
  onAnswerSubmitted,
  activeHistoryEntry,
  onNext,
  onPrev,
  isFirst = false,
  isLast = false
}: QuizCardProps) {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrectResult, setIsCorrectResult] = useState(false);

  const isMultiSelect = question.correctAnswers.length > 1;

  // Whenever question changes, reset local values (if user hasn't answered yet)
  useEffect(() => {
    if (activeHistoryEntry) {
      setSelectedKeys(activeHistoryEntry.selectedOptions);
      setIsAnswered(true);
      setIsCorrectResult(activeHistoryEntry.isCorrect);
    } else {
      setSelectedKeys([]);
      setIsAnswered(false);
      setIsCorrectResult(false);
    }
  }, [question, activeHistoryEntry]);

  const handleOptionClick = (key: string) => {
    if (isAnswered) return; // Cannot change answer once tested

    if (isMultiSelect) {
      setSelectedKeys(prev => 
        prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
      );
    } else {
      setSelectedKeys([key]);
    }
  };

  const handleVerify = () => {
    if (selectedKeys.length === 0) return;

    // Check correctness: sorted equality
    const sortedCorrect = [...question.correctAnswers].sort();
    const sortedSelected = [...selectedKeys].sort();
    const correct = 
      sortedCorrect.length === sortedSelected.length && 
      sortedCorrect.every((val, index) => val === sortedSelected[index]);

    setIsCorrectResult(correct);
    setIsAnswered(true);
    onAnswerSubmitted(question.id, selectedKeys, correct);
  };

  // Utility to determine background of option buttons based on state
  const getOptionStyle = (key: string) => {
    const isSelected = selectedKeys.includes(key);
    const isCorrectAnswer = question.correctAnswers.includes(key);

    if (!isAnswered) {
      return isSelected
        ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-2 ring-indigo-100'
        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50';
    }

    // After answer is verified:
    if (isCorrectAnswer) {
      return 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-medium ring-2 ring-emerald-100';
    }
    if (isSelected && !isCorrectAnswer) {
      return 'border-rose-500 bg-rose-50/50 text-rose-950 ring-2 ring-rose-100';
    }
    return 'border-slate-100 bg-slate-50/40 text-slate-400 opacity-60';
  };

  return (
    <div id={`question-card-${question.id}`} className="bg-white rounded-3xl border border-slate-100 p-5 md:p-8 shadow-sm">
      {/* Category Panel header */}
      <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full uppercase tracking-wider">
            {question.category}
          </span>
          {isMultiSelect && (
            <span className="text-[10px] bg-rose-50 text-rose-600 px-2 py-0.5 rounded font-bold uppercase">
              CHỌN HAI ĐÁP ÁN
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(question.id)}
            className={`p-2 rounded-xl transition-all border ${
              isBookmarked 
                ? 'bg-rose-50 text-rose-500 border-rose-100' 
                : 'text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-50 border-slate-200'
            }`}
            title={isBookmarked ? "Bỏ lưu câu hỏi" : "Lưu câu hỏi khó"}
          >
            <Bookmark className={`w-4 s-4 ${isBookmarked ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Question Body */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
            CÂU HỎI {question.questionNumber}
          </span>
          <h2 className="text-base md:text-lg font-semibold text-slate-800 leading-snug">
            {question.text}
          </h2>
        </div>

        {/* Options list */}
        <div className="grid grid-cols-1 gap-3">
          {question.options.map(opt => {
            const isSelected = selectedKeys.includes(opt.key);
            return (
              <button
                key={opt.key}
                onClick={() => handleOptionClick(opt.key)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-2xl border text-sm transition-all duration-150 flex items-start gap-4 min-h-[56px] focus:outline-none ${getOptionStyle(opt.key)}`}
              >
                {/* Visual choice key circular bubble */}
                <span className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-xs uppercase transition-all duration-150 ${
                  isSelected 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {opt.key}
                </span>
                <span className="leading-relaxed pt-0.5">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Verify and Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-3">
            {onPrev && (
              <button
                onClick={onPrev}
                disabled={isFirst}
                className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-200/80 px-4 py-2.5 rounded-xl font-medium transition-all group disabled:opacity-40"
              >
                Trước đó
              </button>
            )}
            
            <button
              onClick={onNext}
              className="text-xs bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-1.5"
            >
              Thi tiếp <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {!isAnswered ? (
            <button
              onClick={handleVerify}
              disabled={selectedKeys.length === 0}
              className={`w-full sm:w-auto text-xs px-6 py-2.5 rounded-xl font-bold uppercase transition-all shadow-sm ${
                selectedKeys.length > 0
                  ? 'bg-slate-900 text-white hover:bg-slate-800 cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isMultiSelect ? 'Xác nhận (Chọn hai)' : 'Kiểm tra đáp án'}
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {isCorrectResult ? (
                <div id="result-success-label" className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Bạn đã trả lời đúng!
                </div>
              ) : (
                <div id="result-fail-label" className="flex items-center gap-1.5 px-4 py-2 bg-rose-50 text-rose-700 border border-rose-100 rounded-xl text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                  Không chính xác
                </div>
              )}
            </div>
          )}
        </div>

        {/* Expandable Explanation Block */}
        {isAnswered && (
          <div id="explanation-block" className="mt-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl animate-fade-in">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs mb-2">
              <Info className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>DỊCH NGHĨA & HƯỚNG DẪN CHI TIẾT</span>
            </div>
            
            <div className="space-y-3">
              <p className="text-xs text-slate-500 font-medium">
                Khóa đúng: <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50 uppercase tracking-widest">{question.correctAnswers.join(' & ')}</span>
              </p>
              
              <div className="text-xs text-slate-700 leading-relaxed font-sans space-y-2">
                <p>{question.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
