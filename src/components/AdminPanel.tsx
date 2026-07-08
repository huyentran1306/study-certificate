import { useState, useEffect } from 'react';
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
  Settings, 
  PlusCircle,
  HelpCircle,
  FolderOpen,
  Tag,
  Sparkles,
  RefreshCw,
  Info,
  Award,
  History,
  User,
  Calendar,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { 
  uploadQuestionsToDb,
  fetchAllExamResultsFromDb,
  deleteExamResultFromDb,
  clearAllExamResultsFromDb,
  ExamHistoryRecord,
  fetchAllUserProgressFromDb,
  deleteUserProgressFromDb,
  clearAllUserProgressFromDb,
  UserProgressRecord
} from '../lib/sync';
import { Question, Certificate } from '../types';

interface AdminPanelProps {
  certificates: Certificate[];
  activeCertId: string;
  onSelectCert: (certId: string) => void;
  onUpdateQuestions: (certId: string, updatedQs: Question[]) => void;
  onAddCertificate: (newCert: Certificate, initialQs: Question[]) => void;
  onDeleteCertificate: (certId: string) => void;
  showAppToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

export default function AdminPanel({
  certificates,
  activeCertId,
  onSelectCert,
  onUpdateQuestions,
  onAddCertificate,
  onDeleteCertificate,
  showAppToast
}: AdminPanelProps) {
  // Questions list of the currently selected certificate
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

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

  // Certificate Form state
  const [newCertCode, setNewCertCode] = useState('');
  const [newCertName, setNewCertName] = useState('');
  const [newCertDesc, setNewCertDesc] = useState('');
  const [newCertDiff, setNewCertDiff] = useState<'Cơ bản' | 'Trung cấp' | 'Nâng cao'>('Cơ bản');
  const [newCertHours, setNewCertHours] = useState('8-12 Giờ');
  const [newCertColor, setNewCertColor] = useState('bg-gradient-to-br from-indigo-600 via-sky-700 to-indigo-950 text-white');
  const [newCertIcon, setNewCertIcon] = useState('BookOpen');
  const [newCertQuestionsText, setNewCertQuestionsText] = useState('[]');

  // Collapsed questions registry (to avoid massive pages on large sets)
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  // Questions list pagination
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 15;

  // Admin Panel states & logic
  const [adminTab, setAdminTab] = useState<'questions' | 'user_progress' | 'exam_history'>('questions');
  
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
    if (confirm(`Bạn có chắc chắn muốn xóa tiến trình học tập của "${record.username}" cho môn này?`)) {
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
    }
  };

  const handleClearAllUserProgress = async () => {
    if (confirm('CẢNH BÁO: Bạn có chắc chắn muốn XÓA SẠCH toàn bộ tiến trình học tập của mọi học viên? Tất cả số câu đúng/sai, số câu lưu và chuỗi ngày học của người dùng sẽ bị xóa hoàn toàn khỏi cơ sở dữ liệu!')) {
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
    }
  }, [adminTab, historySyncMode]);

  const handleDeleteExamResult = async (record: ExamHistoryRecord) => {
    if (confirm(`Bạn có chắc chắn muốn xóa kết quả thi của "${record.username}"?`)) {
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
    }
  };

  const handleClearAllExamResults = async () => {
    if (confirm('CẢNH BÁO: Bạn có chắc chắn muốn XÓA TOÀN BỘ lịch sử thi của tất cả người dùng? Hành động này không thể hoàn tác!')) {
      localStorage.removeItem('local_exam_results');

      if (historySyncMode === 'both') {
        try {
          await clearAllExamResultsFromDb();
        } catch (err) {
          console.error(err);
        }
      }

      showAppToast('Đã xóa sạch toàn bộ lịch sử thi!', 'success');
      setExamResults([]);
    }
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
      // 1. Load from local first
      const stored = localStorage.getItem(`questions_${activeCertId}`);
      let localQs: Question[] = [];
      if (stored) {
        try { localQs = JSON.parse(stored); } catch (e) { console.error(e); }
      }

      // 2. Load from Supabase to stay updated
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('cert_id', activeCertId)
        .order('question_number', { ascending: true });

      if (error) {
        console.warn('Fallback to local questions storage:', error);
        setQuestions(localQs);
      } else if (data && data.length > 0) {
        const dbQs: Question[] = data.map((q: any) => ({
          id: q.id,
          questionNumber: q.question_number,
          text: q.text,
          options: Array.isArray(q.options) ? q.options : JSON.parse(q.options),
          correctAnswers: q.correct_answers,
          explanation: q.explanation || '',
          category: q.category || 'General',
          tags: q.tags || []
        }));
        setQuestions(dbQs);
        // Sync back to local cached storage
        localStorage.setItem(`questions_${activeCertId}`, JSON.stringify(dbQs));
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

  // Handle saving the question (both Add and Edit)
  const handleSaveQuestion = async () => {
    if (!qText.trim()) {
      showAppToast('Vui lòng nhập nội dung câu hỏi!', 'error');
      return;
    }

    const filteredOptions = qOptions.filter(opt => opt.text.trim() !== '');
    if (filteredOptions.length < 2) {
      showAppToast('Vui lòng nhập ít nhất 2 phương án trả lời!', 'error');
      return;
    }

    if (qCorrectAnswers.length === 0) {
      showAppToast('Vui lòng chọn ít nhất một đáp án đúng!', 'error');
      return;
    }

    // Ensure all selected correct answers correspond to existing specified options
    const optionKeys = filteredOptions.map(opt => opt.key);
    const validCorrectAnswers = qCorrectAnswers.filter(key => optionKeys.includes(key));
    if (validCorrectAnswers.length === 0) {
      showAppToast('Các đáp án đúng được chọn không khớp với danh sách phương án hợp lệ!', 'error');
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
        options: filteredOptions,
        correctAnswers: validCorrectAnswers,
        explanation: qExplanation.trim(),
        category: qCategory.trim() || 'General',
        tags: parsedTags
      };

      let updatedList: Question[] = [];

      if (isNew) {
        updatedList = [...questions, savedQuestion];
      } else {
        updatedList = questions.map(q => q.id === questionId ? savedQuestion : q);
      }

      // Sort questions by question number
      updatedList.sort((a, b) => a.questionNumber - b.questionNumber);

      // Save to local & states
      localStorage.setItem(`questions_${activeCertId}`, JSON.stringify(updatedList));
      setQuestions(updatedList);
      onUpdateQuestions(activeCertId, updatedList);

      // Sync specific question to Supabase
      const { error: dbError } = await supabase
        .from('questions')
        .upsert({
          id: questionId,
          cert_id: activeCertId,
          question_number: savedQuestion.questionNumber,
          text: savedQuestion.text,
          options: savedQuestion.options,
          correct_answers: savedQuestion.correctAnswers,
          explanation: savedQuestion.explanation,
          category: savedQuestion.category,
          tags: savedQuestion.tags || []
        }, { onConflict: 'id' });

      if (dbError) {
        console.error('Failed to sync to Supabase database:', dbError);
        showAppToast('Đã lưu cục bộ thành công! (Cảnh báo lỗi đồng bộ Cloud)', 'info');
      } else {
        showAppToast(isNew ? 'Đã thêm câu hỏi thành công!' : 'Đã cập nhật câu hỏi thành công!', 'success');
      }

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
    if (!confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) return;

    setIsLoading(true);
    try {
      const updatedList = questions.filter(q => q.id !== qId);
      
      // Save local
      localStorage.setItem(`questions_${activeCertId}`, JSON.stringify(updatedList));
      setQuestions(updatedList);
      onUpdateQuestions(activeCertId, updatedList);

      // Delete from Supabase
      const { error } = await supabase
        .from('questions')
        .delete()
        .eq('id', qId);

      if (error) {
        console.error('Delete database row error:', error);
        showAppToast('Đã xóa cục bộ thành công! (Không thể đồng bộ Cloud)', 'info');
      } else {
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
    const sample = [
      {
        "id": "vi-du-cau-hoi-1",
        "questionNumber": 1,
        "text": "Đâu là thành phần cốt lõi quản lý trạng thái luồng làm việc trong Power Automate Cloud?",
        "options": [
          { "key": "A", "text": "Triggers & Actions" },
          { "key": "B", "text": "Storage Blobs" },
          { "key": "C", "text": "Model-driven charts" },
          { "key": "D", "text": "Gateway connections" }
        ],
        "correctAnswers": ["A"],
        "explanation": "Mỗi Power Automate Cloud flow chứa duy nhất Triggers làm điểm khởi đầu, kèm theo các Actions tiếp diễn nhằm thực thi tác vụ tự động hóa.",
        "category": "Flow Architecture",
        "tags": ["Automation", "Cloud Flows"]
      }
    ];

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sample, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "question_sample_import.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showAppToast('Đã tải xuống file cấu trúc câu hỏi JSON mẫu!', 'success');
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

  // Create customized certificates
  const handleCreateNewCert = () => {
    if (!newCertCode || !newCertName) {
      showAppToast('Vui lòng điền đầy đủ Mã và Tên chứng chỉ!', 'error');
      return;
    }

    let parsedQuestionsList: Question[] = [];
    try {
      if (newCertQuestionsText && newCertQuestionsText.trim() !== '[]') {
        parsedQuestionsList = JSON.parse(newCertQuestionsText);
        if (!Array.isArray(parsedQuestionsList)) {
          showAppToast('Cú pháp bộ câu hỏi đi kèm phải là một mảng [] JSON!', 'error');
          return;
        }
      }
    } catch (err: any) {
      showAppToast(`Lỗi phân tích cú pháp JSON bộ câu hỏi: ${err.message}`, 'error');
      return;
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

      // Call callback parent state
      onAddCertificate(builtCert, parsedQuestionsList);

      // Reset state
      setNewCertCode('');
      setNewCertName('');
      setNewCertDesc('');
      setNewCertQuestionsText('[]');
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
    return textMatch && catMatch;
  });

  // Unique categories list
  const categories = ['All', ...Array.from(new Set(questions.map(q => q.category).filter(Boolean)))];

  const activeCert = certificates.find(c => c.id === activeCertId);

  return (
    <div className="space-y-6 animate-fadeIn pb-20">
      
      {/* Title & Introduction Panel */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full inline-block">🛠️ CHẾ ĐỘ QUẢN TRỊ VIÊN</span>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Khu Vực Quản Lý Ngân Hàng Câu Hỏi & Đề Thi</h2>
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            Cho phép chỉnh sửa, tạo mới hoặc loại bỏ câu hỏi trực tiếp, lưu tức thời về trình duyệt và tự động đồng bộ đám mây Supabase cho các tài khoản liên kết.
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
          
          <button
            onClick={() => setIsNewCertFormOpen(prev => !prev)}
            className="text-xs bg-slate-900 hover:bg-indigo-600 text-white font-black px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            Tạo Chứng Chỉ Mới
          </button>
        </div>
      </div>

      {/* Admin Panel Sub-Tabs Navigation */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setAdminTab('questions')}
          className={`px-6 py-3.5 text-xs font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
            adminTab === 'questions'
              ? 'border-indigo-650 text-indigo-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          QUẢN LÝ ĐỀ THI & CÂU HỎI
        </button>
        <button
          onClick={() => setAdminTab('user_progress')}
          className={`px-6 py-3.5 text-xs font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
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
          className={`px-6 py-3.5 text-xs font-black tracking-wide border-b-2 transition-all flex items-center gap-2 ${
            adminTab === 'exam_history'
              ? 'border-indigo-650 text-indigo-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          LỊCH SỬ THI THỬ HỌC VIÊN
        </button>
      </div>

      {adminTab === 'questions' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* LEFT COLUMN: Course selection rail & statistics */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-slate-150 rounded-2xl p-4.5 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 pb-2.5 border-b border-slate-100">
              <Settings className="w-3.5 h-3.5 text-slate-400" />
              CHỌN MÔN HỌC / ĐỀ THI
            </h3>
            
            <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
              {certificates.map(cert => {
                const isActive = cert.id === activeCertId;
                return (
                  <button
                    key={cert.id}
                    onClick={() => onSelectCert(cert.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl text-xs font-bold leading-relaxed flex items-center justify-between transition-all group cursor-pointer ${
                      isActive 
                        ? 'bg-indigo-50/70 border border-indigo-200/80 text-indigo-950' 
                        : 'hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <span className="block text-[9px] uppercase font-black text-slate-400 tracking-wider font-mono">{cert.code}</span>
                      <span className="truncate block font-extrabold text-[11.5px]">{cert.name}</span>
                    </div>
                    {isActive ? (
                      <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    ) : (
                      cert.id !== 'gh-300' && cert.id !== 'az-900' && cert.id !== 'ai-900' && cert.id !== 'cca-f' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm(`Xóa chứng chỉ tự tạo ${cert.code}?`)) {
                              onDeleteCertificate(cert.id);
                            }
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-rose-50 text-rose-500 rounded-lg transition-all"
                          title="Xóa chứng chỉ"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-550/5 border border-slate-150 rounded-2xl p-4.5 space-y-3.5">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-indigo-500" />
              THÔNG TIN ĐANG CHỌN
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Môn học:</span>
                <span className="font-extrabold text-slate-700">{activeCert?.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Tổng câu hỏi:</span>
                <span className="font-extrabold text-slate-700">{questions.length} câu</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Cấp độ:</span>
                <span className="font-extrabold text-slate-700">{activeCert?.difficulty}</span>
              </div>
              <p className="text-[10px] text-slate-400 bg-white border border-slate-100 rounded-xl p-2.5 leading-relaxed mt-2.5 shadow-xs">
                💡 Định nghĩa cấu trúc chuẩn phù hợp để dán tệp đề thô hoặc dán JSON trích lục.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Question management block */}
        <div className="lg:col-span-3 space-y-5">
          
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

              {/* Add Question Button */}
              <button
                onClick={handleOpenAddQuestion}
                className="bg-indigo-650 hover:bg-indigo-700 text-white font-black text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:shadow-md cursor-pointer transition-all"
              >
                <Plus className="w-4 h-4" />
                Tạo Câu Hỏi Mới
              </button>
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
                            {q.tags && q.tags.map(t => (
                              <span key={t} className="bg-slate-100 text-slate-550 text-[9.5px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Tag className="w-2.5 h-2.5 opacity-55" />
                                {t}
                              </span>
                            ))}
                          </div>
                          <h4 className="text-xs font-bold text-slate-800 mt-1.5 leading-relaxed truncate-3-lines">
                            {q.text}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEditQuestion(q);
                            }}
                            className="p-2 border border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-colors cursor-pointer"
                            title="Chỉnh sửa câu hỏi"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteQuestion(q.id);
                            }}
                            className="p-2 border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
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
                          
                          {/* Options display with bold colors indicating correct ones */}
                          <div className="space-y-2">
                            <span className="block text-[10px] uppercase font-black tracking-wider text-slate-400">Các lựa chọn:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {q.options.map(opt => {
                                const isCorrect = q.correctAnswers.includes(opt.key);
                                return (
                                  <div 
                                    key={opt.key}
                                    className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                                      isCorrect 
                                        ? 'bg-emerald-50 border-emerald-250 text-emerald-900 font-medium font-bold' 
                                        : 'bg-white border-slate-150 text-slate-500'
                                    }`}
                                  >
                                    <span className={`w-5 h-5 flex items-center justify-center rounded-lg text-[10px] font-black shrink-0 ${
                                      isCorrect ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                      {opt.key}
                                    </span>
                                    <span className="leading-relaxed">{opt.text}</span>
                                  </div>
                                );
                              })}
                            </div>
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
                      
                      // Calculate total questions dynamically from stored questions or default to 50
                      const storedQs = localStorage.getItem(`questions_${p.cert_id}`);
                      let totalQuestionsCount = 50;
                      if (storedQs) {
                        try {
                          const parsedList = JSON.parse(storedQs);
                          if (Array.isArray(parsedList) && parsedList.length > 0) {
                            totalQuestionsCount = parsedList.length;
                          }
                        } catch (e) {}
                      }

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

    </div>
  );
}
