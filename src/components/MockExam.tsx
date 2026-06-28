import { useState, useEffect, useRef } from 'react';
import { Timer, Clock, Award, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Question } from '../types';

interface MockExamProps {
  questions: Question[];
  onFinishExam: (correctCount: number, totalCount: number, elapsedSeconds?: number) => void;
  onExit: () => void;
}

export default function MockExam({ questions, onFinishExam, onExit }: MockExamProps) {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes default
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const selectedAnswersRef = useRef(selectedAnswers);
  const examQuestionsRef = useRef(examQuestions);

  useEffect(() => {
    selectedAnswersRef.current = selectedAnswers;
  }, [selectedAnswers]);

  useEffect(() => {
    examQuestionsRef.current = examQuestions;
  }, [examQuestions]);

  useEffect(() => {
    // Select up to 10 random questions for this exam mock session
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setExamQuestions(selected);
    examQuestionsRef.current = selected;

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setSubmitted(true);
          
          // Calculate score from ref values to avoid stale closures
          let correct = 0;
          examQuestionsRef.current.forEach(q => {
            const userAnswers = selectedAnswersRef.current[q.id] || [];
            const correctAnswers = q.correctAnswers;
            const isCorrect = 
              userAnswers.length === correctAnswers.length &&
              userAnswers.every(ans => correctAnswers.includes(ans));
            if (isCorrect) correct++;
          });
          
          onFinishExam(correct, examQuestionsRef.current.length, 600);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [questions]);

  const handleOptionClick = (qId: string, optionKey: string, isMulti: boolean) => {
    if (submitted) return;

    setSelectedAnswers(prev => {
      const current = prev[qId] || [];
      if (isMulti) {
        return {
          ...prev,
          [qId]: current.includes(optionKey) 
            ? current.filter(k => k !== optionKey)
            : [...current, optionKey]
        };
      } else {
        return {
          ...prev,
          [qId]: [optionKey]
        };
      }
    });
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach(q => {
      const userAnswers = selectedAnswers[q.id] || [];
      const correctAnswers = q.correctAnswers;
      
      const isCorrect = 
        userAnswers.length === correctAnswers.length &&
        userAnswers.every(ans => correctAnswers.includes(ans));
      
      if (isCorrect) correct++;
    });
    return correct;
  };

  const handleManualSubmit = () => {
    if (window.confirm('Bạn có chắc chắn muốn nộp bài thi thử ngay bây giờ?')) {
      if (timerRef.current) clearInterval(timerRef.current);
      setSubmitted(true);
      const score = calculateScore();
      const elapsed = 600 - timeLeft;
      onFinishExam(score, examQuestions.length, elapsed);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (examQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center p-12 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
        <span className="text-slate-500 font-medium">Đang chuẩn bị đề thi thử...</span>
      </div>
    );
  }

  const currentQ = examQuestions[currentIndex];
  const isMulti = currentQ.correctAnswers.length > 1;
  const currentSelection = selectedAnswers[currentQ.id] || [];

  return (
    <div id="mock-exam-workspace" className="space-y-6">
      {/* Exam control header block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Chế độ thi thử chứng chỉ (Dự kiến 10 phút)</span>
          <h2 className="text-base font-bold text-slate-100 mt-0.5">Mô phỏng GH-300 Microsoft Microsoft</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
            <Clock className={`w-4 h-4 ${timeLeft < 60 ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
            <span className={`font-mono text-sm font-bold ${timeLeft < 60 ? 'text-rose-500' : 'text-slate-200'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>

          {!submitted ? (
            <button
              onClick={handleManualSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2 rounded-xl border border-indigo-500 shadow-sm transition-all"
            >
              Nộp bài thi
            </button>
          ) : (
            <button
              onClick={onExit}
              className="bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs px-4 py-2 rounded-xl transition-all"
            >
              Thoát ra
            </button>
          )}
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Questions status grids sidebar */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Danh sách câu hỏi</h3>
          
          <div className="grid grid-cols-5 gap-2">
            {examQuestions.map((q, idx) => {
              const hasAnswered = (selectedAnswers[q.id] || []).length > 0;
              const isActive = idx === currentIndex;
              
              let btnClass = 'border bg-white text-slate-700 border-slate-200 hover:bg-slate-50';
              if (hasAnswered) {
                btnClass = 'bg-slate-900 border-slate-900 text-white';
              }
              if (isActive) {
                btnClass = 'ring-2 ring-indigo-500 ring-offset-2 border-indigo-600';
              }
              
              if (submitted) {
                const userSelected = selectedAnswers[q.id] || [];
                const correct = 
                  userSelected.length === q.correctAnswers.length &&
                  userSelected.every(ans => q.correctAnswers.includes(ans));
                btnClass = correct 
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                  : 'bg-rose-50 border-rose-500 text-rose-700';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-10 h-10 rounded-xl text-xs font-bold flex items-center justify-center transition-all ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div className="bg-indigo-50/50 p-4 border border-indigo-100 rounded-xl space-y-2 mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Điểm số đạt được</span>
                <span className="font-bold text-indigo-700">{calculateScore()}/10 câu</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-600 h-1.5 rounded-full" 
                  style={{ width: `${(calculateScore() / 10) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-indigo-600 font-medium">Bạn cần đạt tối thiểu 7/10 câu để qua kỳ thi này.</p>
            </div>
          )}
        </div>

        {/* Action Panel active question workspace */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">CÂU HỎI {currentIndex + 1} CỦA 10</span>
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">{currentQ.category}</span>
            </div>

            <h3 className="text-base font-semibold text-slate-800 leading-snug">{currentQ.text}</h3>

            {/* Answers select */}
            <div className="space-y-3">
              {currentQ.options.map(opt => {
                const isSelected = currentSelection.includes(opt.key);
                const isCorrectAnswer = currentQ.correctAnswers.includes(opt.key);
                
                let optStyle = 'border-slate-200 hover:border-slate-350 bg-white text-slate-700';
                if (isSelected) {
                  optStyle = 'border-indigo-600 bg-indigo-50/20 text-indigo-900 ring-1 ring-indigo-200';
                }

                if (submitted) {
                  if (isCorrectAnswer) {
                    optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-medium';
                  } else if (isSelected) {
                    optStyle = 'border-rose-500 bg-rose-50 text-rose-800';
                  } else {
                    optStyle = 'border-slate-100 bg-slate-50/40 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    disabled={submitted}
                    onClick={() => handleOptionClick(currentQ.id, opt.key, isMulti)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-4 ${optStyle}`}
                  >
                    <span className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-bold text-xs uppercase ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {opt.key}
                    </span>
                    <span className="leading-relaxed pt-0.5">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation section if submitted */}
            {submitted && (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-2 animate-fade-in text-xs leading-relaxed text-slate-700">
                <span className="block font-bold text-indigo-950 uppercase tracking-wide">Giải thích đáp án:</span>
                <p>{currentQ.explanation}</p>
              </div>
            )}

            {/* Prev/Next buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="text-xs bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-600 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Câu trước
              </button>

              <button
                disabled={currentIndex === examQuestions.length - 1}
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="text-xs bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white px-5 py-2 rounded-lg font-semibold transition-all"
              >
                Câu tiếp theo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
