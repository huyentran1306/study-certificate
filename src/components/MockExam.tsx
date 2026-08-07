import React, { useState, useEffect, useRef } from 'react';
import { Timer, Clock, Award, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Check, Maximize2, ZoomIn, ZoomOut, RotateCcw, X, Sparkles, RefreshCw } from 'lucide-react';
import { Question } from '../types';

interface MockExamProps {
  questions: Question[];
  onFinishExam: (correctCount: number, totalCount: number, elapsedSeconds?: number) => void;
  onExit: () => void;
  certName?: string;
  certCode?: string;
}

export default function MockExam({ questions, onFinishExam, onExit, certName, certCode }: MockExamProps) {
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
            const correctAnswers = q.correctAnswers;
            const normUser = userAnswers.map(ans => ans.trim().toUpperCase());
            const normCorrect = correctAnswers.map(ans => ans.trim().toUpperCase());
            const isCorrect = 
              normUser.length === normCorrect.length &&
              normUser.every(ans => normCorrect.includes(ans));
            if (isCorrect) correct++;
          });
          
          onFinishExam(correct, examQuestionsRef.current.length, initialTimeRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startExam(targetCount);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [questions, targetCount]);

  const handleSelectCountOption = (count: number) => {
    if (submitted) {
      setTargetCount(count);
      startExam(count);
      return;
    }
    
    if (Object.keys(selectedAnswers).length > 0) {
      if (window.confirm(`Bạn đang làm dở bài thi. Bạn có chắc muốn tạo đề thi mới với ${count} câu hỏi không?`)) {
        setTargetCount(count);
        startExam(count);
      }
    } else {
      setTargetCount(count);
      startExam(count);
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

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach(q => {
      const userAnswers = selectedAnswers[q.id] || [];
      const correctAnswers = q.correctAnswers;
      
      const normUser = userAnswers.map(ans => ans.trim().toUpperCase());
      const normCorrect = correctAnswers.map(ans => ans.trim().toUpperCase());
      const isCorrect = 
        normUser.length === normCorrect.length &&
        normUser.every(ans => normCorrect.includes(ans));
      
      if (isCorrect) correct++;
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

  if (examQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center p-12 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
        <span className="text-slate-500 font-medium">Đang chuẩn bị đề thi thử ngẫu nhiên...</span>
      </div>
    );
  }

  const currentQ = examQuestions[currentIndex];
  const isMulti = currentQ.correctAnswers.length > 1;
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
            onClick={() => startExam(targetCount)}
            className="p-1.5 text-slate-400 hover:text-indigo-300 hover:bg-slate-700/60 rounded-lg transition-all ml-1 cursor-pointer"
            title="Đổi bộ câu hỏi ngẫu nhiên mới"
          >
            <RefreshCw className="w-3.5 h-3.5" />
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
          
          <div className="max-h-[360px] overflow-y-auto pr-1 grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-1.5 custom-scrollbar">
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
                const normUser = userSelected.map(ans => ans.trim().toUpperCase());
                const normCorrect = q.correctAnswers.map(ans => ans.trim().toUpperCase());
                const correct = 
                  normUser.length === normCorrect.length &&
                  normUser.every(ans => normCorrect.includes(ans));
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

            <h3 className="text-base font-semibold text-slate-800 leading-snug">{currentQ.text}</h3>

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

            {/* Answers select */}
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
                    <span className="leading-relaxed pt-0.5 flex-1">{opt.text}</span>
                    {rightLabel}
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

