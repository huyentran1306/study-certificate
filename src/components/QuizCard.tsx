import React, { useState, useEffect } from 'react';
import { Bookmark, CheckCircle, AlertTriangle, AlertCircle, ArrowRight, HelpCircle, Info, ZoomIn, ZoomOut, Maximize2, RotateCcw, X, Sparkles, Check } from 'lucide-react';
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

  // Zoom Lightbox States
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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
    // Also reset zoom states when switching questions
    setIsZoomOpen(false);
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  }, [question, activeHistoryEntry]);

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
    const sortedCorrect = [...question.correctAnswers].map(v => v.trim().toUpperCase()).sort();
    const sortedSelected = [...selectedKeys].map(v => v.trim().toUpperCase()).sort();
    const correct = 
      sortedCorrect.length === sortedSelected.length && 
      sortedCorrect.every((val, index) => val === sortedSelected[index]);

    setIsCorrectResult(correct);
    setIsAnswered(true);
    onAnswerSubmitted(question.id, selectedKeys, correct);
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

        {/* Display image with interactive zoom trigger */}
        {question.imageUrl && (
          <div className="relative group overflow-hidden bg-slate-50 border border-slate-100 rounded-3xl p-4 flex flex-col items-center justify-center transition-all">
            <img
              src={question.imageUrl}
              alt={`Sơ đồ câu hỏi ${question.questionNumber}`}
              referrerPolicy="no-referrer"
              className="max-h-[280px] md:max-h-[350px] object-contain rounded-xl transition-all duration-300 shadow-xs"
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
              className="mt-2.5 text-[11px] text-indigo-600 hover:text-indigo-700 font-bold flex items-center gap-1 bg-indigo-50/50 hover:bg-indigo-50 px-2.5 py-1.5 rounded-lg border border-indigo-150/50 transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 shrink-0" />
              Xem sơ đồ kích thước đầy đủ (Phóng to)
            </button>
          </div>
        )}

        {/* Options list */}
        <div className="grid grid-cols-1 gap-3">
          {question.options.map(opt => {
            const isSelected = selectedKeys.includes(opt.key);
            const isCorrectAnswer = question.correctAnswers.includes(opt.key);
            
            let optStyle = 'border-slate-200 hover:border-slate-350 bg-white text-slate-700 hover:bg-slate-50';
            let badgeClass = isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500';
            let rightLabel = null;

            if (isSelected) {
              optStyle = 'border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-2 ring-indigo-100';
            }

            if (isAnswered) {
              if (isCorrectAnswer && isSelected) {
                optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-medium ring-2 ring-emerald-100';
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
                optStyle = 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-100';
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
                onClick={() => handleOptionClick(opt.key)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-2xl border text-sm transition-all duration-150 flex items-start gap-4 min-h-[56px] focus:outline-none ${optStyle}`}
              >
                {/* Visual choice key circular bubble */}
                <span className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-xs uppercase transition-all duration-150 ${badgeClass}`}>
                  {isAnswered && isCorrectAnswer && isSelected ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : isAnswered && isSelected && !isCorrectAnswer ? (
                    <X className="w-3.5 h-3.5" />
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

      {/* Smart Image Zoom Lightbox Modal */}
      {isZoomOpen && question.imageUrl && (
        <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-md select-none animate-fadeIn">
          {/* Header controls bar */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10 text-white">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400">Trình xem sơ đồ chi tiết</span>
              <h4 className="text-sm font-extrabold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
                Sơ đồ Câu hỏi #{question.questionNumber}
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
                src={question.imageUrl}
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
