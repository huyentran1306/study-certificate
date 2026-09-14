const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'raw_ab100_data.json'), 'utf8'));
const viCachePath = path.join(__dirname, 'explanations_vi_cache.json');
const viCache = fs.existsSync(viCachePath) ? JSON.parse(fs.readFileSync(viCachePath, 'utf8')) : {};

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

function cleanText(txt) {
  if (!txt) return '';
  return txt
    .replace(/\\n/g, '\n')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

const convertedQuestions = raw.map((item) => {
  const qNum = item.qNum;
  const def = item.definition;
  const rawType = def.type;

  let text = cleanText(def.stemRaw);

  let questionType = 'multiple_choice';
  let options = [];
  let choices = [];
  let statements = [];
  let correctAnswers = [];

  if (rawType === 'multiple_choice') {
    questionType = 'multiple_choice';
    options = (def.choices || []).map((c, i) => ({
      key: c.label || letters[i],
      text: cleanText(c.text)
    }));
    correctAnswers = (def.answers || []).map(a => a.trim().toUpperCase());
  } else if (rawType === 'statements') {
    questionType = 'statement_matrix';
    options = [
      { key: 'Yes', text: 'Yes' },
      { key: 'No', text: 'No' }
    ];
    statements = (def.statements || []).map((s, i) => {
      const ans = s.answer ? s.answer.trim() : 'No';
      return {
        id: String(i + 1),
        text: cleanText(s.text),
        correctAnswer: ans
      };
    });
    correctAnswers = statements.map(s => `${s.id}:${s.correctAnswer}`);
  } else if (rawType === 'dropdown') {
    questionType = 'matching_dropdown';

    const uniqueOptions = [];
    (def.blanks || []).forEach(b => {
      (b.options || []).forEach(opt => {
        const cleaned = cleanText(opt);
        if (!uniqueOptions.includes(cleaned)) uniqueOptions.push(cleaned);
      });
    });

    choices = uniqueOptions.map((opt, i) => ({
      key: letters[i] || String(i + 1),
      text: opt
    }));
    options = [...choices];

    statements = (def.blanks || []).map((b, i) => {
      const correctText = cleanText(b.answer);
      const choiceObj = choices.find(c => c.text === correctText);
      const correctKey = choiceObj ? choiceObj.key : 'A';

      const rowChoiceKeys = (b.options || []).map(opt => {
        const cleaned = cleanText(opt);
        const match = choices.find(c => c.text === cleaned);
        return match ? match.key : null;
      }).filter(Boolean);

      return {
        id: String(b.id || i + 1),
        text: cleanText(b.label || `Option ${i + 1}:`),
        correctAnswer: correctKey,
        choiceKeys: rowChoiceKeys.length > 0 ? rowChoiceKeys : undefined
      };
    });

    correctAnswers = statements.map(s => `${s.id}=${s.correctAnswer}`);
  } else if (rawType === 'drag_drop') {
    questionType = 'matching_drag_drop';

    const allItems = def.items && def.items.length > 0
      ? def.items
      : [...new Set((def.slots || []).map(s => s.answer))];

    choices = allItems.map((item, i) => ({
      key: letters[i] || String(i + 1),
      text: cleanText(item)
    }));
    options = [...choices];

    statements = (def.slots || []).map((slot, i) => {
      const correctText = cleanText(slot.answer);
      const choiceObj = choices.find(c => c.text === correctText);
      const correctKey = choiceObj ? choiceObj.key : 'A';

      return {
        id: String(slot.id || i + 1),
        text: cleanText(slot.label || `Slot ${i + 1}:`),
        correctAnswer: correctKey
      };
    });

    correctAnswers = statements.map(s => `${s.id}=${s.correctAnswer}`);
  }

  let imageUrl = undefined;
  const imgMatch = text.match(/!\[.*?\]\((https?:\/\/[^\)]+)\)/);
  if (imgMatch) {
    imageUrl = imgMatch[1];
  }

  return {
    id: `ab100-${qNum}`,
    questionNumber: qNum,
    text,
    questionType,
    statements: statements.length > 0 ? statements : undefined,
    options,
    choices: choices.length > 0 ? choices : undefined,
    correctAnswers,
    explanation: viCache[`ab100-${qNum}`] || cleanText(item.finalExplanation),
    category: item.category,
    tags: ['AB-100', item.category],
    imageUrl,
    sourceTitle: `Examcademy AB-100 Question ${qNum}`,
    sourceUrl: item.url,
    lastVerifiedAt: new Date().toISOString()
  };
});

console.log(`Converted ${convertedQuestions.length} questions successfully!`);

let issues = 0;
convertedQuestions.forEach(q => {
  if (!q.text || q.text.startsWith('$')) {
    console.error(`Q${q.questionNumber} has invalid text!`);
    issues++;
  }
  if (!q.correctAnswers || q.correctAnswers.length === 0) {
    console.error(`Q${q.questionNumber} has NO correct answers!`);
    issues++;
  }
  if (!q.explanation) {
    console.error(`Q${q.questionNumber} has NO explanation!`);
    issues++;
  }
  if (q.questionType === 'multiple_choice' && (!q.options || q.options.length < 2)) {
    console.error(`Q${q.questionNumber} MC has <2 options!`);
    issues++;
  }
  if ((q.questionType === 'matching_dropdown' || q.questionType === 'matching_drag_drop' || q.questionType === 'statement_matrix') && (!q.statements || q.statements.length === 0)) {
    console.error(`Q${q.questionNumber} structured has no statements!`);
    issues++;
  }
});

console.log(`Validation complete. Total issues: ${issues}`);

// 1. Output TypeScript file
const tsHeader = `import { Question } from '../types';

export const ab100Questions: Question[] = `;

const tsContent = `${tsHeader}${JSON.stringify(convertedQuestions, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../src/data/ab100Questions.ts'), tsContent);
console.log('Generated src/data/ab100Questions.ts');

// 2. Output JSON import file
fs.writeFileSync(
  path.join(__dirname, '../src/data/ab100_questions_import.json'),
  JSON.stringify(convertedQuestions, null, 2)
);
console.log('Generated src/data/ab100_questions_import.json');
