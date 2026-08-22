import { lazy, Suspense, useState, useEffect } from 'react';
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
  Sparkles,
  Eye,
  EyeOff,
  ChevronDown,
  Flag,
  Settings2
} from 'lucide-react';

import { Question, ProgressState, StudyMode, Certificate, VipKeyConfig } from './types';
import QuizCard from './components/QuizCard';
import StatsPanel from './components/StatsPanel';
import FloatingPet from './components/FloatingPet';
import StudyGuideQuestion from './components/StudyGuideQuestion';
import LearningCoachPanel from './components/LearningCoachPanel';
import QuestionReportModal from './components/QuestionReportModal';
import { BUILTIN_QUESTION_COUNTS, loadBuiltinQuestions } from './data/questionCatalog';
import { supabase } from './lib/supabase';
import { getQuestionSearchScore, matchesAdvancedQuestionSearch } from './lib/questionSearch';
import { getAuthRedirectUrl } from './utils/url';

const MockExam = lazy(() => import('./components/MockExam'));
const CustomQuestionsImport = lazy(() => import('./components/CustomQuestionsImport'));
const AdminPanel = lazy(() => import('./components/AdminPanel'));
const GroupStudy = lazy(() => import('./components/GroupStudy'));


// Supabase synchronization functions
import { 
  fetchQuestionsFromDb, 
  uploadQuestionsToDb, 
  syncQuestionsToDb,
  fetchUserProgressFromDb, 
  syncUserProgressStateToDb, 
  syncSingleHistoryEntryToDb, 
  syncBulkHistoryToDb,
  saveExamResultToDb,
  ExamHistoryRecord,
  fetchVipKeyConfigsFromDb,
  validateVipKeyInDb,
  saveVipKeyConfigToDb,
  deleteVipKeyConfigFromDb,
  updateVipKeyDisabledInDb,
  updateVipKeyExpiryInDb,
  fetchCertVipStatusesFromDb,
  saveCertVipStatusToDb,
  fetchCertDisabledStatusesFromDb,
  saveCertDisabledStatusToDb,
  deleteCustomCertificateFromDb,
  fetchCustomCertificatesFromDb,
  saveCustomCertificateToDb
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
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}

function LazySectionFallback({ label = 'Đang tải giao diện...' }: { label?: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-3xl border border-slate-100 bg-white text-sm font-bold text-slate-500 shadow-sm">
      <Loader2 className="mr-2 h-5 w-5 animate-spin text-indigo-600" />
      {label}
    </div>
  );
}

const APP_CACHE_VERSION_KEY = 'study_app_build_id';

function prepareVersionedLocalCache() {
  if (typeof window === 'undefined') return;
  const previousBuildId = localStorage.getItem(APP_CACHE_VERSION_KEY);
  if (previousBuildId === __APP_BUILD_ID__) return;

  // Preserve any not-yet-migrated local certificate questions long enough for
  // the existing migration flow to upload them to Supabase.
  const legacyCertificateIds = new Set<string>();
  try {
    const legacy = JSON.parse(localStorage.getItem('study_certs_custom') || '[]') as Certificate[];
    legacy.forEach(cert => cert?.id && legacyCertificateIds.add(cert.id));
  } catch {}

  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith('questions_')) return;
    const certId = key.slice('questions_'.length);
    if (!legacyCertificateIds.has(certId)) localStorage.removeItem(key);
  });

  // These values are shared configuration stored in Supabase. Force a fresh
  // read after deployment while keeping user progress, login and preferences.
  ['vip_key_configs_v3', 'cert_vip_overrides', 'cert_disabled_overrides', 'unlocked_certs'].forEach(key => localStorage.removeItem(key));
  localStorage.setItem(APP_CACHE_VERSION_KEY, __APP_BUILD_ID__);
}

prepareVersionedLocalCache();

export default function App() {
  // Active Certification ID
  const [activeCertId, setActiveCertId] = useState<string>('gh-300');

  // VIP Access Control States
  const [unlockedCertIds, setUnlockedCertIds] = useState<string[]>([]);

  const [vipKeyConfigs, setVipKeyConfigs] = useState<Record<string, VipKeyConfig[]>>({});

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
      isVIP: true
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
      isVIP: false
    },
    {
      id: 'istqb-ai',
      name: 'ISTQB Certified Tester - AI Testing',
      code: 'ISTQB-AI',
      description: 'Chinh phục chứng chỉ ISTQB AI Testing chính thức. Bộ 119 câu hỏi đặc khảo bao quát Đạo đức AI, Học máy, Mạng Nơ-ron, Metamorphic & Adversarial Testing.',
      difficulty: 'Trung cấp',
      estimatedHours: '12-18 Giờ',
      colorClass: 'bg-gradient-to-br from-purple-700 via-indigo-800 to-slate-900 text-white',
      iconName: 'ShieldCheck',
      isVIP: false
    },
    {
      id: 'ab-731',
      name: 'Microsoft Certified: AI Transformation Leader',
      code: 'AB-731',
      description: 'Chinh phục chứng chỉ Microsoft Certified: AI Transformation Leader (AB-731). Bộ 100 câu hỏi trọng tâm bao quát Chiến lược Chuyển đổi AI, Đạo đức & Quản trị AI (Responsible AI), Microsoft 365 Copilot, Copilot Studio, Microsoft Foundry và Quản trị Chi phí & Cấp phép.',
      difficulty: 'Trung cấp',
      estimatedHours: '12-16 Giờ',
      colorClass: 'bg-gradient-to-br from-blue-700 via-indigo-800 to-violet-950 text-white',
      iconName: 'Sparkles',
      isVIP: false
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
  const [username, setUsername] = useState<string>('');
  const [dbSyncStatus, setDbSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authDisplayName, setAuthDisplayName] = useState('');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authBusy, setAuthBusy] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authConfirmationPending, setAuthConfirmationPending] = useState(false);
  const [authConfirmationMessage, setAuthConfirmationMessage] = useState('');
  const [authUserId, setAuthUserId] = useState('');
  const [userRole, setUserRole] = useState<'student' | 'editor' | 'admin'>('student');
  const [anonymousMode, setAnonymousMode] = useState(() => localStorage.getItem('study_anonymous_mode') === 'true');
  const [authIntent, setAuthIntent] = useState<'learning' | 'sync' | 'admin'>('sync');
  const [pendingCertAccess, setPendingCertAccess] = useState<{ certId: string; targetMode: StudyMode } | null>(null);
  const progressStorageKey = (certId: string, identity = authUserId) => `progress_${identity || 'guest'}_${certId}`;
  const readProgressCache = (certId: string, identity = authUserId) => {
    const scopedKey = progressStorageKey(certId, identity);
    const scoped = localStorage.getItem(scopedKey);
    if (scoped) return scoped;
    const guestProgress = identity ? localStorage.getItem(progressStorageKey(certId, '')) : null;
    if (guestProgress) {
      localStorage.setItem(scopedKey, guestProgress);
      return guestProgress;
    }
    const legacy = localStorage.getItem(`progress_${certId}`);
    if (legacy) localStorage.setItem(scopedKey, legacy);
    return legacy;
  };

  // Toast, Logout & Deletion confirmation states
  const [appToast, setAppToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [certToDelete, setCertToDelete] = useState<Certificate | null>(null);
  const [isDeletingCertificate, setIsDeletingCertificate] = useState(false);
  const [reportQuestion, setReportQuestion] = useState<Question | null>(null);

  const showAppToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setAppToast({ message, type });
  };

  useEffect(() => {
    if (appToast) {
      const timer = setTimeout(() => setAppToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [appToast]);

  // GitHub Pages caches index.html for up to 10 minutes. Compare the running
  // bundle with an uncached build marker and move to a versioned URL when a
  // newer deployment is available, forcing the fresh hashed assets to load.
  useEffect(() => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return;

    let checking = false;
    const checkForNewBuild = async () => {
      if (checking) return;
      checking = true;
      try {
        const versionUrl = new URL('version.json', document.baseURI);
        versionUrl.searchParams.set('t', Date.now().toString());
        const response = await fetch(versionUrl, { cache: 'no-store' });
        if (!response.ok) return;
        const remote = await response.json() as { buildId?: string };
        if (!remote.buildId || remote.buildId === __APP_BUILD_ID__) return;

        const currentUrl = new URL(window.location.href);
        if (currentUrl.searchParams.get('__v') !== remote.buildId) {
          currentUrl.searchParams.set('__v', remote.buildId);
          window.location.replace(currentUrl.toString());
        }
      } catch (error) {
        console.warn('Could not check the deployed app version:', error);
      } finally {
        checking = false;
      }
    };

    checkForNewBuild();
    const interval = window.setInterval(checkForNewBuild, 5 * 60 * 1000);
    window.addEventListener('focus', checkForNewBuild);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener('focus', checkForNewBuild);
    };
  }, []);

  // Current states - default to the new Home view unless joinGroup URL param exists
  const [mode, setMode] = useState<StudyMode>(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const hasJoinQuery = searchParams.has('joinGroup');
      const hasJoinHash = window.location.hash && window.location.hash.includes('joinGroup=');
      if (hasJoinQuery || hasJoinHash) return 'group';
    }
    return 'home';
  });

  const isAdmin = userRole === 'admin';
  const canManageContent = userRole === 'editor' || isAdmin;
  const [asteriskClicks, setAsteriskClicks] = useState(0);

  useEffect(() => {
    let active = true;

    const applyUser = async (user: { id: string; email?: string; user_metadata?: Record<string, any> } | null) => {
      if (!active) return;
      if (!user) {
        setAuthUserId('');
        setUserRole('student');
        setUsername('');
        return;
      }

      setAuthUserId(user.id);
      let displayName = user.user_metadata?.display_name || user.email?.split('@')[0] || 'Học viên';
      let role: 'student' | 'editor' | 'admin' = 'student';
      const { data } = await supabase.from('profiles').select('display_name, role').eq('id', user.id).maybeSingle();
      if (data?.display_name) displayName = data.display_name;
      if (data?.role === 'editor' || data?.role === 'admin') role = data.role;
      if (!active) return;
      setUsername(displayName);
      setUserRole(role);
      setAnonymousMode(false);
      localStorage.removeItem('study_anonymous_mode');
      localStorage.setItem('study_username', displayName);
    };

    supabase.auth.getSession().then(({ data }) => applyUser(data.session?.user || null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      applyUser(session?.user || null);
    });
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (mode === 'admin' && !canManageContent) setMode('home');
  }, [mode, canManageContent]);

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
    if (!authUserId) {
      setAuthMode('signin');
      setAuthIntent('admin');
      setPendingCertAccess(null);
      setShowAuthModal(true);
      showAppToast('Hãy đăng nhập tài khoản Editor hoặc Admin để mở khu vực quản trị.', 'info');
      return;
    }
    if (!canManageContent) {
      showAppToast('Tài khoản này chưa được cấp quyền Editor hoặc Admin.', 'error');
      return;
    }
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
  const [certificateSearchQuery, setCertificateSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [showIncorrectOnly, setShowIncorrectOnly] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [isTeamSyncExpanded, setIsTeamSyncExpanded] = useState(false);
  const [studyOverviewExpanded, setStudyOverviewExpanded] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [petEnabled, setPetEnabled] = useState(() => localStorage.getItem('pref_pet_enabled') !== 'false');
  const [reduceMotion, setReduceMotion] = useState(() => localStorage.getItem('pref_reduce_motion') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reduceMotion);
    localStorage.setItem('pref_reduce_motion', String(reduceMotion));
  }, [reduceMotion]);

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
  const [lookupQuestionPool, setLookupQuestionPool] = useState<{
    certId: string;
    certCode: string;
    certName: string;
    question: Question;
  }[]>([]);
  const [lookupLoading, setLookupLoading] = useState(false);

  // Pagination states
  const [sidebarPage, setSidebarPage] = useState(1);
  const sidebarPageSize = 25;
  const [guidePage, setGuidePage] = useState(1);
  const guidePageSize = 10;

  // Reset pagination when searches or categories update
  useEffect(() => {
    setSidebarPage(1);
  }, [searchQuery, selectCategory, showBookmarksOnly, showIncorrectOnly]);

  // Advanced sync state and loader for Supabase + LocalStorage fallback
  const loadCertData = async (certId: string, currentUsername: string = authUserId) => {
    setDbSyncStatus('syncing');
    
    // 1. Load basic local questions
    const defaultQs = await loadBuiltinQuestions(certId);

    let activeQuestions = defaultQs;
    const cachedQuestions = localStorage.getItem(`questions_${certId}`);
    if (cachedQuestions) {
      try {
        const parsed = JSON.parse(cachedQuestions) as Question[];
        if (Array.isArray(parsed) && parsed.length >= defaultQs.length) activeQuestions = parsed;
      } catch {
        localStorage.removeItem(`questions_${certId}`);
      }
    }

    // Try fetching from database first
    try {
      const dbQs = await fetchQuestionsFromDb(certId);
      // Check if dbQs has valid statement_matrix data when defaultQs expects it
      const dbHasStatementsWhenExpected = defaultQs.every(locQ => {
        const matchingDbQ = dbQs?.find(q => q.id === locQ.id || q.questionNumber === locQ.questionNumber);
        if (locQ.questionType && locQ.questionType !== 'multiple_choice' && matchingDbQ?.questionType !== locQ.questionType) {
          return false;
        }
        if (locQ.statements && locQ.statements.length > 0) {
          return !!(
            matchingDbQ?.statements &&
            matchingDbQ.statements.length > 0 &&
            matchingDbQ.questionType === locQ.questionType
          );
        }
        return true;
      });

      if (dbQs && dbQs.length >= defaultQs.length && dbHasStatementsWhenExpected) {
        // Fallback imageUrl if it's missing in the DB questions but exists in defaultQs
        activeQuestions = dbQs.map(dbQ => {
          const localQ = defaultQs.find(q => q.id === dbQ.id || q.questionNumber === dbQ.questionNumber);
          return {
            ...dbQ,
            imageUrl: dbQ.imageUrl || localQ?.imageUrl
          };
        });
      } else if (defaultQs.length > 0) {
        // If Database has fewer questions or older schema/format than our default list, use local list and populate/update DB
        activeQuestions = defaultQs;
        await uploadQuestionsToDb(certId, defaultQs);
      }
    } catch (err) {
      console.error('Questions sync error:', err);
    }

    setQuestions(activeQuestions);
    if (activeQuestions.length > 0) {
      try {
        localStorage.setItem(`questions_${certId}`, JSON.stringify(activeQuestions));
      } catch (error) {
        console.warn(`Could not cache questions for ${certId}:`, error);
      }
    }

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
          localStorage.setItem(progressStorageKey(certId, currentUsername), JSON.stringify(dbProgress));
          setDbSyncStatus('success');
        } else {
          // New account with no database record. See if they have offline progress to migrate
          const storedLocalProgress = readProgressCache(certId, currentUsername);
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
      const storedProgress = readProgressCache(certId, currentUsername);
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
    setShowIncorrectOnly(false);
  };

  // Sync state values on initial load
  useEffect(() => {
    // Load VIP key configs from DB
    async function loadVipKeysFromDb() {
      const dbConfigs = await fetchVipKeyConfigsFromDb();
      setVipKeyConfigs(dbConfigs || {});
    }
    loadVipKeysFromDb();

    // 0. Load VIP & Disabled status overrides from localStorage and DB
    async function loadCertStatuses() {
      let vipOverrides: Record<string, boolean> = {};
      let disabledOverrides: Record<string, boolean> = {};

      try {
        const storedVip = localStorage.getItem('cert_vip_overrides');
        if (storedVip) vipOverrides = JSON.parse(storedVip);

        const storedDisabled = localStorage.getItem('cert_disabled_overrides');
        if (storedDisabled) disabledOverrides = JSON.parse(storedDisabled);
      } catch {}

      const [dbVipStatuses, dbDisabledStatuses] = await Promise.all([
        fetchCertVipStatusesFromDb(),
        fetchCertDisabledStatusesFromDb()
      ]);

      if (dbVipStatuses && Object.keys(dbVipStatuses).length > 0) {
        vipOverrides = { ...vipOverrides, ...dbVipStatuses };
      }
      if (dbDisabledStatuses && Object.keys(dbDisabledStatuses).length > 0) {
        disabledOverrides = { ...disabledOverrides, ...dbDisabledStatuses };
      }

      setCertificates(prev => prev.map(c => {
        let updated = { ...c };
        if (vipOverrides[c.id] !== undefined) {
          updated.isVIP = vipOverrides[c.id];
        }
        if (disabledOverrides[c.id] !== undefined) {
          updated.isDisabled = disabledOverrides[c.id];
        }
        return updated;
      }));
    }
    loadCertStatuses();

    // 1. Load the shared custom-certificate catalog from Supabase.
    // Legacy local certificates are migrated once, then local metadata is removed.
    async function loadSharedCertificateCatalog() {
      const defaultIds = ['gh-300', 'az-900', 'ai-900', 'cca-f', 'dp-800', 'istqb-ai', 'ab-731'];
      const defaultCertificates = certificates.filter(cert => defaultIds.includes(cert.id));
      const defaultCodes = new Set(defaultCertificates.map(cert => cert.code.trim().toUpperCase()));

      const legacyRaw = localStorage.getItem('study_certs_custom');
      if (legacyRaw) {
        try {
          const legacyCertificates = (JSON.parse(legacyRaw) as Certificate[])
            .filter(cert => cert?.id && cert?.code && !defaultIds.includes(cert.id) && !defaultCodes.has(cert.code.trim().toUpperCase()));
          let migrationSucceeded = true;

          for (const legacyCert of legacyCertificates) {
            const metadataSaved = await saveCustomCertificateToDb(legacyCert);
            if (!metadataSaved) {
              migrationSucceeded = false;
              break;
            }

            const cachedQuestions = localStorage.getItem(`questions_${legacyCert.id}`);
            if (cachedQuestions) {
              try {
                const parsedQuestions = JSON.parse(cachedQuestions) as Question[];
                if (parsedQuestions.length > 0 && !(await uploadQuestionsToDb(legacyCert.id, parsedQuestions))) {
                  migrationSucceeded = false;
                  break;
                }
              } catch {
                migrationSucceeded = false;
                break;
              }
            }
          }

          if (migrationSucceeded) {
            localStorage.removeItem('study_certs_custom');
            legacyCertificates.forEach(cert => localStorage.removeItem(`questions_${cert.id}`));
          }
        } catch (error) {
          console.error('Could not migrate legacy local certificate metadata:', error);
        }
      }

      const dbCustomCertificates = await fetchCustomCertificatesFromDb();
      if (dbCustomCertificates === null) {
        showAppToast('Chưa thể tải chứng chỉ dùng chung. Hãy chạy migration custom_certificates trên Supabase.', 'error');
      }

      const seenCodes = new Set(defaultCodes);
      const sharedCustomCertificates = (dbCustomCertificates || []).filter(cert => {
        const normalizedCode = cert.code.trim().toUpperCase();
        if (!normalizedCode || seenCodes.has(normalizedCode) || defaultIds.includes(cert.id)) return false;
        seenCodes.add(normalizedCode);
        return true;
      });

      setCertificates([...sharedCustomCertificates, ...defaultCertificates]);

      let lastActiveCert = localStorage.getItem('study_active_cert') || 'gh-300';
      const availableIds = new Set([...defaultIds, ...sharedCustomCertificates.map(cert => cert.id)]);
      if (!availableIds.has(lastActiveCert)) {
        lastActiveCert = 'gh-300';
        localStorage.setItem('study_active_cert', lastActiveCert);
      }
      setActiveCertId(lastActiveCert);
      loadCertData(lastActiveCert, '');
    }
    loadSharedCertificateCatalog();
  }, []);

  useEffect(() => {
    if (!authUserId) return;
    try {
      const storedUnlocks = localStorage.getItem(`unlocked_certs_${authUserId}`);
      setUnlockedCertIds(storedUnlocks ? JSON.parse(storedUnlocks) : []);
    } catch {
      setUnlockedCertIds([]);
    }
    loadCertData(activeCertId, authUserId);
    fetchVipKeyConfigsFromDb().then(configs => {
      if (configs) setVipKeyConfigs(configs);
    });
  }, [authUserId]);

  // Helper to check if a certificate is locked for the current session
  const checkIsCertLocked = (cert: Certificate): boolean => {
    if (!cert.isVIP) return false;
    return !unlockedCertIds.includes(cert.id);
  };

  // Request cert access gatekeeper
  const handleRequestCertAccess = (certId: string, targetMode: StudyMode = 'practice') => {
    const cert = certificates.find(c => c.id === certId);
    if (!cert) return;

    if (!authUserId) {
      if (anonymousMode && !cert.isVIP) {
        handleSelectCert(certId, targetMode, '');
        return;
      }
      setPendingCertAccess({ certId, targetMode });
      setAuthIntent('learning');
      setAuthMode('signin');
      setAuthError(cert.isVIP ? 'Bộ đề VIP cần tài khoản để kiểm tra quyền truy cập an toàn.' : '');
      setShowAuthModal(true);
      showAppToast(cert.isVIP ? 'Đăng nhập để mở bộ đề VIP.' : 'Chọn đăng nhập hoặc học ẩn danh.', 'info');
      return;
    }

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
    if (authUserId) localStorage.setItem(`unlocked_certs_${authUserId}`, JSON.stringify(updatedUnlocked));

    showAppToast(`🎉 Mở khóa thành công! Bạn đã kích hoạt bộ đề VIP ${certCode}.`, 'success');
    setVipModalCert(null);
    setVipInputKey('');
    setVipKeyError('');

    handleSelectCert(certId);
  };

  // Process key unlock attempt
  const handleUnlockVipCert = async () => {
    if (!vipModalCert) return;
    const rawInput = vipInputKey.trim();
    if (!rawInput) {
      setVipKeyError('Vui lòng nhập mã Key truy cập VIP!');
      return;
    }

    const validation = await validateVipKeyInDb(vipModalCert.id, rawInput);
    if (validation === 'valid') {
      doUnlockCert(vipModalCert.id, vipModalCert.code);
      return;
    }
    if (validation === 'disabled') {
      setVipKeyError('Mã Key này đã bị tạm vô hiệu hóa bởi Admin!');
    } else if (validation === 'expired') {
      setVipKeyError('Mã Key này đã hết hạn. Vui lòng nhận Key mới từ Admin.');
    } else if (validation === 'unauthenticated') {
      setVipKeyError('Phiên đăng nhập đã hết hạn. Hãy đăng nhập lại.');
    } else if (validation === 'unavailable') {
      setVipKeyError('Chưa thể kiểm tra Key an toàn. Admin cần chạy security_content_workflow_migration.sql.');
    } else {
      setVipKeyError('Mã Key không chính xác! Vui lòng kiểm tra lại hoặc liên hệ Admin.');
    }
  };

  // Admin VIP key actions
  const handleAddVipKey = async (certId: string, newKey: string, expiryDate: string) => {
    const trimmed = newKey.trim().toUpperCase();
    if (!trimmed) return;
    const finalExpiry = expiryDate || '2026-09-30';

    const saved = await saveVipKeyConfigToDb(certId, { key: trimmed, expiryDate: finalExpiry, disabled: false });
    if (!saved) {
      showAppToast('Không thể lưu Key. Hãy kiểm tra quyền Admin và migration bảo mật.', 'error');
      return;
    }

    setVipKeyConfigs(prev => {
      const existing = prev[certId] || [];
      const idx = existing.findIndex(k => k.key.toUpperCase() === trimmed);
      let updatedList: VipKeyConfig[];
      if (idx >= 0) {
        updatedList = [...existing];
        updatedList[idx] = { ...updatedList[idx], expiryDate: finalExpiry, disabled: false };
      } else {
        updatedList = [...existing, { key: trimmed, expiryDate: finalExpiry, disabled: false }];
      }
      const updated = { ...prev, [certId]: updatedList };
      return updated;
    });

    showAppToast(`Đã lưu mã Key VIP "${trimmed}" (Hạn dùng: ${formatDateVN(finalExpiry)}) cho ${certId}!`, 'success');
  };

  const handleDeleteVipKey = async (certId: string, keyToDelete: string) => {
    const deleted = await deleteVipKeyConfigFromDb(certId, keyToDelete);
    if (!deleted) {
      showAppToast('Không thể xóa Key trên Database.', 'error');
      return;
    }
    setVipKeyConfigs(prev => {
      const existing = prev[certId] || [];
      const updatedList = existing.filter(k => k.key.toUpperCase() !== keyToDelete.toUpperCase());
      const updated = { ...prev, [certId]: updatedList };
      return updated;
    });

    showAppToast(`Đã xóa mã Key "${keyToDelete}"!`, 'info');
  };

  const handleToggleKeyDisabled = async (certId: string, keyToToggle: string) => {
    const target = (vipKeyConfigs[certId] || []).find(key => key.key.toUpperCase() === keyToToggle.toUpperCase());
    const newState = !target?.disabled;
    const updatedOnDb = await updateVipKeyDisabledInDb(certId, keyToToggle, newState);
    if (!updatedOnDb) {
      showAppToast('Không thể đổi trạng thái Key trên Database.', 'error');
      return;
    }
    setVipKeyConfigs(prev => {
      const existing = prev[certId] || [];
      const updatedList = existing.map(k => {
        if (k.key.toUpperCase() === keyToToggle.toUpperCase()) {
          return { ...k, disabled: newState };
        }
        return k;
      });
      const updated = { ...prev, [certId]: updatedList };
      return updated;
    });

    showAppToast(`Đã ${newState ? 'tắt (vô hiệu hóa 🚫)' : 'kích hoạt lại ✅'} mã Key "${keyToToggle}"!`, 'info');
  };

  const handleUpdateKeyExpiry = async (certId: string, keyToUpdate: string, newExpiryDate: string) => {
    const updatedOnDb = await updateVipKeyExpiryInDb(certId, keyToUpdate, newExpiryDate);
    if (!updatedOnDb) {
      showAppToast('Không thể cập nhật hạn Key trên Database.', 'error');
      return;
    }
    setVipKeyConfigs(prev => {
      const existing = prev[certId] || [];
      const updatedList = existing.map(k => {
        if (k.key.toUpperCase() === keyToUpdate.toUpperCase()) {
          return { ...k, expiryDate: newExpiryDate };
        }
        return k;
      });
      const updated = { ...prev, [certId]: updatedList };
      return updated;
    });

    showAppToast(`Đã cập nhật hạn sử dụng (${formatDateVN(newExpiryDate)}) cho Key "${keyToUpdate}"!`, 'success');
  };

  const handleToggleCertVip = (certId: string) => {
    setCertificates(prev => {
      const updated = prev.map(c => {
        if (c.id === certId) {
          const nextVip = !c.isVIP;
          showAppToast(`Đã ${nextVip ? 'bật chế độ Yêu Cầu Key VIP 🔐' : 'tắt chế độ VIP (Mở tự do) 🔓'} cho ${c.code}!`, 'info');
          saveCertVipStatusToDb(certId, nextVip);
          const nextCertificate = { ...c, isVIP: nextVip };
          if (c.id.startsWith('custom_')) saveCustomCertificateToDb(nextCertificate);
          return nextCertificate;
        }
        return c;
      });
      const overrides: Record<string, boolean> = {};
      updated.forEach(c => {
        overrides[c.id] = !!c.isVIP;
      });
      localStorage.setItem('cert_vip_overrides', JSON.stringify(overrides));
      return updated;
    });
  };

  const handleToggleCertDisabled = (certId: string) => {
    setCertificates(prev => {
      const updated = prev.map(c => {
        if (c.id === certId) {
          const nextDisabled = !c.isDisabled;
          showAppToast(`Đã ${nextDisabled ? 'vô hiệu hóa (ẩn) 🚫' : 'kích hoạt lại (hiển thị) 👁️'} chứng chỉ ${c.code}!`, 'info');
          saveCertDisabledStatusToDb(certId, nextDisabled);
          const nextCertificate = { ...c, isDisabled: nextDisabled };
          if (c.id.startsWith('custom_')) saveCustomCertificateToDb(nextCertificate);
          return nextCertificate;
        }
        return c;
      });
      const overrides: Record<string, boolean> = {};
      updated.forEach(c => {
        overrides[c.id] = !!c.isDisabled;
      });
      localStorage.setItem('cert_disabled_overrides', JSON.stringify(overrides));

      return updated;
    });
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
      if (authUserId) localStorage.setItem(`unlocked_certs_${authUserId}`, JSON.stringify(updated));
      return updated;
    });
  };

  // Sync state back to storage helper
  const saveProgress = async (newProgress: ProgressState, currentUsername: string = authUserId) => {
    setProgress(newProgress);
    localStorage.setItem(progressStorageKey(activeCertId, currentUsername), JSON.stringify(newProgress));

    if (currentUsername) {
      try {
        await syncUserProgressStateToDb(currentUsername, activeCertId, newProgress);
      } catch (err) {
        console.error('Async database syncer failed:', err);
      }
    }
  };

  const handleLogin = async (inputName: string) => {
    if (!authUserId) {
      setAuthDisplayName(inputName.trim());
      setAuthMode('signup');
      setAuthIntent('sync');
      setPendingCertAccess(null);
      setShowAuthModal(true);
      return;
    }

    const trimmed = inputName.trim();
    if (trimmed) {
      setUsername(trimmed);
      localStorage.setItem('study_username', trimmed);
      await Promise.all([
        supabase.from('profiles').update({ display_name: trimmed }).eq('id', authUserId),
        supabase.auth.updateUser({ data: { display_name: trimmed } }),
      ]);
    }
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    setPendingCertAccess(null);
    setAuthError('');
    setAuthConfirmationPending(false);
    setAuthConfirmationMessage('');
  };

  const handleContinueAnonymously = () => {
    const pending = pendingCertAccess;
    const pendingCertificate = pending ? certificates.find(cert => cert.id === pending.certId) : null;
    if (pendingCertificate?.isVIP) {
      setAuthError('Bộ đề VIP cần tài khoản. Chế độ ẩn danh chỉ dùng được với các bộ đề công khai.');
      return;
    }

    setAnonymousMode(true);
    localStorage.setItem('study_anonymous_mode', 'true');
    setUsername('');
    setDbSyncStatus('idle');
    setShowAuthModal(false);
    setPendingCertAccess(null);
    setAuthError('');

    if (pending) {
      handleSelectCert(pending.certId, pending.targetMode, '');
    } else if (mode !== 'home' && mode !== 'admin') {
      loadCertData(activeCertId, '');
    }
    showAppToast('Đã bật chế độ học ẩn danh. Tiến độ chỉ lưu trên thiết bị này.', 'success');
  };

  const handleAuthSubmit = async () => {
    if (!authEmail.trim() || authPassword.length < 6) {
      setAuthError('Nhập email hợp lệ và mật khẩu có ít nhất 6 ký tự.');
      return;
    }
    if (authMode === 'signup' && authDisplayName.trim().length < 2) {
      setAuthError('Vui lòng nhập tên hiển thị có ít nhất 2 ký tự.');
      return;
    }

    setAuthBusy(true);
    setAuthError('');
    setAuthConfirmationPending(false);
    setAuthConfirmationMessage('');
    try {
      let signedInUserId = '';
      if (authMode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email: authEmail.trim(),
          password: authPassword,
          options: {
            data: { display_name: authDisplayName.trim() },
            emailRedirectTo: getAuthRedirectUrl(window.location.href),
          },
        });
        if (error) throw error;
        if (!data.session) {
          showAppToast('Đã tạo tài khoản. Hãy kiểm tra email để xác nhận đăng ký.', 'success');
          setAuthMode('signin');
          setAuthConfirmationPending(true);
          setAuthConfirmationMessage('Tài khoản đã được tạo nhưng chưa kích hoạt. Hãy mở email xác nhận rồi đăng nhập lại. Nếu chưa thấy, kiểm tra cả thư Spam hoặc gửi lại email bên dưới.');
          return;
        }
        signedInUserId = data.session.user.id;
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: authEmail.trim(),
          password: authPassword,
        });
        if (error) throw error;
        signedInUserId = data.user.id;
      }
      const pending = pendingCertAccess;
      setAnonymousMode(false);
      localStorage.removeItem('study_anonymous_mode');
      setShowAuthModal(false);
      setPendingCertAccess(null);
      setAuthPassword('');
      showAppToast('Đăng nhập thành công. Tiến độ đang được đồng bộ.', 'success');

      if (pending) {
        const cert = certificates.find(item => item.id === pending.certId);
        if (cert && checkIsCertLocked(cert)) {
          setVipModalCert(cert);
          setVipInputKey('');
          setVipKeyError('');
        } else {
          handleSelectCert(pending.certId, pending.targetMode, signedInUserId);
        }
      }
    } catch (error: any) {
      const errorMessage = error.message || 'Không thể đăng nhập.';
      if (errorMessage.toLowerCase().includes('email not confirmed')) {
        setAuthConfirmationPending(true);
        setAuthConfirmationMessage('Email này chưa được xác nhận. Hãy mở link trong email đăng ký hoặc bấm gửi lại email xác nhận bên dưới.');
      } else {
        setAuthError(errorMessage);
      }
    } finally {
      setAuthBusy(false);
    }
  };

  const handleResendConfirmation = async () => {
    const email = authEmail.trim();
    if (!email) {
      setAuthError('Nhập email đã đăng ký để gửi lại thư xác nhận.');
      return;
    }

    setAuthBusy(true);
    setAuthError('');
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: getAuthRedirectUrl(window.location.href),
        },
      });
      if (error) throw error;
      setAuthConfirmationPending(true);
      setAuthConfirmationMessage('Đã gửi lại email xác nhận. Hãy kiểm tra hộp thư đến và Spam; link mới sẽ mở đúng trang ứng dụng đang deploy.');
      showAppToast('Đã gửi lại email xác nhận.', 'success');
    } catch (error: any) {
      setAuthError(error.message || 'Không thể gửi lại email xác nhận. Vui lòng thử lại sau.');
    } finally {
      setAuthBusy(false);
    }
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    await supabase.auth.signOut();
    setAuthUserId('');
    setUserRole('student');
    setUsername('');
    setUnlockedCertIds([]);
    setAnonymousMode(true);
    localStorage.setItem('study_anonymous_mode', 'true');
    localStorage.removeItem('study_username');
    loadCertData(activeCertId, '');
    setShowLogoutConfirm(false);
    showAppToast('Đã đăng xuất và chuyển sang học ẩn danh trên thiết bị này.', 'info');
  };

  // Load the heavy question banks only when the global lookup is opened.
  useEffect(() => {
    if (!isLookupOpen) return;
    let cancelled = false;

    const buildLookupPool = async () => {
      setLookupLoading(true);
      const allowedCertificates = certificates.filter(cert =>
        !cert.isDisabled && (!cert.isVIP || unlockedCertIds.includes(cert.id))
      );

      const results = await Promise.all(allowedCertificates.map(async cert => {
        let certQuestions: Question[] = [];
        if (cert.id === activeCertId && questions.length > 0) {
          certQuestions = questions;
        } else {
          const cached = localStorage.getItem(`questions_${cert.id}`);
          if (cached) {
            try {
              const parsed = JSON.parse(cached) as Question[];
              if (Array.isArray(parsed)) certQuestions = parsed;
            } catch {}
          }
          if (certQuestions.length === 0) {
            certQuestions = (await fetchQuestionsFromDb(cert.id)) || await loadBuiltinQuestions(cert.id);
          }
        }
        return certQuestions.map(question => ({ certId: cert.id, certCode: cert.code, certName: cert.name, question }));
      }));

      if (!cancelled) {
        setLookupQuestionPool(results.flat());
        setLookupLoading(false);
      }
    };

    buildLookupPool();
    return () => { cancelled = true; };
  }, [isLookupOpen, certificates, unlockedCertIds, activeCertId, questions]);

  const highlightText = (text: string, query: string) => {
    if (!query || !query.trim()) return <span>{text}</span>;
    const queryParts = query.trim().split(/\s+/).filter(Boolean).map(part => part.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    if (queryParts.length === 0) return <span>{text}</span>;
    const regex = new RegExp(`(${queryParts.join('|')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <mark key={i} className="bg-amber-100 text-slate-900 font-extrabold rounded px-0.5">{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const filteredLookupQuestions = lookupQuestionPool.filter(({ certId, question }) => {
    // Filter by cert first
    if (lookupCertId !== 'all' && lookupCertId !== 'all_certs') {
      if (certId !== lookupCertId) return false;
    }

    if (!lookupQuery.trim()) return false; // Don't show anything if search is empty

    return matchesAdvancedQuestionSearch(question, lookupQuery);
  }).sort((left, right) => (
    getQuestionSearchScore(right.question, lookupQuery) - getQuestionSearchScore(left.question, lookupQuery)
      || left.question.questionNumber - right.question.questionNumber
  ));

  const confirmDeleteCert = async () => {
    if (!certToDelete) return;
    const cert = certToDelete;
    if (['gh-300', 'az-900', 'ai-900', 'cca-f', 'dp-800', 'istqb-ai', 'ab-731'].includes(cert.id)) {
      showAppToast(`Không thể xóa chứng chỉ hệ thống ${cert.code}!`, 'error');
      setCertToDelete(null);
      return;
    }

    setIsDeletingCertificate(true);
    try {
      const deletedFromDb = await deleteCustomCertificateFromDb(cert.id);
      if (!deletedFromDb) {
        showAppToast(`Không thể xóa ${cert.code} khỏi Database. Dữ liệu trên máy vẫn được giữ nguyên.`, 'error');
        return;
      }

      localStorage.removeItem(`questions_${cert.id}`);
      localStorage.removeItem(progressStorageKey(cert.id));
      setCertificates(prev => prev.filter(c => c.id !== cert.id));
      if (activeCertId === cert.id) {
        setActiveCertId('gh-300');
        localStorage.setItem('study_active_cert', 'gh-300');
        loadCertData('gh-300');
      }
      showAppToast(`Đã xóa chứng chỉ ${cert.code} và toàn bộ ngân hàng câu hỏi khỏi Database!`, 'success');
      setCertToDelete(null);
    } catch (err) {
      console.error(err);
      showAppToast(`Có lỗi khi xóa chứng chỉ ${cert.code}.`, 'error');
    } finally {
      setIsDeletingCertificate(false);
    }
  };

  // Switch certification and load its workspace
  const handleSelectCert = (certId: string, targetMode: StudyMode = 'practice', identity = authUserId) => {
    setActiveCertId(certId);
    localStorage.setItem('study_active_cert', certId);
    loadCertData(certId, identity);
    setMode(targetMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAdvancedLookup = (certId?: string) => {
    const isInsideCertificate = mode === 'practice' || mode === 'exam' || mode === 'guide';
    setLookupQuery('');
    setLookupCertId(certId || (isInsideCertificate ? activeCertId : 'all'));
    setIsLookupOpen(true);
  };

  const handleOpenLookupQuestion = (certId: string, questionId: string) => {
    if (certId !== activeCertId) return;

    const questionIndex = questions.findIndex(question => question.id === questionId);
    if (questionIndex < 0) return;

    setCategoryFilter('All');
    setSearchQuery('');
    setShowBookmarksOnly(false);
    setShowIncorrectOnly(false);
    setSidebarPage(Math.floor(questionIndex / sidebarPageSize) + 1);
    setCurrentQuestionIndex(questionIndex);
    setMode('practice');
    setIsLookupOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const handleLookupShortcut = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') return;
      event.preventDefault();
      openAdvancedLookup();
    };

    window.addEventListener('keydown', handleLookupShortcut);
    return () => window.removeEventListener('keydown', handleLookupShortcut);
  }, [mode, activeCertId]);

  // Import custom questions handler for ACTIVE certification
  const handleImportQuestions = async (newQuestions: Question[], resetProgress: boolean): Promise<boolean> => {
    const dbSuccess = await syncQuestionsToDb(activeCertId, newQuestions);
    if (!dbSuccess) {
      throw new Error('Không thể lưu ngân hàng câu hỏi lên Database. Vui lòng kiểm tra kết nối và quyền ghi Supabase.');
    }

    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setShowUploader(false);

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
    return true;
  };

  const createSharedCustomCertificate = async (newCert: Certificate, initialQs: Question[]): Promise<boolean> => {
    const metadataSaved = await saveCustomCertificateToDb(newCert);
    if (!metadataSaved) {
      throw new Error('Không thể tạo chứng chỉ trên Database. Hãy kiểm tra migration custom_certificates và quyền RLS.');
    }

    const questionsSaved = initialQs.length === 0 || await uploadQuestionsToDb(newCert.id, initialQs);
    if (!questionsSaved) {
      await deleteCustomCertificateFromDb(newCert.id);
      throw new Error('Không thể lưu ngân hàng câu hỏi lên Database; chứng chỉ vừa tạo đã được hoàn tác.');
    }

    setCertificates(prev => [newCert, ...prev.filter(cert => cert.id !== newCert.id)]);
    setActiveCertId(newCert.id);
    localStorage.setItem('study_active_cert', newCert.id);
    setQuestions(initialQs);
    setCurrentQuestionIndex(0);
    return true;
  };

  // Reset progress and restore defaults for ACTIVE certification
  const handleResetToDefault = async () => {
    localStorage.removeItem(`questions_${activeCertId}`);
    localStorage.removeItem(progressStorageKey(activeCertId));

    if (activeCertId === 'ab-731') {
      loadCertData(activeCertId, authUserId);
      setCurrentQuestionIndex(0);
      setCategoryFilter('All');
      setSearchQuery('');
      setShowBookmarksOnly(false);
      setShowIncorrectOnly(false);
      showAppToast('Đã tải lại ngân hàng AB-731 từ Database!', 'success');
      return;
    }
    
    const defaultQs = await loadBuiltinQuestions(activeCertId);

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
    setShowIncorrectOnly(false);
    
    const activeCert = certificates.find(c => c.id === activeCertId);
    showAppToast(`Đã khôi phục ngân hàng câu hỏi gốc của chứng chỉ ${activeCert?.code || activeCertId}!`, 'success');
  };

  // Clear progress for active certificate
  const handleClearProgress = async () => {
    const freshProgress: ProgressState = {
      answeredCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      streak: 0,
      bookmarkedQuestionIds: progress.bookmarkedQuestionIds, // keep bookmarks
      history: []
    };
    await saveProgress(freshProgress);
    setCurrentQuestionIndex(0);
    showAppToast('Đã xóa sạch dữ liệu tiến độ và lịch sử làm bài!', 'success');
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

    if (authUserId) {
      try {
        await syncSingleHistoryEntryToDb(authUserId, activeCertId, qId, selectedOptions, isCorrect);
      } catch (err) {
        console.error('Logging syncing error:', err);
      }
    }
  };

  // Filtered List projection
  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectCategory === 'All' || q.category === selectCategory;
    const matchesSearch = matchesAdvancedQuestionSearch(q, searchQuery);
    
    const matchesBookmark = !showBookmarksOnly || progress.bookmarkedQuestionIds.includes(q.id);
    const matchesIncorrect = !showIncorrectOnly || progress.history.some(entry => entry.questionId === q.id && !entry.isCorrect);

    return matchesCategory && matchesSearch && matchesBookmark && matchesIncorrect;
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
    if (authUserId) {
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

  const normalizeCertificateSearch = (value: string) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLocaleLowerCase('vi')
    .replace(/[^a-z0-9]+/g, '');
  const normalizedCertificateSearchQuery = normalizeCertificateSearch(certificateSearchQuery.trim());
  const visibleHomeCertificates = certificates.filter(certificate => {
    if (certificate.isDisabled) return false;
    if (!normalizedCertificateSearchQuery) return true;

    return normalizeCertificateSearch([
      certificate.code,
      certificate.name,
      certificate.description,
    ].join(' ')).includes(normalizedCertificateSearchQuery);
  });
  const lookupScopeCertificate = certificates.find(certificate => certificate.id === lookupCertId);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col antialiased">
      {/* Top Header bar with clean Swiss look */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 backdrop-blur-md px-3 py-2.5 sm:px-4 sm:py-3 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            {mode !== 'home' && mode !== 'admin' && (
              <button 
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="lg:hidden text-slate-500 hover:text-slate-800 p-2.5 -ml-1 rounded-xl min-h-11 min-w-11 flex items-center justify-center"
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
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-300 hover:text-rose-600 hover:bg-rose-50/50 transition-colors cursor-pointer ${
                mode === 'admin' ? 'text-rose-600 bg-rose-50' : ''
              }`}
              title="Mở khu vực quản trị nội dung (bấm 3 lần)"
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
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="hidden min-h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-indigo-600 sm:flex"
              title="Tùy chỉnh trải nghiệm học"
              aria-label="Mở tùy chỉnh trải nghiệm"
            >
              <Settings2 className="h-4 w-4" />
            </button>
            {/* Quick Look-up Button */}
            <button
              onClick={() => openAdvancedLookup()}
              className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200/80 font-bold px-3 py-2 rounded-xl transition-all items-center gap-1.5 cursor-pointer shadow-xs shrink-0 hidden sm:flex"
              title="Tra cứu nhanh câu hỏi và đáp án"
            >
              <Search className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>{mode === 'practice' || mode === 'exam' || mode === 'guide' ? 'Tìm nhanh trong đề' : 'Tra cứu đáp án'}</span>
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
                      <Loader2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-indigo-500 animate-spin" aria-label="Đang đồng bộ" />
                    )}
                    {dbSyncStatus === 'success' && (
                      <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500 font-extrabold" aria-label="Đã đồng bộ Cloud" />
                    )}
                    {dbSyncStatus === 'error' && (
                      <AlertCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-rose-500 animate-pulse" aria-label="Lỗi đồng bộ Cloud" />
                    )}
                    {dbSyncStatus === 'idle' && (
                      <Database className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400" aria-label="Đang lưu offline" />
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
                  onClick={() => { setAuthError(''); setAuthMode('signin'); setAuthIntent('sync'); setPendingCertAccess(null); setShowAuthModal(true); }}
                  className={`flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-xl border px-2.5 text-xs font-bold shadow-sm transition-all sm:px-3.5 ${anonymousMode ? 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700' : 'border-indigo-700 bg-indigo-600 text-white hover:bg-slate-900'}`}
                  title={anonymousMode ? 'Đang học ẩn danh — bấm để đăng nhập và đồng bộ' : 'Kết nối tài khoản nhóm'}
                >
                  {anonymousMode ? <EyeOff className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5 animate-pulse" />}
                  <span className="hidden sm:inline">{anonymousMode ? 'Ẩn danh' : 'Lưu lịch sử Team'}</span>
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
            
            {mode === 'home' && canManageContent && (
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
      <div className="mobile-nav-scroll md:hidden sticky top-[65px] z-30 bg-slate-100 border-b border-slate-200 flex items-center justify-start gap-1 p-1 overflow-x-auto overscroll-x-contain snap-x">
        <button
          onClick={() => { setMode('home'); }}
          className={`flex-1 min-w-[62px] min-h-11 snap-start text-[10px] font-bold text-center px-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
            mode === 'home' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
          }`}
        >
          <Home className="w-3 h-3" />
          Trang chủ
        </button>
        <button
          onClick={() => { setMode('group'); }}
          className={`flex-1 min-w-[62px] min-h-11 snap-start text-[10px] font-bold text-center px-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
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
              className={`flex-1 min-w-[62px] min-h-11 snap-start text-[10px] font-bold text-center px-1 py-2.5 rounded-lg transition-all ${
                mode === 'practice' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Luyện Tập
            </button>
            <button
              onClick={() => { setMode('exam'); }}
              className={`flex-1 min-w-[50px] min-h-11 snap-start text-[10px] font-bold text-center px-1 py-2.5 rounded-lg transition-all ${
                mode === 'exam' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Thi thử
            </button>
            <button
              onClick={() => { setMode('guide'); }}
              className={`flex-1 min-w-[58px] min-h-11 snap-start text-[10px] font-bold text-center px-1 py-2.5 rounded-lg transition-all ${
                mode === 'guide' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Cẩm nang
            </button>
          </>
        )}
        <button
          onClick={() => openAdvancedLookup()}
          className="flex-1 min-w-[58px] min-h-11 snap-start text-[10px] font-bold text-center px-1 py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 text-slate-500 active:text-amber-700 active:bg-amber-50/50"
        >
          <Search className="w-3.5 h-3.5 text-amber-500" />
          Tra cứu
        </button>
        <button
          type="button"
          onClick={() => setShowPreferences(true)}
          className="flex min-h-11 min-w-[48px] snap-start items-center justify-center rounded-lg text-slate-500 active:bg-white active:text-indigo-600"
          aria-label="Tùy chỉnh trải nghiệm"
        >
          <Settings2 className="h-4 w-4" />
        </button>
      </div>

      {/* Main Workspace content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-3 sm:p-4 md:p-8 flex flex-col gap-4 md:gap-6">
        
        {/* Customized uploader expanded */}
        {showUploader && (
          <Suspense fallback={<LazySectionFallback label="Đang mở trình nhập câu hỏi..." />}>
            <CustomQuestionsImport
              onImport={handleImportQuestions}
              currentCount={questions.length}
              existingQuestions={questions}
            />
          </Suspense>
        )}

        {/* Certification Hub Home View */}
        {mode === 'home' && (
          <div className="space-y-5 animate-fadeIn">
            {/* Compact home overview: keeps the first certificate row above the fold */}
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
              <div className="flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0 text-center md:text-left">
                  <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-600">CERT PREP PORTAL</span>
                  <h2 className="mt-2 text-xl font-black tracking-tight text-slate-900 md:text-2xl">Trung Tâm Ôn Luyện Đa Chứng Chỉ</h2>
                  <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-500">
                    Chọn chứng chỉ bên dưới để luyện tập, thi thử hoặc xem cẩm nang ôn tập.
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5">
                  <div className="min-w-20 text-center px-2">
                  <span className="block text-[22px] font-black text-slate-900">
                    {certificates.filter(c => !c.isDisabled).length}
                  </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Chứng chỉ</span>
                </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="min-w-20 text-center px-2">
                  <span className="block text-[22px] font-black text-emerald-600">
                    {certificates.filter(c => !c.isDisabled).reduce((acc, cert) => {
                      const completed = readProgressCache(cert.id);
                      if (completed) {
                        try {
                          const parsed = JSON.parse(completed);
                          return acc + (parsed.history?.length || 0);
                        } catch { return acc; }
                      }
                      return acc;
                    }, 0)}
                  </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Đã trả lời</span>
                  </div>
                </div>
              </div>

              {!username && (
                <div id="welcome-team-sync-banner" className={`border-t px-4 py-3 sm:px-6 ${anonymousMode ? 'border-slate-200 bg-slate-50' : 'border-indigo-100 bg-gradient-to-r from-indigo-50/70 to-blue-50/50'}`}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs font-black text-slate-900">{anonymousMode ? 'Đang học ẩn danh' : 'Học nhóm & Đồng bộ đám mây'}</h3>
                        <p className="truncate text-[10px] text-slate-500">{anonymousMode ? 'Tiến độ chỉ lưu trên trình duyệt và thiết bị này.' : 'Lưu tiến độ và câu đã đánh dấu lên dữ liệu chung của Team.'}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsTeamSyncExpanded(previous => !previous)}
                      aria-expanded={isTeamSyncExpanded}
                      className="flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-indigo-200 bg-white px-3 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-50"
                    >
                      {isTeamSyncExpanded ? 'Thu gọn' : anonymousMode ? 'Đổi chế độ' : 'Chọn chế độ học'}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isTeamSyncExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isTeamSyncExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="max-w-xl text-[11px] leading-relaxed text-slate-600">
                            {anonymousMode
                              ? 'Bạn vẫn học và thi thử bình thường. Đăng nhập khi muốn đồng bộ sang thiết bị khác hoặc dùng tính năng nhóm.'
                              : 'Học ẩn danh không cần tài khoản và chỉ lưu trên thiết bị này. Đăng nhập để đồng bộ nhiều thiết bị và học nhóm.'}
                          </p>
                          <div className="flex flex-col gap-2 sm:flex-row">
                            {!anonymousMode && (
                              <button
                                onClick={handleContinueAnonymously}
                                className="min-h-11 whitespace-nowrap rounded-xl border border-slate-300 bg-white px-5 text-xs font-black text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
                              >
                                Học ẩn danh
                              </button>
                            )}
                            <button
                              onClick={() => { setAuthMode('signin'); setAuthIntent('sync'); setPendingCertAccess(null); setAuthError(''); setShowAuthModal(true); }}
                              className="min-h-11 whitespace-nowrap rounded-xl border border-indigo-700 bg-indigo-600 px-5 text-xs font-black text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
                            >
                              Đăng nhập & đồng bộ
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
              <div className="relative block min-w-0 flex-1">
                <label className="sr-only" htmlFor="certificate-search">Tìm nhanh bộ đề</label>
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="certificate-search"
                  type="search"
                  value={certificateSearchQuery}
                  onChange={(event) => setCertificateSearchQuery(event.target.value)}
                  placeholder="Tìm nhanh theo mã hoặc tên chứng chỉ..."
                  className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-sm font-semibold text-slate-800 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                />
                {certificateSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setCertificateSearchQuery('')}
                    className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Xóa từ khóa tìm chứng chỉ"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="shrink-0 px-1 text-[11px] font-bold text-slate-500" aria-live="polite">
                {certificateSearchQuery.trim()
                  ? `${visibleHomeCertificates.length} bộ đề phù hợp`
                  : `${visibleHomeCertificates.length} bộ đề đang có`}
              </p>
            </div>

            {/* Certification Grid list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleHomeCertificates.map(cert => {
                // Get progress for this card locally
                let certProgress = {
                  answeredCount: 0,
                  correctCount: 0,
                  total: BUILTIN_QUESTION_COUNTS[cert.id] || 0,
                };

                // The cache is guaranteed to belong to this app build. Use it
                // for accurate custom-certificate counts and fast home cards.
                const storedQs = localStorage.getItem(`questions_${cert.id}`);
                if (storedQs) {
                  try {
                    const parsedQs = JSON.parse(storedQs);
                    if (Array.isArray(parsedQs) && parsedQs.length > 0) certProgress.total = parsedQs.length;
                  } catch {
                    localStorage.removeItem(`questions_${cert.id}`);
                  }
                }

                const storedProg = readProgressCache(cert.id);
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

                const isLocked = checkIsCertLocked(cert);

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
                          {cert.isVIP && (
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
                            className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 px-3 text-center text-xs font-black text-white shadow-sm transition-all hover:from-amber-600 hover:to-orange-700"
                          >
                            <Key className="w-3.5 h-3.5" />
                            Mở Khóa Bằng Key VIP
                          </button>
                        ) : (
                          <button
                            onClick={() => handleRequestCertAccess(cert.id)}
                            className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-950 px-3 text-center text-xs font-bold text-white shadow-sm transition-all hover:bg-indigo-600"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            {anonymousMode && !authUserId ? 'Học ẩn danh' : 'Học ngay'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {visibleHomeCertificates.length === 0 && (
                <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
                  <Search className="mx-auto h-7 w-7 text-slate-300" />
                  <h3 className="mt-3 text-sm font-black text-slate-800">Không tìm thấy bộ đề phù hợp</h3>
                  <p className="mt-1 text-xs text-slate-500">Thử tìm bằng mã chứng chỉ hoặc một phần tên khác.</p>
                  <button
                    type="button"
                    onClick={() => setCertificateSearchQuery('')}
                    className="mt-4 min-h-11 rounded-xl border border-indigo-200 bg-indigo-50 px-4 text-xs font-black text-indigo-700 transition hover:bg-indigo-100"
                  >
                    Xóa từ khóa tìm kiếm
                  </button>
                </div>
              )}

              {/* Add New Custom Certification Card placeholder */}
              {canManageContent && !showAddCertForm && !certificateSearchQuery.trim() && (
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
            {canManageContent && showAddCertForm && (
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
                        onClick={async () => {
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

                          try {
                            await createSharedCustomCertificate(builtCert, parsedQs);
                          } catch (error: any) {
                            showAppToast(error.message || 'Không thể tạo chứng chỉ dùng chung trên Database.', 'error');
                            return;
                          }
                          
                          // Form Reset
                          setNewCertCode('');
                          setNewCertName('');
                          setNewCertNameDesc('');
                          setNewCertQuestionsText('');
                          setShowAddCertForm(false);
                          
                          showAppToast(`Chứng chỉ ${builtCert.code} đã được lưu lên Database chung với ${parsedQs.length} câu hỏi!`, 'success');
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

        {/* Compact desktop overview; hidden on mobile to keep questions focused. */}
        {mode === 'practice' && (
          <section className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
            <button
              type="button"
              onClick={() => setStudyOverviewExpanded(previous => !previous)}
              aria-expanded={studyOverviewExpanded}
              aria-controls="study-overview-details"
              className="flex min-h-16 w-full items-center justify-between gap-4 px-4 py-3 text-left transition hover:bg-slate-50 lg:px-5"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Activity className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-sm font-black text-slate-900">Tổng quan ôn tập</strong>
                  <small className="block truncate text-[10px] font-semibold text-slate-500">
                    Lộ trình hôm nay, mục tiêu và thống kê tiến độ
                  </small>
                </span>
              </span>

              <span className="flex shrink-0 items-center gap-2">
                <span className="hidden rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-600 lg:inline-flex">
                  Đã làm {progress.answeredCount}/{questions.length}
                </span>
                <span className="hidden rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-700 lg:inline-flex">
                  Đúng {progress.answeredCount > 0 ? Math.round((progress.correctCount / progress.answeredCount) * 100) : 0}%
                </span>
                <span className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 text-[10px] font-black text-indigo-700">
                  {studyOverviewExpanded ? 'Thu gọn' : 'Mở tổng quan'}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${studyOverviewExpanded ? 'rotate-180' : ''}`} />
                </span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {studyOverviewExpanded && (
                <motion.div
                  id="study-overview-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden border-t border-slate-100"
                >
                  <div className="space-y-4 bg-slate-50/50 p-4 lg:p-5">
                    <LearningCoachPanel
                      certId={activeCertId}
                      questions={questions}
                      progress={progress}
                      onPracticeCategory={(category) => {
                        setCategoryFilter(category);
                        setShowBookmarksOnly(false);
                        setShowIncorrectOnly(false);
                        setCurrentQuestionIndex(0);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      onReviewMistakes={() => {
                        setCategoryFilter('All');
                        setShowBookmarksOnly(false);
                        setShowIncorrectOnly(true);
                        setCurrentQuestionIndex(0);
                      }}
                      onStartExam={() => setMode('exam')}
                    />
                    <StatsPanel
                      questions={questions}
                      progress={progress}
                      onReset={handleClearProgress}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Mode Practice rendering */}
        {mode === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {mobileMenuOpen && (
              <button
                type="button"
                aria-label="Đóng bộ lọc câu hỏi"
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-[1px] lg:hidden"
              />
            )}
            
            {/* Filter sidebar rail (Left) */}
            <div className={`fixed inset-y-0 left-0 z-50 w-[88vw] max-w-sm bg-white border-r border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto overscroll-contain pb-[max(1rem,env(safe-area-inset-bottom))] transform ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 lg:z-0 lg:p-0 lg:bg-transparent lg:border-r-0 lg:w-auto`}>
              
              <div className="flex lg:hidden items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-bold text-slate-700">Bộ lọc câu hỏi</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 -mr-2 text-slate-400 hover:text-slate-655 min-h-11 min-w-11 flex items-center justify-center rounded-xl"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search keywords card panel */}
              <div className="bg-white lg:border border-slate-150 rounded-2xl p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Lọc danh sách</span>
                  <button
                    type="button"
                    onClick={() => openAdvancedLookup(activeCertId)}
                    className="rounded-lg bg-amber-50 px-2 py-1 text-[9px] font-black text-amber-700 transition hover:bg-amber-100"
                  >
                    Tìm nâng cao
                  </button>
                </div>
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
                <p className="text-[9px] font-semibold leading-relaxed text-slate-400">
                  Nhấn <kbd className="rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono text-slate-600">Ctrl K</kbd> để xem nhiều kết quả và đáp án ngay.
                </p>
              </div>

              {/* Categories list card panel */}
              <div className="bg-white lg:border border-slate-150 rounded-2xl p-4 shadow-sm space-y-2">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Chủ đề bài thi</span>
                <div className="max-h-72 space-y-1.5 overflow-y-auto pr-1 custom-scrollbar">
                  {categories.map(cat => {
                    const isSelected = selectCategory === cat;
                    
                    let catTotal = 0;
                    let catAnswered = 0;
                    let catProgress = 0;

                    if (cat === 'All') {
                      catTotal = questions.length;
                      catAnswered = progress.history.length;
                      catProgress = catTotal > 0 ? Math.round((catAnswered / catTotal) * 100) : 0;
                    } else {
                      const catQuestions = questions.filter(q => q.category === cat);
                      catTotal = catQuestions.length;
                      const catQIds = new Set(catQuestions.map(q => q.id));
                      const catHistory = progress.history.filter(h => catQIds.has(h.questionId));
                      catAnswered = catHistory.length;
                      catProgress = catTotal > 0 ? Math.round((catAnswered / catTotal) * 100) : 0;
                    }

                    return (
                      <button
                        key={cat}
                        onClick={() => { setCategoryFilter(cat); setCurrentQuestionIndex(0); setMobileMenuOpen(false); }}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold flex flex-col gap-1.5 transition-all ${
                          isSelected 
                            ? 'bg-slate-900 text-white shadow-sm' 
                            : 'text-slate-700 bg-slate-50/70 hover:bg-slate-100/80 border border-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="truncate pr-1 font-bold">{cat === 'All' ? 'Tất cả chủ đề' : cat}</span>
                          <div className="flex items-center gap-1.5 shrink-0">
                            {catAnswered > 0 && (
                              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                                isSelected
                                  ? catProgress >= 80 ? 'bg-emerald-900/80 text-emerald-300' : catProgress >= 50 ? 'bg-amber-900/80 text-amber-300' : 'bg-rose-900/80 text-rose-300'
                                  : catProgress >= 80 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : catProgress >= 50 ? 'bg-amber-50 text-amber-700 border border-amber-200/60' : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                              }`}>
                                {catProgress}%
                              </span>
                            )}
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                              isSelected ? 'bg-slate-800 text-indigo-300' : 'bg-white text-slate-500 border border-slate-200'
                            }`}>
                              {catTotal} câu
                            </span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full flex items-center gap-2">
                          <div className={`w-full rounded-full h-1.5 overflow-hidden ${isSelected ? 'bg-slate-800' : 'bg-slate-200/80'}`}>
                            <div 
                              className={`h-full rounded-full transition-all duration-300 ${
                                catAnswered === 0
                                  ? (isSelected ? 'bg-slate-700' : 'bg-slate-300')
                                  : catProgress >= 80
                                    ? (isSelected ? 'bg-emerald-400' : 'bg-emerald-500')
                                    : catProgress >= 50
                                      ? (isSelected ? 'bg-amber-400' : 'bg-amber-500')
                                      : (isSelected ? 'bg-rose-400' : 'bg-rose-500')
                              }`}
                              style={{ width: `${catProgress}%` }}
                            />
                          </div>
                          {catAnswered > 0 && (
                            <span className={`text-[9px] font-medium shrink-0 ${isSelected ? 'text-slate-400' : 'text-slate-400'}`}>
                              {catAnswered}/{catTotal}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick review filters */}
              <div className="bg-white lg:border border-slate-150 rounded-2xl p-4 shadow-sm space-y-3">
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
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={showIncorrectOnly}
                    onChange={(e) => { setShowIncorrectOnly(e.target.checked); setCurrentQuestionIndex(0); }}
                    className="rounded border-slate-350 text-rose-600 focus:ring-rose-500 w-4 h-4"
                  />
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                    Ôn lại câu trả lời sai ({progress.incorrectCount})
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
                    <div className="grid grid-cols-5 gap-1.5 max-h-48 overflow-y-auto p-1.5 custom-scrollbar">
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
                  onReportIssue={setReportQuestion}
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
          <Suspense fallback={<LazySectionFallback label="Đang chuẩn bị phòng thi..." />}>
            <MockExam
              questions={questions}
              onFinishExam={handleFinishExamMock}
              onExit={() => { setMode('practice'); setCurrentQuestionIndex(0); }}
              certName={certificates.find(c => c.id === activeCertId)?.name}
              certCode={certificates.find(c => c.id === activeCertId)?.code}
            />
          </Suspense>
        )}

        {/* Browsable Study Guide Syllabus Mode Rendering */}
        {mode === 'guide' && (
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">Cẩm Nang & Tài Liệu Xem Trước {questions.length} Câu Hỏi</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Xem trước từng câu theo đúng định dạng thi: trắc nghiệm, Yes/No, dropdown, kéo thả và hotspot, kèm đáp án cùng lời giải chi tiết.
              </p>
            </div>

            <div className="space-y-4">
              {paginatedGuideQuestions.map((q, idx) => {
                const bookmarked = progress.bookmarkedQuestionIds.includes(q.id);
                return (
                  <div key={q.id} className="space-y-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md/50 sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        CÂU HỎI {q.questionNumber} • <span className="text-indigo-600 font-semibold">{q.category}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setReportQuestion(q)}
                          className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
                          aria-label={`Báo vấn đề cho câu hỏi ${q.questionNumber}`}
                        >
                          <Flag className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleToggleBookmark(q.id)}
                          className={`flex min-h-11 min-w-11 items-center justify-center rounded-xl border ${
                            bookmarked ? 'bg-rose-50 border-rose-100 text-rose-500' : 'text-slate-350 border-slate-200'
                          }`}
                          aria-label={bookmarked ? 'Bỏ lưu câu hỏi' : 'Lưu câu hỏi'}
                        >
                          <Star className={`w-3.5 h-3.5 ${bookmarked ? 'fill-rose-500' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <StudyGuideQuestion question={q} />
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
        {mode === 'admin' && canManageContent && (
          <Suspense fallback={<LazySectionFallback label="Đang tải khu vực quản trị..." />}>
            <AdminPanel
            currentRole={userRole === 'admin' ? 'admin' : 'editor'}
            certificates={certificates}
            activeCertId={activeCertId}
            unlockedCertIds={unlockedCertIds}
            vipKeyConfigs={vipKeyConfigs}
            onSelectCert={(certId) => {
              setActiveCertId(certId);
              localStorage.setItem('study_active_cert', certId);
              loadCertData(certId, authUserId);
            }}
            onUpdateQuestions={(certId, updatedQs) => {
              if (certId === activeCertId) {
                setQuestions(updatedQs);
                setCurrentQuestionIndex(0);
              }
            }}
            onAddCertificate={async (newCert, initialQs) => {
              try {
                return await createSharedCustomCertificate(newCert, initialQs);
              } catch (error: any) {
                showAppToast(error.message || 'Không thể tạo chứng chỉ dùng chung trên Database.', 'error');
                return false;
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
            onToggleCertDisabled={handleToggleCertDisabled}
            onToggleUnlockCert={handleToggleUnlockCert}
            showAppToast={showAppToast}
            />
          </Suspense>
        )}

        {/* Study Group Mode Rendering */}
        {mode === 'group' && (
          <Suspense fallback={<LazySectionFallback label="Đang tải nhóm học..." />}>
            <GroupStudy
              username={username}
              onUsernameChange={handleLogin}
              certificates={certificates}
              showToast={showAppToast}
            />
          </Suspense>
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

      {/* Secure account login modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="auth-dialog-title">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 max-w-md w-full animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-2xl">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h3 id="auth-dialog-title" className="text-base font-extrabold text-slate-900 leading-tight">
                    {authIntent === 'learning' ? 'Chọn cách bắt đầu học' : authMode === 'signin' ? 'Đăng nhập tài khoản' : 'Tạo tài khoản học tập'}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {authIntent === 'learning' ? 'Không bắt buộc tạo tài khoản với bộ đề công khai' : 'Xác thực an toàn bằng Supabase Auth'}
                  </p>
                </div>
              </div>
              <button 
                onClick={closeAuthModal}
                className="flex min-h-11 min-w-11 items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                aria-label="Đóng đăng nhập"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {authIntent !== 'admin' && !certificates.find(cert => cert.id === pendingCertAccess?.certId)?.isVIP && (
                <button
                  type="button"
                  onClick={handleContinueAnonymously}
                  className="flex min-h-16 w-full items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3.5 text-left transition hover:border-emerald-300 hover:bg-emerald-100"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm"><EyeOff className="h-5 w-5" /></span>
                  <span className="min-w-0">
                    <strong className="block text-sm font-black text-emerald-900">Học ẩn danh</strong>
                    <small className="mt-0.5 block text-[10px] font-semibold leading-relaxed text-emerald-700">Không cần tài khoản · tiến độ chỉ lưu trên thiết bị này</small>
                  </span>
                </button>
              )}

              {authIntent !== 'admin' && !certificates.find(cert => cert.id === pendingCertAccess?.certId)?.isVIP && (
                <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-slate-300"><span className="h-px flex-1 bg-slate-200" />hoặc dùng tài khoản<span className="h-px flex-1 bg-slate-200" /></div>
              )}

              <div className="grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                <button type="button" onClick={() => { setAuthMode('signin'); setAuthError(''); }} className={`min-h-11 rounded-lg text-xs font-black ${authMode === 'signin' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Đăng nhập</button>
                <button type="button" onClick={() => { setAuthMode('signup'); setAuthError(''); setAuthConfirmationPending(false); setAuthConfirmationMessage(''); }} className={`min-h-11 rounded-lg text-xs font-black ${authMode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Đăng ký</button>
              </div>

              {authMode === 'signup' && (
                <label className="block">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Tên hiển thị</span>
                  <input type="text" placeholder="Tên bạn muốn hiển thị..." value={authDisplayName} onChange={e => setAuthDisplayName(e.target.value)} className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
                </label>
              )}

              <label className="block">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email</span>
                <input
                  type="email"
                  placeholder="ban@example.com"
                  value={authEmail}
                  onChange={(e) => {
                    setAuthEmail(e.target.value);
                    setAuthConfirmationPending(false);
                    setAuthConfirmationMessage('');
                  }}
                  className="min-h-11 w-full px-4 bg-slate-50 border border-slate-200 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 font-semibold text-slate-800"
                  autoFocus
                />
              </label>

              <label className="block">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Mật khẩu</span>
                <input type="password" value={authPassword} onChange={e => setAuthPassword(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') handleAuthSubmit(); }} placeholder="Ít nhất 6 ký tự" className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
              </label>

              {authError && <p className="rounded-xl border border-rose-100 bg-rose-50 p-3 text-xs font-bold text-rose-700">{authError}</p>}

              {authConfirmationPending && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3.5">
                  <p className="text-xs font-bold leading-relaxed text-amber-900">{authConfirmationMessage}</p>
                  <button
                    type="button"
                    onClick={handleResendConfirmation}
                    disabled={authBusy}
                    className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white px-4 text-xs font-black text-amber-800 transition hover:bg-amber-100 disabled:cursor-wait disabled:opacity-60"
                  >
                    {authBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
                    Gửi lại email xác nhận
                  </button>
                </div>
              )}

              <div className="flex gap-2.5 justify-end pt-2">
                <button
                  onClick={closeAuthModal}
                  className="min-h-11 px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={handleAuthSubmit}
                  disabled={authBusy}
                  className="inline-flex min-h-11 items-center justify-center gap-2 px-5 text-xs font-extrabold text-white bg-indigo-600 hover:bg-slate-950 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {authBusy && <Loader2 className="h-4 w-4 animate-spin" />}
                  {authMode === 'signin' ? 'Đăng nhập & đồng bộ' : 'Tạo tài khoản'}
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
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="advanced-lookup-title">
          <div className="bg-white border-t sm:border border-slate-200 rounded-t-[2rem] sm:rounded-3xl rounded-b-none sm:rounded-b-3xl w-full max-w-2xl flex flex-col h-[88dvh] sm:h-auto sm:max-h-[85dvh] shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <h3 id="advanced-lookup-title" className="text-sm font-black text-slate-950 flex items-center gap-2">
                  <span className="p-1 px-1.5 bg-amber-100 text-amber-800 rounded-lg text-xs leading-none">LOOKUP</span>
                  {lookupScopeCertificate ? `TÌM NHANH TRONG ${lookupScopeCertificate.code}` : 'TRA CỨU TOÀN BỘ ĐÁP ÁN'} 🔍
                </h3>
                <p className="text-[10px] text-slate-400 font-semibold mt-1">
                  Tìm theo số câu, nhiều từ khóa, nội dung, đáp án, chủ đề hoặc tag.
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
                  <option value="all">Tất cả bộ đề</option>
                  {certificates.filter(c => !c.isDisabled).map(c => (
                    <option key={c.id} value={c.id}>{c.code}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Scrollable Results Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {lookupLoading ? (
                <div className="flex min-h-48 flex-col items-center justify-center gap-3 text-center">
                  <Loader2 className="h-7 w-7 animate-spin text-amber-500" />
                  <p className="text-xs font-bold text-slate-500">Đang chuẩn bị chỉ mục tìm kiếm...</p>
                </div>
              ) : !lookupQuery.trim() ? (
                /* Search onboarding state */
                <div className="text-center py-12 px-4 max-w-sm mx-auto space-y-3.5">
                  <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl mx-auto flex items-center justify-center border border-amber-100">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800">Sẵn sàng tra cứu dữ liệu</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-medium">
                      Ví dụ: <strong>câu 12</strong>, <strong>cosmos global</strong>, <strong>security policy</strong>. Nhiều từ khóa sẽ giúp thu hẹp kết quả.
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
                    {filteredLookupQuestions.map(({ certId, certCode, certName, question: q }, idx) => {
                      const answerBank = [...(q.choices || []), ...q.options];
                      const correctOptionKeys = new Set(q.correctAnswers.map(answer => {
                        const separatorIndex = answer.indexOf(':');
                        return separatorIndex >= 0 ? answer.slice(separatorIndex + 1) : answer;
                      }));
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
                            {certId === activeCertId && (mode === 'practice' || mode === 'exam' || mode === 'guide') && (
                              <button
                                type="button"
                                onClick={() => handleOpenLookupQuestion(certId, q.id)}
                                className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50 px-3 text-[10px] font-black text-indigo-700 transition hover:bg-indigo-100"
                              >
                                <Eye className="h-3.5 w-3.5" />
                                Mở câu này
                              </button>
                            )}
                          </div>

                          {/* Question text with highlight */}
                          <p className="text-xs font-black text-slate-800 leading-relaxed">
                            {highlightText(q.text, lookupQuery)}
                          </p>

                          {q.statements && q.statements.length > 0 && (
                            <div className="space-y-2">
                              <span className="block text-[9px] font-black uppercase tracking-wider text-slate-400">Các dòng và đáp án đúng:</span>
                              <div className="space-y-2">
                                {q.statements.map(statement => {
                                  const resolvedAnswer = answerBank.find(choice => choice.key === statement.correctAnswer)?.text || statement.correctAnswer;
                                  return (
                                    <div key={statement.id} className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs">
                                      <p className="font-semibold leading-relaxed text-slate-700">{highlightText(statement.text, lookupQuery)}</p>
                                      <p className="mt-1.5 font-black text-emerald-700">Đáp án: {highlightText(resolvedAnswer, lookupQuery)}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Options display with correct answers colored */}
                          {q.options.length > 0 && q.questionType !== 'statement_matrix' && (
                            <div className="space-y-2">
                              <span className="block text-[9px] uppercase font-black tracking-wider text-slate-400">
                                {q.statements?.length ? 'Ngân hàng đáp án:' : 'Các phương án lựa chọn:'}
                              </span>
                              <div className="grid grid-cols-1 gap-2 text-xs">
                              {q.options.map(opt => {
                                const isCorrect = correctOptionKeys.has(opt.key);
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
                          )}

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
                💡 Tìm chính xác số câu hoặc kết hợp nhiều từ khóa. Phím tắt: Ctrl/⌘ K.
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
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">Xóa chứng chỉ đã import?</h3>
                <p className="text-[10px] text-slate-400 font-medium">Hành động này không thể hoàn tác</p>
              </div>
            </div>

            <p className="text-xs text-slate-550 leading-relaxed mb-5">
              Bạn có chắc chắn muốn xóa chứng chỉ <strong className="text-rose-600 font-extrabold">"{certToDelete.code}"</strong>, toàn bộ ngân hàng câu hỏi của chứng chỉ này trên Database và dữ liệu học được lưu trên thiết bị?
            </p>

            <div className="flex gap-2.5 justify-end">
              <button
                onClick={() => setCertToDelete(null)}
                disabled={isDeletingCertificate}
                className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                onClick={confirmDeleteCert}
                disabled={isDeletingCertificate}
                className="px-5 py-2.5 text-xs font-extrabold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer disabled:cursor-wait disabled:opacity-60"
              >
                {isDeletingCertificate ? 'Đang xóa Database...' : 'Xác nhận xóa'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Animated Mascot / Pet */}
      {petEnabled && mode !== 'exam' && mode !== 'admin' && (
        <FloatingPet username={username} showToast={showAppToast} />
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-[115] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="preferences-title">
          <section className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 id="preferences-title" className="text-lg font-black text-slate-900">Tùy chỉnh trải nghiệm</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">Các thiết lập chỉ áp dụng trên thiết bị này.</p>
              </div>
              <button type="button" onClick={() => setShowPreferences(false)} className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100" aria-label="Đóng tùy chỉnh"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-5 divide-y divide-slate-100 rounded-2xl border border-slate-200">
              {!authUserId && (
                <label className="flex min-h-16 cursor-pointer items-center justify-between gap-4 p-4">
                  <span><strong className="block text-sm text-slate-800">Học ẩn danh</strong><small className="mt-1 block text-xs text-slate-500">Không cần tài khoản; tiến độ chỉ lưu trên thiết bị này.</small></span>
                  <input
                    type="checkbox"
                    checked={anonymousMode}
                    onChange={event => {
                      if (event.target.checked) {
                        handleContinueAnonymously();
                      } else {
                        setAnonymousMode(false);
                        localStorage.removeItem('study_anonymous_mode');
                        showAppToast('Đã tắt học ẩn danh. Bạn sẽ được hỏi cách đăng nhập khi mở bộ đề.', 'info');
                      }
                    }}
                    className="h-5 w-5 rounded text-indigo-600"
                  />
                </label>
              )}
              <label className="flex min-h-16 cursor-pointer items-center justify-between gap-4 p-4">
                <span><strong className="block text-sm text-slate-800">Mascot & mẹo học</strong><small className="mt-1 block text-xs text-slate-500">Ẩn hoàn toàn mascot nếu bạn muốn tập trung.</small></span>
                <input type="checkbox" checked={petEnabled} onChange={event => { setPetEnabled(event.target.checked); localStorage.setItem('pref_pet_enabled', String(event.target.checked)); }} className="h-5 w-5 rounded text-indigo-600" />
              </label>
              <label className="flex min-h-16 cursor-pointer items-center justify-between gap-4 p-4">
                <span><strong className="block text-sm text-slate-800">Giảm hiệu ứng chuyển động</strong><small className="mt-1 block text-xs text-slate-500">Phù hợp khi dễ chóng mặt hoặc muốn tiết kiệm pin.</small></span>
                <input type="checkbox" checked={reduceMotion} onChange={event => setReduceMotion(event.target.checked)} className="h-5 w-5 rounded text-indigo-600" />
              </label>
            </div>
            <button type="button" onClick={() => setShowPreferences(false)} className="mt-5 min-h-11 w-full rounded-xl bg-slate-950 text-sm font-black text-white hover:bg-indigo-600">Hoàn tất</button>
          </section>
        </div>
      )}

      {reportQuestion && (
        <QuestionReportModal
          question={reportQuestion}
          certId={activeCertId}
          reporterName={username}
          onClose={() => setReportQuestion(null)}
          onResult={(message, type) => showAppToast(message, type)}
        />
      )}
    </div>
  );
}
