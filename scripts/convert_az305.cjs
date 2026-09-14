const fs = require('fs');
const path = require('path');

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

function convertAZ305() {
  const rawPath = path.join(__dirname, 'raw_az305_data.json');
  if (!fs.existsSync(rawPath)) {
    console.error('raw_az305_data.json not found!');
    return;
  }

  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
  const viCachePath = path.join(__dirname, 'explanations_vi_cache.json');
  const viCache = fs.existsSync(viCachePath) ? JSON.parse(fs.readFileSync(viCachePath, 'utf8')) : {};
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

  const sortedRaw = raw.sort((a, b) => a.qNum - b.qNum);

  const convertedQuestions = sortedRaw.map((item, idx) => {
    const qNum = idx + 1;
    const origQNum = item.qNum;
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
    } else if (rawType === 'answer_reveal') {
      questionType = 'matching_dropdown';
      choices = [
        { key: 'A', text: 'An Azure SQL Database elastic pool' },
        { key: 'B', text: 'An Azure SQL Database single database' },
        { key: 'C', text: 'Azure SQL Managed Instance' },
        { key: 'D', text: 'Business Critical' },
        { key: 'E', text: 'General Purpose' },
        { key: 'F', text: 'Hyperscale' }
      ];
      options = [...choices];
      statements = [
        {
          id: '1',
          text: 'Database:',
          correctAnswer: 'A',
          choiceKeys: ['A', 'B', 'C']
        },
        {
          id: '2',
          text: 'Service tier:',
          correctAnswer: 'D',
          choiceKeys: ['D', 'E', 'F']
        }
      ];
      correctAnswers = ['1=A', '2=D'];
      if (!item.finalExplanation || item.finalExplanation.startsWith('$')) {
        item.finalExplanation = `DB1 and DB2 are two separate application databases being lifted into the Azure SQL Database PaaS platform, and the business requirements call for minimizing cost and administrative effort. An elastic pool lets DB1 and DB2 share one pool of compute/storage resources under a single per-pool price instead of provisioning and managing two independent instances, which is the cheapest, lowest-effort way to host two databases with related usage patterns.\n\nFor the resiliency requirement — remain available if two availability zones in the region fail, fail over automatically, and minimize I/O latency — the service tier must support zone redundancy with a local-storage (not remote-storage) architecture. Business Critical uses the local-storage/Always On availability-group model: a primary replica plus up to three synchronously-updated secondary replicas with data on directly attached SSDs.\n\n**Đáp án chính xác:**\n- **Database:** An Azure SQL Database elastic pool\n- **Service tier:** Business Critical`;
      }
    }

    let imageUrl = undefined;
    const imgMatch = text.match(/!\[.*?\]\((https?:\/\/[^\)]+)\)/);
    if (imgMatch) {
      imageUrl = imgMatch[1];
    }

    return {
      id: `az305-${qNum}`,
      questionNumber: qNum,
      text,
      questionType,
      statements: statements.length > 0 ? statements : undefined,
      options,
      choices: choices.length > 0 ? choices : undefined,
      correctAnswers,
      explanation: viCache[`az305-${qNum}`] || cleanText(item.finalExplanation),
      category: item.category,
      tags: ['AZ-305', item.category],
      imageUrl,
      sourceTitle: `Examcademy AZ-305 Question ${qNum}`,
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
  const tsHeader = `import { Question } from '../types';\n\nexport const az305Questions: Question[] = `;
  const tsContent = `${tsHeader}${JSON.stringify(convertedQuestions, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, '../src/data/az305Questions.ts'), tsContent);
  console.log('Generated src/data/az305Questions.ts');

  // 2. Output JSON import file
  fs.writeFileSync(
    path.join(__dirname, '../src/data/az305_questions_import.json'),
    JSON.stringify(convertedQuestions, null, 2)
  );
  console.log('Generated src/data/az305_questions_import.json');

  return convertedQuestions;
}

module.exports = { convertAZ305 };

if (require.main === module) {
  convertAZ305();
}
