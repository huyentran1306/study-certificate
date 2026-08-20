import React, { useState, useEffect, useRef } from 'react';
import { Timer, Clock, Award, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Check, Maximize2, ZoomIn, ZoomOut, RotateCcw, X, Sparkles, RefreshCw, Play, FileText, Target, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { Question } from '../types';
import MatchingQuestion from './MatchingQuestion';
import FormattedText from './FormattedText';
import { decodeRowSelections, isMatchingQuestion, isQuestionAnswerCorrect } from '../utils/questionHelper';

interface MockExamProps {
  questions: Question[];
  onFinishExam: (correctCount: number, totalCount: number, elapsedSeconds?: number) => void;
  onExit: () => void;
  certName?: string;
  certCode?: string;
}

export default function MockExam({ questions, onFinishExam, onExit, certName, certCode }: MockExamProps) {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [targetCount, setTargetCount] = useState<number>(50); // Default to 50 questions
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [initialTime, setInitialTime] = useState(3000); // 50 mins default
  const [timeLeft, setTimeLeft] = useState(3000);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Zoom Lightbox States for Exam Mode
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const selectedAnswersRef = useRef(selectedAnswers);
  const examQuestionsRef = useRef(examQuestions);
  const initialTimeRef = useRef(initialTime);

  useEffect(() => {
    // Reset zoom state on question change
    setIsZoomOpen(false);
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  const handleZoomIn = () => setZoomScale(prev => Math.min(prev + 0.25, 4));
  const handleZoomOut = () => setZoomScale(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => {
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPanPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX - panPosition.x, y: touch.clientY - panPosition.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setPanPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  useEffect(() => {
    selectedAnswersRef.current = selectedAnswers;
  }, [selectedAnswers]);

  useEffect(() => {
    examQuestionsRef.current = examQuestions;
  }, [examQuestions]);

  useEffect(() => {
    initialTimeRef.current = initialTime;
  }, [initialTime]);

  const startExam = (count: number) => {
    if (questions.length === 0) return;
    if (timerRef.current) clearInterval(timerRef.current);

    const actualCount = Math.min(count, questions.length);
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, actualCount);

    // Time calculation: 1 minute per question, min 300s
    const examDurationSeconds = Math.max(actualCount * 60, 300);

    setExamQuestions(selected);
    examQuestionsRef.current = selected;
    setInitialTime(examDurationSeconds);
    setTimeLeft(examDurationSeconds);
    initialTimeRef.current = examDurationSeconds;
    setSelectedAnswers({});
    setCurrentIndex(0);
    setSubmitted(false);

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setSubmitted(true);
          
          let correct = 0;
          examQuestionsRef.current.forEach(q => {
            const userAnswers = selectedAnswersRef.current[q.id] || [];
            if (isQuestionAnswerCorrect(q, userAnswers)) correct++;
          });
          
          onFinishExam(correct, examQuestionsRef.current.length, initialTimeRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectCountOption = (count: number) => {
    setTargetCount(count);
    if (hasStarted) {
      if (submitted) {
        startExam(count);
        return;
      }
      if (Object.keys(selectedAnswers).length > 0) {
        if (window.confirm(`Bạn đang làm dở bài thi. Bạn có chắc muốn tạo đề thi mới với ${count} câu hỏi không?`)) {
          startExam(count);
        }
      } else {
        startExam(count);
      }
    }
  };

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

  const handleStatementSelect = (qId: string, statementId: string, choice: 'Yes' | 'No', statements: any[]) => {
    if (submitted) return;

    setSelectedAnswers(prev => {
      const current = prev[qId] || [];
      const mapped: Record<string, string> = {};
      current.forEach(a => {
        const [sId, c] = a.split(':');
        if (sId && c) mapped[sId] = c;
      });
      mapped[statementId] = choice;

      const encoded = statements.map(s => {
        const c = mapped[s.id];
        return c ? `${s.id}:${c}` : null;
      }).filter(Boolean) as string[];

      return {
        ...prev,
        [qId]: encoded
      };
    });
  };

  const handleMatchingSelect = (qId: string, statementId: string, choiceKey: string, statements: any[]) => {
    if (submitted) return;
    setSelectedAnswers(prev => {
      const mapped = decodeRowSelections(prev[qId] || []);
      mapped[statementId] = choiceKey;
      return {
        ...prev,
        [qId]: statements
          .map(statement => mapped[statement.id] ? `${statement.id}=${mapped[statement.id]}` : null)
          .filter(Boolean) as string[],
      };
    });
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach(q => {
      const userAnswers = selectedAnswers[q.id] || [];
      if (isQuestionAnswerCorrect(q, userAnswers)) correct++;
    });
    return correct;
  };

  const handleManualSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSubmitted(true);
    const score = calculateScore();
    const elapsed = initialTime - timeLeft;
    onFinishExam(score, examQuestions.length, elapsed);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ---------------------------------------------------------
  // LANDING / START EXAM SCREEN
  // ---------------------------------------------------------
  if (!hasStarted) {
    const availablePool = questions.length;
    const actualCount = Math.min(targetCount, availablePool);
    const estimatedMinutes = Math.max(actualCount, 5);
    const passingQuestions = Math.ceil(actualCount * 0.7);

    return (
      <div id="mock-exam-landing" className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Chế độ thi thử ngẫu nhiên
            </div>
            
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {certCode ? `Kỳ thi mô phỏng ${certCode}` : 'Kỳ thi thử chứng chỉ'} — {certName || 'Hệ thống ôn luyện'}
            </h1>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Đề thi được khởi tạo ngẫu nhiên từ ngân hàng <span className="text-amber-300 font-bold">{availablePool} câu hỏi chuẩn hóa</span>. 
              Giao diện mô phỏng môi trường thi giúp bạn làm quen áp lực thời gian và đánh giá năng lực thực tế.
            </p>
          </div>
        </div>

        {/* Configuration Card */}
        <div className="bg-white rounded-3xl border border-slate-150 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
              1. Chọn số lượng câu hỏi trong đề thi:
            </label>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[50, 45, 30, 10].map(count => {
                const isSelected = targetCount === count;
                return (
                  <button
                    key={count}
                    disabled={availablePool === 0}
                    onClick={() => setTargetCount(count)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/60 text-indigo-950 shadow-md ring-2 ring-indigo-500/20'
                        : 'border-slate-100 bg-slate-50/50 hover:bg-slate-100/80 hover:border-slate-200 text-slate-700'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 bg-indigo-600 text-white p-0.5 rounded-full">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                    <span className="block text-base sm:text-lg font-black">{count} Câu</span>
                    <span className="block text-[11px] font-semibold text-slate-500 mt-0.5">
                      ~ {count} phút làm bài
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Metrics Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 p-1">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Số câu trong đề</span>
                <span className="text-sm font-black text-slate-800">{actualCount} câu</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-1">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Thời gian làm bài</span>
                <span className="text-sm font-black text-slate-800">{estimatedMinutes} phút</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Điểm đạt (Pass)</span>
                <span className="text-sm font-black text-slate-800">≥ 70% ({passingQuestions} câu)</span>
              </div>
            </div>
          </div>

          {/* Rules & Guidance */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              Quy định & Hướng dẫn làm bài
            </h4>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside bg-slate-50/50 p-4 rounded-2xl border border-slate-100 leading-relaxed font-medium">
              <li>Ngân hàng hiện có <strong className="text-indigo-600">{availablePool} câu hỏi</strong> chuẩn hóa được xáo trộn hoàn toàn ngẫu nhiên.</li>
              <li>Đồng hồ đếm ngược sẽ bắt đầu chạy ngay khi bạn bấm nút <strong className="text-slate-800">"Bắt đầu làm bài thi"</strong>.</li>
              <li>Bạn có thể chọn đáp án, xem sơ đồ phóng to và di chuyển giữa các câu hỏi linh hoạt.</li>
              <li>Sau khi bấm <strong className="text-slate-800">"Nộp bài thi"</strong>, hệ thống sẽ chấm điểm và hiển thị chi tiết giải thích cho từng câu.</li>
            </ul>
          </div>

          {/* Start Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={onExit}
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
            >
              Quay lại trang chủ
            </button>

            <button
              disabled={availablePool === 0}
              onClick={() => {
                setHasStarted(true);
                startExam(targetCount);
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-black text-sm rounded-2xl shadow-lg shadow-indigo-500/25 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-4.5 h-4.5 fill-current" />
              Bắt đầu làm bài thi ({actualCount} câu)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (examQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center p-12 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
        <span className="text-slate-500 font-medium">Đang khởi tạo đề thi ngẫu nhiên...</span>
      </div>
    );
  }

  const currentQ = examQuestions[currentIndex];
  const currentIsMatching = isMatchingQuestion(currentQ);
  const isMulti = !currentIsMatching && currentQ.questionType !== 'statement_matrix' && currentQ.correctAnswers.length > 1;
  const currentSelection = selectedAnswers[currentQ.id] || [];
  const totalExamCount = examQuestions.length;
  const score = calculateScore();
  const passingScore = Math.ceil(totalExamCount * 0.7);
  const isPassed = score >= passingScore;

  return (
    <div id="mock-exam-workspace" className="space-y-6">
      {/* Exam control header block */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] uppercase font-extrabold text-indigo-400 tracking-wider bg-indigo-950/80 border border-indigo-800/60 px-2.5 py-0.5 rounded-full">
              Chế độ Thi Thử Ngẫu Nhiên
            </span>
            <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-full">
              Thời gian: {Math.ceil(initialTime / 60)} phút ({totalExamCount} câu)
            </span>
          </div>
          <h2 className="text-base font-extrabold text-slate-100">
            {certCode ? `Đề thi ${certCode}` : 'Thi thử'} — {certName || 'Hệ thống ôn luyện'}
          </h2>
        </div>

        {/* Question Count Quick Selector Bar */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/90 p-1.5 rounded-xl border border-slate-700">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 hidden sm:inline">Số câu:</span>
          {[50, 45, 30, 10].map(count => {
            const isSelected = targetCount === count;
            return (
              <button
                key={count}
                onClick={() => handleSelectCountOption(count)}
                className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
                title={`Đề thi ngẫu nhiên ${count} câu`}
              >
                {count} câu
              </button>
            );
          })}
          
          <button
            onClick={() => {
              if (!submitted && Object.keys(selectedAnswers).length > 0) {
                if (!window.confirm('Bạn đang trong bài thi. Bạn có muốn quay lại màn hình chọn đề thi không?')) return;
              }
              if (timerRef.current) clearInterval(timerRef.current);
              setHasStarted(false);
            }}
            className="px-2 py-1 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-slate-700/80 rounded-lg transition-all ml-1 cursor-pointer flex items-center gap-1 border border-slate-700/60"
            title="Đổi cấu hình đề thi"
          >
            <RotateCcw className="w-3 h-3 text-indigo-400" />
            <span className="hidden xl:inline">Cấu hình</span>
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 shrink-0">
            <Clock className={`w-4 h-4 ${timeLeft < 120 ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
            <span className={`font-mono text-sm font-bold ${timeLeft < 120 ? 'text-rose-500' : 'text-slate-200'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>

          {!submitted ? (
            <button
              onClick={handleManualSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl border border-indigo-500 shadow-sm transition-all cursor-pointer shrink-0"
            >
              Nộp bài thi
            </button>
          ) : (
            <button
              onClick={onExit}
              className="bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs px-4 py-2 rounded-xl border border-slate-700 transition-all cursor-pointer shrink-0"
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
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Danh sách câu hỏi</h3>
            <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
              {Object.keys(selectedAnswers).filter(k => (selectedAnswers[k] || []).length > 0).length}/{totalExamCount}
            </span>
          </div>
          
          <div className="max-h-[360px] overflow-y-auto p-1.5 grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2 custom-scrollbar">
            {examQuestions.map((q, idx) => {
              const hasAnswered = (selectedAnswers[q.id] || []).length > 0;
              const isActive = idx === currentIndex;
              
              let btnClass = 'border bg-white text-slate-700 border-slate-200 hover:bg-slate-50';
              if (hasAnswered) {
                btnClass = 'bg-slate-900 border-slate-900 text-white';
              }
              if (isActive) {
                btnClass = 'ring-2 ring-indigo-600 ring-offset-1 border-indigo-600 bg-indigo-50 text-indigo-900 font-extrabold shadow-sm';
              }
              
              if (submitted) {
                const userSelected = selectedAnswers[q.id] || [];
                const correct = isQuestionAnswerCorrect(q, userSelected);
                btnClass = correct 
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700 font-bold'
                  : 'bg-rose-50 border-rose-500 text-rose-700 font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div className={`p-4 border rounded-xl space-y-2.5 mt-4 ${isPassed ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'}`}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Kết quả bài thi</span>
                <span className={`px-2 py-0.5 text-[10px] font-black rounded-full uppercase ${isPassed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}`}>
                  {isPassed ? 'ĐẠT (PASS)' : 'CHƯA ĐẠT (FAIL)'}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Số câu đúng:</span>
                <span className="font-black text-slate-900">{score}/{totalExamCount} câu ({Math.round((score / totalExamCount) * 100)}%)</span>
              </div>

              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${isPassed ? 'bg-emerald-600' : 'bg-rose-500'}`}
                  style={{ width: `${Math.round((score / totalExamCount) * 100)}%` }}
                />
              </div>

              <p className="text-[10px] text-slate-600 font-medium leading-relaxed">
                {isPassed 
                  ? `Chúc mừng! Bạn đã vượt qua mức yêu cầu tối thiểu ${passingScore}/${totalExamCount} câu (70%).` 
                  : `Bạn cần đạt tối thiểu ${passingScore}/${totalExamCount} câu (70%) để vượt qua bài thi này.`}
              </p>
            </div>
          )}
        </div>

        {/* Action Panel active question workspace */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                CÂU HỎI {currentIndex + 1} CỦA {totalExamCount}
              </span>
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                {currentQ.category}
              </span>
            </div>

            <FormattedText text={currentQ.text} className="text-base font-semibold text-slate-800" />

            {/* Display image with interactive zoom trigger */}
            {currentQ.imageUrl && (
              <div className="relative group overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center transition-all">
                <img
                  src={currentQ.imageUrl}
                  alt={`Sơ đồ câu hỏi ${currentQ.questionNumber}`}
                  referrerPolicy="no-referrer"
                  className="max-h-[260px] md:max-h-[320px] object-contain rounded-xl transition-all duration-300 shadow-xs"
                />
                {/* Interactive hover overlay */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer" onClick={() => setIsZoomOpen(true)}>
                  <div className="bg-white/95 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-indigo-600" />
                    Click để phóng to & Di chuyển sơ đồ
                  </div>
                </div>
                {/* Floating button for mobile / non-hover states */}
                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="mt-2 text-[11px] text-indigo-600 hover:text-indigo-700 font-bold flex items-center gap-1 bg-indigo-50/50 hover:bg-indigo-50 px-2.5 py-1.5 rounded-lg border border-indigo-150/50 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                  Xem sơ đồ kích thước đầy đủ (Phóng to)
                </button>
              </div>
            )}

            {/* Multiple choice, Yes/No matrix, or matching interaction */}
            {currentIsMatching && currentQ.statements?.length ? (
              <MatchingQuestion
                statements={currentQ.statements}
                choices={currentQ.choices || currentQ.options}
                selections={decodeRowSelections(currentSelection)}
                onChange={(statementId, choiceKey) => handleMatchingSelect(currentQ.id, statementId, choiceKey, currentQ.statements || [])}
                mode={currentQ.questionType === 'matching_dropdown' ? 'matching_dropdown' : 'matching_drag_drop'}
                submitted={submitted}
              />
            ) : currentQ.questionType === 'statement_matrix' || (!currentQ.questionType && currentQ.statements && currentQ.statements.length > 0) ? (
              <div className="space-y-4">
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 text-xs font-bold text-slate-500">
                    <span className="flex-1 uppercase tracking-wider">Phát biểu / Khẳng định (Statements)</span>
                    <div className="flex items-center gap-4 sm:gap-6 px-2 shrink-0">
                      <span className="w-14 text-center text-emerald-700 font-extrabold">ĐÚNG (YES)</span>
                      <span className="w-14 text-center text-rose-700 font-extrabold">SAI (NO)</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {(currentQ.statements || []).map((st, sIdx) => {
                      const mapped: Record<string, string> = {};
                      currentSelection.forEach(a => {
                        const [sId, c] = a.split(':');
                        if (sId && c) mapped[sId] = c;
                      });
                      const userChoice = mapped[st.id];
                      const normalizedCorrect = /^(?:Yes|Đúng|True)$/i.test(st.correctAnswer) ? 'Yes' : 'No';
                      const isStatementCorrect = userChoice === normalizedCorrect;

                      return (
                        <div 
                          key={st.id || sIdx}
                          className={`p-3 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            !submitted 
                              ? userChoice ? 'bg-white border-indigo-200 shadow-xs' : 'bg-white/80 border-slate-200/70'
                              : isStatementCorrect ? 'bg-emerald-50/40 border-emerald-300' : 'bg-rose-50/40 border-rose-300'
                          }`}
                        >
                          <div className="flex items-start gap-2.5 flex-1 pr-2">
                            <span className={`w-5 h-5 rounded-md shrink-0 flex items-center justify-center font-extrabold text-[11px] mt-0.5 ${
                              !submitted
                                ? userChoice ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                                : isStatementCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                            }`}>
                              {st.id || sIdx + 1}
                            </span>
                            <div className="space-y-1">
                              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                                {st.text}
                              </p>
                              {submitted && (
                                <div className="text-[10px] font-bold flex items-center gap-1">
                                  {isStatementCorrect ? (
                                    <span className="text-emerald-600 flex items-center gap-1">
                                      <Check className="w-3 h-3" /> Đúng: <strong>{normalizedCorrect}</strong>
                                    </span>
                                  ) : (
                                    <span className="text-rose-600 flex items-center gap-1">
                                      <X className="w-3 h-3" /> Chọn: <strong>{userChoice || 'Bỏ trống'}</strong> &bull; Đáp án: <strong className="text-emerald-700 underline">{normalizedCorrect}</strong>
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-4 shrink-0 justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                            <button
                              type="button"
                              disabled={submitted}
                              onClick={() => handleStatementSelect(currentQ.id, st.id, 'Yes', currentQ.statements || [])}
                              className={`w-14 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer border ${
                                userChoice === 'Yes'
                                  ? !submitted
                                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                    : normalizedCorrect === 'Yes'
                                      ? 'bg-emerald-600 text-white border-emerald-600'
                                      : 'bg-rose-600 text-white border-rose-600'
                                  : !submitted
                                    ? 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border-slate-200'
                                    : normalizedCorrect === 'Yes'
                                      ? 'bg-emerald-100/60 text-emerald-800 border-emerald-400 font-bold'
                                      : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60'
                              }`}
                            >
                              Yes
                            </button>

                            <button
                              type="button"
                              disabled={submitted}
                              onClick={() => handleStatementSelect(currentQ.id, st.id, 'No', currentQ.statements || [])}
                              className={`w-14 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer border ${
                                userChoice === 'No'
                                  ? !submitted
                                    ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                                    : normalizedCorrect === 'No'
                                      ? 'bg-emerald-600 text-white border-emerald-600'
                                      : 'bg-rose-600 text-white border-rose-600'
                                  : !submitted
                                    ? 'bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 border-slate-200'
                                    : normalizedCorrect === 'No'
                                      ? 'bg-emerald-100/60 text-emerald-800 border-emerald-400 font-bold'
                                      : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60'
                              }`}
                            >
                              No
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {currentQ.options.map(opt => {
                  const isSelected = currentSelection.includes(opt.key);
                  const isCorrectAnswer = currentQ.correctAnswers.includes(opt.key);
                  
                  let optStyle = 'border-slate-200 hover:border-slate-350 bg-white text-slate-700';
                  let badgeClass = isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500';
                  let rightLabel = null;

                  if (isSelected) {
                    optStyle = 'border-indigo-600 bg-indigo-50/20 text-indigo-900 ring-1 ring-indigo-200';
                  }

                  if (submitted) {
                    if (isCorrectAnswer && isSelected) {
                      optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-medium';
                      badgeClass = 'bg-emerald-600 text-white';
                      rightLabel = (
                        <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                          <Check className="w-3 h-3" /> Chính xác
                        </span>
                      );
                    } else if (isCorrectAnswer && !isSelected) {
                      optStyle = 'border-dashed border-emerald-500 bg-emerald-50/20 text-slate-700 font-medium';
                      badgeClass = 'border border-emerald-500 text-emerald-600 bg-white';
                      rightLabel = (
                        <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-100/30 px-2 py-0.5 rounded-full shrink-0">
                          Đáp án đúng (Bỏ sót)
                        </span>
                      );
                    } else if (isSelected && !isCorrectAnswer) {
                      optStyle = 'border-rose-500 bg-rose-50 text-rose-800';
                      badgeClass = 'bg-rose-600 text-white';
                      rightLabel = (
                        <span className="ml-auto text-[10px] font-bold text-rose-600 bg-rose-100/50 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                          <X className="w-3 h-3" /> Bạn chọn sai
                        </span>
                      );
                    } else {
                      optStyle = 'border-slate-100 bg-slate-50/40 text-slate-400 opacity-60';
                      badgeClass = 'bg-slate-100 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      disabled={submitted}
                      onClick={() => handleOptionClick(currentQ.id, opt.key, isMulti)}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-4 cursor-pointer ${optStyle}`}
                    >
                      <span className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-bold text-xs uppercase ${badgeClass}`}>
                        {submitted && isCorrectAnswer && isSelected ? (
                          <Check className="w-3 h-3" />
                        ) : submitted && isSelected && !isCorrectAnswer ? (
                          <X className="w-3 h-3" />
                        ) : (
                          opt.key
                        )}
                      </span>
                      <FormattedText text={opt.text} variant="option" className="leading-relaxed pt-0.5 flex-1" />
                      {rightLabel}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Explanation section if submitted */}
            {submitted && (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-2 animate-fade-in text-xs leading-relaxed text-slate-700">
                <span className="block font-bold text-indigo-950 uppercase tracking-wide">Giải thích đáp án:</span>
                <FormattedText text={currentQ.explanation} variant="explanation" />
              </div>
            )}

            {/* Prev/Next buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="text-xs bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-600 px-4 py-2 rounded-lg font-medium transition-all cursor-pointer"
              >
                Câu trước
              </button>

              <button
                disabled={currentIndex === totalExamCount - 1}
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="text-xs bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white px-5 py-2 rounded-lg font-semibold transition-all cursor-pointer"
              >
                Câu tiếp theo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Image Zoom Lightbox Modal for Exam Mode */}
      {isZoomOpen && currentQ.imageUrl && (
        <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-md select-none animate-fadeIn text-white">
          {/* Header controls bar */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400">Trình xem sơ đồ chi tiết (Thi thử)</span>
              <h4 className="text-sm font-extrabold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
                Sơ đồ Câu hỏi #{currentIndex + 1}
              </h4>
            </div>

            {/* Scale indicator and zoom tool buttons */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-xl">
              <button
                onClick={handleZoomOut}
                disabled={zoomScale <= 0.5}
                className="p-2 text-white hover:bg-white/10 disabled:opacity-30 rounded-lg transition-colors cursor-pointer"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold px-2.5 min-w-[50px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomScale >= 4}
                className="p-2 text-white hover:bg-white/10 disabled:opacity-30 rounded-lg transition-colors cursor-pointer"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors border-l border-white/10 ml-1 cursor-pointer"
                title="Đặt lại vị trí & tỷ lệ"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsZoomOpen(false)}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors border border-white/10 cursor-pointer"
              title="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive dragging canvas body area */}
          <div
            className={`flex-1 overflow-hidden relative flex items-center justify-center p-4 md:p-8 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Guide overlay instructions */}
            <div className="absolute top-4 left-4 text-[10px] text-white/50 bg-black/40 border border-white/5 px-2.5 py-1.5 rounded-lg pointer-events-none">
              💡 Click & kéo chuột (hoặc vuốt điện thoại) để di chuyển sơ đồ; Click nút +/- để zoom!
            </div>

            {/* Scaled/panned Image content wrapper */}
            <div
              className="transition-transform duration-75 ease-out select-none"
              style={{
                transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomScale})`,
                transformOrigin: 'center'
              }}
            >
              <img
                src={currentQ.imageUrl}
                alt="Sơ đồ chi tiết phóng to"
                draggable={false}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] md:max-h-[80vh] max-w-full object-contain pointer-events-none rounded shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

