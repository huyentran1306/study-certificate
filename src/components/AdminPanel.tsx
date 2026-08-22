import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight, 
  Download, 
  Check, 
  X, 
  FileJson, 
  FileSpreadsheet, 
  BookOpen, 
  PlusCircle,
  HelpCircle,
  FolderOpen,
  Tag,
  Sparkles,
  RefreshCw,
  Award,
  History,
  User,
  Calendar,
  Clock,
  AlertTriangle,
  Lock,
  Unlock,
  Key,
  ShieldCheck,
  Eye,
  EyeOff,
  Ban,
  Upload
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { 
  syncQuestionsToDb,
  fetchAllExamResultsFromDb,
  deleteExamResultFromDb,
  clearAllExamResultsFromDb,
  ExamHistoryRecord,
  fetchAllUserProgressFromDb,
  deleteUserProgressFromDb,
  clearAllUserProgressFromDb,
  UserProgressRecord,
  createQuestionImportBatch,
  fetchQuestionImportBatches,
  fetchQuestionImportSnapshot,
  type QuestionImportBatch,
  fetchQuestionReports,
  updateQuestionReport,
  type AdminQuestionReport,
  type QuestionReportStatus,
} from '../lib/sync';
import { Question, Certificate, VipKeyConfig } from '../types';
import { loadBuiltinQuestions } from '../data/questionCatalog';
import CustomQuestionsImport from './CustomQuestionsImport';
import { smartParseQuestions } from '../utils/questionParser';
import { QUESTION_IMPORT_SAMPLES } from '../data/questionImportSamples';
import { QUESTION_TYPE_LABELS } from '../data/questionImportSamples';
import AdminQuestionTypePreview from './AdminQuestionTypePreview';
import QuestionSandboxModal from './QuestionSandboxModal';
import { isSafeExternalUrl } from '../utils/url';

interface AdminPanelProps {
  currentRole: 'editor' | 'admin';
  certificates: Certificate[];
  activeCertId: string;
  onSelectCert: (certId: string) => void;
  onUpdateQuestions: (certId: string, updatedQs: Question[]) => void;
  onAddCertificate: (newCert: Certificate, initialQs: Question[]) => Promise<boolean>;
  onDeleteCertificate: (certId: string) => void;
  showAppToast: (message: string, type: 'success' | 'error' | 'info') => void;
  unlockedCertIds?: string[];
  vipKeyConfigs?: Record<string, VipKeyConfig[]>;
  onAddVipKey?: (certId: string, newKey: string, expiryDate: string) => void;
  onDeleteVipKey?: (certId: string, keyToDelete: string) => void;
  onToggleKeyDisabled?: (certId: string, keyToToggle: string) => void;
  onUpdateKeyExpiry?: (certId: string, keyToUpdate: string, newExpiryDate: string) => void;
  onToggleCertVip?: (certId: string) => void;
  onToggleCertDisabled?: (certId: string) => void;
  onToggleUnlockCert?: (certId: string) => void;
}

export default function AdminPanel({
  currentRole,
  certificates,
  activeCertId,
  onSelectCert,
  onUpdateQuestions,
  onAddCertificate,
  onDeleteCertificate,
  showAppToast,
  unlockedCertIds = [],
  vipKeyConfigs = {},
  onAddVipKey,
  onDeleteVipKey,
  onToggleKeyDisabled,
  onUpdateKeyExpiry,
  onToggleCertVip,
  onToggleCertDisabled,
  onToggleUnlockCert
}: AdminPanelProps) {
  const isFullAdmin = currentRole === 'admin';
  // Questions list of the currently selected certificate
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [certificateSearchQuery, setCertificateSearchQuery] = useState('');
  const [questionWorkspaceView, setQuestionWorkspaceView] = useState<'catalog' | 'editor'>('catalog');
  const [certificateQuestionCounts, setCertificateQuestionCounts] = useState<Record<string, number>>({});
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState<'All' | NonNullable<Question['status']>>('All');

  // Form toggles
  const [isQuestionFormOpen, setIsQuestionFormOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  
  // Custom certificate creation in Admin Mode
  const [isNewCertFormOpen, setIsNewCertFormOpen] = useState(false);

  // Question Form state
  const [qNum, setQNum] = useState<number>(0);
  const [qText, setQText] = useState('');
  const [qExplanation, setQExplanation] = useState('');
  const [qCategory, setQCategory] = useState('General');
  const [qTagsString, setQTagsString] = useState('');
  const [qOptions, setQOptions] = useState<{ key: string; text: string }[]>([
    { key: 'A', text: '' },
    { key: 'B', text: '' },
    { key: 'C', text: '' },
    { key: 'D', text: '' }
  ]);
  const [qCorrectAnswers, setQCorrectAnswers] = useState<string[]>([]);
  const [qImageUrl, setQImageUrl] = useState('');
  const [qStatus, setQStatus] = useState<NonNullable<Question['status']>>('draft');
  const [qSourceTitle, setQSourceTitle] = useState('');
  const [qSourceUrl, setQSourceUrl] = useState('');
  const [qLastVerifiedAt, setQLastVerifiedAt] = useState('');

  // Certificate Form state
  const [newCertCode, setNewCertCode] = useState('');
  const [newCertName, setNewCertName] = useState('');
  const [newCertDesc, setNewCertDesc] = useState('');
  const [newCertDiff, setNewCertDiff] = useState<'Cơ bản' | 'Trung cấp' | 'Nâng cao'>('Cơ bản');
  const [newCertHours, setNewCertHours] = useState('8-12 Giờ');
  const [newCertColor, setNewCertColor] = useState('bg-gradient-to-br from-indigo-600 via-sky-700 to-indigo-950 text-white');
  const [newCertIcon, setNewCertIcon] = useState('BookOpen');
  const [newCertQuestionsText, setNewCertQuestionsText] = useState('');

  // Bulk Questions Upload modal state
  const [isBulkUploadOpen, setIsBulkUploadOpen] = useState(false);
  const [isBulkUploading, setIsBulkUploading] = useState(false);
  const [importBatches, setImportBatches] = useState<QuestionImportBatch[]>([]);
  const [showImportHistory, setShowImportHistory] = useState(false);
  const [rollbackBatchId, setRollbackBatchId] = useState<string | null>(null);

  // Collapsed questions registry (to avoid massive pages on large sets)
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [sandboxQuestion, setSandboxQuestion] = useState<Question | null>(null);

  // Questions list pagination
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 15;

  // Admin Panel states & logic
  const [adminTab, setAdminTab] = useState<'questions' | 'reports' | 'user_progress' | 'exam_history' | 'vip_keys'>('questions');
  const [newKeyInputs, setNewKeyInputs] = useState<Record<string, string>>({});
  const [newExpiryInputs, setNewExpiryInputs] = useState<Record<string, string>>({});

  // Learner-submitted content reports
  const [questionReports, setQuestionReports] = useState<AdminQuestionReport[]>([]);
  const [isReportsLoading, setIsReportsLoading] = useState(false);
  const [reportStatusFilter, setReportStatusFilter] = useState<'All' | QuestionReportStatus>('open');
  const [reportResolutionNotes, setReportResolutionNotes] = useState<Record<string, string>>({});

  const loadQuestionReports = async () => {
    setIsReportsLoading(true);
    try {
      const reports = await fetchQuestionReports();
      setQuestionReports(reports || []);
      if (reports) {
        setReportResolutionNotes(Object.fromEntries(reports.map(report => [report.id, report.resolutionNote || ''])));
      }
    } finally {
      setIsReportsLoading(false);
    }
  };

  const handleUpdateQuestionReport = async (report: AdminQuestionReport, status: QuestionReportStatus) => {
    const updated = await updateQuestionReport({
      id: report.id,
      status,
      resolutionNote: reportResolutionNotes[report.id],
    });
    if (!updated) {
      showAppToast('Không thể cập nhật báo lỗi. Hãy kiểm tra migration và quyền editor/admin.', 'error');
      return;
    }
    showAppToast('Đã cập nhật trạng thái báo lỗi.', 'success');
    await loadQuestionReports();
  };
  
  // Student Study Progress states
  const [userProgressList, setUserProgressList] = useState<UserProgressRecord[]>([]);
  const [isProgressLoading, setIsProgressLoading] = useState(false);
  const [progressSearchQuery, setProgressSearchQuery] = useState('');
  const [progressCertFilter, setProgressCertFilter] = useState('All');

  const loadUserProgress = async () => {
    setIsProgressLoading(true);
    try {
      const dbProgress = await fetchAllUserProgressFromDb();
      if (dbProgress) {
        setUserProgressList(dbProgress);
      } else {
        setUserProgressList([]);
      }
    } catch (err) {
      console.error('Failed to load user progress:', err);
    } finally {
      setIsProgressLoading(false);
    }
  };

  const handleDeleteUserProgress = async (record: UserProgressRecord) => {
    try {
      const success = await deleteUserProgressFromDb(record.username, record.cert_id);
      if (success) {
        showAppToast('Đã xóa tiến trình học viên thành công!', 'success');
        loadUserProgress();
      } else {
        showAppToast('Không thể xóa tiến trình học viên!', 'error');
      }
    } catch (err) {
      console.error(err);
      showAppToast('Lỗi khi xóa tiến trình học tập!', 'error');
    }
  };

  const handleClearAllUserProgress = async () => {
    try {
      const success = await clearAllUserProgressFromDb();
      if (success) {
        showAppToast('Đã xóa sạch toàn bộ tiến trình học tập thành công!', 'success');
        setUserProgressList([]);
      } else {
        showAppToast('Lỗi xóa sạch tiến trình học tập!', 'error');
      }
    } catch (err) {
      console.error(err);
      showAppToast('Lỗi khi xóa sạch tiến trình!', 'error');
    }
  };

  const filteredUserProgress = userProgressList.filter(p => {
    const usernameMatch = p.username.toLowerCase().includes(progressSearchQuery.toLowerCase());
    const cert = certificates.find(c => c.id === p.cert_id);
    const certCode = cert ? cert.code : p.cert_id;
    const certMatch = progressCertFilter === 'All' || p.cert_id === progressCertFilter || certCode === progressCertFilter;
    return usernameMatch && certMatch;
  });

  const handleExportProgressToCsv = () => {
    if (filteredUserProgress.length === 0) {
      showAppToast('Không có tiến trình nào để xuất!', 'error');
      return;
    }

    const headers = ['Học viên', 'Mã môn học', 'Số câu đã làm', 'Số câu đúng', 'Số câu sai', 'Tỷ lệ chính xác (%)', 'Chuỗi ngày học', 'Số câu đã lưu', 'Cập nhật cuối'];
    
    const escapeCsv = (str: string) => {
      if (!str) return '""';
      const escaped = str.toString().replace(/"/g, '""');
      return `"${escaped}"`;
    };

    const rows = filteredUserProgress.map(p => {
      const cert = certificates.find(c => c.id === p.cert_id);
      const certCode = cert ? cert.code : p.cert_id;
      const total = p.answered_count || 0;
      const accuracy = total > 0 ? Math.round((p.correct_count / total) * 100) : 0;
      const dateStr = p.last_updated ? new Date(p.last_updated).toLocaleString('vi-VN') : 'N/A';
      
      return [
        escapeCsv(p.username),
        escapeCsv(certCode),
        p.answered_count,
        p.correct_count,
        p.incorrect_count,
        `${accuracy}%`,
        p.streak,
        p.bookmarked_question_ids ? p.bookmarked_question_ids.length : 0,
        escapeCsv(dateStr)
      ].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const filename = `student_progress_export_${new Date().toISOString().slice(0, 10)}.csv`;
    
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);
    showAppToast(`Đã xuất ${filteredUserProgress.length} dòng tiến trình học tập ra file CSV!`, 'success');
  };

  // Exam history states & logic
  const [examResults, setExamResults] = useState<ExamHistoryRecord[]>([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);
  const [historySearchQuery, setHistorySearchQuery] = useState('');
  const [historyCertFilter, setHistoryCertFilter] = useState('All');
  const [historySyncMode, setHistorySyncMode] = useState<'both' | 'local_only'>('both');

  const loadExamResults = async () => {
    setIsHistoryLoading(true);
    try {
      // 1. Get from localStorage as baseline
      const localRaw = localStorage.getItem('local_exam_results');
      let localResults: ExamHistoryRecord[] = [];
      if (localRaw) {
        try { localResults = JSON.parse(localRaw); } catch (e) { console.error(e); }
      }

      // 2. Get from database if sync active
      if (historySyncMode === 'both') {
        const dbResults = await fetchAllExamResultsFromDb();
        if (dbResults) {
          // Merge lists, avoid duplicates, sort by timestamp DESC
          const mergedMap = new Map<string, ExamHistoryRecord>();
          localResults.forEach(r => {
            const key = `${r.username}_${r.cert_id}_${r.score}_${Math.floor(r.timestamp / 1000)}`;
            mergedMap.set(key, r);
          });
          dbResults.forEach(r => {
            const key = `${r.username}_${r.cert_id}_${r.score}_${Math.floor(r.timestamp / 1000)}`;
            mergedMap.set(key, r);
          });
          const sorted = Array.from(mergedMap.values()).sort((a, b) => b.timestamp - a.timestamp);
          setExamResults(sorted);
        } else {
          setExamResults(localResults.sort((a, b) => b.timestamp - a.timestamp));
        }
      } else {
        setExamResults(localResults.sort((a, b) => b.timestamp - a.timestamp));
      }
    } catch (err) {
      console.error('Failed to load exam results:', err);
    } finally {
      setIsHistoryLoading(false);
    }
  };

  useEffect(() => {
    if (adminTab === 'exam_history') {
      loadExamResults();
    } else if (adminTab === 'user_progress') {
      loadUserProgress();
    } else if (adminTab === 'reports') {
      loadQuestionReports();
    }
  }, [adminTab, historySyncMode]);

  const handleDeleteExamResult = async (record: ExamHistoryRecord) => {
    // Delete locally
    try {
      const localRaw = localStorage.getItem('local_exam_results');
      if (localRaw) {
        const localResults: ExamHistoryRecord[] = JSON.parse(localRaw);
        const filtered = localResults.filter(r => r.id !== record.id && !(r.username === record.username && r.timestamp === record.timestamp));
        localStorage.setItem('local_exam_results', JSON.stringify(filtered));
      }
    } catch (e) {
      console.error(e);
    }

    // Delete from Db
    if (historySyncMode === 'both') {
      try {
        await deleteExamResultFromDb(record.id);
      } catch (err) {
        console.error(err);
      }
    }

    showAppToast('Đã xóa kết quả thi thành công!', 'success');
    loadExamResults();
  };

  const handleClearAllExamResults = async () => {
    localStorage.removeItem('local_exam_results');

    if (historySyncMode === 'both') {
      try {
        await clearAllExamResultsFromDb();
      } catch (err) {
        console.error(err);
      }
    }

    showAppToast('Đã xóa toàn bộ lịch sử thi!', 'success');
    loadExamResults();
  };

  const filteredExamResults = examResults.filter(r => {
    const usernameMatch = r.username.toLowerCase().includes(historySearchQuery.toLowerCase());
    const certMatch = historyCertFilter === 'All' || r.cert_id === historyCertFilter || r.cert_code === historyCertFilter;
    return usernameMatch && certMatch;
  });

  const handleExportHistoryToCsv = () => {
    if (filteredExamResults.length === 0) {
      showAppToast('Không có lịch sử nào để xuất!', 'error');
      return;
    }

    const headers = ['Học viên', 'Mã chứng chỉ', 'Số câu đúng', 'Tổng số câu', 'Tỷ lệ đạt (%)', 'Thời gian làm bài', 'Ngày hoàn thành'];
    
    const escapeCsv = (str: string) => {
      if (!str) return '""';
      const escaped = str.toString().replace(/"/g, '""');
      return `"${escaped}"`;
    };

    const rows = filteredExamResults.map(r => {
      const minutes = Math.floor(r.elapsed_seconds / 60);
      const seconds = r.elapsed_seconds % 60;
      const durationStr = `${minutes}m ${seconds}s`;
      const dateStr = new Date(r.timestamp).toLocaleString('vi-VN');
      
      return [
        escapeCsv(r.username),
        escapeCsv(r.cert_code),
        r.score,
        r.total_questions,
        `${r.accuracy}%`,
        escapeCsv(durationStr),
        escapeCsv(dateStr)
      ].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const filename = `exam_history_export_${new Date().toISOString().slice(0, 10)}.csv`;
    
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);
    showAppToast(`Đã xuất ${filteredExamResults.length} dòng lịch sử thi ra file CSV!`, 'success');
  };

  // Load questions for the selected certificate
  const loadQuestions = async () => {
    setIsLoading(true);
    try {
      // 1. Determine static default questions
      const staticDefaultQs = await loadBuiltinQuestions(activeCertId);

      let localQs = staticDefaultQs;
      const stored = localStorage.getItem(`questions_${activeCertId}`);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as Question[];
          if (Array.isArray(parsed) && parsed.length >= staticDefaultQs.length) localQs = parsed;
        } catch {
          localStorage.removeItem(`questions_${activeCertId}`);
        }
      }

      // 2. Load from Supabase to stay updated
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('cert_id', activeCertId)
        .order('question_number', { ascending: true });

      if (error) {
        console.warn('Could not load questions from Database:', error);
        setQuestions(localQs);
      } else if (data && data.length > 0) {
        // Find default static questions for activeCertId
        const staticQs = staticDefaultQs;

        const dbQs: Question[] = data.map((q: any) => {
          const matchedStatic = staticQs.find(sq => sq.id === q.id || sq.questionNumber === q.question_number);
          let rawOptions = q.options;
          if (typeof rawOptions === 'string') {
            try { rawOptions = JSON.parse(rawOptions); } catch { rawOptions = []; }
          }
          const isStructured = rawOptions && typeof rawOptions === 'object' && !Array.isArray(rawOptions) && (Array.isArray(rawOptions.statements) || rawOptions.type === 'image_hotspot');
          const questionType = isStructured ? (rawOptions.type || 'statement_matrix') : 'multiple_choice';
          const choices = isStructured ? (rawOptions.choices || rawOptions.options || []) : (Array.isArray(rawOptions) ? rawOptions : []);
          return {
            id: q.id,
            questionNumber: q.question_number,
            text: q.text,
            questionType,
            statements: Array.isArray(rawOptions?.statements) ? rawOptions.statements : undefined,
            options: choices,
            choices: questionType === 'matching_dropdown' || questionType === 'matching_drag_drop' ? choices : undefined,
            correctAnswers: q.correct_answers,
            explanation: q.explanation || '',
            category: q.category || 'General',
            tags: q.tags || [],
            imageUrl: q.image_url || matchedStatic?.imageUrl,
            status: q.status || 'published',
            sourceTitle: q.source_title || undefined,
            sourceUrl: q.source_url || undefined,
            lastVerifiedAt: q.last_verified_at || undefined,
          };
        });
        setQuestions(dbQs);
        try {
          localStorage.setItem(`questions_${activeCertId}`, JSON.stringify(dbQs));
        } catch (cacheError) {
          console.warn(`Could not cache questions for ${activeCertId}:`, cacheError);
        }
      } else {
        setQuestions(localQs);
      }
    } catch (e) {
      console.error('Failed to load admin questions list:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [activeCertId]);

  const reloadImportHistory = async () => {
    setImportBatches(await fetchQuestionImportBatches(activeCertId));
  };

  useEffect(() => {
    reloadImportHistory();
  }, [activeCertId]);

  useEffect(() => {
    let cancelled = false;
    const loadCertificateQuestionCounts = async () => {
      const entries = await Promise.all(certificates.map(async certificate => {
        const { count, error } = await supabase
          .from('questions')
          .select('id', { count: 'exact', head: true })
          .eq('cert_id', certificate.id);
        return [certificate.id, error ? 0 : (count || 0)] as const;
      }));
      if (!cancelled) setCertificateQuestionCounts(Object.fromEntries(entries));
    };
    loadCertificateQuestionCounts();
    return () => { cancelled = true; };
  }, [certificates]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, activeCertId]);

  // Open form to add question
  const handleOpenAddQuestion = () => {
    setEditingQuestion(null);
    setQNum(questions.length > 0 ? Math.max(...questions.map(q => q.questionNumber)) + 1 : 1);
    setQText('');
    setQExplanation('');
    setQCategory('General');
    setQTagsString('');
    setQOptions([
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ]);
    setQCorrectAnswers([]);
    setQImageUrl('');
    setQStatus('draft');
    setQSourceTitle('');
    setQSourceUrl('');
    setQLastVerifiedAt('');
    setIsQuestionFormOpen(true);
  };

  // Open form to edit question
  const handleOpenEditQuestion = (q: Question) => {
    setEditingQuestion(q);
    setQNum(q.questionNumber);
    setQText(q.text);
    setQExplanation(q.explanation || '');
    setQCategory(q.category || 'General');
    setQTagsString(q.tags ? q.tags.join(', ') : '');
    setQOptions(q.options.map(opt => ({ ...opt })));
    setQCorrectAnswers([...q.correctAnswers]);
    setQImageUrl(q.imageUrl || '');
    setQStatus(q.status || 'published');
    setQSourceTitle(q.sourceTitle || '');
    setQSourceUrl(q.sourceUrl || '');
    setQLastVerifiedAt(q.lastVerifiedAt?.slice(0, 10) || '');
    setIsQuestionFormOpen(true);
  };

  // Toggle correct choice
  const toggleCorrectAnswer = (key: string) => {
    setQCorrectAnswers(prev => {
      if (prev.includes(key)) {
        return prev.filter(k => k !== key);
      } else {
        return [...prev, key];
      }
    });
  };

  const handleImagePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              setQImageUrl(event.target.result as string);
              showAppToast('Đã dán ảnh thành công từ clipboard!', 'success');
            }
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setQImageUrl(event.target.result as string);
          showAppToast('Đã tải ảnh lên thành công!', 'success');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle saving the question (both Add and Edit)
  const handleSaveQuestion = async () => {
    if (!qText.trim()) {
      showAppToast('Vui lòng nhập nội dung câu hỏi!', 'error');
      return;
    }

    const filteredOptions = qOptions.filter(opt => opt.text.trim() !== '');
    const isStructuredEdit = Boolean(editingQuestion?.statements?.length);
    const isMatchingEdit = editingQuestion?.questionType === 'matching_dropdown' || editingQuestion?.questionType === 'matching_drag_drop';
    if ((!isStructuredEdit || isMatchingEdit) && filteredOptions.length < 2) {
      showAppToast('Vui lòng nhập ít nhất 2 phương án trả lời!', 'error');
      return;
    }

    if (qCorrectAnswers.length === 0) {
      showAppToast('Vui lòng chọn ít nhất một đáp án đúng!', 'error');
      return;
    }

    // Ensure all selected correct answers correspond to existing specified options
    const optionKeys = filteredOptions.map(opt => opt.key);
    const validCorrectAnswers = isStructuredEdit
      ? qCorrectAnswers
      : qCorrectAnswers.filter(key => optionKeys.includes(key));
    if (validCorrectAnswers.length === 0) {
      showAppToast('Các đáp án đúng được chọn không khớp với danh sách phương án hợp lệ!', 'error');
      return;
    }

    if (qSourceUrl.trim() && !isSafeExternalUrl(qSourceUrl.trim())) {
      showAppToast('URL nguồn phải bắt đầu bằng http:// hoặc https://.', 'error');
      return;
    }

    setIsLoading(true);
    try {
      const parsedTags = qTagsString
        .split(',')
        .map(t => t.trim())
        .filter(t => t !== '');

      const isNew = !editingQuestion;
      const questionId = isNew 
        ? `custom-q-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`
        : editingQuestion.id;

      const savedQuestion: Question = {
        id: questionId,
        questionNumber: qNum || (questions.length + 1),
        text: qText.trim(),
        questionType: editingQuestion?.questionType || 'multiple_choice',
        statements: editingQuestion?.statements,
        options: filteredOptions,
        choices: editingQuestion?.questionType === 'matching_dropdown' || editingQuestion?.questionType === 'matching_drag_drop'
          ? filteredOptions
          : undefined,
        correctAnswers: validCorrectAnswers,
        explanation: qExplanation.trim(),
        category: qCategory.trim() || 'General',
        tags: parsedTags,
        imageUrl: qImageUrl.trim() || undefined,
        status: qStatus,
        sourceTitle: qSourceTitle.trim() || undefined,
        sourceUrl: qSourceUrl.trim() || undefined,
        lastVerifiedAt: qLastVerifiedAt || undefined,
      };

      let updatedList: Question[] = [];

      if (isNew) {
        updatedList = [...questions, savedQuestion];
      } else {
        updatedList = questions.map(q => q.id === questionId ? savedQuestion : q);
      }

      // Sort questions by question number
      updatedList.sort((a, b) => a.questionNumber - b.questionNumber);

      // Sync specific question to Supabase
      const optionsPayload = savedQuestion.statements?.length
        ? {
            type: savedQuestion.questionType || 'statement_matrix',
            statements: savedQuestion.statements,
            choices: savedQuestion.choices || savedQuestion.options,
          }
        : savedQuestion.questionType === 'image_hotspot'
          ? { type: 'image_hotspot', choices: savedQuestion.options }
          : savedQuestion.options;
      const payload = {
        id: questionId,
        cert_id: activeCertId,
        question_number: savedQuestion.questionNumber,
        text: savedQuestion.text,
        options: optionsPayload,
        correct_answers: savedQuestion.correctAnswers,
        explanation: savedQuestion.explanation,
        category: savedQuestion.category,
        tags: savedQuestion.tags || [],
        image_url: savedQuestion.imageUrl || null,
        status: savedQuestion.status || 'draft',
        source_title: savedQuestion.sourceTitle || null,
        source_url: savedQuestion.sourceUrl || null,
        last_verified_at: savedQuestion.lastVerifiedAt || null,
      };

      let { error: dbError } = await supabase
        .from('questions')
        .upsert(payload, { onConflict: 'id' });

      if (dbError) {
        const isMissingOptionalColumn = dbError.message?.includes('image_url') || dbError.message?.includes('status') || dbError.message?.includes('source_') || dbError.message?.includes('last_verified_at') || dbError.message?.includes('column');
        if (isMissingOptionalColumn) {
          console.warn('DB schema lacks editorial metadata columns. Retrying with the legacy payload...');
          const {
            image_url,
            status,
            source_title,
            source_url,
            last_verified_at,
            ...payloadWithoutOptionalMetadata
          } = payload;
          const { error: retryError } = await supabase
            .from('questions')
            .upsert(payloadWithoutOptionalMetadata, { onConflict: 'id' });
          dbError = retryError;
        }
      }

      if (dbError) {
        console.error('Failed to sync to Supabase database:', dbError);
        showAppToast('Không thể lưu câu hỏi lên Database. Dữ liệu hiện tại không bị thay đổi.', 'error');
        return;
      }

      setQuestions(updatedList);
      onUpdateQuestions(activeCertId, updatedList);
      showAppToast(isNew ? 'Đã thêm câu hỏi thành công!' : 'Đã cập nhật câu hỏi thành công!', 'success');

      setIsQuestionFormOpen(false);
      setEditingQuestion(null);
    } catch (e) {
      console.error(e);
      showAppToast('Có lỗi xảy ra khi lưu câu hỏi!', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle deleting a question
  const handleDeleteQuestion = async (qId: string) => {
    setIsLoading(true);
    try {
      const updatedList = questions.filter(q => q.id !== qId);
      
      // Delete from Supabase
      const { error } = await supabase
        .from('questions')
        .delete()
        .eq('id', qId);

      if (error) {
        console.error('Delete database row error:', error);
        showAppToast('Không thể xóa câu hỏi khỏi Database. Dữ liệu hiện tại không bị thay đổi.', 'error');
      } else {
        setQuestions(updatedList);
        onUpdateQuestions(activeCertId, updatedList);
        showAppToast('Đã xóa câu hỏi thành công!', 'success');
      }
    } catch (e) {
      console.error(e);
      showAppToast('Lỗi khi xóa câu hỏi', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Add custom options fields
  const addOptionField = () => {
    const nextCharCode = 65 + qOptions.length; // 65 is 'A'
    if (nextCharCode > 70) { // Max 'F'
      showAppToast('Tối đa 6 lựa chọn (A - F)!', 'info');
      return;
    }
    const nextKey = String.fromCharCode(nextCharCode);
    setQOptions(prev => [...prev, { key: nextKey, text: '' }]);
  };

  // Remove option from lists
  const removeOptionField = (key: string) => {
    if (qOptions.length <= 2) {
      showAppToast('Luyện tập cần tối thiểu 2 đáp án lựa chọn!', 'info');
      return;
    }
    setQOptions(prev => prev.filter(opt => opt.key !== key));
    setQCorrectAnswers(prev => prev.filter(k => k !== key));
  };

  // Downloading sample JSON
  const handleDownloadSampleJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(QUESTION_IMPORT_SAMPLES, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "question_sample_import.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showAppToast(`Đã tải JSON mẫu đầy đủ ${QUESTION_IMPORT_SAMPLES.length} định dạng câu hỏi!`, 'success');
  };

  // Export questions to JSON format
  const handleExportJson = () => {
    if (questions.length === 0) {
      showAppToast('Không có câu hỏi nào để xuất!', 'error');
      return;
    }
    const filename = `${activeCert?.code || 'questions'}_export.json`;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showAppToast(`Đã xuất ${questions.length} câu hỏi thành file JSON!`, 'success');
  };

  // Export questions to CSV format
  const handleExportCsv = () => {
    if (questions.length === 0) {
      showAppToast('Không có câu hỏi nào để xuất!', 'error');
      return;
    }
    
    // Header
    const headers = ['Question Number', 'Category', 'Question Text', 'Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F', 'Correct Answers', 'Explanation', 'Tags'];
    
    // Escape CSV cell value
    const escapeCsv = (str: string) => {
      if (!str) return '""';
      const escaped = str.toString().replace(/"/g, '""');
      return `"${escaped}"`;
    };

    const rows = questions.map(q => {
      // Find options text
      const optA = q.options.find(o => o.key === 'A')?.text || '';
      const optB = q.options.find(o => o.key === 'B')?.text || '';
      const optC = q.options.find(o => o.key === 'C')?.text || '';
      const optD = q.options.find(o => o.key === 'D')?.text || '';
      const optE = q.options.find(o => o.key === 'E')?.text || '';
      const optF = q.options.find(o => o.key === 'F')?.text || '';
      
      return [
        q.questionNumber,
        escapeCsv(q.category || ''),
        escapeCsv(q.text),
        escapeCsv(optA),
        escapeCsv(optB),
        escapeCsv(optC),
        escapeCsv(optD),
        escapeCsv(optE),
        escapeCsv(optF),
        escapeCsv(q.correctAnswers.join(', ')),
        escapeCsv(q.explanation || ''),
        escapeCsv(q.tags ? q.tags.join(', ') : '')
      ].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const filename = `${activeCert?.code || 'questions'}_export.csv`;
    
    // Support UTF-8 BOM so Excel opens Vietnamese characters correctly
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);
    showAppToast(`Đã xuất ${questions.length} câu hỏi thành file CSV (hỗ trợ Excel UTF-8)!`, 'success');
  };

  // Bulk import questions directly into active certificate with Supabase synchronization
  const handleBulkImportQuestions = async (importedList: Question[], resetProgress: boolean): Promise<boolean> => {
    setIsBulkUploading(true);
    try {
      await createQuestionImportBatch(activeCertId, questions, importedList.length);
      const dbSuccess = await syncQuestionsToDb(activeCertId, importedList);
      if (!dbSuccess) {
        throw new Error('Database không xác nhận lưu dữ liệu. Danh sách hiện tại được giữ nguyên.');
      }

      setQuestions(importedList);
      onUpdateQuestions(activeCertId, importedList);
      showAppToast(`🎉 Đã nạp và lưu bền vững ${importedList.length} câu hỏi vào Database cho chứng chỉ ${activeCert?.code || activeCertId}!`, 'success');
      await reloadImportHistory();
      setIsBulkUploadOpen(false);
      return true;
    } catch (err: any) {
      console.error('Lỗi khi nạp hàng loạt câu hỏi:', err);
      showAppToast(`Lỗi khi nạp câu hỏi: ${err.message || err}`, 'error');
      throw err;
    } finally {
      setIsBulkUploading(false);
    }
  };

  const handleRollbackImport = async (batch: QuestionImportBatch) => {
    if (!window.confirm(`Khôi phục ngân hàng câu hỏi về trạng thái ${batch.previousCount} câu trước lần import này?`)) return;
    setRollbackBatchId(batch.id);
    try {
      const snapshot = await fetchQuestionImportSnapshot(batch.id);
      if (!snapshot) throw new Error('Không đọc được snapshot của lần import này.');
      await createQuestionImportBatch(activeCertId, questions, snapshot.length);
      const restored = await syncQuestionsToDb(activeCertId, snapshot);
      if (!restored) throw new Error('Database không xác nhận khôi phục dữ liệu.');
      setQuestions(snapshot);
      onUpdateQuestions(activeCertId, snapshot);
      await reloadImportHistory();
      showAppToast(`Đã rollback về ${snapshot.length} câu hỏi.`, 'success');
    } catch (error: any) {
      showAppToast(error.message || 'Không thể rollback lần import.', 'error');
    } finally {
      setRollbackBatchId(null);
    }
  };

  // Create customized certificates with smart parser (supporting JSON, raw text, or empty)
  const handleCreateNewCert = async () => {
    if (!newCertCode || !newCertName) {
      showAppToast('Vui lòng điền đầy đủ Mã và Tên chứng chỉ!', 'error');
      return;
    }

    let parsedQuestionsList: Question[] = [];
    if (newCertQuestionsText && newCertQuestionsText.trim() !== '' && newCertQuestionsText.trim() !== '[]') {
      try {
        parsedQuestionsList = smartParseQuestions(newCertQuestionsText.trim(), 1);
      } catch (err: any) {
        showAppToast(`Lỗi phân tích cú pháp bộ câu hỏi: ${err.message}`, 'error');
        return;
      }
    }

    try {
      const certId = `custom_${newCertCode.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now()}`;
      const builtCert: Certificate = {
        id: certId,
        name: newCertName,
        code: newCertCode.toUpperCase(),
        description: newCertDesc || `Chứng chỉ ôn tập về ${newCertCode.toUpperCase()}.`,
        difficulty: newCertDiff,
        estimatedHours: newCertHours,
        colorClass: newCertColor,
        iconName: newCertIcon
      };

      const created = await onAddCertificate(builtCert, parsedQuestionsList);
      if (!created) return;

      // Reset state
      setNewCertCode('');
      setNewCertName('');
      setNewCertDesc('');
      setNewCertQuestionsText('');
      setIsNewCertFormOpen(false);
      showAppToast(`Chứng chỉ ${builtCert.code} đã được khởi tạo thành công với ${parsedQuestionsList.length} câu hỏi!`, 'success');
    } catch (e) {
      console.error(e);
      showAppToast('Lỗi khi khởi tạo chứng chỉ tự chọn', 'error');
    }
  };

  // Filtered lists of questions to manage
  const filteredQuestions = questions.filter(q => {
    const textMatch = q.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      q.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    const catMatch = categoryFilter === 'All' || q.category === categoryFilter;
    const statusMatch = statusFilter === 'All' || (q.status || 'published') === statusFilter;
    return textMatch && catMatch && statusMatch;
  });

  const contentQuality = {
    published: questions.filter(q => (q.status || 'published') === 'published').length,
    needsReview: questions.filter(q => (q.status || 'published') !== 'published').length,
    missingExplanation: questions.filter(q => !q.explanation?.trim()).length,
    missingSource: questions.filter(q => !q.sourceTitle && !q.sourceUrl).length,
    formatIssues: questions.filter(q =>
      !q.text?.trim()
      || (q.questionType === 'image_hotspot' && (!q.imageUrl || q.options.some(option => !option.hotspot)))
      || ((q.questionType === 'matching_dropdown' || q.questionType === 'matching_drag_drop') && (!q.statements?.length || !(q.choices || q.options).length))
    ).length,
  };

  // Unique categories list
  const categories = ['All', ...Array.from(new Set(questions.map(q => q.category).filter(Boolean)))];

  const activeCert = certificates.find(c => c.id === activeCertId);
  const systemCertificateIds = ['gh-300', 'az-900', 'ai-900', 'cca-f', 'dp-800', 'istqb-ai', 'ab-731'];
  const canDeleteActiveCertificate = !!activeCert && !systemCertificateIds.includes(activeCert.id);
  const filteredCertificates = certificates.filter(certificate => {
    const keyword = certificateSearchQuery.trim().toLowerCase();
    if (!keyword) return true;
    return `${certificate.code} ${certificate.name} ${certificate.description}`.toLowerCase().includes(keyword);
  });
  const reportTypeLabels: Record<AdminQuestionReport['reportType'], string> = {
    wrong_answer: 'Sai đáp án',
    outdated: 'Nội dung cũ',
    formatting: 'Lỗi hiển thị',
    unclear: 'Khó hiểu',
    other: 'Khác',
  };
  const reportStatusLabels: Record<QuestionReportStatus, string> = {
    open: 'Mới',
    reviewing: 'Đang xem',
    resolved: 'Đã xử lý',
    dismissed: 'Bỏ qua',
  };
  const filteredQuestionReports = questionReports.filter(report => (
    reportStatusFilter === 'All' || report.status === reportStatusFilter
  ));

  return (
    <div className="space-y-6 animate-fadeIn pb-20">
      
      {/* Title & Introduction Panel */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full inline-block">🛠️ {isFullAdmin ? 'CHẾ ĐỘ QUẢN TRỊ VIÊN' : 'CHẾ ĐỘ BIÊN TẬP VIÊN'}</span>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Khu Vực Quản Lý Ngân Hàng Câu Hỏi & Đề Thi</h2>
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            Cho phép tạo, chỉnh sửa hoặc loại bỏ ngân hàng câu hỏi và lưu trực tiếp lên Supabase để mọi tài khoản được dùng chung dữ liệu.
          </p>
        </div>
        <div className="shrink-0 flex flex-wrap gap-2 w-full md:w-auto justify-end">
          <button
            onClick={handleDownloadSampleJson}
            className="text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold px-3 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200 shadow-xs"
            title="Tải tệp câu hỏi JSON mẫu để tham khảo"
          >
            <Download className="w-3.5 h-3.5 text-slate-550" />
            JSON Mẫu
          </button>
          
          {questionWorkspaceView === 'editor' && adminTab === 'questions' && (
            <>
              <button
                onClick={handleExportJson}
                className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-extrabold px-3 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-indigo-200"
                title="Xuất toàn bộ câu hỏi của môn học hiện tại ra file JSON"
              >
                <FileJson className="w-3.5 h-3.5 text-indigo-600" />
                Xuất JSON
              </button>

              <button
                onClick={handleExportCsv}
                className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold px-3 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-250"
                title="Xuất toàn bộ câu hỏi của môn học hiện tại ra file CSV"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                Xuất CSV
              </button>
            </>
          )}
          
          <button
            onClick={() => {
              setQuestionWorkspaceView('editor');
              setIsNewCertFormOpen(true);
            }}
            className="text-xs bg-slate-900 hover:bg-indigo-600 text-white font-black px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            Tạo Chứng Chỉ Mới
          </button>
        </div>
      </div>

      {/* Admin Panel Sub-Tabs Navigation */}
      <div className="flex gap-1 overflow-x-auto border-b border-slate-200 pb-px" aria-label="Điều hướng quản trị">
        <button
          onClick={() => {
            setAdminTab('questions');
            setQuestionWorkspaceView('catalog');
          }}
          className={`min-h-11 shrink-0 px-4 py-3 text-[11px] font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
            adminTab === 'questions'
              ? 'border-indigo-650 text-indigo-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          QUẢN LÝ ĐỀ THI & CÂU HỎI
        </button>
        <button
          onClick={() => setAdminTab('reports')}
          className={`min-h-11 shrink-0 px-4 py-3 text-[11px] font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
            adminTab === 'reports'
              ? 'border-rose-500 text-rose-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <AlertTriangle className="h-4 w-4" />
          BÁO LỖI NỘI DUNG
          {questionReports.filter(report => report.status === 'open').length > 0 && (
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[9px] text-rose-700">
              {questionReports.filter(report => report.status === 'open').length}
            </span>
          )}
        </button>
        {isFullAdmin && (
          <>
            <button
              onClick={() => setAdminTab('user_progress')}
              className={`min-h-11 shrink-0 px-4 py-3 text-[11px] font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
                adminTab === 'user_progress'
                  ? 'border-indigo-650 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <History className="w-4 h-4" />
              TIẾN ĐỘ LUYỆN TẬP CỦA HỌC VIÊN
            </button>
            <button
              onClick={() => setAdminTab('exam_history')}
              className={`min-h-11 shrink-0 px-4 py-3 text-[11px] font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
                adminTab === 'exam_history'
                  ? 'border-indigo-650 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              LỊCH SỬ THI THỬ HỌC VIÊN
            </button>
            <button
              onClick={() => setAdminTab('vip_keys')}
              className={`min-h-11 shrink-0 px-4 py-3 text-[11px] font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
                adminTab === 'vip_keys'
                  ? 'border-amber-500 text-amber-700 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Key className="w-4 h-4 text-amber-500" />
              QUẢN LÝ MÃ KEY VIP 🔐
            </button>
          </>
        )}
      </div>

      {adminTab === 'questions' && questionWorkspaceView === 'catalog' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="rounded-3xl border border-slate-150 bg-white p-5 shadow-sm md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">Thư viện đề thi</span>
                <h3 className="mt-1 text-xl font-black tracking-tight text-slate-900">Chọn chứng chỉ cần quản lý</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {certificates.length} chứng chỉ đang có trên hệ thống. Chọn một chứng chỉ để xem, nhập hoặc chỉnh sửa câu hỏi.
                </p>
              </div>
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={certificateSearchQuery}
                  onChange={(event) => setCertificateSearchQuery(event.target.value)}
                  placeholder="Tìm theo mã, tên hoặc mô tả chứng chỉ..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm font-semibold text-slate-800 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>
            </div>
          </div>

          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredCertificates.map((certificate) => {
                const isCustomCertificate = !systemCertificateIds.includes(certificate.id);
                const questionCount = certificateQuestionCounts[certificate.id];
                return (
                  <article
                    key={certificate.id}
                    className="group flex min-h-72 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/60"
                  >
                    <div className={`relative min-h-24 overflow-hidden p-5 text-white ${certificate.colorClass}`}>
                      <div className="absolute -right-5 -top-6 h-24 w-24 rounded-full border-[16px] border-white/10" />
                      <div className="relative flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-white/20 px-2 py-1 font-mono text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
                              {certificate.code}
                            </span>
                            {isCustomCertificate && (
                              <span className="rounded-md bg-emerald-300/20 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-emerald-50">
                                Đã import
                              </span>
                            )}
                            {certificate.isDisabled && (
                              <span className="rounded-md bg-rose-400/25 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                                Đang ẩn
                              </span>
                            )}
                          </div>
                          <h4 className="mt-3 line-clamp-2 text-base font-black leading-snug">{certificate.name}</h4>
                        </div>
                        <BookOpen className="h-8 w-8 shrink-0 text-white/70" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="line-clamp-3 min-h-12 text-xs leading-relaxed text-slate-500">{certificate.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-bold text-slate-600">
                        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5">{certificate.difficulty}</span>
                        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5">{certificate.estimatedHours}</span>
                        <span className="rounded-lg border border-indigo-100 bg-indigo-50 px-2.5 py-1.5 text-indigo-700">
                          {questionCount === undefined ? 'Đang đếm...' : `${questionCount} câu`}
                        </span>
                      </div>

                      <div className="mt-auto flex gap-2 pt-5">
                        <button
                          type="button"
                          onClick={() => {
                            onSelectCert(certificate.id);
                            setQuestionWorkspaceView('editor');
                            setSearchQuery('');
                            setCategoryFilter('All');
                            setExpandedQuestionId(null);
                          }}
                          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-black text-white transition hover:bg-indigo-600"
                        >
                          <Edit3 className="h-4 w-4" />
                          Quản lý câu hỏi
                        </button>
                        {isCustomCertificate && (
                          <button
                            type="button"
                            onClick={() => onDeleteCertificate(certificate.id)}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                            title={`Xóa chứng chỉ ${certificate.code}`}
                            aria-label={`Xóa chứng chỉ ${certificate.code}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-300" />
              <h3 className="mt-3 text-sm font-black text-slate-800">Không tìm thấy chứng chỉ phù hợp</h3>
              <p className="mt-1 text-xs text-slate-500">Thử tìm bằng mã chứng chỉ hoặc một phần tên khác.</p>
              <button
                type="button"
                onClick={() => setCertificateSearchQuery('')}
                className="mt-4 rounded-xl bg-indigo-50 px-4 py-2 text-xs font-black text-indigo-700 hover:bg-indigo-100"
              >
                Xóa từ khóa tìm kiếm
              </button>
            </div>
          )}
        </div>
      )}

      {adminTab === 'questions' && questionWorkspaceView === 'editor' && (
        <div className="grid grid-cols-1 gap-6 items-start">

        {/* RIGHT COLUMN: Question management block */}
        <div className="space-y-5">
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-150 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQuestionWorkspaceView('catalog');
                  setIsNewCertFormOpen(false);
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                title="Quay lại danh sách chứng chỉ"
                aria-label="Quay lại danh sách chứng chỉ"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-indigo-600">{activeCert?.code || 'Chứng chỉ mới'}</span>
                  {activeCert && (
                    <span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-600">{questions.length} câu hỏi</span>
                  )}
                </div>
                <h3 className="truncate text-sm font-black text-slate-900">{activeCert?.name || 'Tạo chứng chỉ mới'}</h3>
                <button
                  type="button"
                  onClick={() => setQuestionWorkspaceView('catalog')}
                  className="mt-1 text-[10px] font-bold text-slate-400 hover:text-indigo-600"
                >
                  ← Danh sách chứng chỉ
                </button>
              </div>
            </div>
            {canDeleteActiveCertificate && !isNewCertFormOpen && (
              <button
                type="button"
                onClick={() => onDeleteCertificate(activeCert.id)}
                className="flex min-h-10 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 text-[11px] font-black text-rose-700 transition-colors hover:bg-rose-100"
              >
                <Trash2 className="h-4 w-4" />
                Xóa chứng chỉ đã import
              </button>
            )}
          </div>

          {/* Certificate Generation Form inside admin area */}
          {isNewCertFormOpen && (
            <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-md space-y-5 animate-in slide-in-from-top-4 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Plus className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">KHỞI TẠO CHỨNG CHỈ MÔN HỌC MỚI</h3>
                </div>
                <button 
                  onClick={() => setIsNewCertFormOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Mã chứng chỉ</label>
                  <input
                    type="text"
                    placeholder="ví dụ: PL-300"
                    value={newCertCode}
                    onChange={(e) => setNewCertCode(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-500/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Tên chứng chỉ</label>
                  <input
                    type="text"
                    placeholder="ví dụ: Power BI Data Analyst"
                    value={newCertName}
                    onChange={(e) => setNewCertName(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-500/30"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Mô tả tóm tắt</label>
                <textarea
                  placeholder="Mô tả tóm tắt..."
                  rows={2}
                  value={newCertDesc}
                  onChange={(e) => setNewCertDesc(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-500/30"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-1">Cấp độ</label>
                  <select
                    value={newCertDiff}
                    onChange={(e) => setNewCertDiff(e.target.value as any)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-bold"
                  >
                    <option value="Cơ bản">Cơ bản</option>
                    <option value="Trung cấp">Trung cấp</option>
                    <option value="Nâng cao">Nâng cao</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-1">Thời lượng học</label>
                  <input
                    type="text"
                    value={newCertHours}
                    onChange={(e) => setNewCertHours(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-1">Biểu tượng</label>
                  <select
                    value={newCertIcon}
                    onChange={(e) => setNewCertIcon(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-bold"
                  >
                    <option value="BookOpen">Quyển sách</option>
                    <option value="Trophy">Cúp vàng</option>
                    <option value="Zap">Tia sét</option>
                    <option value="Award">Huy chương</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Bộ câu hỏi trắc nghiệm đính kèm (Mảng JSON - Question[])</label>
                <textarea
                  placeholder="Dán mã mảng JSON [] câu hỏi nếu có sẵn, hoặc để [] để tải rỗng..."
                  rows={4}
                  value={newCertQuestionsText}
                  onChange={(e) => setNewCertQuestionsText(e.target.value)}
                  className="w-full text-xs font-mono p-3 bg-slate-900 text-emerald-400 rounded-xl border border-slate-800"
                />
              </div>

              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setIsNewCertFormOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                >
                  Bỏ qua
                </button>
                <button
                  onClick={handleCreateNewCert}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl text-xs transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Tạo Chứng Chỉ
                </button>
              </div>
            </div>
          )}

          {/* Search, Filter options, Add question CTA bar */}
          <div className="bg-white border border-slate-150 rounded-2xl p-4.5 shadow-sm space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              {/* Dynamic search field */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm kiếm nội dung đề, từ khóa giải thích..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:outline-none"
                />
              </div>

              {/* Category Filter selector */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Chuyên đề:</span>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="text-xs font-bold py-2 bg-slate-100 border border-slate-200 rounded-xl px-2.5 max-w-[150px] truncate focus:outline-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat === 'All' ? 'Tất cả chủ đề' : cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Trạng thái:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
                  className="text-xs font-bold py-2 bg-slate-100 border border-slate-200 rounded-xl px-2.5 focus:outline-none"
                >
                  <option value="All">Tất cả</option>
                  <option value="draft">Bản nháp</option>
                  <option value="review">Chờ duyệt</option>
                  <option value="published">Đã xuất bản</option>
                  <option value="archived">Đã lưu trữ</option>
                </select>
              </div>

              {/* Action Buttons: Batch Upload & Add Question */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowImportHistory(value => !value)}
                  className="flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-black text-slate-700 transition hover:bg-slate-100"
                  title="Xem và rollback các lần import gần đây"
                >
                  <History className="h-4 w-4" />
                  Lịch sử import
                </button>
                <button
                  onClick={() => setIsBulkUploadOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:shadow-md cursor-pointer transition-all shadow-sm"
                  title="Nạp hàng loạt câu hỏi từ Excel, Word, Text hoặc JSON"
                >
                  <Upload className="w-4 h-4" />
                  Nạp Thêm Câu Hỏi
                </button>

                <button
                  onClick={handleOpenAddQuestion}
                  className="bg-indigo-650 hover:bg-indigo-700 text-white font-black text-xs px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:shadow-md cursor-pointer transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Tạo Câu Mới
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Đang lọc: <strong className="text-slate-600">{filteredQuestions.length} câu</strong> trên tổng số {questions.length} câu hỏi.</span>
              <button 
                onClick={loadQuestions}
                className="flex items-center gap-1 text-indigo-600 font-bold hover:underline"
                title="Đồng bộ danh sách từ máy chủ"
              >
                <RefreshCw className="w-3 h-3" /> Làm mới
              </button>
            </div>
          </div>

          {!isNewCertFormOpen && (
            <section className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-150 bg-white p-4 shadow-sm md:grid-cols-5" aria-label="Chất lượng nội dung">
              {[
                { label: 'Đã xuất bản', value: contentQuality.published, tone: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
                { label: 'Cần duyệt', value: contentQuality.needsReview, tone: 'text-amber-700 bg-amber-50 border-amber-100' },
                { label: 'Thiếu giải thích', value: contentQuality.missingExplanation, tone: 'text-rose-700 bg-rose-50 border-rose-100' },
                { label: 'Thiếu nguồn', value: contentQuality.missingSource, tone: 'text-indigo-700 bg-indigo-50 border-indigo-100' },
                { label: 'Lỗi định dạng', value: contentQuality.formatIssues, tone: 'text-slate-700 bg-slate-50 border-slate-200' },
              ].map(metric => (
                <div key={metric.label} className={`rounded-2xl border p-3 ${metric.tone}`}>
                  <p className="text-2xl font-black">{metric.value}</p>
                  <p className="mt-1 text-[9px] font-black uppercase tracking-wider opacity-80">{metric.label}</p>
                </div>
              ))}
            </section>
          )}

          {showImportHistory && !isNewCertFormOpen && (
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-black text-slate-900">Lịch sử import & rollback</h4>
                  <p className="mt-1 text-[10px] text-slate-500">Mỗi lần import lưu snapshot ngân hàng câu hỏi ngay trước khi thay đổi.</p>
                </div>
                <button type="button" onClick={reloadImportHistory} className="flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50" aria-label="Làm mới lịch sử import">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              {importBatches.length ? (
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  {importBatches.map(batch => (
                    <div key={batch.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div>
                        <p className="text-xs font-black text-slate-800">{batch.previousCount} → {batch.nextCount} câu</p>
                        <p className="mt-1 text-[10px] text-slate-500">{new Date(batch.createdAt).toLocaleString('vi-VN')}</p>
                      </div>
                      <button type="button" onClick={() => handleRollbackImport(batch)} disabled={rollbackBatchId !== null} className="min-h-10 rounded-xl border border-amber-200 bg-amber-50 px-3 text-[10px] font-black text-amber-800 hover:bg-amber-100 disabled:opacity-40">
                        {rollbackBatchId === batch.id ? 'Đang khôi phục...' : 'Rollback'}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-xl border border-dashed border-slate-200 p-4 text-center text-xs text-slate-400">Chưa có lịch sử import hoặc migration chưa được chạy.</p>
              )}
            </section>
          )}

          {/* Question Form Dialog / Modal Overlay */}
          {isQuestionFormOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl space-y-5 w-full max-w-2xl my-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 px-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-black">Question Form</div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {editingQuestion ? `SỬA CÂU HỎI #${editingQuestion.questionNumber}` : 'THÊM MỘT CÂU HỎI MỚI'}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setIsQuestionFormOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  
                  {/* Number & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Thứ tự câu số (*)</label>
                      <input
                        type="number"
                        value={qNum}
                        onChange={(e) => setQNum(parseInt(e.target.value) || 0)}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-400 font-bold"
                      />
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Chuyên đề / Danh mục (*)</label>
                      <input
                        type="text"
                        placeholder="ví dụ: Cloud Security Concepts, Features & Settings..."
                        value={qCategory}
                        onChange={(e) => setQCategory(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1"
                      />
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="space-y-1">
                    <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Nội dung câu hỏi (*)</label>
                    <textarea
                      rows={4}
                      placeholder="Nhập nội dung đầy đủ câu hỏi ôn thi..."
                      value={qText}
                      onChange={(e) => setQText(e.target.value)}
                      className="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-400"
                    />
                  </div>

                  {/* Image Attachment panel */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[9.5px] font-black text-slate-500 uppercase tracking-wider block">Ảnh đính kèm (Dành cho câu hỏi sơ đồ, sơ đồ mạng, bảng biểu)</label>
                      {qImageUrl && (
                        <button
                          type="button"
                          onClick={() => setQImageUrl('')}
                          className="text-[10px] text-rose-500 hover:text-rose-700 font-extrabold flex items-center gap-1"
                        >
                          <X className="w-3.5 h-3.5 shrink-0" />
                          Xóa ảnh
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-medium block">Cách 1: Nhập đường dẫn URL ảnh</span>
                        <input
                          type="text"
                          placeholder="https://example.com/diagram.png"
                          value={qImageUrl.startsWith('data:') ? '' : qImageUrl}
                          onChange={(e) => setQImageUrl(e.target.value)}
                          className="w-full text-xs px-3 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-1"
                        />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-medium block">Cách 2: Chọn tệp hoặc Dán ảnh (Ctrl+V)</span>
                        <div className="relative">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageFileChange}
                            className="hidden"
                            id="admin-image-upload"
                          />
                          <label
                            htmlFor="admin-image-upload"
                            className="w-full text-xs px-3.5 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl cursor-pointer flex items-center justify-center gap-1.5 transition-colors font-medium text-slate-600"
                          >
                            <FolderOpen className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>Tải ảnh lên / Chọn file...</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Paste receiver */}
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="👉 Click vào đây rồi nhấn Ctrl+V (Dán) để dán ảnh đã chụp màn hình trực tiếp từ clipboard..."
                        onPaste={handleImagePaste}
                        className="w-full text-xs px-3 py-2.5 bg-white/70 border border-dashed border-slate-300 rounded-xl focus:border-indigo-400 focus:bg-white text-center text-slate-500 font-medium placeholder:text-slate-400"
                      />
                    </div>

                    {/* Image Preview */}
                    {qImageUrl && (
                      <div className="bg-white p-2.5 rounded-xl border border-slate-150 flex flex-col items-center gap-2">
                        <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          Xem trước ảnh đính kèm:
                        </span>
                        <img
                          src={qImageUrl}
                          alt="Question Preview"
                          referrerPolicy="no-referrer"
                          className="max-h-36 rounded-lg object-contain border border-slate-100 shadow-sm"
                        />
                        {qImageUrl.startsWith('data:') && (
                          <span className="text-[9px] text-indigo-500 font-mono">Đã nén Base64 (Lưu trực tiếp trong câu hỏi)</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Options Creator */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Thiết lập các Phương án & Đáp án đúng (*)</label>
                      <button
                        type="button"
                        onClick={addOptionField}
                        className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all"
                      >
                        <PlusCircle className="w-3.5 h-3.5" />
                        Thêm phương án
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {qOptions.map((opt, i) => {
                        const isCorrect = qCorrectAnswers.includes(opt.key);
                        return (
                          <div key={opt.key} className="flex items-center gap-2.5">
                            {/* Toggle Key representation indicator */}
                            <button
                              type="button"
                              onClick={() => toggleCorrectAnswer(opt.key)}
                              title={isCorrect ? 'Click để bỏ tích đáp án đúng' : 'Click để tích thành đáp án đúng'}
                              className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-black transition-all border ${
                                isCorrect 
                                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm shadow-emerald-500/20' 
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-500 border-slate-200'
                              }`}
                            >
                              {opt.key}
                            </button>
                            
                            {/* Option text input */}
                            <input
                              type="text"
                              placeholder={`Nội dung phương án ${opt.key}...`}
                              value={opt.text}
                              onChange={(e) => {
                                const txt = e.target.value;
                                setQOptions(prev => prev.map(o => o.key === opt.key ? { ...o, text: txt } : o));
                              }}
                              className="flex-1 text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                            />

                            {/* Delete option */}
                            {qOptions.length > 2 && (
                              <button
                                type="button"
                                onClick={() => removeOptionField(opt.key)}
                                className="p-2 text-slate-300 hover:text-rose-500 rounded-lg hover:bg-rose-50"
                                title="Loại bỏ phương án này"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[10.5px] text-slate-400 font-medium">💡 Mẹo: Nhấp vào ký tự tròn <strong className="text-slate-600 font-black">A, B, C, D...</strong> để thiết lập hoặc đánh dấu đó là đáp án đúng (có thể chọn nhiều đáp án cho câu hỏi Multi-select).</p>
                  </div>

                  {/* Explanation text */}
                  <div className="space-y-1">
                    <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Giải nghĩa chi tiết tiếng Việt</label>
                    <textarea
                      rows={3}
                      placeholder="Giải thích vì sao phương án đó chính xác..."
                      value={qExplanation}
                      onChange={(e) => setQExplanation(e.target.value)}
                      className="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-400"
                    />
                  </div>

                  {/* Editorial workflow and provenance */}
                  <div className="space-y-4 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[9.5px] font-black uppercase tracking-wider text-indigo-700">Kiểm duyệt & nguồn nội dung</p>
                        <p className="mt-0.5 text-[10px] text-slate-500">Chỉ câu đã xuất bản mới nên xuất hiện trong bản public sau khi chạy migration bảo mật.</p>
                      </div>
                      <select
                        value={qStatus}
                        onChange={event => setQStatus(event.target.value as NonNullable<Question['status']>)}
                        className="min-h-10 rounded-xl border border-indigo-200 bg-white px-3 text-xs font-black text-indigo-800"
                      >
                        <option value="draft">Bản nháp</option>
                        <option value="review">Chờ duyệt</option>
                        <option value="published">Đã xuất bản</option>
                        <option value="archived">Lưu trữ</option>
                      </select>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="space-y-1">
                        <span className="block text-[9px] font-black uppercase tracking-wider text-slate-500">Tên nguồn</span>
                        <input type="text" value={qSourceTitle} onChange={event => setQSourceTitle(event.target.value)} placeholder="Microsoft Learn / tài liệu chính thức..." className="min-h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs" />
                      </label>
                      <label className="space-y-1">
                        <span className="block text-[9px] font-black uppercase tracking-wider text-slate-500">Ngày kiểm chứng gần nhất</span>
                        <input type="date" value={qLastVerifiedAt} onChange={event => setQLastVerifiedAt(event.target.value)} className="min-h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs" />
                      </label>
                    </div>
                    <label className="space-y-1">
                      <span className="block text-[9px] font-black uppercase tracking-wider text-slate-500">URL tham khảo</span>
                      <input type="url" value={qSourceUrl} onChange={event => setQSourceUrl(event.target.value)} placeholder="https://learn.microsoft.com/..." className="min-h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs" />
                    </label>
                  </div>

                  {/* Tags input */}
                  <div className="space-y-1">
                    <label className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block">Thẻ từ khóa / Tags (Phân cách bởi dấu phẩy)</label>
                    <input
                      type="text"
                      placeholder="ví dụ: Power Platform, AI Builder, Copilot..."
                      value={qTagsString}
                      onChange={(e) => setQTagsString(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1"
                    />
                  </div>
                </div>

                {/* Actions submit */}
                <div className="flex gap-2.5 justify-end pt-3">
                  <button
                    type="button"
                    onClick={() => setIsQuestionFormOpen(false)}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl text-xs transition-colors"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveQuestion}
                    disabled={isLoading}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-black rounded-xl text-xs transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    {isLoading ? 'Đang lưu...' : 'Lưu Thay Đổi'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bulk Questions Upload Modal */}
          {isBulkUploadOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 w-full max-w-3xl my-6 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-tight">
                        NẠP THÊM CÂU HỎI VÀO CHỨNG CHỈ {activeCert?.code || activeCertId}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                        Hiện có: <strong className="text-slate-700 font-bold">{questions.length} câu hỏi</strong> trong hệ thống. Hỗ trợ Excel an toàn (.xlsx, .csv), Văn bản thô, JSON hoặc Excel + Tệp ảnh.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsBulkUploadOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Embedded Rich Importer */}
                <CustomQuestionsImport
                  currentCount={questions.length}
                  existingQuestions={questions}
                  onImport={handleBulkImportQuestions}
                />
              </div>
            </div>
          )}

          {/* List of questions currently in certificate */}
          {isLoading && questions.length === 0 ? (
            <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center text-slate-400 animate-pulse">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-3 text-indigo-500" />
              <span>Đang tải danh sách câu hỏi môn học...</span>
            </div>
          ) : filteredQuestions.length === 0 ? (
            <div className="bg-white border border-slate-150 rounded-2xl p-12 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-3 text-slate-300" />
              <p className="font-extrabold text-slate-800 text-sm">Không tìm thấy câu hỏi nào</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Vui lòng thử gõ từ khóa khác hoặc click "Tạo Câu Hỏi Mới" để thiết lập.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Pagination Stats bar */}
              <div className="bg-slate-50 border border-slate-150 rounded-2xl p-3 px-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div className="font-medium">
                  Hiển thị <span className="font-black text-slate-800">{(currentPage - 1) * questionsPerPage + 1}</span> - <span className="font-black text-slate-800">{Math.min(currentPage * questionsPerPage, filteredQuestions.length)}</span> trong số <span className="font-black text-slate-800">{filteredQuestions.length}</span> câu hỏi được lọc
                </div>
                <div className="font-mono text-[11px] font-bold bg-white border border-slate-100 rounded-lg px-2.5 py-1 shadow-xs">
                  Trang <span className="text-indigo-650 font-black">{currentPage}</span> / {Math.ceil(filteredQuestions.length / questionsPerPage) || 1}
                </div>
              </div>

              <div className="space-y-3">
                {filteredQuestions.slice((currentPage - 1) * questionsPerPage, currentPage * questionsPerPage).map((q) => {
                  const isExpanded = expandedQuestionId === q.id;
                  return (
                    <div 
                      key={q.id} 
                      className="bg-white border border-slate-150 rounded-2xl shadow-xs overflow-hidden transition-all hover:border-slate-300"
                    >
                      {/* Header bar click to expand/collapse */}
                      <div 
                        onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                        className="p-4 flex items-start justify-between gap-4 cursor-pointer select-none"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="p-1 px-1.5 bg-slate-100 text-slate-700 font-mono text-[10px] font-black rounded-md leading-none">
                              Câu {q.questionNumber}
                            </span>
                            <span className="bg-indigo-50 text-indigo-650 text-[10px] font-bold px-2 py-0.5 rounded-full">
                              {q.category}
                            </span>
                            <span className="bg-violet-50 text-violet-700 text-[9.5px] font-black px-2 py-0.5 rounded-full">
                              {QUESTION_TYPE_LABELS[q.questionType || 'multiple_choice']}
                            </span>
                            <span className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                              (q.status || 'published') === 'published'
                                ? 'bg-emerald-50 text-emerald-700'
                                : (q.status || 'published') === 'review'
                                  ? 'bg-amber-50 text-amber-700'
                                  : (q.status || 'published') === 'archived'
                                    ? 'bg-slate-100 text-slate-500'
                                    : 'bg-rose-50 text-rose-700'
                            }`}>
                              {{ draft: 'Bản nháp', review: 'Chờ duyệt', published: 'Đã xuất bản', archived: 'Lưu trữ' }[q.status || 'published']}
                            </span>
                            {q.tags && q.tags.slice(0, 2).map(t => (
                              <span key={t} className="bg-slate-100 text-slate-550 text-[9.5px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Tag className="w-2.5 h-2.5 opacity-55" />
                                {t}
                              </span>
                            ))}
                            {(q.tags?.length || 0) > 2 && (
                              <span className="text-[9px] font-bold text-slate-400">+{q.tags!.length - 2} tag</span>
                            )}
                          </div>
                          <h4 className="text-xs font-bold text-slate-800 mt-1.5 leading-relaxed truncate-3-lines">
                            {q.text}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSandboxQuestion(q);
                            }}
                            className="flex min-h-11 items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 text-[10px] font-black text-indigo-700 transition-colors hover:bg-indigo-100"
                            title="Thao tác thử như lúc học"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            <span className="hidden xl:inline">Preview</span>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEditQuestion(q);
                            }}
                            className="flex min-h-11 min-w-11 items-center justify-center border border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-colors cursor-pointer"
                            title="Chỉnh sửa câu hỏi"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteQuestion(q.id);
                            }}
                            className="flex min-h-11 min-w-11 items-center justify-center border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                            title="Xóa câu hỏi"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="text-slate-400 p-1">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </div>
                      </div>

                      {/* Expandable options details */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1.5 border-t border-slate-100 bg-slate-50/45 space-y-4">
                          
                          <div className="space-y-2">
                            <span className="block text-[10px] uppercase font-black tracking-wider text-slate-400">Xem trước đúng định dạng khi học:</span>
                            <AdminQuestionTypePreview question={q} />
                          </div>

                          {/* Explanation display block */}
                          {q.explanation && (
                            <div className="space-y-1.5 bg-white border border-slate-150 rounded-xl p-3.5">
                              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">Giải nghĩa chi tiết:</span>
                              <p className="text-xs leading-relaxed text-slate-655 font-semibold">
                                {q.explanation}
                              </p>
                            </div>
                          )}

                          {(q.sourceTitle || q.sourceUrl || q.lastVerifiedAt) && (
                            <div className="grid gap-2 rounded-xl border border-indigo-100 bg-indigo-50/40 p-3.5 text-xs text-slate-600 sm:grid-cols-2">
                              <p><span className="font-black text-indigo-800">Nguồn:</span> {q.sourceTitle || 'Chưa đặt tên nguồn'}</p>
                              <p><span className="font-black text-indigo-800">Kiểm chứng:</span> {q.lastVerifiedAt ? new Date(q.lastVerifiedAt).toLocaleDateString('vi-VN') : 'Chưa có ngày'}</p>
                              {isSafeExternalUrl(q.sourceUrl) && <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="truncate font-bold text-indigo-700 hover:underline sm:col-span-2">{q.sourceUrl}</a>}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Pagination Controls bar with Ellipsis support */}
              {(() => {
                const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
                if (totalPages <= 1) return null;

                const pages: (number | string)[] = [];
                for (let i = 1; i <= totalPages; i++) {
                  if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    pages.push(i);
                  } else if (pages[pages.length - 1] !== '...') {
                    pages.push('...');
                  }
                }

                return (
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3.5 py-2 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 border border-slate-200 text-slate-700 disabled:hover:bg-slate-50 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Trước
                    </button>

                    <div className="hidden sm:flex items-center gap-1.5">
                      {pages.map((p, idx) => {
                        if (p === '...') {
                          return (
                            <span key={`ell-${idx}`} className="px-2.5 text-slate-400 font-bold text-xs select-none">
                              ...
                            </span>
                          );
                        }

                        const isCurrent = p === currentPage;
                        return (
                          <button
                            key={`page-${p}`}
                            onClick={() => setCurrentPage(Number(p))}
                            className={`w-8.5 h-8.5 flex items-center justify-center rounded-xl text-xs font-black transition-all border cursor-pointer ${
                              isCurrent
                                ? 'bg-indigo-600 border-indigo-650 text-white shadow-sm shadow-indigo-500/10'
                                : 'bg-white border-slate-150 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                            }`}
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3.5 py-2 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 border border-slate-200 text-slate-700 disabled:hover:bg-slate-50 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      Sau
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })()}
            </div>
          )}

        </div>
      </div>
      )}

      {adminTab === 'reports' && (
        <div className="space-y-5 animate-fadeIn">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-rose-600">Content inbox</span>
                <h3 className="mt-1 text-xl font-black text-slate-900">Báo lỗi từ người học</h3>
                <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-500">
                  Tập trung phản hồi sai đáp án, lỗi định dạng và nội dung lỗi thời vào một hàng đợi kiểm duyệt có trạng thái rõ ràng.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={reportStatusFilter}
                  onChange={event => setReportStatusFilter(event.target.value as 'All' | QuestionReportStatus)}
                  className="min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-bold text-slate-700 outline-none focus:border-indigo-400"
                  aria-label="Lọc trạng thái báo lỗi"
                >
                  <option value="All">Tất cả trạng thái</option>
                  {(Object.keys(reportStatusLabels) as QuestionReportStatus[]).map(status => (
                    <option key={status} value={status}>{reportStatusLabels[status]}</option>
                  ))}
                </select>
                <button type="button" onClick={loadQuestionReports} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-black text-slate-600 hover:bg-slate-50">
                  <RefreshCw className={`h-4 w-4 ${isReportsLoading ? 'animate-spin' : ''}`} /> Làm mới
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {(Object.keys(reportStatusLabels) as QuestionReportStatus[]).map(status => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setReportStatusFilter(status)}
                  className={`min-h-20 rounded-2xl border p-3 text-left transition ${reportStatusFilter === status ? 'border-indigo-300 bg-indigo-50' : 'border-slate-150 bg-slate-50 hover:border-slate-300'}`}
                >
                  <span className="block text-2xl font-black text-slate-900">{questionReports.filter(report => report.status === status).length}</span>
                  <span className="text-[10px] font-black uppercase tracking-wide text-slate-500">{reportStatusLabels[status]}</span>
                </button>
              ))}
            </div>
          </section>

          {isReportsLoading ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-sm font-bold text-slate-500">Đang tải báo lỗi…</div>
          ) : filteredQuestionReports.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-250 bg-white p-10 text-center">
              <ShieldCheck className="mx-auto h-8 w-8 text-emerald-500" />
              <p className="mt-3 text-sm font-black text-slate-800">Không có báo lỗi trong nhóm này</p>
              <p className="mt-1 text-xs text-slate-500">Hàng đợi nội dung đang sạch.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredQuestionReports.map(report => {
                const cert = certificates.find(item => item.id === report.certId);
                return (
                  <article key={report.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-black uppercase text-rose-700">{reportTypeLabels[report.reportType]}</span>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black text-slate-600">{cert?.code || report.certId} · Câu {report.questionNumber}</span>
                          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-black text-indigo-700">{reportStatusLabels[report.status]}</span>
                        </div>
                        <p className="whitespace-pre-wrap text-sm font-semibold leading-relaxed text-slate-800">{report.details}</p>
                        <p className="text-[11px] text-slate-400">
                          {report.reporterName || 'Người học ẩn danh'} · {new Date(report.createdAt).toLocaleString('vi-VN')}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          onSelectCert(report.certId);
                          setSearchQuery(String(report.questionNumber));
                          setQuestionWorkspaceView('editor');
                          setAdminTab('questions');
                        }}
                        className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-3 text-xs font-black text-indigo-700 hover:bg-indigo-100"
                      >
                        <Eye className="h-4 w-4" /> Mở câu hỏi
                      </button>
                    </div>

                    <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 lg:grid-cols-[1fr_auto]">
                      <input
                        value={reportResolutionNotes[report.id] || ''}
                        onChange={event => setReportResolutionNotes(previous => ({ ...previous, [report.id]: event.target.value }))}
                        placeholder="Ghi chú cách xử lý (không bắt buộc)…"
                        className="min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-indigo-400 focus:bg-white"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <button type="button" onClick={() => handleUpdateQuestionReport(report, 'reviewing')} className="min-h-11 rounded-xl border border-amber-200 bg-amber-50 px-3 text-[10px] font-black text-amber-800 hover:bg-amber-100">Đang xem</button>
                        <button type="button" onClick={() => handleUpdateQuestionReport(report, 'resolved')} className="min-h-11 rounded-xl border border-emerald-200 bg-emerald-50 px-3 text-[10px] font-black text-emerald-800 hover:bg-emerald-100">Đã xử lý</button>
                        <button type="button" onClick={() => handleUpdateQuestionReport(report, 'dismissed')} className="min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-[10px] font-black text-slate-600 hover:bg-slate-100">Bỏ qua</button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Admin Panel User Progress management panel */}
      {adminTab === 'user_progress' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Status summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tổng số bản ghi tiến trình</span>
              <span className="text-2xl font-black text-slate-900 block mt-1">{filteredUserProgress.length} môn</span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Bản ghi theo dõi môn học của học viên</span>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tổng số câu trả lời</span>
              <span className="text-2xl font-black text-indigo-600 block mt-1">
                {filteredUserProgress.reduce((acc, p) => acc + (p.answered_count || 0), 0)} câu
              </span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Tổng số lượt trả lời của học viên</span>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Độ chính xác trung bình</span>
              <span className="text-2xl font-black text-emerald-600 block mt-1">
                {(() => {
                  const totalAnswered = filteredUserProgress.reduce((acc, p) => acc + (p.answered_count || 0), 0);
                  const totalCorrect = filteredUserProgress.reduce((acc, p) => acc + (p.correct_count || 0), 0);
                  return totalAnswered > 0 ? `${Math.round((totalCorrect / totalAnswered) * 100)}%` : '0%';
                })()}
              </span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Tỷ lệ trả lời đúng tích lũy</span>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Chuỗi liên tục cao nhất</span>
              <span className="text-2xl font-black text-rose-600 block mt-1">
                {filteredUserProgress.length > 0
                  ? `${Math.max(...filteredUserProgress.map(p => p.streak || 0))} ngày`
                  : '0 ngày'}
              </span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Chuỗi học tập kỷ lục của học viên</span>
            </div>
          </div>

          {/* Filtering bar and action buttons */}
          <div className="bg-white border border-slate-150 rounded-2xl p-4.5 shadow-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Left filters */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Tìm theo tên học viên..."
                    value={progressSearchQuery}
                    onChange={(e) => setProgressSearchQuery(e.target.value)}
                    className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:outline-none font-medium"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono shrink-0">Môn học:</span>
                  <select
                    value={progressCertFilter}
                    onChange={(e) => setProgressCertFilter(e.target.value)}
                    className="text-xs font-bold py-2 bg-slate-100 border border-slate-200 rounded-xl px-2.5 max-w-[150px] focus:outline-none"
                  >
                    <option value="All">Tất cả môn</option>
                    {certificates.map(c => (
                      <option key={c.id} value={c.id}>{c.code}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2 self-end lg:self-auto">
                <button
                  onClick={loadUserProgress}
                  disabled={isProgressLoading}
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all cursor-pointer border border-slate-200"
                  title="Tải lại dữ liệu"
                >
                  <RefreshCw className={`w-4 h-4 ${isProgressLoading ? 'animate-spin' : ''}`} />
                </button>

                <button
                  onClick={handleExportProgressToCsv}
                  className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-emerald-250 shadow-xs"
                  title="Xuất toàn bộ tiến trình học viên ra tệp CSV"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  Xuất Excel CSV
                </button>

                <button
                  onClick={handleClearAllUserProgress}
                  className="text-xs bg-rose-50 hover:bg-rose-100 text-rose-700 font-extrabold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-rose-200 shadow-xs"
                  title="Xóa toàn bộ tiến trình học tập"
                >
                  <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                  Xóa Hết Tiến Trình
                </button>
              </div>
            </div>
          </div>

          {/* Table display */}
          <div className="bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-sm">
            {isProgressLoading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
                <span className="text-xs font-semibold text-slate-500">Đang đồng bộ tiến độ học viên...</span>
              </div>
            ) : filteredUserProgress.length === 0 ? (
              <div className="text-center py-20 space-y-4 max-w-lg mx-auto px-4">
                <div className="bg-slate-50 text-slate-400 p-4 rounded-full w-14 h-14 mx-auto flex items-center justify-center border border-slate-100 shadow-xs">
                  <History className="w-7 h-7 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800">Không tìm thấy bản ghi tiến độ nào</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Hệ thống chưa ghi nhận học viên nào có tiến trình luyện tập phù hợp với bộ lọc tìm kiếm.
                  </p>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6">Học Viên</th>
                      <th className="py-4 px-6">Môn Luyện Tập</th>
                      <th className="py-4 px-6">Tiến Độ Làm Bài</th>
                      <th className="py-4 px-6">Đúng / Sai</th>
                      <th className="py-4 px-6">Tỷ Lệ Chính Xác</th>
                      <th className="py-4 px-6">Chuỗi Học Tập</th>
                      <th className="py-4 px-6">Đã Lưu</th>
                      <th className="py-4 px-6">Cập Nhật Cuối</th>
                      <th className="py-4 px-6 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredUserProgress.map((p, idx) => {
                      const cert = certificates.find(c => c.id === p.cert_id);
                      const certCode = cert ? cert.code : p.cert_id;
                      
                      // Use the authoritative Database count instead of a stale browser cache.
                      const totalQuestionsCount = certificateQuestionCounts[p.cert_id] || 50;

                      const completionPercent = Math.min(Math.round(((p.answered_count || 0) / totalQuestionsCount) * 100), 100);
                      const accuracyPercent = p.answered_count > 0 
                        ? Math.round((p.correct_count / p.answered_count) * 100)
                        : 0;
                      
                      return (
                        <tr key={`${p.username}_${p.cert_id}_${idx}`} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3.5 px-6 font-semibold text-slate-800">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-indigo-700 flex items-center justify-center font-bold text-xs uppercase shadow-xs">
                                {p.username.slice(0, 2)}
                              </div>
                              <span className="font-black text-slate-900 tracking-tight">{p.username}</span>
                            </div>
                          </td>
                          
                          <td className="py-3.5 px-6 font-bold">
                            <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-150 text-indigo-700 font-mono text-[11px] uppercase">
                              {certCode}
                            </span>
                          </td>
                          
                          <td className="py-3.5 px-6 font-bold text-slate-800">
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2">
                                <span className="text-[12px] font-black">{completionPercent}%</span>
                                <span className="text-[10px] text-slate-400 font-semibold">({p.answered_count || 0}/{totalQuestionsCount} câu)</span>
                              </div>
                              <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className="h-full rounded-full bg-indigo-500"
                                  style={{ width: `${completionPercent}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          
                          <td className="py-3.5 px-6 text-slate-500 font-medium">
                            <div className="flex items-center gap-1.5 font-mono text-[11px]">
                              <span className="text-emerald-600 font-black">+{p.correct_count || 0}</span>
                              <span className="text-slate-300">/</span>
                              <span className="text-rose-500 font-black">-{p.incorrect_count || 0}</span>
                            </div>
                          </td>

                          <td className="py-3.5 px-6 text-slate-800 font-bold">
                            <span className={`inline-block px-2 py-0.5 rounded-md font-mono font-black text-xs ${
                              accuracyPercent >= 80 
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-150' 
                                : accuracyPercent >= 60 
                                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-150' 
                                  : 'bg-amber-50 text-amber-700 border border-amber-150'
                            }`}>
                              {accuracyPercent}%
                            </span>
                          </td>

                          <td className="py-3.5 px-6 text-slate-600 font-semibold">
                            <div className="flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span className="font-bold font-mono">{p.streak || 0} ngày</span>
                            </div>
                          </td>

                          <td className="py-3.5 px-6 text-slate-500 font-medium">
                            <span className="font-mono bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-semibold">
                              {p.bookmarked_question_ids ? p.bookmarked_question_ids.length : 0} câu
                            </span>
                          </td>
                          
                          <td className="py-3.5 px-6 text-slate-400 font-semibold">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              <span>{p.last_updated ? new Date(p.last_updated).toLocaleString('vi-VN') : 'N/A'}</span>
                            </div>
                          </td>
                          
                          <td className="py-3.5 px-6 text-right">
                            <button
                              onClick={() => handleDeleteUserProgress(p)}
                              className="p-1.5 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition-all cursor-pointer"
                              title="Xóa tiến trình môn này của học viên"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Admin Panel Exam History management panel */}
      {adminTab === 'exam_history' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Status summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tổng số lượt thi</span>
              <span className="text-2xl font-black text-slate-900 block mt-1">{filteredExamResults.length} lượt</span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Từ dữ liệu đồng bộ của các học viên</span>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tỷ lệ đạt trung bình</span>
              <span className="text-2xl font-black text-emerald-600 block mt-1">
                {filteredExamResults.length > 0 
                  ? `${Math.round(filteredExamResults.reduce((acc, r) => acc + r.accuracy, 0) / filteredExamResults.length)}%`
                  : '0%'}
              </span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Điểm trung bình của tất cả lượt thi</span>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tỷ lệ đỗ {"(>=70%)"}</span>
              <span className="text-2xl font-black text-indigo-600 block mt-1">
                {filteredExamResults.length > 0
                  ? `${Math.round((filteredExamResults.filter(r => r.accuracy >= 70).length / filteredExamResults.length) * 100)}%`
                  : '0%'}
              </span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Lượt thi có kết quả đạt yêu cầu</span>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Điểm cao nhất</span>
              <span className="text-2xl font-black text-rose-600 block mt-1">
                {filteredExamResults.length > 0
                  ? `${Math.max(...filteredExamResults.map(r => r.accuracy))}%`
                  : '0%'}
              </span>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">Kỷ lục điểm số cao nhất đạt được</span>
            </div>
          </div>

          {/* Filtering bar and action buttons */}
          <div className="bg-white border border-slate-150 rounded-2xl p-4.5 shadow-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Left filters */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Tìm theo tên học viên..."
                    value={historySearchQuery}
                    onChange={(e) => setHistorySearchQuery(e.target.value)}
                    className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:outline-none font-medium"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono shrink-0">Môn thi:</span>
                  <select
                    value={historyCertFilter}
                    onChange={(e) => setHistoryCertFilter(e.target.value)}
                    className="text-xs font-bold py-2 bg-slate-100 border border-slate-200 rounded-xl px-2.5 max-w-[150px] focus:outline-none"
                  >
                    <option value="All">Tất cả môn</option>
                    {certificates.map(c => (
                      <option key={c.id} value={c.id}>{c.code}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono shrink-0">Bộ nhớ:</span>
                  <select
                    value={historySyncMode}
                    onChange={(e) => setHistorySyncMode(e.target.value as 'both' | 'local_only')}
                    className="text-xs font-bold py-2 bg-slate-100 border border-slate-200 rounded-xl px-2.5 focus:outline-none text-slate-700"
                    title="Đồng bộ Supabase hoặc chỉ tải dữ liệu trình duyệt cục bộ"
                  >
                    <option value="both">Cloud & Trình duyệt</option>
                    <option value="local_only">Chỉ Trình duyệt</option>
                  </select>
                </div>
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2 self-end lg:self-auto">
                <button
                  onClick={loadExamResults}
                  disabled={isHistoryLoading}
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all cursor-pointer border border-slate-200"
                  title="Tải lại dữ liệu"
                >
                  <RefreshCw className={`w-4 h-4 ${isHistoryLoading ? 'animate-spin' : ''}`} />
                </button>

                <button
                  onClick={handleExportHistoryToCsv}
                  className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-emerald-250 shadow-xs"
                  title="Xuất toàn bộ lịch sử thi ra tệp Excel CSV"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  Xuất Excel CSV
                </button>

                <button
                  onClick={handleClearAllExamResults}
                  className="text-xs bg-rose-50 hover:bg-rose-100 text-rose-700 font-extrabold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-rose-200 shadow-xs"
                  title="Xóa toàn bộ lịch sử"
                >
                  <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                  Xóa Hết Lịch Sử
                </button>
              </div>
            </div>
          </div>

          {/* Table display */}
          <div className="bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-sm">
            {isHistoryLoading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
                <span className="text-xs font-semibold text-slate-500">Đang đồng bộ dữ liệu thi thử...</span>
              </div>
            ) : filteredExamResults.length === 0 ? (
              <div className="text-center py-20 space-y-4 max-w-lg mx-auto px-4">
                <div className="bg-slate-50 text-slate-400 p-4 rounded-full w-14 h-14 mx-auto flex items-center justify-center border border-slate-100 shadow-xs">
                  <Award className="w-7 h-7 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800">Không tìm thấy lịch sử thi thử nào</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Hệ thống chưa ghi nhận lượt thi thử nào khớp với bộ lọc. Hãy tham gia thi thử ở tab thi thử ngoài trang chính để tạo dữ liệu.
                  </p>
                </div>
                {historySyncMode === 'both' && (
                  <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 text-[11px] text-amber-800 space-y-1 text-left shadow-xs">
                    <div className="flex items-center gap-1.5 font-bold text-amber-900">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Hướng dẫn kích hoạt Cloud Sync:</span>
                    </div>
                    <p className="leading-relaxed text-slate-600 font-medium">
                      Nếu bảng <code className="bg-amber-100/60 px-1 rounded font-mono font-bold text-amber-900">exam_results</code> chưa được tạo trong Supabase SQL Editor của bạn, vui lòng sao chép câu lệnh khởi tạo bảng ở cuối tệp <code className="font-mono bg-amber-100/60 px-1 rounded font-bold text-amber-900">supabase_setup.sql</code> và thực thi trên Supabase dashboard để lịch sử thi được lưu trữ vĩnh viễn trên đám mây.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6">Học Viên</th>
                      <th className="py-4 px-6">Môn Luyện Thi</th>
                      <th className="py-4 px-6">Kết Quả Điểm Số</th>
                      <th className="py-4 px-6">Thời Gian Làm Bài</th>
                      <th className="py-4 px-6">Thời Gian Hoàn Thành</th>
                      <th className="py-4 px-6">Đánh Giá</th>
                      <th className="py-4 px-6 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredExamResults.map((r, idx) => {
                      const minutes = Math.floor(r.elapsed_seconds / 60);
                      const seconds = r.elapsed_seconds % 60;
                      const durationStr = `${minutes} phút ${seconds} giây`;
                      const isPassed = r.accuracy >= 70;
                      
                      return (
                        <tr key={r.id || idx} className="hover:bg-slate-50/50 transition-colors">
                          {/* Username avatar cell */}
                          <td className="py-3.5 px-6 font-semibold text-slate-800">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-indigo-700 flex items-center justify-center font-bold text-xs uppercase shadow-xs">
                                {r.username.slice(0, 2)}
                              </div>
                              <span className="font-black text-slate-900 tracking-tight">{r.username}</span>
                            </div>
                          </td>
                          
                          {/* Exam code cell */}
                          <td className="py-3.5 px-6 font-bold">
                            <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-150 text-indigo-700 font-mono text-[11px] uppercase">
                              {r.cert_code}
                            </span>
                          </td>
                          
                          {/* Score progress bar cell */}
                          <td className="py-3.5 px-6 font-bold text-slate-800">
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2">
                                <span className="text-[13px] font-black">{r.accuracy}%</span>
                                <span className="text-[10px] text-slate-400 font-semibold">({r.score}/{r.total_questions} đúng)</span>
                              </div>
                              <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${isPassed ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                  style={{ width: `${r.accuracy}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          
                          {/* Duration cell */}
                          <td className="py-3.5 px-6 text-slate-500 font-medium">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{durationStr}</span>
                            </div>
                          </td>
                          
                          {/* Date timestamp cell */}
                          <td className="py-3.5 px-6 text-slate-400 font-semibold">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              <span>{new Date(r.timestamp).toLocaleString('vi-VN')}</span>
                            </div>
                          </td>
                          
                          {/* Evaluation tag cell */}
                          <td className="py-3.5 px-6">
                            {isPassed ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-150">
                                <Check className="w-3 h-3" /> ĐẠT YÊU CẦU
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-black border border-rose-150">
                                <X className="w-3 h-3" /> CHƯA ĐẠT
                              </span>
                            )}
                          </td>
                          
                          {/* Action cell */}
                          <td className="py-3.5 px-6 text-right">
                            <button
                              onClick={() => handleDeleteExamResult(r)}
                              className="p-1.5 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition-all cursor-pointer"
                              title="Xóa bản ghi này"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {adminTab === 'vip_keys' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-200/80 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                BẢO VỆ TÀI LIỆU VIP & QUẢN LÝ KEY TRUY CẬP
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Cấu hình Mã Key Truy Cập VIP (End Date & Control)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Quản lý mã key, thiết lập thời gian hết hạn (End Date) và tùy chọn Vô hiệu hóa (Disable) cho bất kỳ mã key nào (bao gồm key mặc định).
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="bg-white px-4 py-3 rounded-2xl border border-amber-200 shadow-xs flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hạn Mặc Định Hiện Tại</span>
                  <span className="font-mono text-xs font-black text-slate-900">30/09/2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Cards Grid for VIP Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map(cert => {
              const isVip = !!cert.isVIP;
              const isUnlockedOnDevice = unlockedCertIds.includes(cert.id);
              
              // Get key configs for this cert
              const configs: VipKeyConfig[] = vipKeyConfigs[cert.id] || [];

              const currentInput = newKeyInputs[cert.id] || '';
              const currentExpiry = newExpiryInputs[cert.id] || '2026-09-30';
              const todayStr = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;

              return (
                <div key={cert.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-black uppercase font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                            {cert.code}
                          </span>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                            isVip 
                              ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                              : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                          }`}>
                            {isVip ? <Lock className="w-3 h-3 text-amber-700" /> : <Unlock className="w-3 h-3 text-emerald-700" />}
                            {isVip ? 'Đang Bật Khóa VIP 🔐' : 'Tự Do (Public) 🔓'}
                          </span>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                            cert.isDisabled 
                              ? 'bg-rose-100 text-rose-900 border border-rose-200' 
                              : 'bg-sky-100 text-sky-900 border border-sky-200'
                          }`}>
                            {cert.isDisabled ? <EyeOff className="w-3 h-3 text-rose-700" /> : <Eye className="w-3 h-3 text-sky-700" />}
                            {cert.isDisabled ? 'Đã Vô Hiệu Hóa (Ẩn) 🚫' : 'Đang Hiển Thị 👁️'}
                          </span>
                        </div>
                        <h4 className={`text-base font-black tracking-tight leading-tight pt-1 ${cert.isDisabled ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                          {cert.name}
                        </h4>
                      </div>

                      {/* Control Buttons (VIP & Disable) */}
                      <div className="flex flex-col gap-1.5 shrink-0 items-end">
                        {onToggleCertVip && (
                          <button
                            onClick={() => onToggleCertVip(cert.id)}
                            className={`text-xs px-3 py-1.5 font-bold rounded-xl border transition-all cursor-pointer shrink-0 ${
                              isVip 
                                ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100' 
                                : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                            }`}
                          >
                            {isVip ? 'Tắt VIP (Công khai)' : 'Kích hoạt VIP'}
                          </button>
                        )}
                        {onToggleCertDisabled && (
                          <button
                            onClick={() => onToggleCertDisabled(cert.id)}
                            className={`text-xs px-3 py-1.5 font-bold rounded-xl border transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                              cert.isDisabled 
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100' 
                                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300'
                            }`}
                          >
                            {cert.isDisabled ? <Eye className="w-3.5 h-3.5 text-emerald-600" /> : <EyeOff className="w-3.5 h-3.5 text-slate-500" />}
                            {cert.isDisabled ? 'Kích Hoạt Lại (Hiện)' : 'Vô Hiệu Hóa (Ẩn)'}
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {cert.description}
                    </p>

                    {/* Device Unlock Status */}
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${isUnlockedOnDevice ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                        <span className="font-bold text-slate-700">Trạng thái thiết bị này:</span>
                        <span className={`font-black ${isUnlockedOnDevice ? 'text-emerald-700' : 'text-slate-500'}`}>
                          {isUnlockedOnDevice ? '🔓 Đã Mở Khóa' : '🔒 Đang Khóa'}
                        </span>
                      </div>

                      {onToggleUnlockCert && (
                        <button
                          onClick={() => onToggleUnlockCert(cert.id)}
                          className="text-[11px] font-extrabold px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg transition-all cursor-pointer"
                        >
                          {isUnlockedOnDevice ? 'Khóa lại để thử' : 'Mở khóa ngay (Admin)'}
                        </button>
                      )}
                    </div>

                    {/* Key List */}
                    {isVip && (
                      <div className="space-y-3 pt-2">
                        <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider block">
                          Danh Sách Mã Key & Hạn Sử Dụng (End Date):
                        </label>

                        {/* List of Keys */}
                        <div className="space-y-2">
                          {configs.length === 0 && (
                            <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50/60 p-3 text-[11px] font-semibold leading-relaxed text-amber-800">
                              Chưa có Key nào trên Database. Tạo Key bên dưới; ứng dụng không còn chứa Key mặc định trong mã nguồn hoặc localStorage.
                            </div>
                          )}
                          {configs.map((conf, idx) => {
                            const isExpired = conf.expiryDate ? conf.expiryDate < todayStr : false;
                            const isDisabled = conf.disabled === true;
                            
                            // Format expiration date for display DD/MM/YYYY
                            let expDisplay = '30/09/2026';
                            if (conf.expiryDate) {
                              const p = conf.expiryDate.split('-');
                              if (p.length === 3) expDisplay = `${p[2]}/${p[1]}/${p[0]}`;
                            }

                            return (
                              <div 
                                key={idx} 
                                className={`p-3 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                                  isDisabled 
                                    ? 'bg-slate-100/80 border-slate-300 opacity-70' 
                                    : isExpired 
                                      ? 'bg-rose-50/80 border-rose-200' 
                                      : 'bg-amber-50/70 border-amber-200/80'
                                }`}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-mono text-xs font-black text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                                      {conf.key}
                                    </span>
                                    {isDisabled ? (
                                      <span className="text-[10px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded flex items-center gap-1">
                                        <Ban className="w-3 h-3 text-slate-500" /> Đã vô hiệu hóa
                                      </span>
                                    ) : isExpired ? (
                                      <span className="text-[10px] font-bold text-rose-700 bg-rose-200/80 px-2 py-0.5 rounded flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-rose-600" /> Đã hết hạn ({expDisplay})
                                      </span>
                                    ) : (
                                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded flex items-center gap-1">
                                        <Check className="w-3 h-3 text-emerald-600" /> Khả dụng
                                      </span>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium pt-0.5">
                                    <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                                    <span>Hạn dùng (End Date):</span>
                                    <input
                                      type="date"
                                      value={conf.expiryDate || '2026-09-30'}
                                      onChange={(e) => onUpdateKeyExpiry && onUpdateKeyExpiry(cert.id, conf.key, e.target.value)}
                                      className="px-2 py-0.5 text-[11px] font-mono font-bold bg-white border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                                      title="Bấm để đổi ngày hết hạn"
                                    />
                                  </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                  {onToggleKeyDisabled && (
                                    <button
                                      type="button"
                                      onClick={() => onToggleKeyDisabled(cert.id, conf.key)}
                                      className={`px-2.5 py-1 text-[11px] font-extrabold rounded-lg border transition-all cursor-pointer ${
                                        isDisabled 
                                          ? 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700 shadow-xs' 
                                          : 'bg-slate-200 hover:bg-rose-100 text-slate-700 hover:text-rose-700 border-slate-300 hover:border-rose-300'
                                      }`}
                                      title={isDisabled ? "Kích hoạt lại Key này" : "Tạm tắt (disable) Key này"}
                                    >
                                      {isDisabled ? 'Kích hoạt lại' : 'Tắt (Disable)'}
                                    </button>
                                  )}

                                  {onDeleteVipKey && (
                                    <button
                                      type="button"
                                      onClick={() => onDeleteVipKey(cert.id, conf.key)}
                                      className="p-1.5 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors cursor-pointer"
                                      title="Xóa Key này"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Add Custom Key Form */}
                        {onAddVipKey && (
                          <form 
                            onSubmit={(e) => {
                              e.preventDefault();
                              const trimmed = currentInput.trim();
                              if (trimmed) {
                                onAddVipKey(cert.id, trimmed, currentExpiry);
                                setNewKeyInputs(prev => ({ ...prev, [cert.id]: '' }));
                              }
                            }}
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-3 pt-3"
                          >
                            <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider block">
                              + Tạo Mã Key VIP Mới
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Mã Key Mới</label>
                                <input
                                  type="text"
                                  value={currentInput}
                                  onChange={(e) => setNewKeyInputs({ ...newKeyInputs, [cert.id]: e.target.value })}
                                  placeholder="Nhập mã key..."
                                  className="w-full px-3 py-2 text-xs font-mono font-bold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 uppercase"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Ngày Hết Hạn (End Date)</label>
                                <input
                                  type="date"
                                  value={currentExpiry}
                                  onChange={(e) => setNewExpiryInputs({ ...newExpiryInputs, [cert.id]: e.target.value })}
                                  className="w-full px-3 py-2 text-xs font-mono font-bold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                                />
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <button
                                type="submit"
                                className="px-4 py-2 bg-slate-900 hover:bg-amber-600 text-white font-black rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                Thêm Key VIP
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {sandboxQuestion && (
        <QuestionSandboxModal
          question={sandboxQuestion}
          onClose={() => setSandboxQuestion(null)}
        />
      )}

    </div>
  );
}
