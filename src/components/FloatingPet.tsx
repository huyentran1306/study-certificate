import React, { useState, useEffect } from 'react';
import { Sparkles, X, Settings2, Heart, Check, Plus, Edit3, Palette } from 'lucide-react';
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

export function DoraemonAvatar({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="doraHead" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="50%" stopColor="#0284c7"/>
          <stop offset="100%" stopColor="#0369a1"/>
        </linearGradient>
        <linearGradient id="propellerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a"/>
          <stop offset="100%" stopColor="#eab308"/>
        </linearGradient>
      </defs>

      {/* Chong chóng tre (Bamboo-copter) */}
      <g id="bamboo-copter">
        <ellipse cx="50" cy="7" rx="22" ry="3.5" fill="url(#propellerGrad)" stroke="#a16207" strokeWidth="1" />
        <rect x="48.5" y="7" width="3" height="11" fill="#ca8a04" rx="1.5" />
        <ellipse cx="50" cy="18" rx="7" ry="2.5" fill="#ef4444" stroke="#991b1b" strokeWidth="0.8" />
      </g>

      {/* Round Blue Head */}
      <circle cx="50" cy="54" r="36" fill="url(#doraHead)" stroke="#075985" strokeWidth="1.8" />

      {/* White Face Oval */}
      <ellipse cx="50" cy="59" rx="29" ry="25" fill="#ffffff" stroke="#e0f2fe" strokeWidth="1" />

      {/* Eyes */}
      <ellipse cx="43.5" cy="39" rx="7.5" ry="10" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
      <ellipse cx="56.5" cy="39" rx="7.5" ry="10" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
      
      {/* Pupils */}
      <ellipse cx="45" cy="40.5" rx="3" ry="4" fill="#0f172a" />
      <circle cx="44.2" cy="38.5" r="1.2" fill="#ffffff" />
      <ellipse cx="55" cy="40.5" rx="3" ry="4" fill="#0f172a" />
      <circle cx="55.8" cy="38.5" r="1.2" fill="#ffffff" />

      {/* Red Nose */}
      <circle cx="50" cy="48.5" r="4.8" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
      <circle cx="48.2" cy="46.8" r="1.4" fill="#ffffff" />

      {/* Nose to Mouth Line */}
      <line x1="50" y1="53.3" x2="50" y2="67" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />

      {/* Happy Smile */}
      <path d="M30 63 Q50 82, 70 63" fill="#e11d48" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />
      {/* Tongue */}
      <path d="M41 71 Q50 67, 59 71 Q50 79, 41 71" fill="#f472b6" />

      {/* Whiskers */}
      <line x1="22" y1="51" x2="38" y2="53" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="20" y1="58" x2="37" y2="58" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22" y1="65" x2="38" y2="63" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />

      <line x1="78" y1="51" x2="62" y2="53" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="80" y1="58" x2="63" y2="58" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="78" y1="65" x2="62" y2="63" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />

      {/* Red Collar */}
      <rect x="27" y="83" width="46" height="6.5" rx="3.2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />

      {/* Golden Bell */}
      <circle cx="50" cy="88.5" r="5.8" fill="#facc15" stroke="#854d0e" strokeWidth="1" />
      <line x1="45" y1="87" x2="55" y2="87" stroke="#713f12" strokeWidth="0.8" />
      <circle cx="50" cy="89.5" r="1.2" fill="#713f12" />
      <line x1="50" y1="90.7" x2="50" y2="93" stroke="#713f12" strokeWidth="0.8" />
    </svg>
  );
}

export const PET_OPTIONS: PetOption[] = [
  {
    id: 'doraemon',
    name: 'Mèo Máy Doraemon',
    emoji: '🐱',
    tagline: 'Mèo máy thế kỷ 22 với Túi Thần Kỳ và Bánh Mì Trí Nhớ 🍞',
    quotes: [
      'Bảo bối Bánh Mì Trí Nhớ đây! Nuốt trọn đề thi điểm tối đa nhé! 🍞✨',
      'Đeo Chong Chóng Tre bay thẳng qua mọi câu hỏi hóc búa nào! 🚁',
      'Túi thần kỳ của tớ luôn chuẩn bị sẵn 1000 điểm cho bạn! 🎒',
      'Nobita còn cố gắng được, bạn thông minh thế này chắc chắn đậu! 💙',
      'Ăn một chiếc Bánh Rán Dorayaki rồi vào làm bài thi cực đỉnh nhé! 🥞',
      'Tớ và cỗ máy thời gian sẽ đưa bạn đến ngày nhận chứng chỉ quốc tế! ⏳🌟'
    ],
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-300'
  },
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

// Helper to resolve custom vs preset pets
export function getPetFromId(idStr: string): PetOption {
  if (!idStr) return PET_OPTIONS[0];

  if (idStr.startsWith('custom:')) {
    const parts = idStr.split(':');
    const customEmoji = parts[1] || '✨';
    const customName = parts[2] || 'Linh Vật Tùy Chỉnh';
    return {
      id: idStr,
      name: customName,
      emoji: customEmoji,
      tagline: 'Linh vật do chính bạn tạo ra!',
      quotes: [
        `${customEmoji} ${customName} chúc bạn trả lời đúng 100%! 🎉`,
        `Ôn tập cực sung cùng ${customEmoji} ${customName}! ✨`,
        `Cố lên! ${customName} tin bạn chắc chắn đậu chứng chỉ! 🏆`,
        `Mỗi ngày tích lũy thêm 100 điểm cùng ${customEmoji}! 🚀`
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    };
  }

  return PET_OPTIONS.find(p => p.id === idStr) || PET_OPTIONS[0];
}

const QUICK_EMOJI_LIST = ['🍞', '🚁', '🥞', '🔔', '💙', '🦄', '🐯', '🐥', '🦁', '🐸', '👾', '👻', '🚀', '🌟', '🍉', '🍀', '👑', '⚽', '🌺', '🍕', '🎯', '🐝', '🐙', '🦖'];

interface FloatingPetProps {
  username?: string;
  showToast?: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export default function FloatingPet({ username = '', showToast }: FloatingPetProps) {
  const [selectedPetId, setSelectedPetId] = useState<string>(() => {
    return localStorage.getItem('study_user_pet_avatar') || 'cat';
  });

  // Custom creation fields
  const [customEmojiInput, setCustomEmojiInput] = useState('🦄');
  const [customNameInput, setCustomNameInput] = useState('Kỳ Lân May Mắn');
  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');

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

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = React.useRef<{
    startX: number;
    startY: number;
    initialPosX: number;
    initialPosY: number;
    hasMoved: boolean;
  }>({ startX: 0, startY: 0, initialPosX: 0, initialPosY: 0, hasMoved: false });

  const currentPet = getPetFromId(selectedPetId);

  // Sync pet from DB when username changes
  useEffect(() => {
    if (!username) return;
    async function loadPetFromDb() {
      const dbPetId = await fetchUserPetFromDb(username);
      if (dbPetId) {
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

    const newPet = getPetFromId(petId);
    if (showToast) {
      showToast(`Đã chọn linh vật đồng hành: ${newPet.emoji} ${newPet.name}!`, 'success');
    }

    if (username) {
      await saveUserPetToDb(username, petId);
    }

    triggerRandomQuote(true);
  };

  const handleSaveCustomPet = async (e: React.FormEvent) => {
    e.preventDefault();
    const emoji = customEmojiInput.trim() || '✨';
    const name = customNameInput.trim() || 'Linh Vật Của Tôi';
    const customId = `custom:${emoji}:${name}`;

    await handleSelectPet(customId);
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
                if (dragRef.current.hasMoved) return;
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
              <span className={`transform transition-transform ${direction === 'right' ? 'scale-x-110' : '-scale-x-110'} flex items-center justify-center`}>
                {currentPet.id === 'doraemon' ? (
                  <DoraemonAvatar className="w-11 h-11 drop-shadow-sm" />
                ) : (
                  currentPet.emoji
                )}
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
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full border border-slate-100 shadow-2xl space-y-5 animate-scaleIn max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500 animate-spin" />
                  Đổi Linh Vật Đồng Hành 🐾
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Chọn biểu tượng có sẵn hoặc tự gõ emoji yêu thích của bạn!
                </p>
              </div>
              <button
                onClick={() => setShowSelectorModal(false)}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab selection bar */}
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl">
              <button
                onClick={() => setActiveTab('presets')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'presets' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Danh Sách Mẫu</span>
              </button>

              <button
                onClick={() => setActiveTab('custom')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'custom' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Tự Đổi Icon / Emoji</span>
              </button>
            </div>

            {activeTab === 'presets' ? (
              /* Mascot Preset Grid */
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
                      <span className="text-3xl p-1.5 bg-white/80 rounded-xl border border-slate-100 shadow-xs group-hover:scale-110 transition-transform flex items-center justify-center w-12 h-12 shrink-0">
                        {pet.id === 'doraemon' ? (
                          <DoraemonAvatar className="w-9 h-9 drop-shadow-xs" />
                        ) : (
                          pet.emoji
                        )}
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
            ) : (
              /* Custom Emoji & Name Creator Form */
              <form onSubmit={handleSaveCustomPet} className="space-y-4 bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 flex items-center justify-between">
                    <span>1. Nhập hoặc chọn Emoji biểu tượng:</span>
                    <span className="text-[11px] font-bold text-indigo-600">Preview: {customEmojiInput || '✨'}</span>
                  </label>
                  
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customEmojiInput}
                      onChange={(e) => setCustomEmojiInput(e.target.value)}
                      placeholder="Ví dụ: 🦄, 🐯, 🐥, 🚀, 🦉..."
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-base text-center font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      maxLength={4}
                    />
                  </div>

                  {/* Quick Select Emoji Chips */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {QUICK_EMOJI_LIST.map((emo, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setCustomEmojiInput(emo)}
                        className={`text-lg p-1.5 bg-white border hover:bg-indigo-50 rounded-lg transition-transform active:scale-90 cursor-pointer ${
                          customEmojiInput === emo ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500' : 'border-slate-200'
                        }`}
                      >
                        {emo}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700">
                    2. Đặt tên gọi linh vật tùy chọn:
                  </label>
                  <input
                    type="text"
                    required
                    value={customNameInput}
                    onChange={(e) => setCustomNameInput(e.target.value)}
                    placeholder="Ví dụ: Kỳ Lân May Mắn, Bé Gà Thông Thái..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    maxLength={30}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-slate-900 text-white font-black text-xs py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Áp Dụng Linh Vật Tự Chọn</span>
                </button>
              </form>
            )}

            {/* Modal Footer */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="text-[11px] text-slate-400">
                Linh vật tự động đồng bộ tài khoản Database & LocalStorage.
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
