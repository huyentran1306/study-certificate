import { Question, StatementItem } from '../types';

/**
 * Parses a single text block into a structured Question object (supporting both multiple-choice and Yes/No statement matrix)
 */
export function parseSingleTextBlock(content: string, num: number): Question | null {
  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  const questionTextLines: string[] = [];
  const options: { key: string; text: string }[] = [];
  const statements: StatementItem[] = [];
  const correctAnswers: string[] = [];
  let explanationLines: string[] = [];
  let detectedCategory = 'General';

  let state: 'question' | 'statements' | 'options' | 'answer' | 'explanation' = 'question';

  // Check if content is a Statement Matrix question (contains "select Yes if", "Statements:", "Phát biểu", or multiple statement items)
  const isStatementMatrixContent = 
    /select\s+Yes\s+if/i.test(content) || 
    /Statements?\s*:/i.test(content) || 
    /Phát\s+biểu\s*:/i.test(content) ||
    /Nhận\s+định\s*:/i.test(content);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if it's a category/topic indicator line, e.g. "Topic: ...", "Chủ đề: ...", "Category: ..."
    const categoryMatch = line.match(/^(?:Topic|Category|Chủ\s+đề|Chuyên\s+đề)\s*:\s*(.*)$/i);
    if (categoryMatch && categoryMatch[1]) {
      detectedCategory = categoryMatch[1].trim();
      continue;
    }

    // Check if it's an explanation indicator line, e.g. "Explanation: ...", "Giải thích: ...", "Explain: ..."
    const explanationMatch = line.match(/^(?:Explanation|Giải\s+thích|Explain|HD\s+giải|Chi\s+tiết)\s*:\s*(.*)$/i);
    if (explanationMatch) {
      state = 'explanation';
      if (explanationMatch[1]) {
        explanationLines.push(explanationMatch[1]);
      }
      continue;
    }

    // Check if it enters Statements section
    const statementsHeaderMatch = line.match(/^(?:Statements?|Phát\s+biểu|Nhận\s+định|Danh\s+sách\s+phát\s+biểu)\s*:\s*(.*)$/i);
    if (statementsHeaderMatch) {
      state = 'statements';
      if (statementsHeaderMatch[1]) {
        // Maybe has first statement inline
        const sMatch = statementsHeaderMatch[1].match(/^(?:Statement\s+)?(\d+|[A-Z])[\.\:\-\)]\s*(.*)$/i);
        if (sMatch) {
          statements.push({
            id: sMatch[1],
            text: sMatch[2].trim(),
            correctAnswer: 'Yes'
          });
        }
      }
      continue;
    }

    // Check if it's an answer indicator line, e.g. "Answer: A", "Correct Answer: B, C", "Đáp án: 1: Yes, 2: No"
    const answerMatch = line.match(/^(?:Correct\s+)?Answer|Đáp\s+án|Key|Chọn|Result\s*:\s*(.*)$/i) || 
                        line.match(/^Answ?:\s*(.*)$/i);
    if (answerMatch) {
      state = 'answer';
      const ansStr = answerMatch[1] ? answerMatch[1].trim() : '';

      // Check if answer is statement pairs, e.g. "1: Yes, 2: No, 3: Yes" or "1. Yes / 2. No"
      const pairMatches = Array.from(ansStr.matchAll(/(\d+|[A-Z])\s*[:\.\-\)]\s*(Yes|No|Đúng|Sai|True|False)/gi));
      if (pairMatches.length > 0) {
        pairMatches.forEach(pm => {
          const sId = pm[1];
          const val = /^(?:Yes|Đúng|True)$/i.test(pm[2]) ? 'Yes' : 'No';
          correctAnswers.push(`${sId}:${val}`);
          // Update matching statement correctAnswer if already found
          const targetSt = statements.find(s => s.id === sId);
          if (targetSt) targetSt.correctAnswer = val;
        });
      } else {
        // Check if answer is a comma/slash sequence of Yes/No, e.g. "Yes, No, Yes" or "Yes / No / Yes"
        const yesNoTokens = ansStr.match(/\b(Yes|No|Đúng|Sai|True|False)\b/gi);
        if (yesNoTokens && yesNoTokens.length > 0) {
          yesNoTokens.forEach((yn, idx) => {
            const sId = String(idx + 1);
            const val = /^(?:Yes|Đúng|True)$/i.test(yn) ? 'Yes' : 'No';
            correctAnswers.push(`${sId}:${val}`);
            if (statements[idx]) {
              statements[idx].correctAnswer = val;
            }
          });
        } else {
          // Standard single/multiple choice keys (A, B, C, D, etc.)
          const keys = ansStr.match(/[A-F]/gi);
          if (keys) {
            correctAnswers.push(...keys.map(k => k.toUpperCase()));
          }
        }
      }
      continue;
    }

    // Check if in statements state or if line looks like a statement item: "1. text", "Statement 1: text", "- Statement 1: text [Yes] [No]"
    const statementItemMatch = line.match(/^(?:Statement\s+)?(?:[\-\*]\s*)?(\d+|[A-Z])[\.\:\-\)]\s*(.*)$/i) ||
                               line.match(/^(?:Phát\s+biểu\s+)?(\d+)[\.\:\-\)]\s*(.*)$/i);

    if ((state === 'statements' || isStatementMatrixContent) && statementItemMatch && state !== 'options' && state !== 'explanation') {
      state = 'statements';
      const sId = statementItemMatch[1];
      let sText = statementItemMatch[2].trim();

      // Check if statement text has inline answer marker, e.g. "... [Yes] [No]" or "... -> Answer: Yes" or "... : Yes"
      let inlineAns: 'Yes' | 'No' = 'Yes';
      const inlineAnsMatch = sText.match(/(?:\[(Yes|No)\]|->\s*(?:Answer:\s*)?(Yes|No)|\:\s*(Yes|No))$/i);
      if (inlineAnsMatch) {
        const rawYn = inlineAnsMatch[1] || inlineAnsMatch[2] || inlineAnsMatch[3];
        inlineAns = /^(?:Yes|Đúng|True)$/i.test(rawYn) ? 'Yes' : 'No';
        sText = sText.replace(/(?:\[(Yes|No)\]|->\s*(?:Answer:\s*)?(Yes|No)|\:\s*(Yes|No))$/i, '').trim();
      }

      // Clean up bracket annotations like "[Yes] [No]" or checkboxes
      sText = sText.replace(/\[\s*Yes\s*\]\s*\[\s*No\s*\]/gi, '').trim();

      statements.push({
        id: sId,
        text: sText,
        correctAnswer: inlineAns
      });
      continue;
    }

    // Check if it's an option line, e.g. A. option, A) option, [A] option, A: option
    const optionMatch = line.match(/^([A-F])[\.\)\-\]\s\:]+\s*(.*)$/i);
    if (optionMatch && state !== 'statements') {
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
    } else if (state === 'statements') {
      // Continuation of previous statement text
      if (statements.length > 0) {
        statements[statements.length - 1].text += ' ' + line;
      } else {
        questionTextLines.push(line);
      }
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

  // Extract answers from trailing lines if not explicitly flagged
  if (correctAnswers.length === 0 && statements.length === 0) {
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      const match = line.match(/(?:Answer|Đáp án|Key|Result)\s*[:\-\s]*([A-F,\s]+)/i);
      if (match) {
        const foundKeys = match[1].match(/[A-F]/gi);
        if (foundKeys) {
          correctAnswers.push(...foundKeys.map(k => k.toUpperCase()));
          break;
        }
      }
    }
  }

  const fullQuestionText = questionTextLines.join(' ').replace(/^(?:Question|Câu|Q|C)\s*\d+[:\.\-\s]*/i, '').trim();

  // If question text is empty, try fallback extraction
  if (!fullQuestionText && lines.length > 0) {
    return null;
  }

  const isStatementMatrix = statements.length > 0;

  // For statement matrix, build formatted fallback options & answers
  let finalOptions = options;
  let finalCorrectAnswers = correctAnswers;

  if (isStatementMatrix) {
    // Generate statement answers if not explicitly collected
    if (finalCorrectAnswers.length === 0) {
      finalCorrectAnswers = statements.map(s => `${s.id}:${s.correctAnswer || 'Yes'}`);
    }
    if (finalOptions.length === 0) {
      finalOptions = statements.map(s => ({
        key: `${s.id}-${s.correctAnswer}`,
        text: `Phát biểu ${s.id}: ${s.text} (${s.correctAnswer})`
      }));
    }
  } else {
    // Standard multiple-choice fallback options
    if (finalOptions.length === 0) {
      finalOptions = [
        { key: 'A', text: 'Lựa chọn A' },
        { key: 'B', text: 'Lựa chọn B' },
        { key: 'C', text: 'Lựa chọn C' },
        { key: 'D', text: 'Lựa chọn D' }
      ];
    }
    if (finalCorrectAnswers.length === 0) {
      finalCorrectAnswers = ['A'];
    }
  }

  return {
    id: `custom-q-${num}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    questionNumber: num,
    text: fullQuestionText || `Nội dung câu hỏi số ${num}`,
    questionType: isStatementMatrix ? 'statement_matrix' : 'multiple_choice',
    statements: isStatementMatrix ? statements : undefined,
    options: finalOptions,
    correctAnswers: Array.from(new Set(finalCorrectAnswers)),
    explanation: explanationLines.join('\n').trim() || 'Chưa có giải thích chi tiết cho câu hỏi này.',
    category: detectedCategory
  };
}

/**
 * Parses raw text containing multiple questions into an array of Question objects
 */
export function parseRawExamText(rawText: string, startNumber: number = 1): Question[] {
  if (!rawText || !rawText.trim()) return [];

  const cleanText = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

  // Split into structural question paragraphs (e.g. Q1, Question 2, Câu 3)
  const questionRegex = /(?:^|\n)\s*(?:Question|Câu|Q|C)\s*(\d+)[:\-\.\s]*/gi;
  const parts = cleanText.split(questionRegex);

  const parsedQuestions: Question[] = [];
  let currentNumber = startNumber;

  if (parts.length <= 1) {
    // Fallback splitting by double blank lines
    const blocks = cleanText.split(/\n\s*\n/);
    blocks.forEach((block, index) => {
      const q = parseSingleTextBlock(block, currentNumber + index);
      if (q) parsedQuestions.push(q);
    });
    return parsedQuestions;
  }

  for (let i = 1; i < parts.length; i += 2) {
    const qNumStr = parts[i];
    const blockContent = parts[i + 1] || '';
    const num = parseInt(qNumStr, 10) || currentNumber;

    const q = parseSingleTextBlock(blockContent, num);
    if (q) {
      parsedQuestions.push(q);
      currentNumber = num + 1;
    }
  }

  return parsedQuestions;
}

/**
 * Smart question parser that automatically detects JSON vs Raw Text
 */
export function smartParseQuestions(input: string, startNumber: number = 1): Question[] {
  if (!input || !input.trim()) return [];

  const trimmed = input.trim();

  // Try JSON first if it starts with [ or {
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      const list = Array.isArray(parsed) ? parsed : [parsed];
      return list.map((item, index) => {
        const isMatrix = 
          item.questionType === 'statement_matrix' || 
          (Array.isArray(item.statements) && item.statements.length > 0);

        let parsedStatements: StatementItem[] | undefined = undefined;
        if (Array.isArray(item.statements) && item.statements.length > 0) {
          parsedStatements = item.statements.map((s: any, sIdx: number) => ({
            id: String(s.id || sIdx + 1),
            text: s.text || '',
            correctAnswer: (s.correctAnswer === 'No' || s.correctAnswer === 'Sai' || s.correctAnswer === 'False') ? 'No' : 'Yes'
          }));
        }

        // Prepare options
        let options = Array.isArray(item.options) ? item.options : [];
        if (options.length === 0) {
          if (isMatrix && parsedStatements) {
            options = parsedStatements.map(s => ({
              key: `${s.id}-${s.correctAnswer}`,
              text: `Phát biểu ${s.id}: ${s.text} (${s.correctAnswer})`
            }));
          } else {
            options = [
              { key: 'A', text: 'Lựa chọn A' },
              { key: 'B', text: 'Lựa chọn B' },
              { key: 'C', text: 'Lựa chọn C' },
              { key: 'D', text: 'Lựa chọn D' }
            ];
          }
        }

        // Prepare correct answers
        let correctAnswers = Array.isArray(item.correctAnswers) ? item.correctAnswers : [];
        if (correctAnswers.length === 0) {
          if (isMatrix && parsedStatements) {
            correctAnswers = parsedStatements.map(s => `${s.id}:${s.correctAnswer}`);
          } else {
            correctAnswers = ['A'];
          }
        }

        return {
          id: item.id || `custom-q-${startNumber + index}-${Date.now()}`,
          questionNumber: item.questionNumber || (startNumber + index),
          questionType: isMatrix ? 'statement_matrix' : (item.questionType || 'multiple_choice'),
          statements: parsedStatements,
          text: item.text || '',
          options: options,
          correctAnswers: correctAnswers,
          explanation: item.explanation || '',
          category: item.category || 'General',
          tags: item.tags || [],
          imageUrl: item.imageUrl || undefined
        };
      });
    } catch {
      // If JSON fails, proceed to raw text parsing
    }
  }

  // Parse as raw exam text
  return parseRawExamText(trimmed, startNumber);
}
