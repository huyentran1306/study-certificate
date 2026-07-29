import fs from 'fs';
import path from 'path';
import { ccaQuestions } from '../src/data/ccaQuestions';
import { Question } from '../src/types';

function normalizeText(text: string): string {
  if (!text) return '';
  return text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

async function run() {
  console.log(`Starting merge process... Current CCA questions count: ${ccaQuestions.length}`);

  const existingNorms = new Set<string>();
  ccaQuestions.forEach(q => {
    existingNorms.add(normalizeText(q.text));
  });

  // Find all json/js raw batch files in scripts/
  const scriptsDir = path.join(process.cwd(), 'scripts');
  const files = fs.readdirSync(scriptsDir).filter(f => 
    (f.startsWith('raw_') || f.startsWith('batch') || f.startsWith('chunk') || f.startsWith('part')) &&
    (f.endsWith('.json') || f.endsWith('.js'))
  );

  let rawList: any[] = [];
  for (const file of files) {
    const filePath = path.join(scriptsDir, file);
    try {
      if (file.endsWith('.json')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          rawList.push(...parsed);
        }
      } else if (file.endsWith('.js')) {
        // dynamic import or require
        const mod = require(filePath);
        const data = mod.RAW_DATA || mod.default || mod;
        if (Array.isArray(data)) {
          rawList.push(...data);
        }
      }
    } catch (e) {
      // skip unparseable
    }
  }

  console.log(`Loaded ${rawList.length} raw items from batch files.`);

  let maxNum = ccaQuestions.reduce((max, q) => Math.max(max, q.questionNumber || 0), 0);
  let nextIdNum = ccaQuestions.length + 1;

  const newQuestions: Question[] = [];
  let duplicatesCount = 0;

  for (const raw of rawList) {
    const qtext = raw.question || raw.text;
    if (!qtext) continue;

    const norm = normalizeText(qtext);
    if (existingNorms.has(norm)) {
      duplicatesCount++;
      continue;
    }

    existingNorms.add(norm);
    maxNum++;
    const qid = `cca${nextIdNum++}`;

    // Options formatting
    let opts: { key: string; text: string }[] = [];
    if (Array.isArray(raw.options)) {
      opts = raw.options;
    } else if (typeof raw.options === 'object' && raw.options !== null) {
      opts = Object.keys(raw.options).sort().map(k => ({
        key: k,
        text: raw.options[k]
      }));
    }

    // Correct answers
    let correctAnswers: string[] = [];
    if (Array.isArray(raw.correctAnswers)) {
      correctAnswers = raw.correctAnswers;
    } else if (Array.isArray(raw.correct)) {
      correctAnswers = raw.correct;
    } else if (typeof raw.correct === 'string') {
      correctAnswers = [raw.correct];
    } else {
      correctAnswers = ['A'];
    }

    const newQ: Question = {
      id: qid,
      questionNumber: maxNum,
      text: qtext,
      options: opts,
      correctAnswers: correctAnswers,
      category: raw.category || 'Claude Architecture & Best Practices',
      explanation: raw.explanation || '',
      tags: raw.tags || ['Claude Certified Architect', 'CCAF']
    };

    newQuestions.push(newQ);
  }

  console.log(`Duplicates skipped: ${duplicatesCount}`);
  console.log(`New unique questions added: ${newQuestions.length}`);

  const totalQuestions = [...ccaQuestions, ...newQuestions];
  console.log(`Total questions after merge: ${totalQuestions.length}`);

  // Write updated src/data/ccaQuestions.ts
  const tsContent = `import { Question } from '../types';\n\nexport const ccaQuestions: Question[] = ${JSON.stringify(totalQuestions, null, 2)};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src/data/ccaQuestions.ts'), tsContent, 'utf-8');
  console.log('Successfully updated src/data/ccaQuestions.ts');

  // Generate SQL insert file
  let sqlContent = `-- SQL DATABASE SCRIPT TO IMPORT QUESTIONS FOR CLAUDE CERTIFIED ARCHITECT - FOUNDATIONS (CCA-F)\n`;
  sqlContent += `-- Cert ID: cca-f\n`;
  sqlContent += `-- Total questions: ${totalQuestions.length}\n`;
  sqlContent += `-- Target Table: questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags)\n\n`;

  for (const q of totalQuestions) {
    const escText = q.text.replace(/'/g, "''");
    const escOpts = JSON.stringify(q.options).replace(/'/g, "''");
    const escCorr = `ARRAY[${q.correctAnswers.map(a => `'${a.replace(/'/g, "''")}'`).join(', ')}]::text[]`;
    const escExp = q.explanation.replace(/'/g, "''");
    const escCat = q.category.replace(/'/g, "''");
    const escTags = `ARRAY[${(q.tags || ['CCA-F']).map(t => `'${t.replace(/'/g, "''")}'`).join(', ')}]::text[]`;

    sqlContent += `INSERT INTO questions (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags) VALUES\n`;
    sqlContent += `(\n`;
    sqlContent += `  '${q.id}', 'cca-f', ${q.questionNumber},\n`;
    sqlContent += `  '${escText}',\n`;
    sqlContent += `  '${escOpts}'::jsonb,\n`;
    sqlContent += `  ${escCorr},\n`;
    sqlContent += `  '${escExp}',\n`;
    sqlContent += `  '${escCat}', ${escTags}\n`;
    sqlContent += `) ON CONFLICT (id) DO NOTHING;\n\n`;
  }

  fs.writeFileSync(path.join(process.cwd(), 'src/data/cca_questions_insert.sql'), sqlContent, 'utf-8');
  console.log('Successfully generated src/data/cca_questions_insert.sql');
}

run().catch(console.error);
