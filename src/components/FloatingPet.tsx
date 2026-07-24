import React, { useState, useEffect } from 'react';
import { Sparkles, X, Settings2, Heart, RefreshCw, Volume2, Check } from 'lucide-react';
import { fetchUserPetFromDb, saveUserPetToDb } from '../lib/sync';

export interface PetOption {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  quotes: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

export const PET_OPTIONS: PetOption[] = [
  {
    id: 'cat',
    name: 'Mèo Béo Lười',
    emoji: '🐱',
    tagline: 'Thích nằm ngủ nhưng chúc bạn thi đỗ 100%',
    quotes: [
      'Mèo béo chúc bạn trả lời đúng 100%! 🐾',
      'Nghỉ tay vuốt ve tớ một tí rồi làm tiếp nhé 😺',
      'Cố lên đố ai làm khó được bạn! 🎯',
      'Nằm ườn xem bạn ôn thi cực giỏi nè 🌸'
    ],
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    id: 'dog',
    name: 'Cún Năng Động',
    emoji: '🐶',
    tagline: 'Luôn vẫy đuôi cổ vũ nhiệt tình',
    quotes: [
      'Gâu gâu! Ôn thi vui quá bạn ơi! 🍖',
      'Một câu nữa thôi là hoàn thành bài thi! 🎾',
      'Bạn là nhà vô địch thi chứng chỉ! 🏆',
      'Tốc độ làm bài đỉnh cao quá! ⚡'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'capybara',
    name: 'Capybara Chill',
    emoji: '🦫',
    tagline: 'Bình tĩnh, thư thái vượt qua mọi câu khó',
    quotes: [
      'Không việc gì phải vội, đọc kỹ đề rồi chọn nhé 🍊',
      'Capybara chill cùng bạn vượt qua kỳ thi ~ 🌊',
      'Bình tĩnh là chìa khóa 1000 điểm chứng chỉ! ☕',
      'Thư giãn hít thở sâu một hơi nào 🍃'
    ],
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    id: 'penguin',
    name: 'Penguin Chilly',
    emoji: '🐧',
    tagline: 'Lạnh lùng nhưng giải đề siêu tốc',
    quotes: [
      'Lạnh lùng đọc đề, dứt điểm đáp án đúng! 🧊',
      'Keep cool! Kiến thức này quá dễ với bạn 🐧',
      'Trượt sao được mà lo, tiến lên! 🚀',
      'Băng qua mọi thử thách chứng chỉ! ❄️'
    ],
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'bunny',
    name: 'Thỏ Ngọc Nhanh Nhẹn',
    emoji: '🐰',
    tagline: 'Thỏ thông minh làm bài siêu tốc',
    quotes: [
      'Nhảy nhót cổ vũ bạn ôn thi cực hăng! 🥕',
      'Nhanh như thỏ, chuẩn như thần! 🐰',
      'Đáp án chuẩn xác không cần chỉnh! ✨',
      'Thêm một điểm 10 nữa nha! 🌟'
    ],
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
  },
  {
    id: 'robot',
    name: 'Robot GenAI',
    emoji: '🤖',
    tagline: 'Trợ lý AI phân tích đáp án chuẩn 99.9%',
    quotes: [
      'AI System Status: IQ của bạn đang đạt tối đa! ⚡',
      'Đang nạp 100% năng lượng kiến thức! 🔋',
      'Phân tích xong: Bạn chắc chắn đậu kỳ thi này! 📊',
      'Bíp bíp! Đáp án chính xác tuyệt đối! 🤖'
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'fox',
    name: 'Cáo Thông Thái',
    emoji: '🦊',
    tagline: 'Tinh anh, đọc thấu các bẫy đề thi',
    quotes: [
      'Cáo đỏ nhắc nhở: Hãy soi kỹ bẫy của đề nhé! 🦊',
      'Tư duy logic tuyệt vời! 💡',
      'Mẹo thi này bạn đã nắm trong lòng bàn tay! 📚',
      'Thông minh sắc bén như tinh anh! 🔥'
    ],
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200'
  },
  {
    id: 'dragon',
    name: 'Rồng May Mắn',
    emoji: '🐲',
    tagline: 'Mang lại vận may thi cử đỏ như son',
    quotes: [
      'Rồng thần phù hộ bạn thi đỗ 1000/1000 điểm! 🐉',
      'Sức mạnh chứng chỉ quốc tế bùng nổ! 💥',
      'Vận may vút bay, gặp câu nào đúng câu đó! 🐲',
      'Hào quang chiến thắng đang chờ bạn! 👑'
    ],
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    id: 'hamster',
    name: 'Hamster Chăm Chỉ',
    emoji: '🐹',
    tagline: 'Chạy guồng quay ôn thi không mệt mỏi',
    quotes: [
      'Chạy hết công suất! Ôn luyện hăng hái! 🌻',
      'Chăm chỉ mỗi ngày, gặt hái chứng chỉ ngon lành! 🐹',
      'Nhanh chân lẹ tay chọn đáp án đúng! ⚡',
      'Một hạt hướng dương cho bạn vì học giỏi! 🌻'
    ],
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    id: 'panda',
    name: 'Panda Ăn Trúc',
    emoji: '🐼',
    tagline: 'Thong thả ăn trúc rồi làm đúng hết bài',
    quotes: [
      'Ăn miếng trúc rồi gõ tiếp đáp án đúng nhé! 🎍',
      'Thong thả mà chắc chắn 100% 🐼',
      'Nhìn bạn học chăm làm tớ vui lây nè! 🍃',
      'Panda chúc bạn thi may mắn cực kỳ! 🌸'
    ],
    color: 'text-slate-700',
    bgColor: 'bg-slate-100',
    borderColor: 'border-slate-300'
  }
];

interface FloatingPetProps {
  username?: string;
  showToast?: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export default function FloatingPet({ username = '', showToast }: FloatingPetProps) {
  const [selectedPetId, setSelectedPetId] = useState<string>(() => {
    return localStorage.getItem('study_user_pet_avatar') || 'cat';
  });

  // Position state (x: px from left, y: px from bottom)
  const [pos, setPos] = useState<{ x: number; y: number }>(() => {
    const saved = localStorage.getItem('study_user_pet_pos');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') return parsed;
      } catch {}
    }
    return { x: typeof window !== 'undefined' ? Math.max(20, window.innerWidth - 160) : 300, y: 24 };
  });

  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [isWalking, setIsWalking] = useState(true);
  const [showQuoteBubble, setShowQuoteBubble] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showSelectorModal, setShowSelectorModal] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = React.useRef<{
    startX: number;
    startY: number;
    initialPosX: number;
    initialPosY: number;
    hasMoved: boolean;
  }>({ startX: 0, startY: 0, initialPosX: 0, initialPosY: 0, hasMoved: false });

  const currentPet = PET_OPTIONS.find(p => p.id === selectedPetId) || PET_OPTIONS[0];

  // Sync pet from DB when username changes
  useEffect(() => {
    if (!username) return;
    async function loadPetFromDb() {
      const dbPetId = await fetchUserPetFromDb(username);
      if (dbPetId && PET_OPTIONS.some(p => p.id === dbPetId)) {
        setSelectedPetId(dbPetId);
        localStorage.setItem('study_user_pet_avatar', dbPetId);
      }
    }
    loadPetFromDb();
  }, [username]);

  // Wandering / Walking animation loop across screen (only when not dragging)
  useEffect(() => {
    if (!isWalking || isDragging) return;

    const interval = setInterval(() => {
      setPos(prev => {
        let step = direction === 'left' ? -3 : 3;
        let nextX = prev.x + step;

        const maxW = typeof window !== 'undefined' ? window.innerWidth - 80 : 800;

        // Bounce back at edges
        if (nextX <= 20) {
          setDirection('right');
          nextX = 25;
        } else if (nextX >= maxW) {
          setDirection('left');
          nextX = maxW - 5;
        }

        // Randomly change quote
        if (Math.random() < 0.015) {
          triggerRandomQuote(false);
        }

        return { ...prev, x: nextX };
      });
    }, 150);

    return () => clearInterval(interval);
  }, [direction, isWalking, isDragging, selectedPetId]);

  // Drag listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        dragRef.current.hasMoved = true;
        setIsDragging(true);
      }

      const newX = Math.max(10, Math.min(window.innerWidth - 80, dragRef.current.initialPosX + dx));
      // Y is measured from bottom of screen
      const newY = Math.max(10, Math.min(window.innerHeight - 80, dragRef.current.initialPosY - dy));

      setPos({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        localStorage.setItem('study_user_pet_pos', JSON.stringify(pos));
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, pos]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only handle primary click
    if (e.button !== 0) return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialPosX: pos.x,
      initialPosY: pos.y,
      hasMoved: false
    };

    const onMove = (moveEvt: MouseEvent) => {
      const dx = moveEvt.clientX - dragRef.current.startX;
      const dy = moveEvt.clientY - dragRef.current.startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        dragRef.current.hasMoved = true;
        setIsDragging(true);
        window.removeEventListener('mousemove', onMove);
      }
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const triggerRandomQuote = (forceShow = true) => {
    const quotes = currentPet.quotes;
    const randomQ = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQ);
    if (forceShow) {
      setShowQuoteBubble(true);
      setTimeout(() => setShowQuoteBubble(false), 4500);
    }
  };

  const handleSelectPet = async (petId: string) => {
    setSelectedPetId(petId);
    localStorage.setItem('study_user_pet_avatar', petId);
    setShowSelectorModal(false);

    const newPet = PET_OPTIONS.find(p => p.id === petId) || PET_OPTIONS[0];
    if (showToast) {
      showToast(`Đã chọn linh vật đồng hành: ${newPet.emoji} ${newPet.name}!`, 'success');
    }

    if (username) {
      setIsSyncing(true);
      await saveUserPetToDb(username, petId);
      setIsSyncing(false);
    }

    triggerRandomQuote(true);
  };

  return (
    <>
      {/* Floating Pet Container - Hidden on mobile (<768px), Visible & Draggable on laptop/desktop */}
      <div 
        className={`hidden md:block fixed z-40 transition-all ${isDragging ? 'duration-0 cursor-grabbing' : 'duration-150 ease-out cursor-grab'} select-none pointer-events-auto`}
        style={{ left: `${pos.x}px`, bottom: `${pos.y}px` }}
        onMouseDown={handleMouseDown}
      >
        <div className="relative flex flex-col items-center group">
          
          {/* Speech / Quote Bubble Overhead */}
          {(showQuoteBubble || currentQuote) && (
            <div 
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-52 p-3 rounded-2xl bg-white/95 backdrop-blur-md border ${currentPet.borderColor} shadow-xl text-xs font-bold text-slate-800 transition-all duration-300 transform scale-100 animate-fadeIn z-50 pointer-events-auto cursor-pointer`}
              onClick={(e) => {
                e.stopPropagation();
                triggerRandomQuote(true);
              }}
            >
              <div className="flex items-start justify-between gap-1 mb-1">
                <span className={`text-[10px] font-black uppercase tracking-wider ${currentPet.color} flex items-center gap-1`}>
                  <Sparkles className="w-3 h-3" />
                  {currentPet.name}
                </span>
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowQuoteBubble(false); }}
                  className="text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <p className="text-[11px] font-semibold leading-snug text-slate-700">
                "{currentQuote || currentPet.quotes[0]}"
              </p>

              {/* Triangle pointer arrow */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white`} />
            </div>
          )}

          {/* Character Pet Mascot Icon */}
          <div className="relative">
            <button
              onClick={(e) => {
                if (dragRef.current.hasMoved) return; // ignore click if dragged
                triggerRandomQuote(true);
                setIsWalking(prev => !prev);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                setShowSelectorModal(true);
              }}
              className={`w-14 h-14 ${currentPet.bgColor} border-2 ${currentPet.borderColor} rounded-2xl shadow-lg hover:shadow-2xl flex items-center justify-center text-3xl transition-transform transform hover:scale-110 active:scale-95 cursor-grab active:cursor-grabbing relative ${isWalking && !isDragging ? 'animate-bounce' : ''}`}
              title="Kéo rê để di chuyển • Nhấn để trò chuyện • Nhấn đúp để đổi linh vật 🐾"
            >
              <span className={`transform transition-transform ${direction === 'right' ? 'scale-x-110' : '-scale-x-110'}`}>
                {currentPet.emoji}
              </span>

              {/* Heart floating badge */}
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white p-0.5 rounded-full text-[9px] shadow-xs animate-pulse">
                <Heart className="w-2.5 h-2.5 fill-white" />
              </span>
            </button>

            {/* Quick Change Mascot Button next to pet */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSelectorModal(true);
              }}
              className="absolute -bottom-1 -right-2 bg-slate-900 text-amber-300 border border-slate-700 p-1 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
              title="Đổi linh vật học tập 🐾"
            >
              <Settings2 className="w-3 h-3" />
            </button>
          </div>

          {/* Drag instruction / Name Tag below pet */}
          <span className="mt-1 text-[9px] font-black bg-slate-900/80 text-white px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Kéo rê di chuyển • {currentPet.name}
          </span>
        </div>
      </div>

      {/* Select Mascot Modal Popup */}
      {showSelectorModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full border border-slate-100 shadow-2xl space-y-6 animate-scaleIn max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500 animate-spin" />
                  Chọn Linh Vật Đồng Hành 🐾
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Lựa chọn linh vật bạn yêu thích để đi dạo cổ vũ ôn thi trên ứng dụng!
                </p>
              </div>
              <button
                onClick={() => setShowSelectorModal(false)}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mascot Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {PET_OPTIONS.map(pet => {
                const isSelected = pet.id === selectedPetId;
                return (
                  <button
                    key={pet.id}
                    onClick={() => handleSelectPet(pet.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 relative group ${
                      isSelected 
                        ? `${pet.bgColor} ${pet.borderColor} ring-2 ring-indigo-500 shadow-md` 
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/80'
                    }`}
                  >
                    <span className="text-3xl p-2 bg-white/80 rounded-xl border border-slate-100 shadow-xs group-hover:scale-110 transition-transform">
                      {pet.emoji}
                    </span>

                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs font-black text-slate-900 truncate">{pet.name}</h4>
                        {isSelected && (
                          <span className="bg-indigo-600 text-white p-0.5 rounded-full shrink-0">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium line-clamp-2 leading-tight">
                        {pet.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="text-[11px] text-slate-400">
                Linh vật sẽ tự động lưu vào tài khoản Database & LocalStorage.
              </span>
              <button
                onClick={() => setShowSelectorModal(false)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all cursor-pointer text-xs"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
