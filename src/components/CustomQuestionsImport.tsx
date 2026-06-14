import { useState, ChangeEvent } from 'react';
import { Upload, ClipboardList, PlusCircle, CheckCircle, FileJson, AlertCircle, FileText, Sparkles, BookOpen } from 'lucide-react';
import { Question } from '../types';

interface CustomQuestionsImportProps {
  onImport: (newQuestions: Question[], resetProgress: boolean) => void;
  currentCount: number;
  existingQuestions: Question[];
}

export default function CustomQuestionsImport({ onImport, currentCount, existingQuestions = [] }: CustomQuestionsImportProps) {
  const [activeImportMode, setActiveImportMode] = useState<'raw' | 'json' | 'file'>('raw');
  const [importMergeMode, setImportMergeMode] = useState<'append' | 'replace'>('append');
  const [jsonText, setJsonText] = useState('');
  const [rawText, setRawText] = useState('');
  const [fileError, setFileError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [resetOnImport, setResetOnImport] = useState(true);

  const sampleJson = [
    {
      "id": "custom-1",
      "questionNumber": 1,
      "text": "Câu hỏi của bạn ở đây?",
      "options": [
        { "key": "A", "text": "Phương án A" },
        { "key": "B", "text": "Phương án B" },
        { "key": "C", "text": "Phương án C" },
        { "key": "D", "text": "Phương án D" }
      ],
      "correctAnswers": ["B"],
      "explanation": "Lời giải chi tiết giải thích vì sao đáp án B đúng...",
      "category": "Responsible AI / Hoặc chủ đề khác"
    }
  ];

  const parseSingleBlock = (content: string, num: number): Question | null => {
    const lines = content.split('\n').map(l => l.trim()).filter(l => l);
    if (lines.length < 2) return null;
    
    let questionTextLines: string[] = [];
    const options: { key: string; text: string }[] = [];
    const correctAnswers: string[] = [];
    let explanationLines: string[] = [];
    
    let state: 'question' | 'options' | 'answer' | 'explanation' = 'question';
    
    for (const line of lines) {
      // Check if it's an option line, e.g. A. option, A) option, [A] option
      const optionMatch = line.match(/^([A-F])[\.\)\-\]\s\:]+\s*(.*)$/i);
      
      // Check if it's an answer indicator line, e.g. "Answer: A", "Correct Answer: B, C", "Đáp án: C", "Key: D"
      const answerMatch = line.match(/^(?:Correct\s+)?Answer|Đáp\s+án|Key|Chọn|Result\s*:\s*([A-F\s\,]+)/i) || 
                          line.match(/^Answ?:\s*([A-F\s\,]+)/i);
      
      // Check if it's an explanation indicator line, e.g. "Explanation: ...", "Giải thích: ...", "Explain: ..."
      const explanationMatch = line.match(/^(?:Explanation|Giải\s+thích|Explain|HD\s+giải|Chi\s+tiết)\s*:\s*(.*)$/i);
      
      if (explanationMatch) {
        state = 'explanation';
        if (explanationMatch[1]) {
          explanationLines.push(explanationMatch[1]);
        }
        continue;
      }
      
      if (answerMatch) {
        state = 'answer';
        const ansStr = answerMatch[1] || "";
        const keys = ansStr.match(/[A-F]/gi);
        if (keys) {
          correctAnswers.push(...keys.map(k => k.toUpperCase()));
        }
        continue;
      }
      
      if (optionMatch) {
        state = 'options';
        options.push({
          key: optionMatch[1].toUpperCase(),
          text: optionMatch[2].trim()
        });
        continue;
      }
      
      // Accumulate depending on current state
      if (state === 'question') {
        questionTextLines.push(line);
      } else if (state === 'explanation') {
        explanationLines.push(line);
      } else if (state === 'answer') {
        const keys = line.match(/[A-F]/gi);
        if (keys && keys.length === 1 && line.length < 5) {
          correctAnswers.push(keys[0].toUpperCase());
        } else {
          explanationLines.push(line);
          state = 'explanation';
        }
      }
    }
    
    // Extract answers from lines if not parsed cleanly
    if (correctAnswers.length === 0) {
      for (const line of lines) {
        if (line.toLowerCase().includes('correct') || line.toLowerCase().includes('đúng')) {
          const letterMatch = line.match(/\b([A-F])\b/i);
          if (letterMatch) {
            correctAnswers.push(letterMatch[1].toUpperCase());
            break;
          }
        }
      }
    }
    
    const text = questionTextLines.join(' ').trim();
    if (!text) return null;
    
    if (correctAnswers.length === 0) {
      correctAnswers.push('A'); // fallback
    }
    
    if (options.length === 0) {
      options.push({ key: 'A', text: 'Yes / Đúng' });
      options.push({ key: 'B', text: 'No / Sai' });
    }
    
    return {
      id: `parsed-${Date.now()}-${num}-${Math.random().toString(36).substr(2, 4)}`,
      questionNumber: num,
      text: text,
      options: options,
      correctAnswers: Array.from(new Set(correctAnswers)),
      explanation: explanationLines.join(' ').trim() || "Dịch chi tiết dựa trên tài liệu chuẩn Microsoft.",
      category: "Dữ liệu tự nhập (PDF Page)",
      tags: ["AZ-900", "Imported PDF"]
    };
  };

  const parseRawExamText = (text: string): Question[] => {
    const cleanText = text.replace(/\r\n/g, '\n');
    
    // Split into structural question paragraphs (e.g. Q1, Question 2, Câu 3)
    const questionRegex = /(?:^|\n)\s*(?:Question|Câu|Q|C)\s*(\d+)[:\-\.\s]*/gi;
    const parts = cleanText.split(questionRegex);
    
    const parsedQuestions: Question[] = [];
    let currentNumber = 1;
    
    if (parts.length <= 1) {
      // Fallback splitting by double blank lines
      const blocks = cleanText.split(/\n\s*\n/);
      blocks.forEach((block, index) => {
        const q = parseSingleBlock(block, index + 1);
        if (q) parsedQuestions.push(q);
      });
      return parsedQuestions;
    }
    
    for (let i = 1; i < parts.length; i += 2) {
      const qNumStr = parts[i];
      const blockContent = parts[i + 1] || "";
      const num = parseInt(qNumStr, 10) || currentNumber;
      
      const q = parseSingleBlock(blockContent, num);
      if (q) {
        parsedQuestions.push(q);
        currentNumber = num + 1;
      }
    }
    
    return parsedQuestions;
  };

  const deduplicateAndProcess = (incomingList: Question[]): { added: number, duplicates: number } => {
    if (importMergeMode === 'replace') {
      onImport(incomingList, resetOnImport);
      return { added: incomingList.length, duplicates: 0 };
    }

    // Helper to normalize strings for robust comparison
    const normalize = (str: string) => {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/gi, '')
        .substring(0, 150); // check first 150 meaningful characters
    };

    const existingNormalizedSet = new Set(
      existingQuestions.map(q => normalize(q.text))
    );

    const uniqueIncoming: Question[] = [];
    const internalSeen = new Set<string>();
    let duplicatesFound = 0;

    incomingList.forEach((newQ) => {
      const norm = normalize(newQ.text);
      if (existingNormalizedSet.has(norm) || internalSeen.has(norm)) {
        duplicatesFound++;
      } else {
        internalSeen.add(norm);
        const nextNum = existingQuestions.length + uniqueIncoming.length + 1;
        uniqueIncoming.push({
          ...newQ,
          questionNumber: nextNum,
          id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`
        });
      }
    });

    if (uniqueIncoming.length === 0) {
      throw new Error(`Tất cả ${incomingList.length} câu hỏi mới nhập đều bị trùng lặp với các câu sẵn có trong cơ sở dữ liệu!`);
    }

    const merged = [...existingQuestions, ...uniqueIncoming];
    onImport(merged, resetOnImport);

    return { added: uniqueIncoming.length, duplicates: duplicatesFound };
  };

  const handleRawTextImport = () => {
    setFileError(null);
    setSuccessMsg(null);
    try {
      if (!rawText.trim()) {
        throw new Error('Vui lòng dán văn bản thô từ tài liệu thi.');
      }
      
      const parsed = parseRawExamText(rawText);
      if (parsed.length === 0) {
        throw new Error('Không nhận diện được câu hỏi nào. Hãy chắc chắn văn bản có chứa chứa từ khóa phân định như "Question 1" hoặc "Câu 1".');
      }

      const result = deduplicateAndProcess(parsed);
      if (importMergeMode === 'replace') {
        setSuccessMsg(`Đã ghi đè và nạp thành công ${result.added} câu hỏi thô mới!`);
      } else {
        setSuccessMsg(`Đã nạp thêm thành công! Quét thấy ${parsed.length} câu: Thêm mới ${result.added} câu độc bản, tự động lọc bỏ ${result.duplicates} câu trùng lặp.`);
      }
      setRawText('');
    } catch (e: any) {
      setFileError(e.message || 'Lỗi xử lý định dạng văn bản.');
    }
  };

  const handlePasteImport = () => {
    setFileError(null);
    setSuccessMsg(null);
    try {
      if (!jsonText.trim()) {
        throw new Error('Vui lòng dán nội dung JSON hợp lệ.');
      }
      
      const parsed = JSON.parse(jsonText);
      const list = Array.isArray(parsed) ? parsed : [parsed];

      const validated: Question[] = list.map((q, idx) => {
        if (!q.text || !q.options || !q.correctAnswers) {
          throw new Error(`Câu hỏi ở vị trí #${idx + 1} thiếu thuộc tính "text", "options" hoặc "correctAnswers".`);
        }
        if (!Array.isArray(q.options) || q.options.length < 2) {
          throw new Error(`Câu hỏi #${idx + 1} phải có ít nhất 2 phương án.`);
        }
        if (!Array.isArray(q.correctAnswers) || q.correctAnswers.length < 1) {
          throw new Error(`Câu hỏi #${idx + 1} phải có ít nhất một đáp án đúng.`);
        }
        return {
          id: q.id || `custom-${Date.now()}-${idx}`,
          questionNumber: q.questionNumber || (idx + 1),
          text: q.text,
          options: q.options,
          correctAnswers: q.correctAnswers,
          explanation: q.explanation || "Không có lời giải thích chi tiết.",
          category: q.category || "Chủ đề tự chọn",
          tags: q.tags || []
        };
      });

      const result = deduplicateAndProcess(validated);
      if (importMergeMode === 'replace') {
        setSuccessMsg(`Đã xóa câu cũ & nạp mới thành công cả ${result.added} câu hỏi qua JSON!`);
      } else {
        setSuccessMsg(`Nạp thêm qua JSON thành công! Đã thêm mới ${result.added} câu, lược bỏ ${result.duplicates} câu trùng lặp.`);
      }
      setJsonText('');
    } catch (e: any) {
      setFileError(e.message || 'JSON không hợp lệ hoặc sai cấu trúc yêu cầu.');
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    setSuccessMsg(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        const list = Array.isArray(parsed) ? parsed : [parsed];

        const validated: Question[] = list.map((q, idx) => {
          if (!q.text || !q.options || !q.correctAnswers) {
            throw new Error(`Câu hỏi số #${idx + 1} không đúng cấu trúc yêu cầu.`);
          }
          return {
            id: q.id || `uploaded-${Date.now()}-${idx}`,
            questionNumber: q.questionNumber || (idx + 1),
            text: q.text,
            options: q.options,
            correctAnswers: q.correctAnswers,
            explanation: q.explanation || "Không có giải thích kèm theo.",
            category: q.category || "Chủ đề tải lên",
            tags: q.tags || []
          };
        });

        const result = deduplicateAndProcess(validated);
        if (importMergeMode === 'replace') {
          setSuccessMsg(`Đã tải tệp tin và thay thế bằng ${result.added} câu hỏi thành công!`);
        } else {
          setSuccessMsg(`Tải tệp tin thành công! Thêm mới ${result.added} câu độc lập, lọc trùng bỏ qua ${result.duplicates} câu.`);
        }
      } catch (err: any) {
        setFileError(err.message || 'Lỗi khi đọc tệp tin JSON.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div id="import-panel" className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 md:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-indigo-500" />
            Nhập Ngân Hàng Câu Hỏi Tự Chọn
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Dễ dàng dán trực tiếp câu hỏi chụp màn hình, OCR hoặc copy từ tệp tài liệu PDF ôn thi của bạn. Đang có <span className="font-semibold text-indigo-600">{currentCount} câu hỏi</span> hoạt động.
          </p>
        </div>
        
        {/* Toggle Reset */}
        <label className="flex items-center gap-2 cursor-pointer text-xs select-none">
          <input 
            type="checkbox" 
            checked={resetOnImport} 
            onChange={(e) => setResetOnImport(e.target.checked)}
            className="rounded border-slate-350 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
          />
          <span className="text-slate-600 font-medium">Reset lại tiến trình làm bài</span>
        </label>
      </div>

      {/* Import Mode Tabs & Merge Mode Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 bg-slate-50 p-2 rounded-xl border border-slate-100">
        <div className="flex gap-2 p-1 bg-slate-250/30 rounded-lg w-fit">
          <button
            onClick={() => { setActiveImportMode('raw'); setFileError(null); setSuccessMsg(null); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeImportMode === 'raw' 
                ? 'bg-white text-indigo-600 shadow-xs' 
                : 'text-slate-500 hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            Dán Đề Thô (OCR / PDF Copy)
          </button>
          <button
            onClick={() => { setActiveImportMode('json'); setFileError(null); setSuccessMsg(null); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeImportMode === 'json'
                ? 'bg-white text-indigo-600 shadow-xs' 
                : 'text-slate-500 hover:bg-white/50'
            }`}
          >
            <FileCodeIcon className="w-3.5 h-3.5" />
            Dán Mã JSON code
          </button>
          <button
            onClick={() => { setActiveImportMode('file'); setFileError(null); setSuccessMsg(null); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeImportMode === 'file'
                ? 'bg-white text-indigo-600 shadow-xs' 
                : 'text-slate-500 hover:bg-white/50'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            Tải file .JSON
          </button>
        </div>

        {/* Merge mode selector */}
        <div className="flex items-center gap-2 bg-indigo-50/70 p-1 px-2 border border-indigo-100 rounded-lg">
          <span className="text-[10px] uppercase font-bold text-indigo-700">Chế độ nạp đề:</span>
          <div className="flex gap-1">
            <button
              onClick={() => setImportMergeMode('append')}
              className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                importMergeMode === 'append'
                  ? 'bg-indigo-650 text-white shadow-xs'
                  : 'text-indigo-600 hover:bg-indigo-100/50'
              }`}
              title="Lưu giữ các câu hỏi cũ và chỉ nạp các câu hỏi mới lạ (Hệ thống tự động lọc các câu trùng lặp)"
            >
              Trộn thêm & Lọc trùng
            </button>
            <button
              onClick={() => setImportMergeMode('replace')}
              className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                importMergeMode === 'replace'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-500 hover:bg-slate-200'
              }`}
              title="Xóa trống danh sách câu hỏi hiện có và sử dụng hoàn toàn danh sách mới nhập"
            >
              Ghi đè tất cả
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Input Section based on selection mode */}
        <div className="space-y-4">
          
          {activeImportMode === 'raw' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <FileText className="w-4 h-4 text-slate-400" />
                  MÁY QUÉT ĐỀ ANH-VIỆT TỰ ĐỘNG
                </span>
                <button 
                  onClick={handleRawTextImport}
                  className="text-xs bg-indigo-650 hover:bg-indigo-755 text-white px-3 py-1 rounded-lg font-bold flex items-center gap-1 transition-all shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Quét & Chuyển đổi ngay!
                </button>
              </div>
              
              <textarea
                id="raw-text-paste"
                rows={10}
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder={`Dán văn bản Copy từ PDF của bạn tại đây... Ví dụ:

Question 1
Your company has datacenters in Los Angeles and New York...
A. Locally-redundant storage (LRS)
B. Zone-redundant storage (ZRS)
C. Geo-redundant storage (GRS)
D. Read-access geo-redundant storage (RA-GRS)
Answer: D
Explanation: RA-GRS copies data to secondary regions...`}
                className="w-full text-xs font-mono p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-550 bg-slate-50/55 min-h-[220px]"
              />
            </div>
          )}

          {activeImportMode === 'json' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <FileJson className="w-4 h-4 text-slate-400" />
                  DÁN CODE JSON CÁC CÂU HỎI
                </span>
                <button 
                  onClick={handlePasteImport}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-1"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  Duyệt & Thêm dữ liệu
                </button>
              </div>
              <textarea
                id="json-raw-paste"
                rows={10}
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                placeholder='Dán nội dung mảng JSON tại đây... Ví dụ: [{"text": "Câu hỏi...", "options": [...]}]'
                className="w-full text-xs font-mono p-3 border border-slate-200 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/50 min-h-[220px]"
              />
            </div>
          )}

          {activeImportMode === 'file' && (
            <div className="space-y-3">
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">TẢI FILE JSON TỪ MÁY TÍNH</span>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-250 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100/70 hover:border-indigo-300 transition-colors p-4 text-center">
                  <div className="flex flex-col items-center justify-center pt-2">
                    <Upload className="w-10 h-10 text-indigo-400 mb-3" />
                    <p className="text-xs text-slate-700 font-semibold">Chọn tệp tin cấu trúc .json</p>
                    <p className="text-[10px] text-slate-400 mt-1.5">Mẹo: Bạn có thể xuất và lưu tệp này từ các ứng dụng thi khác</p>
                  </div>
                  <input 
                    id="json-file-upload" 
                    type="file" 
                    accept=".json" 
                    className="hidden" 
                    onChange={handleFileUpload} 
                  />
                </label>
              </div>
            </div>
          )}

          {/* Feedback section */}
          {fileError && (
            <div className="flex items-start gap-2 bg-rose-50 border border-rose-100 text-rose-700 p-3 rounded-xl text-xs leading-relaxed animate-fade-in shadow-xs">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{fileError}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 p-3 rounded-xl text-xs leading-relaxed animate-fade-in shadow-xs">
              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}
        </div>

        {/* Right Info Section */}
        <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-bold text-slate-700">Hướng Dẫn Nạp Đề Ôn Thi PDF</span>
            </div>
            
            {activeImportMode === 'raw' ? (
              <div className="space-y-2.5 text-[11px] text-slate-600 leading-relaxed">
                <p>
                  Hệ thống được thiết kế với thuật toán tối ưu nhận diện thông minh, cho phép bạn copy trực tiếp các đoạn văn bản ôn thi từ PDF.
                </p>
                <div className="p-2 border border-slate-205 bg-white rounded-lg text-[10px] font-mono whitespace-pre-wrap leading-tight text-slate-500">
                  <strong>Question 1 </strong><span className="text-slate-350">(hoặc Q1, Câu 1)</span><br />
                  Your company needs resources...<br />
                  A. Public Cloud<br />
                  B. Private Cloud<br />
                  <strong>Answer: A</strong> <span className="text-slate-350">(hoặc Đáp án, Key)</span><br />
                  <strong>Explanation: </strong>Public cloud reduces Cost...
                </div>
                <p className="font-semibold text-indigo-600">
                  💡 Bạn có thể dán liên tiếp nhiều câu hỏi cùng một lúc (VD: dán từ Câu 1 đến Câu 20) máy quét sẽ tự động tách rời và biên tập cho bạn!
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-[11px] text-slate-600 leading-relaxed">
                <p>
                  Nhập dữ liệu chuẩn hóa dạng JSON để kiểm soát tuyệt đối định dạng và câu chữ. Định dạng phù hợp như mẫu sau:
                </p>
                <pre className="text-[10px] bg-slate-900 text-slate-200 overflow-x-auto p-3 rounded-lg font-mono">
                  {JSON.stringify(sampleJson, null, 2)}
                </pre>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-[10px] text-slate-400">
            <span>• Hỗ trợ trắc nghiệm chọn nhiều (Multi-select)</span>
            <span>• Dữ liệu lưu an toàn trên máy tính của bạn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline fallback since Lucide icons might vary
function FileCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
      <path d="m10 13-2 2 2 2"/>
      <path d="m14 17 2-2-2-2"/>
    </svg>
  );
}
