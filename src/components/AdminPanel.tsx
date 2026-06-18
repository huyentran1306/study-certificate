import { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Check, 
  X, 
  FileJson, 
  BookOpen, 
  Settings, 
  PlusCircle,
  HelpCircle,
  FolderOpen,
  Tag,
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { uploadQuestionsToDb } from '../lib/sync';
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
        <div className="shrink-0 flex gap-2 w-full md:w-auto">
          <button
            onClick={handleDownloadSampleJson}
            className="flex-1 md:flex-initial text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm border border-slate-200"
          >
            <Download className="w-3.5 h-3.5" />
            Tải File JSON Mẫu
          </button>
          
          <button
            onClick={() => setIsNewCertFormOpen(prev => !prev)}
            className="flex-1 md:flex-initial text-xs bg-slate-900 hover:bg-indigo-600 text-white font-black px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            Tạo Chứng Chỉ Mới
          </button>
        </div>
      </div>

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
                      cert.id !== 'gh-300' && cert.id !== 'az-900' && cert.id !== 'ai-900' && (
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

          {/* Question Form Dialog / Form Expandable */}
          {isQuestionFormOpen && (
            <div className="bg-white border-2 border-indigo-200/80 rounded-3xl p-6.5 shadow-xl space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="p-1 px-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-black">Question Form</div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {editingQuestion ? `SỬA CÂU HỎI #${editingQuestion.questionNumber}` : 'THÊM MỘT CÂU HỎI MỚI'}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsQuestionFormOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl"
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
            <div className="space-y-3">
              {filteredQuestions.map((q) => {
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
          )}

        </div>
      </div>

    </div>
  );
}
