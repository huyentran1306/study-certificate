const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'raw_ai103_data.json'), 'utf8'));
const viCachePath = path.join(__dirname, 'explanations_vi_cache.json');
const viCache = fs.existsSync(viCachePath) ? JSON.parse(fs.readFileSync(viCachePath, 'utf8')) : {};

// Hardcoded prompts for the 2 hoisted questions if needed
const hoistedPrompts = {
  39: `Your company is piloting a customer support agent within a Microsoft Foundry project called Project1. Project1 is connected to an existing Application Insights resource, and the support team reviews runs on the Traces tab.\n\nThe Foundry Agent Service is set up to:\n- Retrieve the Application Insights connection string by calling project client.telemetry.get application insights connection string() .\n- Call configure azure monitor(connection string=...) to enable telemetry.\n\nA separate LangChain service uses OpenTelemetry and is configured as follows:\n- It uses AzureAIOpenTelemetryTracer(connection string=..., enable content recording=False) .\n- It passes the tracer with config={"callbacks":[azure tracer]} .\n\nCompany policy requires that:\n- Telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application Insights resource.\n- Secrets and credentials must not be stored in prompts, tool arguments, or span attributes.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.`,
  92: `You have a Microsoft Foundry project that contains a customer support application.\n\nYou create an evaluation named Run1 with the following configuration:\n- Includes risk and safety metrics\n- Includes the protected material evaluation\n- Includes harmful content metrics that use a medium severity threshold\n\nYou create an evaluation named Run2 with the following configuration:\n- Includes risk and safety metrics\n- Includes the protected material evaluation\n- Includes harmful content metrics that use a high severity threshold\n\nYou run both evaluations against a dataset named DB1 and get the following results:\n- Content harm defect rate of Run1: 12%\n- Content harm defect rate of Run2: 4%\n- Protected material evaluation of Run1: 6%\n- Protected material evaluation of Run2: 6%\n\nYou start a fine-tuning job using DB1. The job fails during the automatic RAI checks for multiple content harm types. You discover that the content filtering configuration is set to high severity.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.`
};

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

const convertedQuestions = raw.map((item, idx) => {
  const qNum = item.qNum;
  const def = item.definition;
  const rawType = def.type;

  let text = def.stemRaw;
  if (!text || text.startsWith('$')) {
    text = hoistedPrompts[qNum] || item.ldQuestion?.text || `Question ${qNum}`;
  }
  text = cleanText(text);

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

    // Collect all unique option strings across blanks
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

    // Fallback options for views that expect options
    options = [...choices];

    statements = (def.blanks || []).map((b, i) => {
      const correctText = cleanText(b.answer);
      const choiceObj = choices.find(c => c.text === correctText);
      const correctKey = choiceObj ? choiceObj.key : 'A';

      // choiceKeys for this row
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

    // Collect choices from items
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

  // Extract image if any markdown image is in text
  let imageUrl = undefined;
  const imgMatch = text.match(/!\[.*?\]\((https?:\/\/[^\)]+)\)/);
  if (imgMatch) {
    imageUrl = imgMatch[1];
  }

  return {
    id: `ai103-${qNum}`,
    questionNumber: qNum,
    text,
    questionType,
    statements: statements.length > 0 ? statements : undefined,
    options,
    choices: choices.length > 0 ? choices : undefined,
    correctAnswers,
    explanation: viCache[`ai103-${qNum}`] || cleanText(item.finalExplanation),
    category: item.category,
    tags: ['AI-103', item.category],
    imageUrl,
    sourceTitle: `Examcademy AI-103 Question ${qNum}`,
    sourceUrl: item.url,
    lastVerifiedAt: new Date().toISOString()
  };
});

console.log(`Converted ${convertedQuestions.length} questions successfully!`);

// Validate all questions
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

export const ai103Questions: Question[] = `;

const tsContent = `${tsHeader}${JSON.stringify(convertedQuestions, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../src/data/ai103Questions.ts'), tsContent);
console.log('Generated src/data/ai103Questions.ts');

// 2. Output JSON import file
fs.writeFileSync(
  path.join(__dirname, '../src/data/ai103_questions_import.json'),
  JSON.stringify(convertedQuestions, null, 2)
);
console.log('Generated src/data/ai103_questions_import.json');

// 3. Output SQL upsert file
function escapeSql(str) {
  if (!str) return "''";
  return "'" + str.replace(/'/g, "''") + "'";
}

const sqlLines = [
  `-- AI-103 Questions Upsert SQL Script`,
  `-- Total questions: ${convertedQuestions.length}`,
  ``,
  `INSERT INTO public.questions (`,
  `  id, certificate_id, question_number, text, question_type,`,
  `  options, choices, statements, correct_answers, explanation,`,
  `  category, tags, image_url, source_title, source_url, status`,
  `) VALUES`
];

const valueRows = convertedQuestions.map((q) => {
  const optionsJson = escapeSql(JSON.stringify(q.options || []));
  const choicesJson = escapeSql(JSON.stringify(q.choices || []));
  const statementsJson = escapeSql(JSON.stringify(q.statements || []));
  const correctAnsJson = escapeSql(JSON.stringify(q.correctAnswers || []));
  const tagsJson = escapeSql(JSON.stringify(q.tags || []));

  return `  (${escapeSql(q.id)}, 'ai-103', ${q.questionNumber}, ${escapeSql(q.text)}, ${escapeSql(q.questionType)}, ${optionsJson}::jsonb, ${choicesJson}::jsonb, ${statementsJson}::jsonb, ${correctAnsJson}::jsonb, ${escapeSql(q.explanation)}, ${escapeSql(q.category)}, ${tagsJson}::jsonb, ${q.imageUrl ? escapeSql(q.imageUrl) : 'NULL'}, ${escapeSql(q.sourceTitle)}, ${escapeSql(q.sourceUrl)}, 'published')`;
});

sqlLines.push(valueRows.join(',\n') + ';');
sqlLines.push(``);
sqlLines.push(`-- On conflict update`);
sqlLines.push(`-- ON CONFLICT (certificate_id, question_number) DO UPDATE SET ...`);

fs.writeFileSync(path.join(__dirname, '../src/data/ai103_questions_upsert.sql'), sqlLines.join('\n'));
console.log('Generated src/data/ai103_questions_upsert.sql');
