import React, { useState, useEffect } from 'react';
import { Bookmark, CheckCircle, AlertTriangle, AlertCircle, ArrowRight, HelpCircle, Info, ZoomIn, ZoomOut, Maximize2, RotateCcw, X, Sparkles, Check } from 'lucide-react';
import { Question } from '../types';
import MatchingQuestion from './MatchingQuestion';
import HotspotQuestion from './HotspotQuestion';
import FormattedText from './FormattedText';
import { decodeRowSelections, isMatchingQuestion } from '../utils/questionHelper';

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
  const [statementSelections, setStatementSelections] = useState<Record<string, 'Yes' | 'No'>>({});
  const [matchingSelections, setMatchingSelections] = useState<Record<string, string>>({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrectResult, setIsCorrectResult] = useState(false);

  // Zoom Lightbox States
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const isMatching = isMatchingQuestion(question);
  const isHotspot = question.questionType === 'image_hotspot';
  const isStatementMatrix = Boolean(
    question.questionType === 'statement_matrix' ||
    (!isMatching && !question.questionType && question.statements && question.statements.length > 0)
  );

  const statements = question.statements || [];
  const matchingChoices = question.choices || question.options;
  const isMultiSelect = !isStatementMatrix && !isMatching && question.correctAnswers.length > 1;

  // Whenever question changes, reset local values (if user hasn't answered yet)
  useEffect(() => {
    if (activeHistoryEntry) {
      setSelectedKeys(activeHistoryEntry.selectedOptions);
      setIsAnswered(true);
      setIsCorrectResult(activeHistoryEntry.isCorrect);

      if (isStatementMatrix && statements.length > 0) {
        const mapped: Record<string, 'Yes' | 'No'> = {};
        activeHistoryEntry.selectedOptions.forEach(optStr => {
          const [sId, ans] = optStr.split(':');
          if (sId && ans) {
            mapped[sId] = ans.toUpperCase() === 'YES' || ans.toUpperCase() === 'ĐÚNG' ? 'Yes' : 'No';
          }
        });
        setStatementSelections(mapped);
      }
      if (isMatching) {
        setMatchingSelections(decodeRowSelections(activeHistoryEntry.selectedOptions));
      }
    } else {
      setSelectedKeys([]);
      setStatementSelections({});
      setMatchingSelections({});
      setIsAnswered(false);
      setIsCorrectResult(false);
    }
    // Also reset zoom states when switching questions
    setIsZoomOpen(false);
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  }, [question, activeHistoryEntry, isStatementMatrix, isMatching]);

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

  const handleStatementSelect = (statementId: string, choice: 'Yes' | 'No') => {
    if (isAnswered) return;
    setStatementSelections(prev => ({
      ...prev,
      [statementId]: choice
    }));
  };

  const handleMatchingSelect = (statementId: string, choiceKey: string) => {
    if (isAnswered) return;
    setMatchingSelections(prev => ({ ...prev, [statementId]: choiceKey }));
  };

  const isAllStatementsAnswered = 
    isStatementMatrix && 
    statements.length > 0 && 
    statements.every(s => statementSelections[s.id] !== undefined);

  const isAllMatchingAnswered =
    isMatching &&
    statements.length > 0 &&
    statements.every(statement => Boolean(matchingSelections[statement.id]));

  const handleVerify = () => {
    if (isMatching) {
      if (!isAllMatchingAnswered) return;
      const encodedSelections = statements.map(statement => `${statement.id}=${matchingSelections[statement.id]}`);
      const allCorrect = statements.every(statement =>
        matchingSelections[statement.id]?.toUpperCase() === statement.correctAnswer.trim().toUpperCase()
      );
      setSelectedKeys(encodedSelections);
      setIsCorrectResult(allCorrect);
      setIsAnswered(true);
      onAnswerSubmitted(question.id, encodedSelections, allCorrect);
      return;
    }
    if (isStatementMatrix) {
      if (!isAllStatementsAnswered) return;

      const encodedSelections: string[] = [];
      let allCorrect = true;

      statements.forEach(s => {
        const userChoice = statementSelections[s.id];
        const normalizedCorrect = /^(?:Yes|Đúng|True)$/i.test(s.correctAnswer) ? 'Yes' : 'No';
        encodedSelections.push(`${s.id}:${userChoice}`);
        if (userChoice !== normalizedCorrect) {
          allCorrect = false;
        }
      });

      setSelectedKeys(encodedSelections);
      setIsCorrectResult(allCorrect);
      setIsAnswered(true);
      onAnswerSubmitted(question.id, encodedSelections, allCorrect);
      return;
    }

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
    <div id={`question-card-${question.id}`} className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-3.5 sm:p-5 md:p-8 shadow-sm">
      {/* Category Panel header */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-slate-50">
        <div className="flex min-w-0 items-center gap-2">
          <span className="max-w-[245px] truncate text-[10px] sm:max-w-none sm:text-xs font-bold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full uppercase tracking-wider">
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
      <div className="space-y-5 sm:space-y-6">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
            CÂU HỎI {question.questionNumber}
          </span>
          <FormattedText text={question.text} className="text-base md:text-lg font-semibold text-slate-800" />
        </div>

        {/* Display image with interactive zoom trigger */}
        {question.imageUrl && !isHotspot && !isMatching && !isStatementMatrix && (
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

        {/* Options list, Yes/No matrix, or matching interaction */}
        {isHotspot && question.imageUrl ? (
          <HotspotQuestion
            imageUrl={question.imageUrl}
            questionNumber={question.questionNumber}
            options={question.options}
            selectedKeys={selectedKeys}
            correctAnswers={question.correctAnswers}
            onChange={setSelectedKeys}
            submitted={isAnswered}
            multiple={isMultiSelect}
          />
        ) : isMatching && statements.length > 0 ? (
          <MatchingQuestion
            statements={statements}
            choices={matchingChoices}
            selections={matchingSelections}
            onChange={handleMatchingSelect}
            mode={question.questionType === 'matching_dropdown' ? 'matching_dropdown' : 'matching_drag_drop'}
            submitted={isAnswered}
          />
        ) : isStatementMatrix && statements.length > 0 ? (
          <div className="space-y-4">
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-3 sm:p-4 overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 text-xs font-bold text-slate-500">
                <span className="flex-1 uppercase tracking-wider"><span className="sm:hidden">Phát biểu</span><span className="hidden sm:inline">Nội dung phát biểu / Khẳng định (Statements)</span></span>
                <div className="hidden sm:flex items-center gap-8 px-2 shrink-0">
                  <span className="w-16 text-center text-emerald-700 font-extrabold">ĐÚNG (YES)</span>
                  <span className="w-16 text-center text-rose-700 font-extrabold">SAI (NO)</span>
                </div>
              </div>

              <div className="space-y-3">
                {statements.map((st, sIdx) => {
                  const userChoice = statementSelections[st.id];
                  const normalizedCorrect = /^(?:Yes|Đúng|True)$/i.test(st.correctAnswer) ? 'Yes' : 'No';
                  const isAnswerChecked = isAnswered;
                  const isStatementCorrect = userChoice === normalizedCorrect;

                  return (
                    <div 
                      key={st.id || sIdx}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        !isAnswerChecked 
                          ? userChoice 
                            ? 'bg-white border-indigo-200 shadow-xs' 
                            : 'bg-white/80 border-slate-200/70'
                          : isStatementCorrect
                            ? 'bg-emerald-50/40 border-emerald-300'
                            : 'bg-rose-50/40 border-rose-300'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 pr-2">
                        <span className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center font-extrabold text-xs mt-0.5 ${
                          !isAnswerChecked
                            ? userChoice ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                            : isStatementCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                        }`}>
                          {st.id || sIdx + 1}
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                            {st.text}
                          </p>
                          {isAnswerChecked && (
                            <div className="text-[11px] font-bold flex items-center gap-1.5 pt-0.5">
                              {isStatementCorrect ? (
                                <span className="text-emerald-600 flex items-center gap-1">
                                  <Check className="w-3.5 h-3.5" /> Chính xác: <strong>{normalizedCorrect}</strong>
                                </span>
                              ) : (
                                <span className="text-rose-600 flex items-center gap-1">
                                  <X className="w-3.5 h-3.5" /> Bạn chọn: <strong>{userChoice || 'Bỏ trống'}</strong> &bull; Đáp án đúng: <strong className="text-emerald-700 underline">{normalizedCorrect}</strong>
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Yes / No Toggle Controls */}
                      <div className="flex w-full sm:w-auto items-center gap-3 sm:gap-6 shrink-0 justify-stretch sm:justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        {/* Yes Button */}
                        <button
                          type="button"
                          onClick={() => handleStatementSelect(st.id, 'Yes')}
                          disabled={isAnswerChecked}
                          className={`flex-1 sm:flex-none sm:w-16 min-h-11 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer border ${
                            userChoice === 'Yes'
                              ? !isAnswerChecked
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm scale-105'
                                : normalizedCorrect === 'Yes'
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-rose-600 text-white border-rose-600'
                              : !isAnswerChecked
                                ? 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border-slate-200'
                                : normalizedCorrect === 'Yes'
                                  ? 'bg-emerald-100/60 text-emerald-800 border-emerald-400 font-extrabold'
                                  : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60'
                          }`}
                        >
                          {userChoice === 'Yes' && <Check className="w-3 h-3" />}
                          Yes
                        </button>

                        {/* No Button */}
                        <button
                          type="button"
                          onClick={() => handleStatementSelect(st.id, 'No')}
                          disabled={isAnswerChecked}
                          className={`flex-1 sm:flex-none sm:w-16 min-h-11 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer border ${
                            userChoice === 'No'
                              ? !isAnswerChecked
                                ? 'bg-rose-600 text-white border-rose-600 shadow-sm scale-105'
                                : normalizedCorrect === 'No'
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-rose-600 text-white border-rose-600'
                              : !isAnswerChecked
                                ? 'bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 border-slate-200'
                                : normalizedCorrect === 'No'
                                  ? 'bg-emerald-100/60 text-emerald-800 border-emerald-400 font-extrabold'
                                  : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60'
                          }`}
                        >
                          {userChoice === 'No' && <Check className="w-3 h-3" />}
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
          /* Options list */
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
                    <span className="order-3 w-full pl-9 sm:order-none sm:ml-auto sm:w-auto sm:pl-0 text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Chính xác
                    </span>
                  );
                } else if (isCorrectAnswer && !isSelected) {
                  optStyle = 'border-dashed border-emerald-500 bg-emerald-50/20 text-slate-700 font-medium';
                  badgeClass = 'border border-emerald-500 text-emerald-600 bg-white';
                  rightLabel = (
                    <span className="order-3 w-full pl-9 sm:order-none sm:ml-auto sm:w-auto sm:pl-0 text-[10px] font-bold text-emerald-600 bg-emerald-100/30 px-2 py-0.5 rounded-full shrink-0">
                      Đáp án đúng (Bỏ sót)
                    </span>
                  );
                } else if (isSelected && !isCorrectAnswer) {
                  optStyle = 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-100';
                  badgeClass = 'bg-rose-600 text-white';
                  rightLabel = (
                    <span className="order-3 w-full pl-9 sm:order-none sm:ml-auto sm:w-auto sm:pl-0 text-[10px] font-bold text-rose-600 bg-rose-100/50 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
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
                  className={`w-full text-left p-3 sm:p-4 rounded-2xl border text-sm transition-all duration-150 flex flex-wrap items-start gap-3 sm:gap-4 min-h-[56px] focus:outline-none ${optStyle}`}
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
                  <FormattedText text={opt.text} variant="option" className="leading-relaxed pt-0.5 flex-1" />
                  {rightLabel}
                </button>
              );
            })}
          </div>
        )}

        {/* Verify and Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-50">
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:items-center sm:gap-3">
            {onPrev && (
              <button
                onClick={onPrev}
                disabled={isFirst}
                className="min-h-11 text-xs bg-slate-100 text-slate-600 hover:bg-slate-200/80 px-3 sm:px-4 py-2.5 rounded-xl font-medium transition-all group disabled:opacity-40"
              >
                Trước đó
              </button>
            )}
            
            <button
              onClick={onNext}
              className="min-h-11 text-xs bg-indigo-600 text-white hover:bg-indigo-700 px-3 sm:px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              Thi tiếp <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {!isAnswered ? (
            <button
              onClick={handleVerify}
              disabled={isMatching ? !isAllMatchingAnswered : isStatementMatrix ? !isAllStatementsAnswered : selectedKeys.length === 0}
              className={`w-full sm:w-auto min-h-11 text-xs px-4 sm:px-6 py-2.5 rounded-xl font-bold uppercase transition-all shadow-sm ${
                (isMatching ? isAllMatchingAnswered : isStatementMatrix ? isAllStatementsAnswered : selectedKeys.length > 0)
                  ? 'bg-slate-900 text-white hover:bg-slate-800 cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isMatching
                ? (isAllMatchingAnswered ? 'Kiểm tra kết quả ghép' : `Ghép đủ ${statements.length} dòng`)
                : isStatementMatrix
                ? (isAllStatementsAnswered ? 'Kiểm tra đáp án Yes/No' : `Chọn Yes/No cho cả ${statements.length} phát biểu`)
                : isMultiSelect ? 'Xác nhận (Chọn hai)' : 'Kiểm tra đáp án'}
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
                Khóa đúng: <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50 uppercase tracking-widest">
                  {isMatching
                    ? statements.map(statement => `${statement.id}=${statement.correctAnswer}`).join(' & ')
                    : question.correctAnswers.join(' & ')}
                </span>
              </p>
              
              <div className="text-xs text-slate-700 leading-relaxed font-sans space-y-2">
                <FormattedText text={question.explanation} variant="explanation" />
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
