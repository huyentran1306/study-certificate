import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  HelpCircle, 
  Bookmark, 
  Home, 
  Award, 
  Layers, 
  AlertCircle, 
  Upload, 
  Activity, 
  Zap, 
  Trophy, 
  Star,
  CheckCircle,
  Menu,
  X,
  RefreshCw,
  FolderOpen,
  User,
  LogOut,
  Database,
  Check,
  Loader2,
  Asterisk,
  Users,
  Lock,
  Unlock,
  Key,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';

import { Question, ProgressState, StudyMode, Certificate, VipKeyConfig } from './types';
import { initialQuestions } from './data/initialQuestions';
import { az900Questions } from './data/az900Questions';
import { ai900Questions } from './data/ai900Questions';
import { ccaQuestions } from './data/ccaQuestions';
import { dp800Questions } from './data/dp800Questions';
import QuizCard from './components/QuizCard';
import StatsPanel from './components/StatsPanel';
import MockExam from './components/MockExam';
import CustomQuestionsImport from './components/CustomQuestionsImport';
import AdminPanel from './components/AdminPanel';
import GroupStudy from './components/GroupStudy';


// Supabase synchronization functions
import { 
  fetchQuestionsFromDb, 
  uploadQuestionsToDb, 
  fetchUserProgressFromDb, 
  syncUserProgressStateToDb, 
  syncSingleHistoryEntryToDb, 
  syncBulkHistoryToDb,
  saveExamResultToDb,
  ExamHistoryRecord
} from './lib/sync';

function DynamicIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  switch (name) {
    case 'Zap':
      return <Zap className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Trophy':
      return <Trophy className={className} />;
    case 'Database':
      return <Database className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}

export default function App() {
  // Active Certification ID
  const [activeCertId, setActiveCertId] = useState<string>('gh-300');

  // VIP Access Control States
  const [unlockedCertIds, setUnlockedCertIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('unlocked_certs');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Default VIP key configurations with expiry dates
  const getDefaultVipKeyConfigs = (): Record<string, VipKeyConfig[]> => ({
    'cca-f': [
      { key: 'CCA-VIP-2026', expiryDate: '2026-09-30', disabled: false },
      { key: 'ANTHROPIC-VIP', expiryDate: '2026-09-30', disabled: false },
      { key: 'VIP-PRO-2026', expiryDate: '2026-09-30', disabled: false },
    ],
    'dp-800': [
      { key: 'DP800-VIP-2026', expiryDate: '2026-09-30', disabled: false },
      { key: 'AZURE-VIP', expiryDate: '2026-09-30', disabled: false },
      { key: 'VIP-PRO-2026', expiryDate: '2026-09-30', disabled: false },
    ],
  });

  const [vipKeyConfigs, setVipKeyConfigs] = useState<Record<string, VipKeyConfig[]>>(() => {
    try {
      const stored = localStorage.getItem('vip_key_configs_v3');
      if (stored) return JSON.parse(stored);
    } catch {}
    return getDefaultVipKeyConfigs();
  });

  const [vipModalCert, setVipModalCert] = useState<Certificate | null>(null);
  const [vipInputKey, setVipInputKey] = useState<string>('');
  const [vipKeyError, setVipKeyError] = useState<string>('');
  const [showVipKeyToggle, setShowVipKeyToggle] = useState<boolean>(false);

  // List of all certifications
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: 'gh-300',
      name: 'GitHub Copilot Certified',
      code: 'GH-300',
      description: 'Luyện thi chứng chỉ GitHub Copilot chính thức. Bộ 60 câu hỏi đặc khảo được biên dịch nghĩa tiếng Việt sắc sảo & lý giải cặn kẽ.',
      difficulty: 'Trung cấp',
      estimatedHours: '10-15 Giờ',
      colorClass: 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white',
      iconName: 'Zap'
    },
    {
      id: 'az-900',
      name: 'Azure Fundamentals',
      code: 'AZ-900',
      description: 'Chinh phục chứng chỉ căn bản về đám mây Microsoft Azure. Đầy đủ các khái niệm cốt lõi, dịch vụ cột trụ và quản trị đám mây.',
      difficulty: 'Cơ bản',
      estimatedHours: '8-12 Giờ',
      colorClass: 'bg-gradient-to-br from-blue-600 via-sky-700 to-indigo-900 text-white',
      iconName: 'Layers'
    },
    {
      id: 'ai-900',
      name: 'Azure AI Fundamentals',
      code: 'AI-900',
      description: 'Bộ câu hỏi cốt lõi về Đạo đức trí tuệ nhân tạo (Responsible AI), Học máy (Machine Learning) và Dịch vụ trí tuệ nhân tạo Azure.',
      difficulty: 'Cơ bản',
      estimatedHours: '6-10 Giờ',
      colorClass: 'bg-gradient-to-br from-teal-600 via-cyan-700 to-emerald-900 text-white',
      iconName: 'Award'
    },
    {
      id: 'cca-f',
      name: 'Claude Certified Architect — Foundations',
      code: 'CCA-F',
      description: 'Chinh phục chứng chỉ Kiến trúc sư Claude được ủy quyền bởi Anthropic. Bao quát thiết kế prompt, kiến trúc tác nhân, MCP, và rào chắn an toàn.',
      difficulty: 'Trung cấp',
      estimatedHours: '12-18 Giờ',
      colorClass: 'bg-gradient-to-br from-amber-600 via-orange-700 to-amber-950 text-white',
      iconName: 'Trophy',
      isVIP: true,
      accessKeys: ['CCA-VIP-2026', 'ANTHROPIC-VIP', 'VIP-PRO-2026']
    },
    {
      id: 'dp-800',
      name: 'Developing AI-Enabled Database Solutions',
      code: 'DP-800',
      description: 'Chinh phục chứng chỉ Microsoft DP-800: Thiết kế và triển khai giải pháp cơ sở dữ liệu tích hợp AI. Bao quát SQL Server 2025, Vector Search, DiskANN, JSON, RLS và tích hợp Azure OpenAI.',
      difficulty: 'Nâng cao',
      estimatedHours: '15-20 Giờ',
      colorClass: 'bg-gradient-to-br from-indigo-700 via-blue-800 to-slate-900 text-white',
      iconName: 'Database',
      isVIP: true,
      accessKeys: ['DP800-VIP-2026', 'AZURE-VIP', 'VIP-PRO-2026']
    }
  ]);

  // Questions Bank for the active certification
  const [questions, setQuestions] = useState<Question[]>([]);
  
  // Progress & History for the active certification
  const [progress, setProgress] = useState<ProgressState>({
    answeredCount: 0,
    correctCount: 0,
    incorrectCount: 0,
    streak: 0,
    bookmarkedQuestionIds: [],
    history: []
  });

  // Supabase Auth and Sync States
  const [username, setUsername] = useState<string>(() => localStorage.getItem('study_username') || '');
  const [dbSyncStatus, setDbSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authInputUsername, setAuthInputUsername] = useState('');

  // Toast, Logout & Deletion confirmation states
  const [appToast, setAppToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [certToDelete, setCertToDelete] = useState<Certificate | null>(null);

  const showAppToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setAppToast({ message, type });
  };

  useEffect(() => {
    if (appToast) {
      const timer = setTimeout(() => setAppToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [appToast]);

  // Current states - default to the new Home view
  const [mode, setMode] = useState<StudyMode>('home');
  const [asteriskClicks, setAsteriskClicks] = useState(0);

  // Auto reset click counter after 4 seconds of inactivity
  useEffect(() => {
    if (asteriskClicks > 0) {
      const timer = setTimeout(() => {
        setAsteriskClicks(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [asteriskClicks]);

  const handleAsteriskClick = () => {
    setAsteriskClicks(prev => {
      const next = prev + 1;
      if (next === 1) {
        showAppToast('Bấm thêm 2 lần nữa vào biểu tượng hoa thị để mở Chế độ Admin 🛠️', 'info');
      } else if (next === 2) {
        showAppToast('Bấm thêm 1 lần nữa để kích hoạt...', 'info');
      } else if (next >= 3) {
        setMode(mode === 'admin' ? 'home' : 'admin');
        showAppToast(
          mode === 'admin' 
            ? 'Đã tắt và rời khỏi Chế độ Admin' 
            : 'Chào mừng! Bạn đã chuyển sang Chế độ Admin thành công 🎉', 
          'success'
        );
        return 0; // reset
      }
      return next;
    });
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectCategory, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUploader, setShowUploader] = useState(false);

  // States for making a new certification
  const [showAddCertForm, setShowAddCertForm] = useState(false);
  const [newCertCode, setNewCertCode] = useState('');
  const [newCertName, setNewCertName] = useState('');
  const [newCertDesc, setNewCertNameDesc] = useState('');
  const [newCertDiff, setNewCertDiff] = useState<'Cơ bản' | 'Trung cấp' | 'Nâng cao'>('Cơ bản');
  const [newCertHours, setNewCertHours] = useState('8-12 Giờ');
  const [newCertColor, setNewCertColor] = useState('bg-gradient-to-br from-purple-600 via-fuchsia-700 to-indigo-900 text-white');
  const [newCertIcon, setNewCertIcon] = useState('Trophy');
  const [newCertQuestionsText, setNewCertQuestionsText] = useState('');

  // Quick Look-up states
  const [isLookupOpen, setIsLookupOpen] = useState(false);
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupCertId, setLookupCertId] = useState<string>('all');

  // Pagination states
  const [sidebarPage, setSidebarPage] = useState(1);
  const sidebarPageSize = 25;
  const [guidePage, setGuidePage] = useState(1);
  const guidePageSize = 10;

  // Reset pagination when searches or categories update
  useEffect(() => {
    setSidebarPage(1);
  }, [searchQuery, selectCategory, showBookmarksOnly]);

  // Advanced sync state and loader for Supabase + LocalStorage fallback
  const loadCertData = async (certId: string, currentUsername: string = username) => {
    setDbSyncStatus('syncing');
    
    // 1. Load basic local questions
    let defaultQs: Question[] = [];
    if (certId === 'gh-300') {
      defaultQs = initialQuestions;
    } else if (certId === 'az-900') {
      defaultQs = az900Questions;
    } else if (certId === 'ai-900') {
      defaultQs = ai900Questions;
    } else if (certId === 'cca-f') {
      defaultQs = ccaQuestions;
    } else if (certId === 'dp-800') {
      defaultQs = dp800Questions;
    } else {
      const storedQs = localStorage.getItem(`questions_${certId}`);
      if (storedQs) {
        try { defaultQs = JSON.parse(storedQs); } catch {}
      }
    }

    let activeQuestions = defaultQs;

    // Try fetching from database first
    try {
      const dbQs = await fetchQuestionsFromDb(certId);
      if (dbQs && dbQs.length >= defaultQs.length) {
        // Fallback imageUrl if it's missing in the DB questions but exists in defaultQs
        activeQuestions = dbQs.map(dbQ => {
          const localQ = defaultQs.find(q => q.id === dbQ.id || q.questionNumber === dbQ.questionNumber);
          return {
            ...dbQ,
            imageUrl: dbQ.imageUrl || localQ?.imageUrl
          };
        });
      } else if (defaultQs.length > 0) {
        // If Database has fewer/no questions than our default list, use local list and populate/update DB in background
        activeQuestions = defaultQs;
        await uploadQuestionsToDb(certId, defaultQs);
      }
    } catch (err) {
      console.error('Questions sync error:', err);
    }

    setQuestions(activeQuestions);

    // 2. Load progress & history
    let activeProgress: ProgressState = {
      answeredCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      streak: 0,
      bookmarkedQuestionIds: [],
      history: []
    };

    if (currentUsername) {
      // Connect and query from Supabase
      try {
        const dbProgress = await fetchUserProgressFromDb(currentUsername, certId);
        if (dbProgress) {
          activeProgress = dbProgress;
          // Store locally as fallback cache
          localStorage.setItem(`progress_${certId}`, JSON.stringify(dbProgress));
          setDbSyncStatus('success');
        } else {
          // New account with no database record. See if they have offline progress to migrate
          const storedLocalProgress = localStorage.getItem(`progress_${certId}`);
          if (storedLocalProgress) {
            try {
              const parsed = JSON.parse(storedLocalProgress);
              activeProgress = parsed;
              // Sync offline data directly to cloud
              await syncUserProgressStateToDb(currentUsername, certId, parsed);
              await syncBulkHistoryToDb(currentUsername, certId, parsed.history || []);
              setDbSyncStatus('success');
            } catch {
              setDbSyncStatus('idle');
            }
          } else {
            setDbSyncStatus('idle');
          }
        }
      } catch (err) {
        console.error('Progress sync error:', err);
        setDbSyncStatus('error');
      }
    } else {
      // Purely offline local fallback
      const storedProgress = localStorage.getItem(`progress_${certId}`);
      if (storedProgress) {
        try {
          activeProgress = JSON.parse(storedProgress);
        } catch {}
      }
      setDbSyncStatus('idle');
    }

    setProgress(activeProgress);
    setCurrentQuestionIndex(0);
    setCategoryFilter('All');
    setSearchQuery('');
    setShowBookmarksOnly(false);
  };

  // Sync state values on initial load
  useEffect(() => {
    // 1. Gather custom certificates from storage
    const storedCustomCerts = localStorage.getItem('study_certs_custom');
    if (storedCustomCerts) {
      try {
        const parsed = JSON.parse(storedCustomCerts);
        setCertificates(prev => {
          const defaultIds = ['gh-300', 'az-900', 'ai-900', 'cca-f', 'dp-800'];
          const filteredPrev = prev.filter(c => defaultIds.includes(c.id));
          return [...filteredPrev, ...parsed];
        });
      } catch {
        // ignore
      }
    }

    // 2. Select initial active cert and load its content
    let lastActiveCert = localStorage.getItem('study_active_cert') || 'gh-300';
    if (['cca-f', 'dp-800'].includes(lastActiveCert)) {
      const storedUnlocked = localStorage.getItem('unlocked_certs');
      let unlockedArr: string[] = [];
      if (storedUnlocked) { try { unlockedArr = JSON.parse(storedUnlocked); } catch {} }
      if (!unlockedArr.includes(lastActiveCert)) {
        lastActiveCert = 'gh-300';
      }
    }
    setActiveCertId(lastActiveCert);
    loadCertData(lastActiveCert, username);
  }, []);

  // Helper to check if a certificate is locked for the current session
  const checkIsCertLocked = (cert: Certificate): boolean => {
    const isVip = cert.isVIP || cert.id === 'cca-f' || cert.id === 'dp-800';
    if (!isVip) return false;
    return !unlockedCertIds.includes(cert.id);
  };

  // Request cert access gatekeeper
  const handleRequestCertAccess = (certId: string, targetMode: StudyMode = 'practice') => {
    const cert = certificates.find(c => c.id === certId);
    if (!cert) return;

    if (checkIsCertLocked(cert)) {
      setVipModalCert(cert);
      setVipInputKey('');
      setVipKeyError('');
      return;
    }

    // Direct access allowed
    handleSelectCert(certId, targetMode);
  };

  const formatDateVN = (dateStr?: string) => {
    if (!dateStr) return '30/09/2026';
    const parts = dateStr.split('-');
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateStr;
  };

  const doUnlockCert = (certId: string, certCode: string) => {
    const updatedUnlocked = Array.from(new Set([...unlockedCertIds, certId]));
    setUnlockedCertIds(updatedUnlocked);
    localStorage.setItem('unlocked_certs', JSON.stringify(updatedUnlocked));

    showAppToast(`🎉 Mở khóa thành công! Bạn đã kích hoạt bộ đề VIP ${certCode}.`, 'success');
    setVipModalCert(null);
    setVipInputKey('');
    setVipKeyError('');

    handleSelectCert(certId);
  };

  // Process key unlock attempt
  const handleUnlockVipCert = () => {
    if (!vipModalCert) return;
    const rawInput = vipInputKey.trim();
    if (!rawInput) {
      setVipKeyError('Vui lòng nhập mã Key truy cập VIP!');
      return;
    }

    const cleanInput = rawInput.toUpperCase();
    const certId = vipModalCert.id;

    // Default or stored key configs
    const certConfigs = vipKeyConfigs[certId] || getDefaultVipKeyConfigs()[certId] || [
      { key: 'VIP-PRO-2026', expiryDate: '2026-09-30', disabled: false }
    ];

    // Find key config
    const matchedConfig = certConfigs.find(c => c.key.trim().toUpperCase() === cleanInput);

    if (!matchedConfig) {
      // Check master fallback keys
      if (cleanInput === 'VIP-PRO-2026' || cleanInput === 'MASTER-VIP') {
        const todayStr = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
        if (todayStr > '2026-09-30') {
          setVipKeyError('Mã Master Key đã hết hạn ngày 30/09/2026! Vui lòng liên hệ Admin.');
          return;
        }
        doUnlockCert(vipModalCert.id, vipModalCert.code);
        return;
      }

      setVipKeyError('Mã Key không chính xác! Vui lòng kiểm tra lại hoặc liên hệ Admin.');
      return;
    }

    // Key matched! Check if disabled
    if (matchedConfig.disabled) {
      setVipKeyError('Mã Key này đã bị tạm vô hiệu hóa bởi Admin!');
      return;
    }

    // Check expiry
    const todayStr = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
    if (matchedConfig.expiryDate && matchedConfig.expiryDate < todayStr) {
      const expVN = formatDateVN(matchedConfig.expiryDate);
      setVipKeyError(`Mã Key này đã hết hạn ngày ${expVN}! Vui lòng nhận Key mới từ Admin.`);
      return;
    }

    // Success!
    doUnlockCert(vipModalCert.id, vipModalCert.code);
  };

  // Admin VIP key actions
  const handleAddVipKey = (certId: string, newKey: string, expiryDate: string) => {
    const trimmed = newKey.trim().toUpperCase();
    if (!trimmed) return;
    setVipKeyConfigs(prev => {
      const existing = prev[certId] || getDefaultVipKeyConfigs()[certId] || [];
      const idx = existing.findIndex(k => k.key.toUpperCase() === trimmed);
      let updatedList: VipKeyConfig[];
      if (idx >= 0) {
        updatedList = [...existing];
        updatedList[idx] = { ...updatedList[idx], expiryDate, disabled: false };
      } else {
        updatedList = [...existing, { key: trimmed, expiryDate: expiryDate || '2026-09-30', disabled: false }];
      }
      const updated = { ...prev, [certId]: updatedList };
      localStorage.setItem('vip_key_configs_v3', JSON.stringify(updated));
      return updated;
    });
    showAppToast(`Đã lưu mã Key VIP "${trimmed}" (Hạn dùng: ${formatDateVN(expiryDate)}) cho ${certId}!`, 'success');
  };

  const handleDeleteVipKey = (certId: string, keyToDelete: string) => {
    setVipKeyConfigs(prev => {
      const existing = prev[certId] || getDefaultVipKeyConfigs()[certId] || [];
      const updatedList = existing.filter(k => k.key.toUpperCase() !== keyToDelete.toUpperCase());
      const updated = { ...prev, [certId]: updatedList };
      localStorage.setItem('vip_key_configs_v3', JSON.stringify(updated));
      return updated;
    });
    showAppToast(`Đã xóa mã Key "${keyToDelete}"!`, 'info');
  };

  const handleToggleKeyDisabled = (certId: string, keyToToggle: string) => {
    setVipKeyConfigs(prev => {
      const existing = prev[certId] || getDefaultVipKeyConfigs()[certId] || [];
      let newState = false;
      const updatedList = existing.map(k => {
        if (k.key.toUpperCase() === keyToToggle.toUpperCase()) {
          newState = !k.disabled;
          return { ...k, disabled: newState };
        }
        return k;
      });
      const updated = { ...prev, [certId]: updatedList };
      localStorage.setItem('vip_key_configs_v3', JSON.stringify(updated));
      showAppToast(`Đã ${newState ? 'tắt (vô hiệu hóa 🚫)' : 'kích hoạt lại ✅'} mã Key "${keyToToggle}"!`, 'info');
      return updated;
    });
  };

  const handleUpdateKeyExpiry = (certId: string, keyToUpdate: string, newExpiryDate: string) => {
    setVipKeyConfigs(prev => {
      const existing = prev[certId] || getDefaultVipKeyConfigs()[certId] || [];
      const updatedList = existing.map(k => {
        if (k.key.toUpperCase() === keyToUpdate.toUpperCase()) {
          return { ...k, expiryDate: newExpiryDate };
        }
        return k;
      });
      const updated = { ...prev, [certId]: updatedList };
      localStorage.setItem('vip_key_configs_v3', JSON.stringify(updated));
      return updated;
    });
    showAppToast(`Đã cập nhật hạn sử dụng (${formatDateVN(newExpiryDate)}) cho Key "${keyToUpdate}"!`, 'success');
  };

  const handleToggleCertVip = (certId: string) => {
    setCertificates(prev => prev.map(c => {
      if (c.id === certId) {
        const nextVip = !c.isVIP;
        showAppToast(`Đã ${nextVip ? 'bật chế độ Yêu Cầu Key VIP 🔐' : 'tắt chế độ VIP (Mở tự do) 🔓'} cho ${c.code}!`, 'info');
        return { ...c, isVIP: nextVip };
      }
      return c;
    }));
  };

  const handleToggleUnlockCert = (certId: string) => {
    setUnlockedCertIds(prev => {
      let updated: string[];
      if (prev.includes(certId)) {
        updated = prev.filter(id => id !== certId);
        showAppToast(`Đã khóa lại chứng chỉ ${certId} trên thiết bị này!`, 'info');
      } else {
        updated = [...prev, certId];
        showAppToast(`Đã mở khóa chứng chỉ ${certId} trên thiết bị này!`, 'success');
      }
      localStorage.setItem('unlocked_certs', JSON.stringify(updated));
      return updated;
    });
  };

  // Sync state back to storage helper
  const saveProgress = async (newProgress: ProgressState, currentUsername: string = username) => {
    setProgress(newProgress);
    localStorage.setItem(`progress_${activeCertId}`, JSON.stringify(newProgress));

    if (currentUsername) {
      try {
        await syncUserProgressStateToDb(currentUsername, activeCertId, newProgress);
      } catch (err) {
        console.error('Async database syncer failed:', err);
      }
    }
  };

  const handleLogin = async (inputName: string) => {
    const trimmed = inputName.trim();
    if (!trimmed) {
      showAppToast('Vui lòng nhập họ tên hoặc biệt danh hợp lệ!', 'error');
      return;
    }
    setUsername(trimmed);
    localStorage.setItem('study_username', trimmed);
    setShowAuthModal(false);
    
    // Hot reload Workspace using new username identification profile
    await loadCertData(activeCertId, trimmed);
    showAppToast(`Đã liên kết tài khoản "${trimmed}" và đồng bộ Cloud hoàn tất!`, 'success');
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setUsername('');
    localStorage.removeItem('study_username');
    loadCertData(activeCertId, '');
    setShowLogoutConfirm(false);
    showAppToast('Đã đăng xuất tài khoản và chuyển về chế độ Offline!', 'info');
  };

  // Gather questions for search
  const getAllSearchableQuestions = (): { certCode: string, certName: string, question: Question }[] => {
    const list: { certCode: string, certName: string, question: Question }[] = [];
    
    // Loop through all certificates
    certificates.forEach(cert => {
      // Security Check: Skip locked VIP certificate questions from search
      const isLocked = (cert.isVIP || cert.id === 'cca-f' || cert.id === 'dp-800') && !unlockedCertIds.includes(cert.id);
      if (isLocked) return;

      let certQs: Question[] = [];
      
      // If it's the current active certificate, we already have it in the `questions` state
      if (cert.id === activeCertId) {
        certQs = questions;
      } else {
        // Otherwise, fetch from default questions list or localStorage
        if (cert.id === 'gh-300') {
          certQs = initialQuestions;
        } else if (cert.id === 'az-900') {
          certQs = az900Questions;
        } else if (cert.id === 'ai-900') {
          certQs = ai900Questions;
        } else if (cert.id === 'cca-f') {
          certQs = ccaQuestions;
        } else if (cert.id === 'dp-800') {
          certQs = dp800Questions;
        } else {
          const storedQs = localStorage.getItem(`questions_${cert.id}`);
          if (storedQs) {
            try { certQs = JSON.parse(storedQs); } catch {}
          }
        }
      }
      
      certQs.forEach(q => {
        list.push({
          certCode: cert.code,
          certName: cert.name,
          question: q
        });
      });
    });
    
    return list;
  };

  const highlightText = (text: string, query: string) => {
    if (!query || !query.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-amber-100 text-slate-900 font-extrabold rounded px-0.5">{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const filteredLookupQuestions = getAllSearchableQuestions().filter(({ certCode, question }) => {
    // Filter by cert first
    if (lookupCertId !== 'all' && lookupCertId !== 'all_certs') {
      const cert = certificates.find(c => c.id === lookupCertId);
      if (cert && cert.code !== certCode) return false;
    }

    if (!lookupQuery.trim()) return false; // Don't show anything if search is empty

    const q = question;
    const lowerQuery = lookupQuery.toLowerCase();
    
    const textMatch = q.text.toLowerCase().includes(lowerQuery);
    const explanationMatch = q.explanation ? q.explanation.toLowerCase().includes(lowerQuery) : false;
    const tagsMatch = q.tags ? q.tags.some(t => t.toLowerCase().includes(lowerQuery)) : false;
    const optionsMatch = q.options.some(opt => opt.text.toLowerCase().includes(lowerQuery));
    const numberMatch = q.questionNumber.toString() === lookupQuery || `câu ${q.questionNumber}`.includes(lowerQuery);

    return textMatch || explanationMatch || tagsMatch || optionsMatch || numberMatch;
  });

  const confirmDeleteCert = () => {
    if (!certToDelete) return;
    const cert = certToDelete;
    if (['gh-300', 'az-900', 'ai-900', 'cca-f', 'dp-800'].includes(cert.id)) {
      showAppToast(`Không thể xóa chứng chỉ hệ thống ${cert.code}!`, 'error');
      setCertToDelete(null);
      return;
    }
    const storedCustomCerts = localStorage.getItem('study_certs_custom');
    if (storedCustomCerts) {
      try {
        const parsed = JSON.parse(storedCustomCerts);
        const remaining = parsed.filter((c: any) => c.id !== cert.id);
        localStorage.setItem('study_certs_custom', JSON.stringify(remaining));
        
        // Clean corresponding storage
        localStorage.removeItem(`questions_${cert.id}`);
        localStorage.removeItem(`progress_${cert.id}`);
        
        setCertificates(prev => prev.filter(c => c.id !== cert.id));
        if (activeCertId === cert.id) {
          setActiveCertId('gh-300');
          loadCertData('gh-300');
        }
        showAppToast(`Đã xóa thành công chứng chỉ tự tạo ${cert.code}!`, 'success');
      } catch (err) {
        console.error(err);
      }
    }
    setCertToDelete(null);
  };

  // Switch certification and load its workspace
  const handleSelectCert = (certId: string, targetMode: StudyMode = 'practice') => {
    setActiveCertId(certId);
    localStorage.setItem('study_active_cert', certId);
    loadCertData(certId, username);
    setMode(targetMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Import custom questions handler for ACTIVE certification
  const handleImportQuestions = async (newQuestions: Question[], resetProgress: boolean) => {
    setQuestions(newQuestions);
    localStorage.setItem(`questions_${activeCertId}`, JSON.stringify(newQuestions));
    setCurrentQuestionIndex(0);
    setShowUploader(false);

    // Sync imported question bank to cloud custom_questions table
    try {
      await uploadQuestionsToDb(activeCertId, newQuestions);
    } catch (err) {
      console.error('Failed to upload custom questions to DB:', err);
    }

    if (resetProgress) {
      const emptyProgress: ProgressState = {
        answeredCount: 0,
        correctCount: 0,
        incorrectCount: 0,
        streak: 0,
        bookmarkedQuestionIds: [],
        history: []
      };
      await saveProgress(emptyProgress);
    }
  };

  // Reset progress and restore defaults for ACTIVE certification
  const handleResetToDefault = () => {
    localStorage.removeItem(`questions_${activeCertId}`);
    localStorage.removeItem(`progress_${activeCertId}`);
    
    let defaultQs: Question[] = [];
    if (activeCertId === 'gh-300') {
      defaultQs = initialQuestions;
    } else if (activeCertId === 'az-900') {
      defaultQs = az900Questions;
    } else if (activeCertId === 'ai-900') {
      defaultQs = ai900Questions;
    }

    setQuestions(defaultQs);
    const emptyProgress = {
      answeredCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      streak: 0,
      bookmarkedQuestionIds: [],
      history: []
    };
    setProgress(emptyProgress);
    saveProgress(emptyProgress);
    
    setCurrentQuestionIndex(0);
    setCategoryFilter('All');
    setSearchQuery('');
    setShowBookmarksOnly(false);
    
    const activeCert = certificates.find(c => c.id === activeCertId);
    showAppToast(`Đã khôi phục ngân hàng câu hỏi gốc của chứng chỉ ${activeCert?.code || activeCertId}!`, 'success');
  };

  // Clear progress for active certificate
  const handleClearProgress = () => {
    const freshProgress: ProgressState = {
      answeredCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      streak: 0,
      bookmarkedQuestionIds: progress.bookmarkedQuestionIds, // keep bookmarks
      history: []
    };
    saveProgress(freshProgress);
    setCurrentQuestionIndex(0);
  };

  // Bookmark Toggle
  const handleToggleBookmark = async (qId: string) => {
    const isBookmarked = progress.bookmarkedQuestionIds.includes(qId);
    let updated: string[];
    if (isBookmarked) {
      updated = progress.bookmarkedQuestionIds.filter(id => id !== qId);
    } else {
      updated = [...progress.bookmarkedQuestionIds, qId];
    }
    const newProgress = {
      ...progress,
      bookmarkedQuestionIds: updated
    };
    await saveProgress(newProgress);
  };

  // Answer Logging
  const handleAnswerSubmitted = async (qId: string, selectedOptions: string[], isCorrect: boolean) => {
    // Prevent duplicate entries for same question to avoid skewing average correctness stats
    const otherHistory = progress.history.filter(h => h.questionId !== qId);
    
    const newStreak = isCorrect ? progress.streak + 1 : 0;
    const newHistory = [
      ...otherHistory,
      {
        questionId: qId,
        selectedOptions,
        isCorrect,
        timestamp: Date.now()
      }
    ];

    const correctCount = newHistory.filter(h => h.isCorrect).length;
    const incorrectCount = newHistory.length - correctCount;

    const newProgress: ProgressState = {
      ...progress,
      answeredCount: newHistory.length,
      correctCount,
      incorrectCount,
      streak: newStreak,
      history: newHistory
    };

    await saveProgress(newProgress);

    if (username) {
      try {
        await syncSingleHistoryEntryToDb(username, activeCertId, qId, selectedOptions, isCorrect);
      } catch (err) {
        console.error('Logging syncing error:', err);
      }
    }
  };

  // Filtered List projection
  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectCategory === 'All' || q.category === selectCategory;
    
    const indexStr = `q${q.questionNumber} ${q.text} ${q.explanation} ${q.options.map(o => o.text).join(' ')}`.toLowerCase();
    const matchesSearch = !searchQuery || indexStr.includes(searchQuery.toLowerCase());
    
    const matchesBookmark = !showBookmarksOnly || progress.bookmarkedQuestionIds.includes(q.id);

    return matchesCategory && matchesSearch && matchesBookmark;
  });

  // Sidebar Pagination calculation
  const totalSidebarPages = Math.ceil(filteredQuestions.length / sidebarPageSize) || 1;
  const activeSidebarPage = Math.min(sidebarPage, totalSidebarPages);
  const startSidebarIndex = (activeSidebarPage - 1) * sidebarPageSize;
  const paginatedSidebarQuestions = filteredQuestions.slice(startSidebarIndex, startSidebarIndex + sidebarPageSize);

  const categories = ['All', ...Array.from(new Set(questions.map(q => q.category)))];

  const handleGoToQuestionNum = (idx: number) => {
    setCurrentQuestionIndex(idx);
    setMobileMenuOpen(false);
  };

  // Exam mock submission log
  const handleFinishExamMock = async (correct: number, total: number, elapsedSeconds?: number) => {
    const accuracy = Math.round((correct / total) * 100);
    const seconds = elapsedSeconds || 0;
    
    const record: Omit<ExamHistoryRecord, 'id'> = {
      username: username || 'Offline User',
      cert_id: activeCertId,
      cert_code: certificates.find(c => c.id === activeCertId)?.code || activeCertId,
      score: correct,
      total_questions: total,
      accuracy,
      elapsed_seconds: seconds,
      timestamp: Date.now()
    };
    
    // Save locally
    try {
      const existingLocalRaw = localStorage.getItem('local_exam_results');
      const existingLocal = existingLocalRaw ? JSON.parse(existingLocalRaw) : [];
      const newRecordWithId = {
        ...record,
        id: Math.random().toString(36).substring(2, 9)
      };
      existingLocal.unshift(newRecordWithId);
      localStorage.setItem('local_exam_results', JSON.stringify(existingLocal));
    } catch (e) {
      console.error('Error saving exam result locally:', e);
    }
    
    // Save to database if logged in
    if (username) {
      try {
        await saveExamResultToDb(record);
      } catch (err) {
        console.error('Failed to sync exam result to database:', err);
      }
    }
    
    showAppToast(`Chúc mừng! Bạn đã hoàn thành bài thi thử với kết quả: ${correct}/${total} câu đúng (Đạt ${accuracy}%)!`, 'success');
  };

  // Current question references
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const historyEntry = currentQuestion
    ? progress.history.find(h => h.questionId === currentQuestion.id)
    : undefined;

  // Guide Mode Pagination calculation
  const totalGuidePages = Math.ceil(questions.length / guidePageSize) || 1;
  const activeGuidePage = Math.min(guidePage, totalGuidePages);
  const startGuideIndex = (activeGuidePage - 1) * guidePageSize;
  const paginatedGuideQuestions = questions.slice(startGuideIndex, startGuideIndex + guidePageSize);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col antialiased">
      {/* Top Header bar with clean Swiss look */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 backdrop-blur-md px-4 py-3 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {mode !== 'home' && mode !== 'admin' && (
              <button 
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="lg:hidden text-slate-500 hover:text-slate-800 p-2 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setMode('home')}>
              <div className="bg-indigo-600 text-white p-2 rounded-xl">
                {mode === 'home' ? (
                  <Home className="w-5 h-5" />
                ) : mode === 'admin' ? (
                  <Asterisk className="w-5 h-5 animate-spin text-rose-300" />
                ) : (
                  <DynamicIcon name={certificates.find(c => c.id === activeCertId)?.iconName || 'Zap'} className="w-5 h-5" />
                )}
              </div>
              <div className="min-w-0">
                <h1 className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 leading-tight whitespace-nowrap truncate">
                  {mode === 'home' ? 'Cert Hub Dashboard' : mode === 'admin' ? 'Admin Hub Panel' : `${certificates.find(c => c.id === activeCertId)?.code} Prep Hub`}
                </h1>
                <p className="text-[10px] text-slate-400 font-medium hidden sm:block truncate">
                  {mode === 'home' 
                    ? 'Trung Tâm Ôn Luyện Đa Chứng Chỉ' 
                    : mode === 'admin'
                      ? 'Thiết lập & Cấu hình đề thi'
                      : certificates.find(c => c.id === activeCertId)?.name}
                </p>
              </div>
            </div>

            {/* Hidden admin click tracker asterisk */}
            <button
              onClick={handleAsteriskClick}
              className={`p-1 px-1.5 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50/50 transition-colors cursor-pointer ${
                mode === 'admin' ? 'text-rose-600 bg-rose-50' : ''
              }`}
              title="Cơ chế bảo mật mở Chế độ Admin (Click 3 lần)"
            >
              <Asterisk className={`w-4 h-4 ${mode === 'admin' ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Center Tabs: Home, Practice, Timer Exam, Code Guide */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => { setMode('home'); }}
              className={`text-xs px-4 py-2 font-bold tracking-wide rounded-lg transition-all flex items-center gap-1.5 ${
                mode === 'home' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Trang chủ
            </button>
            <button
              onClick={() => { setMode('group'); }}
              className={`text-xs px-4 py-2 font-bold tracking-wide rounded-lg transition-all flex items-center gap-1.5 ${
                mode === 'group' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Học nhóm
            </button>
            {mode === 'admin' && (
              <button
                className="text-xs px-4 py-2 font-black text-rose-700 bg-white shadow-sm rounded-lg flex items-center gap-1.5"
              >
                <Asterisk className="w-3.5 h-3.5 text-rose-600 animate-spin" />
                Chế độ Admin 🛠️
              </button>
            )}
            {mode !== 'home' && mode !== 'admin' && (
              <>
                <button
                  onClick={() => { setMode('practice'); setCurrentQuestionIndex(0); }}
                  className={`text-xs px-4 py-2 font-bold tracking-wide rounded-lg transition-all ${
                    mode === 'practice' 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Chế độ luyện tập
                </button>
                <button
                  onClick={() => { setMode('exam'); }}
                  className={`text-xs px-4 py-2 font-bold tracking-wide rounded-lg transition-all ${
                    mode === 'exam' 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Thi thử ngẫu nhiên
                </button>
                <button
                  onClick={() => { setMode('guide'); }}
                  className={`text-xs px-4 py-2 font-bold tracking-wide rounded-lg transition-all ${
                    mode === 'guide' 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Cẩm nang cứu cánh
                </button>
              </>
            )}
          </div>

          {/* Quick Stats overview panel */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Look-up Button */}
            <button
              onClick={() => {
                setLookupQuery('');
                if (mode !== 'home' && mode !== 'admin' && activeCertId) {
                  setLookupCertId(activeCertId);
                } else {
                  setLookupCertId('all');
                }
                setIsLookupOpen(true);
              }}
              className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200/80 font-bold px-3 py-2 rounded-xl transition-all items-center gap-1.5 cursor-pointer shadow-xs shrink-0 hidden sm:flex"
              title="Tra cứu nhanh câu hỏi và đáp án"
            >
              <Search className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>Tra cứu đáp án</span>
            </button>

            {/* Cloud User Profile & Sync Indicator */}
            <div className="flex items-center gap-1.5 shrink-0">
              {username ? (
                <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 pl-2 sm:pl-3 pr-1.5 sm:pr-2.5 py-1 sm:py-1.5 rounded-xl border border-slate-200/80 shadow-sm max-w-[130px] sm:max-w-[200px] shrink-0">
                  <div className="flex flex-col items-start leading-none min-w-0 flex-1">
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider hidden sm:block">Tài khoản</span>
                    <span className="text-[11px] sm:text-xs font-black text-slate-800 tracking-tight truncate max-w-[55px] sm:max-w-[110px]" title={username}>
                      {username}
                    </span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center justify-center pl-0.5 shrink-0">
                    {dbSyncStatus === 'syncing' && (
                      <Loader2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-indigo-500 animate-spin" title="Đang đồng bộ..." />
                    )}
                    {dbSyncStatus === 'success' && (
                      <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500 font-extrabold" title="Đã đồng bộ Cloud" />
                    )}
                    {dbSyncStatus === 'error' && (
                      <AlertCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-rose-500 animate-pulse" title="Lỗi đồng bộ Cloud" />
                    )}
                    {dbSyncStatus === 'idle' && (
                      <Database className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400" title="Đang lưu offline" />
                    )}
                  </div>
                  
                  <div className="w-px h-4 sm:h-5 bg-slate-200 mx-0.5 shrink-0" />
                  
                  <button
                    onClick={handleLogout}
                    title="Đăng xuất"
                    className="p-1 text-slate-400 hover:text-rose-500 rounded-md hover:bg-white transition-all cursor-pointer shrink-0"
                  >
                    <LogOut className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { setAuthInputUsername(''); setShowAuthModal(true); }}
                  className="bg-indigo-600 hover:bg-slate-900 text-white font-bold text-xs px-2.5 sm:px-3.5 py-2 rounded-xl border border-indigo-700 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                  title="Kết nối tài khoản nhóm"
                >
                  <User className="w-3.5 h-3.5 animate-pulse" />
                  <span className="hidden sm:inline">Lưu lịch sử Team</span>
                </button>
              )}
            </div>

            {mode !== 'home' && (
              <>
                <button
                  onClick={() => setShowUploader(prev => !prev)}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3.5 py-2 rounded-xl transition-all items-center gap-1.5 cursor-pointer hidden sm:flex"
                >
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>Nạp câu hỏi tự chọn</span>
                </button>

                <button
                  onClick={handleResetToDefault}
                  title="Khôi phục câu hỏi ban đầu"
                  className="p-2 bg-slate-50 hover:bg-slate-150 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-700 transition-colors cursor-pointer hidden sm:flex"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </>
            )}
            
            {mode === 'home' && (
              <button
                onClick={() => setShowAddCertForm(true)}
                className="text-xs bg-slate-950 hover:bg-indigo-600 text-white font-bold px-3.5 py-2 rounded-xl transition-all items-center gap-1.5 shadow-sm cursor-pointer hidden sm:flex"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Thêm chứng chỉ mới</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile control navigation block */}
      <div className="md:hidden sticky top-[57px] z-30 bg-slate-100 border-b border-slate-200 flex items-center justify-around gap-1 p-1">
        <button
          onClick={() => { setMode('home'); }}
          className={`flex-1 text-[11px] font-bold text-center py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
            mode === 'home' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
          }`}
        >
          <Home className="w-3 h-3" />
          Trang chủ
        </button>
        <button
          onClick={() => { setMode('group'); }}
          className={`flex-1 text-[11px] font-bold text-center py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
            mode === 'group' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
          }`}
        >
          <Users className="w-3 h-3" />
          Học nhóm
        </button>
        {mode !== 'home' && (
          <>
            <button
              onClick={() => { setMode('practice'); setCurrentQuestionIndex(0); }}
              className={`flex-1 text-[11px] font-bold text-center py-2.5 rounded-lg transition-all ${
                mode === 'practice' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Luyện Tập
            </button>
            <button
              onClick={() => { setMode('exam'); }}
              className={`flex-1 text-[11px] font-bold text-center py-2.5 rounded-lg transition-all ${
                mode === 'exam' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Thi thử
            </button>
            <button
              onClick={() => { setMode('guide'); }}
              className={`flex-1 text-[11px] font-bold text-center py-2.5 rounded-lg transition-all ${
                mode === 'guide' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Cẩm nang
            </button>
          </>
        )}
        <button
          onClick={() => {
            setLookupQuery('');
            if (mode !== 'home' && mode !== 'admin' && activeCertId) {
              setLookupCertId(activeCertId);
            } else {
              setLookupCertId('all');
            }
            setIsLookupOpen(true);
          }}
          className="flex-1 text-[11px] font-bold text-center py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 text-slate-500 active:text-amber-700 active:bg-amber-50/50"
        >
          <Search className="w-3.5 h-3.5 text-amber-500" />
          Tra cứu
        </button>
      </div>

      {/* Main Workspace content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-6">
        
        {/* Customized uploader expanded */}
        {showUploader && (
          <CustomQuestionsImport 
            onImport={handleImportQuestions} 
            currentCount={questions.length} 
            existingQuestions={questions}
          />
        )}

        {/* Certification Hub Home View */}
        {mode === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            {!username && (
              <div id="welcome-team-sync-banner" className="bg-gradient-to-r from-indigo-50/70 to-blue-50/50 border border-indigo-100 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
                <div className="space-y-1.5 text-center md:text-left">
                  <span className="text-[9px] font-black text-indigo-700 uppercase tracking-widest bg-white border border-indigo-150 px-3 py-1 rounded-full shadow-xs">Tính năng Team Sync 👥</span>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">Học nhóm & Đồng bộ đám mây (Cloud Database)</h3>
                  <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                    Nhập biệt danh của bạn để tự động liên kết và lưu lịch sử làm bài, các câu khó đã đánh dấu lên hệ thống database chung của Team. Không cần đăng ký tài khoản rườm rà!
                  </p>
                </div>
                <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
                  <input
                    type="text"
                    placeholder="Nhập tên của bạn (vd: HuyenTran)..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleLogin((e.target as HTMLInputElement).value);
                      }
                    }}
                    id="dashboard-username-input"
                    className="px-4 py-3 bg-white text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-bold text-slate-850 min-w-[180px]"
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById('dashboard-username-input') as HTMLInputElement;
                      if (input) handleLogin(input.value);
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs px-5 py-3 rounded-xl border border-indigo-700 shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    Đồng bộ ngay
                  </button>
                </div>
              </div>
            )}

            {/* Header Hub Hero */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded-full">CERT PREP PORTAL</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">Trung Tâm Ôn Luyện Đa Chứng Chỉ</h2>
                <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                  Chào mừng bạn đến với môi trường học tập cá nhân hóa. Chọn một chứng chỉ bên dưới để bắt đầu ôn luyện dưới nhiều chế độ (Luyện tập, Thi thử ngẫu nhiên, xem Cẩm nang gốc), hoặc tự khởi tạo và nhập ngân hàng câu hỏi riêng biệt của bạn!
                </p>
              </div>
              <div className="flex gap-4 items-center shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="text-center px-4">
                  <span className="block text-[22px] font-black text-slate-900">
                    {certificates.length}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Chứng chỉ</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="text-center px-4">
                  <span className="block text-[22px] font-black text-emerald-600">
                    {certificates.reduce((acc, cert) => {
                      const completed = localStorage.getItem(`progress_${cert.id}`);
                      if (completed) {
                        try {
                          const parsed = JSON.parse(completed);
                          return acc + (parsed.history?.length || 0);
                        } catch { return acc; }
                      }
                      return acc;
                    }, 0)}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Đã trả lời</span>
                </div>
              </div>
            </div>

            {/* Certification Grid list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map(cert => {
                // Get progress for this card locally
                let certProgress = { answeredCount: 0, correctCount: 0, total: 10 };
                // Map hardcoded count
                if (cert.id === 'gh-300') certProgress.total = initialQuestions.length;
                else if (cert.id === 'az-900') certProgress.total = az900Questions.length;
                else if (cert.id === 'ai-900') certProgress.total = ai900Questions.length;
                else if (cert.id === 'cca-f') certProgress.total = ccaQuestions.length;
                else if (cert.id === 'dp-800') certProgress.total = dp800Questions.length;
                
                // Overwrite with actual local count if exists
                const storedQs = localStorage.getItem(`questions_${cert.id}`);
                if (storedQs) {
                  try {
                    certProgress.total = JSON.parse(storedQs).length;
                  } catch {}
                }

                const storedProg = localStorage.getItem(`progress_${cert.id}`);
                if (storedProg) {
                  try {
                    const parsed = JSON.parse(storedProg);
                    certProgress.answeredCount = parsed.history?.length || 0;
                    certProgress.correctCount = parsed.history?.filter((h: any) => h.isCorrect).length || 0;
                  } catch {}
                }

                const completionPercentage = certProgress.total > 0 
                  ? Math.round((certProgress.answeredCount / certProgress.total) * 100)
                  : 0;

                const isLocked = (cert.isVIP || cert.id === 'cca-f' || cert.id === 'dp-800') && !unlockedCertIds.includes(cert.id);

                return (
                  <div key={cert.id} className="bg-white border border-slate-150/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                    <div className={`${cert.colorClass} p-5 flex items-start justify-between gap-4 relative overflow-hidden`}>
                      <div className="absolute right-0 top-0 opacity-15 transform translate-x-4 -translate-y-4">
                        <DynamicIcon name={cert.iconName} className="w-28 h-28" />
                      </div>
                      
                      <div className="space-y-1 relative z-10">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">
                            {cert.code}
                          </span>
                          {(cert.isVIP || cert.id === 'cca-f' || cert.id === 'dp-800') && (
                            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs ${
                              isLocked 
                                ? 'bg-amber-400 text-slate-950 animate-pulse' 
                                : 'bg-emerald-400 text-slate-950'
                            }`}>
                              {isLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                              {isLocked ? 'VIP - Cần Key' : 'VIP - Đã Kích Hoạt'}
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-extrabold tracking-tight leading-tight pt-1">
                          {cert.name}
                        </h3>
                      </div>
                      
                      <div className="bg-white/25 text-white p-2 rounded-xl backdrop-blur-sm shrink-0">
                        <DynamicIcon name={cert.iconName} className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {cert.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-bold text-slate-400">
                            <span>TIẾN ĐỘ ÔN LUYỆN</span>
                            <span>{certProgress.answeredCount}/{certProgress.total} câu ({completionPercentage}%)</span>
                          </div>
                          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-slate-900 h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min(completionPercentage, 100)}%` }}
                            />
                          </div>
                        </div>

                        {/* Extra Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-50 text-slate-500 border border-slate-100 rounded-md">
                            Độ khó: {cert.difficulty}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-50 text-slate-500 border border-slate-100 rounded-md">
                            Ước lượng: {cert.estimatedHours}
                          </span>
                          {certProgress.answeredCount > 0 && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-md">
                              Đúng: {Math.round((certProgress.correctCount / certProgress.answeredCount) * 100)}%
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                        {isLocked ? (
                          <button
                            onClick={() => handleRequestCertAccess(cert.id)}
                            className="flex-1 text-center py-2.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black rounded-xl text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Key className="w-3.5 h-3.5" />
                            Mở Khóa Bằng Key VIP
                          </button>
                        ) : (
                          <button
                            onClick={() => handleRequestCertAccess(cert.id)}
                            className="flex-1 text-center py-2.5 bg-slate-950 hover:bg-indigo-600 text-white font-bold rounded-xl text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Học ngay
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Add New Custom Certification Card placeholder */}
              {!showAddCertForm && (
                <button
                  onClick={() => setShowAddCertForm(true)}
                  className="bg-slate-50 hover:bg-slate-100/80 border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-center group transition-colors min-h-[350px]"
                >
                  <div className="p-4 bg-white border border-slate-200 rounded-full text-slate-400 group-hover:scale-110 group-hover:text-slate-800 transition-all shadow-sm">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-slate-800">Thêm chứng chỉ mới...</h4>
                    <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                      Nạp ngân hàng câu hỏi trắc nghiệm của riêng bạn từ file JSON để học bất kỳ chứng chỉ hay môn học nào khác.
                    </p>
                  </div>
                </button>
              )}
            </div>

            {/* Highly Polished Custom Code and JSON Upload Portal */}
            {showAddCertForm && (
              <div className="bg-white border border-slate-150 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Thiết Lập Khởi Tạo Chứng Chỉ Tự Chọn</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">Xây dựng thẻ học tập tùy chỉnh hoàn chỉnh ngay lập tức.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowAddCertForm(false)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 bg-slate-50 rounded-xl"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column Fields */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mã chứng chỉ</label>
                        <input
                          type="text"
                          placeholder="ví dụ: PL-900"
                          value={newCertCode}
                          onChange={(e) => setNewCertCode(e.target.value)}
                          className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-slate-450 focus:border-slate-450"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tên chứng chỉ</label>
                        <input
                          type="text"
                          placeholder="ví dụ: Power Platform"
                          value={newCertName}
                          onChange={(e) => setNewCertName(e.target.value)}
                          className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-slate-450 focus:border-slate-450"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mô tả ngắn gọn</label>
                      <textarea
                        placeholder="Mô tả tóm tắt nội dung học tập, số lượng chuyên đề hoặc mục đích ôn luyện..."
                        rows={2}
                        value={newCertDesc}
                        onChange={(e) => setNewCertNameDesc(e.target.value)}
                        className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-slate-450 focus:border-slate-450"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Cấp độ</label>
                        <select
                          value={newCertDiff}
                          onChange={(e) => setNewCertDiff(e.target.value as any)}
                          className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-705 font-bold"
                        >
                          <option value="Cơ bản">Cơ bản</option>
                          <option value="Trung cấp">Trung cấp</option>
                          <option value="Nâng cao">Nâng cao</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Thời gian học</label>
                        <input
                          type="text"
                          value={newCertHours}
                          onChange={(e) => setNewCertHours(e.target.value)}
                          className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-slate-450"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Biểu tượng</label>
                        <select
                          value={newCertIcon}
                          onChange={(e) => setNewCertIcon(e.target.value)}
                          className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-705 font-bold"
                        >
                          <option value="BookOpen">Hiển thị Sách</option>
                          <option value="Trophy">Cống hiến Cúp</option>
                          <option value="Zap">Tia chớp Sét</option>
                          <option value="Layers">Tầng dịch vụ</option>
                          <option value="Award">Giải danh phẩm</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Tông màu giao diện thẻ</label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {[
                          { text: 'Chàm Không Gian', value: 'bg-gradient-to-br from-indigo-600 via-sky-700 to-indigo-950 text-white' },
                          { text: 'Hoàng Hôn Cam', value: 'bg-gradient-to-br from-amber-600 via-orange-700 to-rose-900 text-white' },
                          { text: 'Ngọc Lục Bảo', value: 'bg-gradient-to-br from-teal-600 via-emerald-700 to-neutral-900 text-white' },
                          { text: 'Aura Ánh Kim', value: 'bg-gradient-to-br from-purple-650 via-pink-700 to-indigo-950 text-white' }
                        ].map((cPreset) => (
                          <label key={cPreset.value} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer text-[11.5px] font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                            <input 
                              type="radio" 
                              name="colorPreset" 
                              checked={newCertColor === cPreset.value} 
                              onChange={() => setNewCertColor(cPreset.value)}
                              className="text-indigo-600 focus:ring-indigo-500" 
                            />
                            {cPreset.text}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Question Loading Paste input */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Khai báo bộ trắc nghiệm JSON (Question[])</label>
                        <button
                          type="button"
                          onClick={() => {
                            const demoJSON = [
                              {
                                id: "demo_q1",
                                questionNumber: 1,
                                text: "Lợi ích lớn nhất của việc ôn tập theo nhịp bám sát đề thi thực tế là gì?",
                                options: [
                                  { key: "A", text: "Ghi nhớ cấu trúc đề, hiểu được lý giải và rèn luyện phản xạ nhanh chóng" },
                                  { key: "B", text: "Tránh nạp các định dạng sai lệch không có giải nghĩa cụ thể" },
                                  { key: "C", text: "Cả hai đáp án trên đều chính xác" }
                                ],
                                correctAnswers: ["C"],
                                category: "Khái niệm chung",
                                explanation: "Tài liệu đào tạo ghi nhận việc có giải nghĩa tiếng Việt chi tiết sau mỗi câu hỏi giúp cải thiện hiệu suất nhớ lâu hơn đến 85%.",
                                tags: ["Thực tế", "Review"]
                              }
                            ];
                            setNewCertQuestionsText(JSON.stringify(demoJSON, null, 2));
                          }}
                          className="text-[10px] text-indigo-600 hover:text-indigo-800 font-bold"
                        >
                          Nhấp nạp đề mẫu thử
                        </button>
                      </div>
                      <textarea
                        placeholder='Dán đoạn mã Array JSON của bạn vào đây (hoặc nhấp Nhập mẫu thử ở trên)...'
                        rows={8}
                        value={newCertQuestionsText}
                        onChange={(e) => setNewCertQuestionsText(e.target.value)}
                        className="w-full text-xs font-mono p-3 bg-slate-900 text-emerald-400 border border-slate-800 rounded-2xl focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setShowAddCertForm(false)}
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                      >
                        Hủy bỏ
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => {
                          if (!newCertCode || !newCertName) {
                            showAppToast('Vui lòng điền đầy đủ Mã (Code) và Tên chứng chỉ!', 'error');
                            return;
                          }
                          
                          let parsedQs: Question[] = [];
                          try {
                            parsedQs = JSON.parse(newCertQuestionsText);
                            if (!Array.isArray(parsedQs)) {
                              showAppToast('Cú pháp câu hỏi phải là một mảng [] JSON!', 'error');
                              return;
                            }
                          } catch (err: any) {
                            showAppToast(`Lỗi phân tích cú pháp JSON: ${err.message}`, 'error');
                            return;
                          }

                          // Build the certificate object
                          const certUid = `custom_${newCertCode.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now()}`;
                          const builtCert: Certificate = {
                            id: certUid,
                            name: newCertName,
                            code: newCertCode.toUpperCase(),
                            description: newCertDesc || `Chứng chỉ ôn luyện về môn học ${newCertCode.toUpperCase()}. Chứa bộ đề học tập chuyên dụng.`,
                            difficulty: newCertDiff,
                            estimatedHours: newCertHours,
                            colorClass: newCertColor,
                            iconName: newCertIcon
                          };

                          // Persist certificate list in local storage
                          const storedCustomStr = localStorage.getItem('study_certs_custom');
                          let listToSave = [];
                          if (storedCustomStr) {
                            try { listToSave = JSON.parse(storedCustomStr); } catch {}
                          }
                          listToSave.push(builtCert);
                          localStorage.setItem('study_certs_custom', JSON.stringify(listToSave));

                          // Persist questions
                          localStorage.setItem(`questions_${certUid}`, JSON.stringify(parsedQs));

                          // Append local state
                          setCertificates(prev => [...prev, builtCert]);
                          
                          // Form Reset
                          setNewCertCode('');
                          setNewCertName('');
                          setNewCertNameDesc('');
                          setNewCertQuestionsText('');
                          setShowAddCertForm(false);
                          
                          showAppToast(`Chứng chỉ ${builtCert.code} đã được nạp thành công với ${parsedQs.length} câu hỏi!`, 'success');
                        }}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                      >
                        Khởi tạo chứng chỉ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        )}

        {/* Global Progress Statistics on Practice mode */}
        {mode === 'practice' && (
          <StatsPanel 
            questions={questions} 
            progress={progress} 
            onReset={handleClearProgress} 
          />
        )}

        {/* Mode Practice rendering */}
        {mode === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Filter sidebar rail (Left) */}
            <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 p-6 space-y-6 transform ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 lg:z-0 lg:p-0 lg:bg-transparent lg:border-r-0 lg:w-auto`}>
              
              <div className="flex lg:hidden items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-bold text-slate-700">Bộ lọc câu hỏi</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-655"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search keywords card panel */}
              <div className="bg-white lg:border border-slate-150 rounded-2xl p-4 shadow-sm space-y-3">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Từ khóa</span>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm câu hỏi..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentQuestionIndex(0); }}
                    className="w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-3" />
                </div>
              </div>

              {/* Categories list card panel */}
              <div className="bg-white lg:border border-slate-150 rounded-2xl p-4 shadow-sm space-y-2">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Chủ đề bài thi</span>
                <div className="space-y-1">
                  {categories.map(cat => {
                    const count = cat === 'All' 
                      ? questions.length 
                      : questions.filter(q => q.category === cat).length;
                    
                    const isSelected = selectCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => { setCategoryFilter(cat); setCurrentQuestionIndex(0); setMobileMenuOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                          isSelected 
                            ? 'bg-slate-900 text-white' 
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate">{cat === 'All' ? 'Tất cả chủ đề' : cat}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                          isSelected ? 'bg-slate-800 text-indigo-300' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bookmark Toggle */}
              <div className="bg-white lg:border border-slate-150 rounded-2xl p-4 shadow-sm">
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={showBookmarksOnly}
                    onChange={(e) => { setShowBookmarksOnly(e.target.checked); setCurrentQuestionIndex(0); }}
                    className="rounded border-slate-350 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                  />
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    Chỉ xem câu hỏi đã lưu ({progress.bookmarkedQuestionIds.length})
                  </span>
                </label>
              </div>

              {/* Quick direct list grid layout */}
              <div className="bg-white lg:border border-slate-150 rounded-2xl p-4 shadow-sm space-y-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Danh sách câu</span>
                  <span className="text-[10px] text-slate-400">{filteredQuestions.length} câu</span>
                </div>
                {filteredQuestions.length > 0 ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-5 gap-1.5 max-h-48 overflow-y-auto pr-1">
                      {paginatedSidebarQuestions.map((q) => {
                        const globalIdx = filteredQuestions.findIndex(fq => fq.id === q.id);
                        const isSelected = globalIdx === currentQuestionIndex;
                        const hasHistory = progress.history.find(h => h.questionId === q.id);
                        const isCorrect = hasHistory?.isCorrect;

                        let cellColor = 'bg-slate-50 hover:bg-slate-100 text-slate-600';
                        if (hasHistory) {
                          cellColor = isCorrect 
                            ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-200' 
                            : 'bg-rose-50 text-rose-700 font-bold border border-rose-200';
                        }
                        if (isSelected) {
                          cellColor = 'ring-2 ring-indigo-500 ring-offset-1 bg-slate-900 text-white font-bold';
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => handleGoToQuestionNum(globalIdx)}
                            className={`w-full aspect-square text-[10px] rounded-lg flex items-center justify-center transition-all ${cellColor}`}
                            title={`Câu số ${q.questionNumber}`}
                          >
                            {q.questionNumber}
                          </button>
                        );
                      })}
                    </div>

                    {totalSidebarPages > 1 && (
                      <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                        <button
                          type="button"
                          disabled={activeSidebarPage === 1}
                          onClick={() => setSidebarPage(p => Math.max(1, p - 1))}
                          className="px-2 py-1 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 rounded text-xs font-bold text-slate-500 transition-colors"
                        >
                          &larr; Prev
                        </button>
                        <span className="text-[10px] text-slate-500 font-semibold">Trang {activeSidebarPage}/{totalSidebarPages}</span>
                        <button
                          type="button"
                          disabled={activeSidebarPage === totalSidebarPages}
                          onClick={() => setSidebarPage(p => Math.min(totalSidebarPages, p + 1))}
                          className="px-2 py-1 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 rounded text-xs font-bold text-slate-500 transition-colors"
                        >
                          Next &rarr;
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-400 py-2">Không tìm thấy câu hỏi phù hợp.</p>
                )}
              </div>
            </div>

            {/* Active Quiz Card Board (Right) */}
            <div className="lg:col-span-3 space-y-6">
              {filteredQuestions.length > 0 && currentQuestion ? (
                <QuizCard
                  question={currentQuestion}
                  isBookmarked={progress.bookmarkedQuestionIds.includes(currentQuestion.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onAnswerSubmitted={handleAnswerSubmitted}
                  activeHistoryEntry={historyEntry}
                  onNext={() => setCurrentQuestionIndex(prev => (prev < filteredQuestions.length - 1 ? prev + 1 : 0))}
                  onPrev={() => setCurrentQuestionIndex(prev => (prev > 0 ? prev - 1 : filteredQuestions.length - 1))}
                  isFirst={currentQuestionIndex === 0}
                  isLast={currentQuestionIndex === filteredQuestions.length - 1}
                />
              ) : (
                <div className="bg-white border border-slate-100 rounded-3xl p-12 shadow-sm text-center space-y-4">
                  <div className="bg-slate-100 text-slate-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800">Không tìm thấy câu hỏi nào!</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
                      Vui lòng đổi từ khóa tìm kiếm hoặc điều chỉnh loại bộ lọc chủ đề trong bảng điều khiển để hiển thị nhiều câu hỏi ôn luyện hơn.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Timed Mock Exam Mode Rendering */}
        {mode === 'exam' && (
          <MockExam
            questions={questions}
            onFinishExam={handleFinishExamMock}
            onExit={() => { setMode('practice'); setCurrentQuestionIndex(0); }}
          />
        )}

        {/* Browsable Study Guide Syllabus Mode Rendering */}
        {mode === 'guide' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">Cẩm Nang & Tài Liệu Xem Trước {questions.length} Câu Hỏi</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Đọc tất cả các câu hỏi trắc nghiệm kèm theo cấu trúc đáp án chuẩn xác cùng mục giải thích nghĩa chi tiết từ nguồn tài liệu gốc.
              </p>
            </div>

            <div className="space-y-4">
              {paginatedGuideQuestions.map((q, idx) => {
                const bookmarked = progress.bookmarkedQuestionIds.includes(q.id);
                return (
                  <div key={q.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md/50 transition-shadow">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        CÂU HỎI {q.questionNumber} • <span className="text-indigo-600 font-semibold">{q.category}</span>
                      </span>
                      <button
                        onClick={() => handleToggleBookmark(q.id)}
                        className={`p-1.5 rounded-lg border ${
                          bookmarked ? 'bg-rose-50 border-rose-100 text-rose-500' : 'text-slate-350 border-slate-200'
                        }`}
                      >
                        <Star className={`w-3.5 h-3.5 ${bookmarked ? 'fill-rose-500' : ''}`} />
                      </button>
                    </div>

                    <h3 className="text-sm font-bold text-slate-800 leading-relaxed">{q.text}</h3>

                    {/* Answers Grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map(opt => {
                        const isCorrect = q.correctAnswers.includes(opt.key);
                        return (
                          <div 
                            key={opt.key}
                            className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                              isCorrect 
                                ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900 font-medium' 
                                : 'bg-slate-50/20 border-slate-150 text-slate-500'
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-bold text-[10px] ${
                              isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                            }`}>
                              {opt.key}
                            </span>
                            <span className="leading-relaxed">{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Detailed formatted explanation card */}
                    <div className="bg-slate-50 p-4 border border-slate-100 text-xs text-slate-600 leading-relaxed rounded-xl space-y-1.5">
                      <span className="font-bold text-slate-800 uppercase tracking-wide block">GỢI Ý ÔN TẬP & ĐÁP ÁN:</span>
                      <p>{q.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Guide Pagination Controls */}
            {totalGuidePages > 1 && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                <span className="text-xs text-slate-500 font-semibold text-center md:text-left">
                  Hiển thị {startGuideIndex + 1} - {Math.min(startGuideIndex + guidePageSize, questions.length)} trong tổng số {questions.length} câu hỏi
                </span>
                <div className="flex items-center gap-1.5 flex-wrap justify-center">
                  <button
                    disabled={activeGuidePage === 1}
                    onClick={() => { setGuidePage(prev => Math.max(1, prev - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 disabled:opacity-40 rounded-xl transition-all cursor-pointer"
                  >
                    Trước
                  </button>
                  
                  {/* Page numbers with dynamic dots layout */}
                  {Array.from({ length: totalGuidePages }).map((_, i) => {
                    const p = i + 1;
                    const isCurrent = p === activeGuidePage;
                    if (totalGuidePages > 6 && p !== 1 && p !== totalGuidePages && Math.abs(p - activeGuidePage) > 1) {
                      if (p === 2 || p === totalGuidePages - 1) {
                        return <span key={p} className="text-slate-400 text-xs px-0.5">...</span>;
                      }
                      return null;
                    }
                    return (
                      <button
                        key={p}
                        onClick={() => { setGuidePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isCurrent 
                            ? 'bg-slate-950 text-white shadow' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}

                  <button
                    disabled={activeGuidePage === totalGuidePages}
                    onClick={() => { setGuidePage(prev => Math.min(totalGuidePages, prev + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 disabled:opacity-40 rounded-xl transition-all cursor-pointer"
                  >
                    Sau
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Admin Dashboard Workspace Mode Rendering */}
        {mode === 'admin' && (
          <AdminPanel
            certificates={certificates}
            activeCertId={activeCertId}
            unlockedCertIds={unlockedCertIds}
            vipKeyConfigs={vipKeyConfigs}
            onSelectCert={(certId) => {
              setActiveCertId(certId);
              localStorage.setItem('study_active_cert', certId);
              loadCertData(certId, username);
            }}
            onUpdateQuestions={(certId, updatedQs) => {
              if (certId === activeCertId) {
                setQuestions(updatedQs);
                setCurrentQuestionIndex(0);
              }
            }}
            onAddCertificate={(newCert, initialQs) => {
              // Save certificate metadata list
              const storedCustomStr = localStorage.getItem('study_certs_custom');
              let listToSave = [];
              if (storedCustomStr) {
                try { listToSave = JSON.parse(storedCustomStr); } catch {}
              }
              listToSave.push(newCert);
              localStorage.setItem('study_certs_custom', JSON.stringify(listToSave));

              // Save actual questions
              localStorage.setItem(`questions_${newCert.id}`, JSON.stringify(initialQs));

              // Update state
              setCertificates(prev => [...prev, newCert]);
              setActiveCertId(newCert.id);
              localStorage.setItem('study_active_cert', newCert.id);

              // Set active questions state directly
              setQuestions(initialQs);
              setCurrentQuestionIndex(0);

              // Upload to Supabase questions table if we have questions
              if (initialQs.length > 0) {
                uploadQuestionsToDb(newCert.id, initialQs);
              }
            }}
            onDeleteCertificate={(certId) => {
              const targetCert = certificates.find(c => c.id === certId);
              if (targetCert) {
                setCertToDelete(targetCert);
              }
            }}
            onAddVipKey={handleAddVipKey}
            onDeleteVipKey={handleDeleteVipKey}
            onToggleKeyDisabled={handleToggleKeyDisabled}
            onUpdateKeyExpiry={handleUpdateKeyExpiry}
            onToggleCertVip={handleToggleCertVip}
            onToggleUnlockCert={handleToggleUnlockCert}
            showAppToast={showAppToast}
          />
        )}

        {/* Study Group Mode Rendering */}
        {mode === 'group' && (
          <GroupStudy
            username={username}
            onUsernameChange={handleLogin}
            certificates={certificates}
            showToast={showAppToast}
          />
        )}

      </main>

      {/* Styled static banner footer block */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 px-4 mt-12 text-slate-400 text-center text-xs leading-relaxed">
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="font-medium text-slate-300">
            Ứng dụng hỗ trợ ôn luyện đa chứng chỉ trực tuyến
          </p>
        </div>
      </footer>

      {/* Account / Team login connection Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 max-w-md w-full animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-2xl">
                  <Database className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-tight">Kết nối Team DB</h3>
                  <p className="text-[10px] text-slate-400 font-medium">Lưu lịch sử và tiến độ học tập lên đám mây</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAuthModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-550 leading-relaxed">
                Nhập tên tài khoản của bạn (ví dụ: <strong className="text-indigo-600">HuyenTran</strong>, <strong className="text-indigo-600">Admin</strong>, <strong className="text-indigo-600">DevTeam</strong>) để hệ thống đồng bộ lịch sử làm bài, chuỗi sấm sét, và danh sách câu hỏi đã lưu. Bạn có thể sử dụng chung database và chia sẻ tiến trình với đồng đội!
              </p>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Tên tài khoản (Họ tên / Nickname)
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên tài khoản của bạn..."
                  value={authInputUsername}
                  onChange={(e) => setAuthInputUsername(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleLogin(authInputUsername);
                  }}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-semibold text-slate-800"
                  autoFocus
                />
              </div>

              <div className="flex gap-2.5 justify-end pt-2">
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  Bỏ qua
                </button>
                <button
                  onClick={() => handleLogin(authInputUsername)}
                  className="px-5 py-2.5 text-xs font-extrabold text-white bg-indigo-600 hover:bg-slate-950 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Đồng bộ ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Animated Floating Toasts */}
      <AnimatePresence>
        {appToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="fixed bottom-6 right-6 z-[60] max-w-sm"
          >
            <div className={`flex items-center gap-3 px-4.5 py-3.5 rounded-2xl shadow-xl border text-xs font-bold leading-relaxed bg-white/95 backdrop-blur-md ${
              appToast.type === 'success'
                ? 'border-emerald-100 text-emerald-800 shadow-emerald-500/10'
                : appToast.type === 'error'
                  ? 'border-rose-100 text-rose-800 shadow-rose-500/10'
                  : 'border-indigo-100 text-indigo-800 shadow-indigo-500/10'
            }`}>
              {appToast.type === 'success' && (
                <div className="bg-emerald-50 text-emerald-500 p-1.5 rounded-lg shrink-0">
                  <Check className="w-4 h-4" />
                </div>
              )}
              {appToast.type === 'error' && (
                <div className="bg-rose-50 text-rose-500 p-1.5 rounded-lg shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
              )}
              {appToast.type === 'info' && (
                <div className="bg-indigo-50 text-indigo-500 p-1.5 rounded-lg shrink-0">
                  <Database className="w-4 h-4" />
                </div>
              )}
              <span className="flex-1 pr-1">{appToast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Lookup (Tra cứu nhanh) Modal Overlay */}
      {isLookupOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden">
          <div className="bg-white border-t sm:border border-slate-200 rounded-t-[2rem] sm:rounded-3xl rounded-b-none sm:rounded-b-3xl w-full max-w-2xl flex flex-col h-[88dvh] sm:h-auto sm:max-h-[85dvh] shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-black text-slate-950 flex items-center gap-2">
                  <span className="p-1 px-1.5 bg-amber-100 text-amber-800 rounded-lg text-xs leading-none">LOOKUP</span>
                  TRA CỨU ĐÁP ÁN NHANH 🔍
                </h3>
                <p className="text-[10px] text-slate-400 font-semibold mt-1">
                  Nhập từ khóa hoặc số câu để tra cứu đáp án & giải nghĩa chi tiết tức thì.
                </p>
              </div>
              <button 
                onClick={() => setIsLookupOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-50 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sticky Search bar and Cert selector */}
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Nhập câu hỏi, từ khóa, đáp án hoặc số câu..."
                  value={lookupQuery}
                  onChange={(e) => setLookupQuery(e.target.value)}
                  autoFocus
                  className="w-full text-base sm:text-xs pl-9 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-100 focus:border-amber-400 focus:outline-none font-medium shadow-2xs"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                {lookupQuery && (
                  <button
                    onClick={() => setLookupQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Certificate selector */}
              <div className="flex items-center gap-2 min-w-[160px]">
                <select
                  value={lookupCertId}
                  onChange={(e) => setLookupCertId(e.target.value)}
                  className="w-full text-base sm:text-xs font-bold py-2.5 bg-white border border-slate-200 rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-amber-100"
                >
                  <option value="all">Tất cả môn học</option>
                  {certificates.map(c => (
                    <option key={c.id} value={c.id}>{c.code}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Scrollable Results Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {!lookupQuery.trim() ? (
                /* Search onboarding state */
                <div className="text-center py-12 px-4 max-w-sm mx-auto space-y-3.5">
                  <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl mx-auto flex items-center justify-center border border-amber-100">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800">Sẵn sàng tra cứu dữ liệu</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-medium">
                      Nhập từ khóa tìm kiếm để tra cứu đáp án chính xác trong hệ thống ngân hàng câu hỏi.
                    </p>
                  </div>
                </div>
              ) : filteredLookupQuestions.length === 0 ? (
                /* No matches state */
                <div className="text-center py-12 px-4 max-w-sm mx-auto space-y-3.5">
                  <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl mx-auto flex items-center justify-center border border-slate-200">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800">Không tìm thấy kết quả phù hợp</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-medium">
                      Thử dùng các từ khóa cốt lõi, viết tắt, hoặc số thứ tự câu hỏi ngắn gọn hơn.
                    </p>
                  </div>
                </div>
              ) : (
                /* List of results */
                <div className="space-y-4">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">
                    TÌM THẤY <span className="text-amber-600 font-black">{filteredLookupQuestions.length}</span> KẾT QUẢ PHÙ HỢP:
                  </div>

                  <div className="space-y-3.5">
                    {filteredLookupQuestions.map(({ certCode, certName, question: q }, idx) => {
                      return (
                        <div 
                          key={`${certCode}_${q.id}_${idx}`}
                          className="bg-white border border-slate-150 rounded-2xl p-4.5 shadow-sm space-y-3.5 hover:border-amber-250 transition-all text-left"
                        >
                          {/* Card top tags */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-150 text-indigo-700 font-mono text-[10px] font-black rounded-lg uppercase">
                              {certCode}
                            </span>
                            <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] font-black rounded-lg">
                              Câu {q.questionNumber}
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold max-w-[150px] truncate" title={certName}>
                              {certName}
                            </span>
                            {q.category && (
                              <span className="px-2 py-0.5 bg-amber-50 border border-amber-150 text-amber-800 text-[9px] font-black rounded-full ml-auto">
                                {q.category}
                              </span>
                            )}
                          </div>

                          {/* Question text with highlight */}
                          <p className="text-xs font-black text-slate-800 leading-relaxed">
                            {highlightText(q.text, lookupQuery)}
                          </p>

                          {/* Options display with correct answers colored */}
                          <div className="space-y-2">
                            <span className="block text-[9px] uppercase font-black tracking-wider text-slate-400">Các phương án lựa chọn:</span>
                            <div className="grid grid-cols-1 gap-2 text-xs">
                              {q.options.map(opt => {
                                const isCorrect = q.correctAnswers.includes(opt.key);
                                return (
                                  <div 
                                    key={opt.key}
                                    className={`p-3 rounded-xl border flex items-start gap-2.5 transition-all ${
                                      isCorrect 
                                        ? 'bg-emerald-50 border-emerald-250 text-emerald-900 font-bold' 
                                        : 'bg-white border-slate-150 text-slate-500'
                                    }`}
                                  >
                                    <span className={`w-5 h-5 flex items-center justify-center rounded-lg text-[10px] font-black shrink-0 ${
                                      isCorrect ? 'bg-emerald-500 text-white shadow-sm' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                      {opt.key}
                                    </span>
                                    <span className="leading-relaxed">
                                      {highlightText(opt.text, lookupQuery)}
                                    </span>
                                    {isCorrect && (
                                      <Check className="w-3.5 h-3.5 text-emerald-600 ml-auto shrink-0 self-center" />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Vietnamese Explanation box */}
                          {q.explanation && (
                            <div className="bg-amber-50/45 border border-amber-150/60 rounded-xl p-3.5 space-y-1.5">
                              <div className="flex items-center gap-1">
                                <span className="text-[9px] font-black uppercase text-amber-800 tracking-wider">Giải nghĩa chi tiết tiếng Việt:</span>
                              </div>
                              <p className="text-xs leading-relaxed text-slate-650 font-medium">
                                {highlightText(q.explanation, lookupQuery)}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50 rounded-b-none sm:rounded-b-3xl pb-safe">
              <span className="hidden sm:inline text-[10px] text-slate-400 font-semibold">
                💡 Nhập ký tự bất kỳ để lọc nhanh tức thì.
              </span>
              <button
                onClick={() => setIsLookupOpen(false)}
                className="w-full sm:w-auto px-5 py-3 sm:py-2 bg-slate-900 hover:bg-indigo-650 text-white font-black rounded-xl text-xs transition-colors cursor-pointer"
              >
                Đóng Tra Cứu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 max-w-sm w-full animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-rose-50 text-rose-600 p-2.5 rounded-2xl">
                <LogOut className="w-5 h-5 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">Đăng xuất tài khoản?</h3>
                <p className="text-[10px] text-slate-400 font-medium">Chuyển phần làm bài về thiết bị hiện tại</p>
              </div>
            </div>

            <p className="text-xs text-slate-550 leading-relaxed mb-5">
              Bạn có chắc chắn muốn thoát tài khoản hiện tại <strong className="text-slate-800">"{username}"</strong> về chế độ luyện tập ngoại tuyến (Offline)? Tiến trình trên Cloud vẫn được bảo lưu an toàn.
            </p>

            <div className="flex gap-2.5 justify-end">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                onClick={confirmLogout}
                className="px-5 py-2.5 text-xs font-extrabold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Xác nhận thoát
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIP Access Key Modal */}
      {vipModalCert && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-amber-200/80 max-w-md w-full relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

            <button
              onClick={() => { setVipModalCert(null); setVipInputKey(''); setVipKeyError(''); }}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="bg-amber-100 text-amber-700 p-3 rounded-2xl shrink-0 shadow-inner">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/60 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Kích hoạt Chứng chỉ VIP 🔐
                </span>
                <h3 className="text-lg font-black text-slate-900 leading-tight">
                  {vipModalCert.code} — {vipModalCert.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-5 bg-slate-50 p-3.5 rounded-2xl border border-slate-150">
              Nội dung bộ đề thi này đã được chuyển sang chế độ <strong className="text-amber-700">Giới hạn truy cập (VIP)</strong>. Vui lòng nhập <strong className="text-slate-900">Mã Access Key VIP</strong> để mở khóa sử dụng trên thiết bị này.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>MÃ KEY TRUY CẬP VIP</span>
                  <span className="text-[10px] text-slate-400 font-normal">Không phân biệt chữ hoa/thường</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Key className="w-4 h-4" />
                  </div>
                  <input
                    type={showVipKeyToggle ? "text" : "password"}
                    value={vipInputKey}
                    onChange={(e) => { setVipInputKey(e.target.value); setVipKeyError(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleUnlockVipCert(); }}
                    placeholder="Nhập mã key VIP để kích hoạt..."
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowVipKeyToggle(!showVipKeyToggle)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showVipKeyToggle ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {vipKeyError && (
                  <p className="text-[11px] text-rose-600 font-bold mt-2 flex items-center gap-1 animate-shake">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{vipKeyError}</span>
                  </p>
                )}
              </div>

              <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/50 text-[11px] text-amber-800 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Hướng dẫn mở khóa:
                </p>
                <p className="text-slate-600 pl-4">
                  Vui lòng nhập Mã Key VIP hợp lệ do Admin hoặc giảng viên cấp để mở khóa bộ đề này.
                </p>
              </div>

              <div className="flex gap-2.5 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => { setVipModalCert(null); setVipInputKey(''); setVipKeyError(''); }}
                  className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
                >
                  Đóng lại
                </button>
                <button
                  type="button"
                  onClick={handleUnlockVipCert}
                  className="px-5 py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <Unlock className="w-4 h-4" />
                  Kích Hoạt VIP Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Certificate deletion Confirmation Modal */}
      {certToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 max-w-md w-full animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-rose-50 text-rose-600 p-2.5 rounded-2xl">
                <X className="w-5 h-5 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">Xóa chứng chỉ tự tạo?</h3>
                <p className="text-[10px] text-slate-400 font-medium">Hành động này không thể hoàn tác</p>
              </div>
            </div>

            <p className="text-xs text-slate-550 leading-relaxed mb-5">
              Bạn có chắc chắn muốn xóa chứng chỉ tự tạo <strong className="text-rose-600 font-extrabold">"{certToDelete.code}"</strong> cùng toàn bộ dữ liệu lịch sử và tiến độ học tập?
            </p>

            <div className="flex gap-2.5 justify-end">
              <button
                onClick={() => setCertToDelete(null)}
                className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                onClick={confirmDeleteCert}
                className="px-5 py-2.5 text-xs font-extrabold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Xác nhận xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
