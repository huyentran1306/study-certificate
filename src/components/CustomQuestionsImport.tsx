import React, { useState, ChangeEvent } from 'react';
import { Upload, ClipboardList, PlusCircle, CheckCircle, FileJson, AlertCircle, FileText, Sparkles, BookOpen, FileSpreadsheet, Image, Link, Trash2, FolderOpen, Info, X } from 'lucide-react';
import { Question } from '../types';
import * as XLSX from 'xlsx';

interface CustomQuestionsImportProps {
  onImport: (newQuestions: Question[], resetProgress: boolean) => void;
  currentCount: number;
  existingQuestions: Question[];
}

export default function CustomQuestionsImport({ onImport, currentCount, existingQuestions = [] }: CustomQuestionsImportProps) {
  const [activeImportMode, setActiveImportMode] = useState<'raw' | 'json' | 'file' | 'excel-images'>('raw');
  const [importMergeMode, setImportMergeMode] = useState<'append' | 'replace'>('append');
  const [jsonText, setJsonText] = useState('');
  const [rawText, setRawText] = useState('');
  const [fileError, setFileError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [resetOnImport, setResetOnImport] = useState(true);

  // Excel & Images Sync Mode States
  const [mappedImages, setMappedImages] = useState<Record<string, string>>({}); // base64 images keyed by parsed number/filename
  const [mappedImagesCount, setMappedImagesCount] = useState(0);
  const [excelPasteText, setExcelPasteText] = useState('');
  const [excelInputMode, setExcelInputMode] = useState<'file' | 'paste'>('file');
  const [parsedExcelQuestions, setParsedExcelQuestions] = useState<Question[]>([]);

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

  // Handler for multiple images mapping
  const handleImagesUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    setSuccessMsg(null);
    const files = e.target.files;
    if (!files) return;

    const filesArray = Array.from(files);
    if (filesArray.length === 0) return;

    const newMappedImages = { ...mappedImages };
    let loadedCount = 0;

    filesArray.forEach((fileObj) => {
      const file = fileObj as File;
      const fileName = file.name; // e.g. "35.png" or "cau_35.jpg"
      // Extract numbers from filename as potential question mapping key
      const numMatch = fileName.match(/(\d+)/);
      const numberKey = numMatch ? numMatch[1] : '';
      const nameKey = fileName.toLowerCase().replace(/\.[^/.]+$/, ""); // filename without extension

      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          const dataUrl = evt.target.result as string;
          // Store under different keys for highest probability match
          if (numberKey) {
            newMappedImages[numberKey] = dataUrl;
            // Also save pad keys, e.g. "035" or strip "0" for "35"
            const trimmedNumberKey = parseInt(numberKey, 10).toString();
            newMappedImages[trimmedNumberKey] = dataUrl;
          }
          newMappedImages[nameKey] = dataUrl;
          newMappedImages[fileName.toLowerCase()] = dataUrl;

          loadedCount++;
          if (loadedCount === filesArray.length) {
            setMappedImages(newMappedImages);
            const uniqueKeysCount = filesArray.length;
            setMappedImagesCount(uniqueKeysCount);
            setSuccessMsg(`Đã tải thành công ${filesArray.length} tệp hình ảnh vào bộ nhớ tạm! Hệ thống sẽ tự khớp tệp dạng "35.png", "35.jpg" vào Câu số 35.`);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const clearMappedImages = () => {
    setMappedImages({});
    setMappedImagesCount(0);
    setSuccessMsg('Đã xóa bộ nhớ tạm hình ảnh.');
  };

  // Main Excel data rows processor
  const processExcelRows = (rows: any[][]) => {
    if (rows.length < 2) {
      throw new Error('Dữ liệu bảng tính trống hoặc không đủ tiêu đề/nội dung.');
    }

    let colQuestionNum = -1;
    let colText = -1;
    let colType = -1;
    let colAnswersList = -1;
    let colA = -1, colB = -1, colC = -1, colD = -1, colE = -1;
    let colCorrect = -1;
    let colExplanation = -1;
    let colCategory = -1;
    let colImageName = -1;

    // Read headers row
    const headers = rows[0].map(h => String(h || '').toLowerCase().trim());
    for (let i = 0; i < headers.length; i++) {
      const h = headers[i];
      if (h.includes('câu') || h.includes('stt') || h.includes('question number') || h === 'q#' || h === 'no' || h === 'id' || h === 'num') {
        colQuestionNum = i;
      } else if (h.includes('câu hỏi') || h.includes('nội dung') || h.includes('question text') || h === 'text' || h === 'question' || h === 'content' || h === 'de' || h === 'đề') {
        colText = i;
      } else if (h.includes('loại') || h.includes('type') || h === 'kind' || h === 'loai') {
        colType = i;
      } else if (h.includes('các câu trả lời') || h.includes('câu trả lời') || h.includes('phương án') || h.includes('answers') || h.includes('options list') || h.includes('choices') || h.includes('tra loi')) {
        colAnswersList = i;
      } else if (h === 'a' || h.startsWith('đáp án a') || h.startsWith('option a') || h.includes('phương án a')) {
        colA = i;
      } else if (h === 'b' || h.startsWith('đáp án b') || h.startsWith('option b') || h.includes('phương án b')) {
        colB = i;
      } else if (h === 'c' || h.startsWith('đáp án c') || h.startsWith('option c') || h.includes('phương án c')) {
        colC = i;
      } else if (h === 'd' || h.startsWith('đáp án d') || h.startsWith('option d') || h.includes('phương án d')) {
        colD = i;
      } else if (h === 'e' || h.startsWith('đáp án e') || h.startsWith('option e') || h.includes('phương án e')) {
        colE = i;
      } else if (h.includes('đáp án đúng') || h.includes('correct') || h.includes('key') || h === 'ans' || h === 'answer' || h.includes('dap an') || h.includes('dap_an')) {
        colCorrect = i;
      } else if (h.includes('giải thích') || h.includes('explanation') || h.includes('gợi ý') || h === 'explain') {
        colExplanation = i;
      } else if (h.includes('chủ đề') || h.includes('danh mục') || h.includes('category') || h === 'topic') {
        colCategory = i;
      } else if (h.includes('hình ảnh') || h.includes('image') || h.includes('file ảnh') || h === 'img' || h === 'picture' || h.includes('hinh')) {
        colImageName = i;
      }
    }

    // Auto-fallback mapping by standard column order if text column isn't found
    if (colText === -1) {
      colQuestionNum = 0;
      colText = 1;
      colA = 2;
      colB = 3;
      colC = 4;
      colD = 5;
      colCorrect = 6;
      colExplanation = 7;
    }

    const questionsList: Question[] = [];
    
    // Start parsing from row 1 (row index 0 is the headers)
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      if (!row || row.length === 0) continue;

      const textVal = String(row[colText] || '').trim();
      if (!textVal) continue; // Skip empty rows

      const qNumVal = row[colQuestionNum];
      const qNum = parseInt(String(qNumVal || ''), 10) || r;

      const options: { key: string; text: string }[] = [];
      
      // 1. First parse combined answers/options list if present
      if (colAnswersList !== -1 && row[colAnswersList] !== undefined && String(row[colAnswersList]).trim() !== '') {
        const rawAnswers = String(row[colAnswersList]).trim();
        let parts: string[] = [];
        if (rawAnswers.includes('|')) {
          parts = rawAnswers.split('|');
        } else if (rawAnswers.includes('\n')) {
          parts = rawAnswers.split('\n');
        } else {
          parts = [rawAnswers];
        }

        parts = parts.map(p => p.trim()).filter(Boolean);

        for (const part of parts) {
          // Look for option key prefixes like "A. ...", "B) ...", "C: ..."
          const match = part.match(/^(?:Option\s+)?([A-E])[\.\)\s:-]+\s*(.*)$/i);
          if (match) {
            const key = match[1].toUpperCase();
            const text = match[2].trim();
            options.push({ key, text });
          } else {
            const nextKey = String.fromCharCode(65 + options.length);
            options.push({ key: nextKey, text: part });
          }
        }
      }

      // 2. Fallback to individual A, B, C, D, E columns
      if (options.length === 0) {
        if (colA !== -1 && row[colA] !== undefined && String(row[colA]).trim() !== '') {
          options.push({ key: 'A', text: String(row[colA]).trim() });
        }
        if (colB !== -1 && row[colB] !== undefined && String(row[colB]).trim() !== '') {
          options.push({ key: 'B', text: String(row[colB]).trim() });
        }
        if (colC !== -1 && row[colC] !== undefined && String(row[colC]).trim() !== '') {
          options.push({ key: 'C', text: String(row[colC]).trim() });
        }
        if (colD !== -1 && row[colD] !== undefined && String(row[colD]).trim() !== '') {
          options.push({ key: 'D', text: String(row[colD]).trim() });
        }
        if (colE !== -1 && row[colE] !== undefined && String(row[colE]).trim() !== '') {
          options.push({ key: 'E', text: String(row[colE]).trim() });
        }
      }

      const colTypeVal = colType !== -1 ? String(row[colType] || '').trim().toLowerCase() : '';
      const correctVal = String(row[colCorrect] || '').trim();
      const isYesNo = colTypeVal.includes('yes') || colTypeVal.includes('no') || correctVal.toUpperCase().includes('YES') || correctVal.toUpperCase().includes('NO');

      let correctAnswers: string[] = [];

      // Yes/No custom sub-question combination generator
      if (isYesNo) {
        // Clean and parse YES/NO combinations like "NO / YES / YES"
        const parts = correctVal.toUpperCase().split(/[^A-Z]+/).filter(p => p === 'YES' || p === 'NO');
        if (parts.length > 1) {
          options.length = 0; // Clear any empty options
          
          // Formulate standard option packages so user can choose correct combination
          const correctText = parts.map((p, idx) => `Statement ${idx + 1}: ${p}`).join(' | ');
          options.push({ key: 'A', text: `${correctText} (Đáp án đúng)` });
          
          const alt1 = parts.map((p, idx) => `Statement ${idx + 1}: ${p === 'YES' ? 'NO' : 'YES'}`).join(' | ');
          options.push({ key: 'B', text: alt1 });
          
          if (parts.length >= 3) {
            const alt2 = parts.map((p, idx) => `Statement ${idx + 1}: ${idx === 0 ? (p === 'YES' ? 'NO' : 'YES') : p}`).join(' | ');
            options.push({ key: 'C', text: alt2 });
            const alt3 = parts.map((p, idx) => `Statement ${idx + 1}: ${idx === parts.length - 1 ? (p === 'YES' ? 'NO' : 'YES') : p}`).join(' | ');
            options.push({ key: 'D', text: alt3 });
          } else {
            const alt2 = parts.map((p, idx) => `Statement ${idx + 1}: YES`).join(' | ');
            options.push({ key: 'C', text: alt2 });
            const alt3 = parts.map((p, idx) => `Statement ${idx + 1}: NO`).join(' | ');
            options.push({ key: 'D', text: alt3 });
          }
          correctAnswers = ['A'];
        } else if (parts.length === 1) {
          options.length = 0;
          options.push({ key: 'A', text: 'Yes' });
          options.push({ key: 'B', text: 'No' });
          correctAnswers = parts[0] === 'YES' ? ['A'] : ['B'];
        } else {
          correctAnswers = ['A'];
        }
      } else if (colTypeVal.includes('drag') || colTypeVal.includes('thả') || correctVal.toLowerCase().includes('giải thích') || correctVal.toLowerCase().includes('xem')) {
        // Drag Drop fallback or "Xem giải thích"
        options.length = 0;
        options.push({ key: 'A', text: 'Đối chiếu và so sánh câu trả lời với phần Giải Thích chi tiết' });
        correctAnswers = ['A'];
      } else {
        // Standard question - parse key tokens safely to avoid matching substring characters in general words
        const upperClean = correctVal.toUpperCase();
        const tokens = upperClean.split(/[\s,;&/\\+]+/);
        const found: string[] = [];
        
        // Build valid keys from current options (or fallback to default A-D keys if options is empty)
        const validOptionKeys = options.length > 0 ? new Set(options.map(o => o.key)) : new Set(['A', 'B', 'C', 'D']);
        
        for (const token of tokens) {
          const cleanToken = token.trim();
          if (!cleanToken) continue;
          
          if (validOptionKeys.has(cleanToken)) {
            found.push(cleanToken);
          } else {
            const match = cleanToken.match(/^(?:OPTION|ĐÁP\s*ÁN|CÂU|CHỌN)?\s*([A-E])\.?$/i);
            if (match && validOptionKeys.has(match[1].toUpperCase())) {
              found.push(match[1].toUpperCase());
            }
          }
        }

        // Exact uppercase letters string fallback (e.g. "AB", "DE")
        if (found.length === 0) {
          const letters = upperClean.replace(/[^A-E]/g, '');
          if (letters.length > 0 && letters.length <= 5) {
            for (const char of letters) {
              if (validOptionKeys.has(char)) {
                found.push(char);
              }
            }
          }
        }

        correctAnswers = found.length > 0 ? Array.from(new Set(found)) : ['A'];
      }

      // Default Option fallback if still empty
      if (options.length === 0) {
        options.push({ key: 'A', text: 'Có / Đúng' });
        options.push({ key: 'B', text: 'Không / Sai' });
      }

      const explanation = colExplanation !== -1 ? String(row[colExplanation] || '').trim() : "Giải thích chi tiết từ đáp án chính thức.";
      const category = colCategory !== -1 ? String(row[colCategory] || '').trim() : "Đề thi nạp từ Excel";
      const tempImageName = colImageName !== -1 ? String(row[colImageName] || '').trim() : '';

      questionsList.push({
        id: `excel-${Date.now()}-${qNum}-${Math.random().toString(36).substring(2, 6)}`,
        questionNumber: qNum,
        text: textVal,
        options: options,
        correctAnswers: correctAnswers,
        explanation: explanation || "Giải thích chi tiết từ đáp án chính thức.",
        category: category || "Đề thi nạp từ Excel",
        tags: ["AZ-900", "Excel/CSV Imported"],
        imageUrl: undefined, // Will be reactive mapped
        // Save temporary custom image name for custom image matching
        ...(tempImageName ? { tags: ["AZ-900", "Excel/CSV Imported", `img-file:${tempImageName}`] } : {})
      } as any);
    }

    setParsedExcelQuestions(questionsList);
    setSuccessMsg(`Quét bảng tính thành công! Tìm thấy ${questionsList.length} câu hỏi. Hãy xem trước bảng ghép ảnh ở dưới trước khi lưu.`);
  };

  const handleExcelFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    setSuccessMsg(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const workbook = XLSX.read(bstr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
        
        processExcelRows(data);
      } catch (err: any) {
        setFileError('Lỗi đọc file Excel: ' + (err.message || err));
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleExcelPasteImport = () => {
    setFileError(null);
    setSuccessMsg(null);
    try {
      if (!excelPasteText.trim()) {
        throw new Error('Vui lòng dán các cột copy từ file Excel của bạn.');
      }
      const lines = excelPasteText.split('\n');
      const rows = lines.map(line => line.split('\t'));
      processExcelRows(rows);
    } catch (err: any) {
      setFileError('Lỗi đọc dữ liệu copy-paste: ' + err.message);
    }
  };

  // Computed selector to dynamically map images in real-time
  const getMappedExcelQuestions = (): Question[] => {
    return parsedExcelQuestions.map(q => {
      let imageUrl = undefined;
      const qNumStr = String(q.questionNumber);
      
      // 1. Check if we have an image with key equal to the question number (e.g. "35" or "035")
      if (mappedImages[qNumStr]) {
        imageUrl = mappedImages[qNumStr];
      } else {
        // Try other pattern matchings: "35.png", "cau_35.jpg", "cau35.png", "question_35.jpg"
        const potentialKeys = [
          `cau_${qNumStr}`,
          `cau${qNumStr}`,
          `cau-${qNumStr}`,
          `question_${qNumStr}`,
          `question${qNumStr}`,
          `q_${qNumStr}`,
          `q${qNumStr}`,
          `hinh_${qNumStr}`,
          `hinh${qNumStr}`
        ];

        // Also check if any tags contain `img-file:` to map with specific file name
        const imgFileTag = q.tags?.find(t => t.startsWith('img-file:'));
        if (imgFileTag) {
          const originalImgName = imgFileTag.replace('img-file:', '').toLowerCase();
          const imgNameNoExt = originalImgName.replace(/\.[^/.]+$/, "");
          potentialKeys.push(originalImgName);
          potentialKeys.push(imgNameNoExt);
        }

        for (const k of potentialKeys) {
          const normalizedK = k.toLowerCase().trim();
          if (mappedImages[normalizedK]) {
            imageUrl = mappedImages[normalizedK];
            break;
          }
        }
      }

      return {
        ...q,
        imageUrl: imageUrl
      };
    });
  };

  const finalQuestionsToImport = getMappedExcelQuestions();

  const handleConfirmExcelImport = () => {
    setFileError(null);
    setSuccessMsg(null);
    try {
      if (finalQuestionsToImport.length === 0) {
        throw new Error('Không có danh sách câu hỏi nào được phân tích để lưu. Vui lòng nạp file Excel trước.');
      }

      const result = deduplicateAndProcess(finalQuestionsToImport);
      if (importMergeMode === 'replace') {
        setSuccessMsg(`Đã ghi đè thành công và nạp ${result.added} câu hỏi mới từ Excel có đính kèm ảnh sơ đồ!`);
      } else {
        setSuccessMsg(`Đã trộn và nạp thành công! Thêm mới ${result.added} câu kèm sơ đồ, lọc bỏ ${result.duplicates} câu trùng lặp.`);
      }

      // Reset local temp state
      setParsedExcelQuestions([]);
      setExcelPasteText('');
    } catch (err: any) {
      setFileError(err.message || 'Lỗi lưu dữ liệu từ Excel.');
    }
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
        <div className="flex flex-wrap gap-2 p-1 bg-slate-250/30 rounded-lg w-full md:w-fit">
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
          <button
            onClick={() => { setActiveImportMode('excel-images'); setFileError(null); setSuccessMsg(null); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeImportMode === 'excel-images'
                ? 'bg-white text-indigo-600 shadow-xs' 
                : 'text-slate-500 hover:bg-white/50'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-500" />
            Dán Excel & Ghép thư mục ảnh
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

      {activeImportMode === 'excel-images' ? (
        <div className="space-y-6 mt-4">
          {/* Steps 1 & 2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Step 1: Images Folder / Multi selection */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Image className="w-4 h-4 text-indigo-500" />
                  Bước 1: Chọn Thư Mục / Tệp Ảnh (id.png)
                </span>
                {mappedImagesCount > 0 && (
                  <button
                    onClick={clearMappedImages}
                    className="text-[10px] text-rose-500 hover:text-rose-700 font-bold flex items-center gap-0.5 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Xóa tất cả ảnh đã nạp
                  </button>
                )}
              </div>

              <div className="text-slate-500 text-[11px] leading-relaxed">
                Hệ thống sẽ tự động đối soát: Nếu file ảnh tên là <code className="font-mono font-bold bg-slate-200 px-1 py-0.5 rounded text-indigo-600">35.png</code>, <code className="font-mono font-bold bg-slate-200 px-1 py-0.5 rounded text-indigo-600">35.jpg</code>, nó sẽ tự gán vào Câu số 35 trong bảng Excel.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <label className="flex flex-col items-center justify-center p-3 border border-dashed border-slate-300 rounded-lg hover:bg-slate-150 cursor-pointer text-center bg-white transition-all">
                  <FolderOpen className="w-6 h-6 text-indigo-500 mb-1" />
                  <span className="text-[11px] font-bold text-slate-700">Tải cả Thư mục ảnh</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">Chọn folder chứa ảnh</span>
                  <input
                    type="file"
                    {...{ webkitdirectory: "", directory: "" }}
                    multiple
                    accept="image/*"
                    onChange={handleImagesUpload}
                    className="hidden"
                  />
                </label>

                <label className="flex flex-col items-center justify-center p-3 border border-dashed border-slate-300 rounded-lg hover:bg-slate-150 cursor-pointer text-center bg-white transition-all">
                  <Upload className="w-6 h-6 text-indigo-500 mb-1" />
                  <span className="text-[11px] font-bold text-slate-700">Chọn nhiều file ảnh</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">Giữ Ctrl / Shift để chọn</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImagesUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {mappedImagesCount > 0 ? (
                <div className="bg-emerald-50 px-3 py-2.5 rounded-lg border border-emerald-150 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Đang giữ {mappedImagesCount} hình ảnh trong bộ nhớ đệm.
                </div>
              ) : (
                <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-100 text-[10px] text-amber-700 leading-relaxed">
                  ⚠️ Chưa tải ảnh nào lên. Hãy chọn thư mục ảnh để hệ thống tự động gán hình vào câu hỏi nhé!
                </div>
              )}
            </div>

            {/* Step 2: Excel File or Paste columns */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
                  Bước 2: Nạp bảng câu hỏi từ Excel
                </span>

                <div className="flex bg-slate-200/60 p-0.5 rounded-md">
                  <button
                    onClick={() => setExcelInputMode('file')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      excelInputMode === 'file' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    File Excel
                  </button>
                  <button
                    onClick={() => setExcelInputMode('paste')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      excelInputMode === 'paste' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    Dán Cột
                  </button>
                </div>
              </div>

              {excelInputMode === 'file' ? (
                <div className="space-y-2.5">
                  <div className="text-slate-500 text-[11px]">
                    Hỗ trợ tệp <code className="font-bold bg-slate-200 px-1 rounded text-slate-700">.xlsx</code>, <code className="font-bold bg-slate-200 px-1 rounded text-slate-700">.xls</code>, <code className="font-bold bg-slate-200 px-1 rounded text-slate-700">.csv</code>. Định dạng bảng cần có tiêu đề dòng đầu tiên.
                  </div>
                  <label className="flex flex-col items-center justify-center p-5 border-2 border-dashed border-slate-250 rounded-xl cursor-pointer bg-white hover:bg-slate-100/70 transition-colors text-center">
                    <Upload className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-xs text-slate-700 font-bold">Chọn File Excel / CSV câu hỏi</p>
                    <p className="text-[10px] text-slate-400 mt-1">Hệ thống tự động dò cột: Câu số, Đề bài, A, B, C, D, Đáp án đúng, Giải thích</p>
                    <input 
                      type="file" 
                      accept=".xlsx,.xls,.csv" 
                      className="hidden" 
                      onChange={handleExcelFileChange} 
                    />
                  </label>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div className="text-slate-500 text-[11px] flex justify-between items-center">
                    <span>Dán trực tiếp các dòng từ Excel của bạn (Tab-Separated):</span>
                    <button
                      onClick={handleExcelPasteImport}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-2.5 py-1 rounded text-[10px] shadow-xs cursor-pointer transition-colors"
                    >
                      Xử lý dữ liệu dán
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={excelPasteText}
                    onChange={(e) => setExcelPasteText(e.target.value)}
                    placeholder="Bôi đen toàn bộ bảng trong Excel của bạn, nhấn Ctrl+C rồi dán (Ctrl+V) vào đây..."
                    className="w-full text-[11px] font-mono p-2.5 border border-slate-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white min-h-[105px]"
                  />
                </div>
              )}

              {parsedExcelQuestions.length > 0 && (
                <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-lg border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  Đã tải {parsedExcelQuestions.length} câu hỏi. Sẵn sàng ghép ảnh!
                </div>
              )}
            </div>
          </div>

          {/* Feedback section inside excel-images */}
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

          {/* Step 3: Mapping preview & Action block */}
          {parsedExcelQuestions.length > 0 && (
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
                    Bước 3: Xem trước dữ liệu & Đối soát ảnh tự động
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Hãy kiểm tra các ảnh (cột thứ 3) đã tự động map đúng khớp với câu số hay chưa.
                  </p>
                </div>

                <button
                  onClick={handleConfirmExcelImport}
                  className="bg-indigo-650 hover:bg-indigo-755 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0 self-end sm:self-auto cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  Xác nhận Nạp {finalQuestionsToImport.length} Câu Hỏi & Đồng Bộ Ảnh
                </button>
              </div>

              {/* Stats Summary Panel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 rounded-xl border border-slate-150">
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Tổng số câu hỏi</span>
                  <div className="text-sm font-black text-slate-800">{finalQuestionsToImport.length} câu</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Tổng ảnh bộ đệm</span>
                  <div className="text-sm font-black text-indigo-600">{mappedImagesCount} hình</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Đã ghép ảnh</span>
                  <div className="text-sm font-black text-emerald-600">
                    {finalQuestionsToImport.filter(q => q.imageUrl).length} câu
                  </div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Tỷ lệ tự ghép</span>
                  <div className="text-sm font-black text-indigo-600">
                    {finalQuestionsToImport.length > 0 
                      ? Math.round((finalQuestionsToImport.filter(q => q.imageUrl).length / finalQuestionsToImport.length) * 100) 
                      : 0}%
                  </div>
                </div>
              </div>

              {/* Questions preview mapping list */}
              <div className="max-h-72 overflow-y-auto border border-slate-200 rounded-xl bg-white divide-y divide-slate-100">
                {finalQuestionsToImport.map((q, idx) => {
                  const isImageMatched = !!q.imageUrl;
                  return (
                    <div key={q.id || idx} className="p-3 hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 text-xs">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <span className="bg-slate-100 text-slate-700 font-extrabold px-2.5 py-1 rounded-lg shrink-0 border border-slate-200">
                          Câu {q.questionNumber}
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-slate-800 truncate">{q.text}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5 truncate">
                            Đáp án: <span className="font-extrabold text-indigo-600">{q.correctAnswers.join(', ')}</span> | {q.options.length} phương án | Lời giải: {q.explanation.substring(0, 80)}...
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {isImageMatched ? (
                          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-150 p-1.5 px-2.5 rounded-lg">
                            <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                              <CheckCircle className="w-3.5 h-3.5" />
                              Khớp ảnh ({q.questionNumber}.png)
                            </span>
                            <img
                              src={q.imageUrl}
                              alt={`Thumbnail ${q.questionNumber}`}
                              className="w-8 h-8 rounded object-contain border border-slate-200 bg-slate-100"
                            />
                          </div>
                        ) : (
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-150 p-1.5 px-2.5 rounded-lg">
                            ⚪ Không kèm ảnh
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
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
      )}
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
