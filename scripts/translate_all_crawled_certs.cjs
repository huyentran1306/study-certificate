const fs = require('fs');
const path = require('path');
const { translateExplanation, cache, saveCache } = require('./localize_new_certs_explanations.cjs');

const projectDir = path.resolve(__dirname, '..');

const CERTS = [
  { id: 'ai-103', name: 'ai103', varName: 'ai103Questions' },
  { id: 'ai-200', name: 'ai200', varName: 'ai200Questions' },
  { id: 'ab-100', name: 'ab100', varName: 'ab100Questions' },
  { id: 'az-305', name: 'az305', varName: 'az305Questions' },
];

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/'/g, "''") + "'";
}

async function processCert(certInfo) {
  const jsonPath = path.join(projectDir, 'src', 'data', `${certInfo.name}_questions_import.json`);
  const tsPath = path.join(projectDir, 'src', 'data', `${certInfo.varName}.ts`);
  const sqlPath = path.join(projectDir, 'src', 'data', `${certInfo.name}_questions_upsert.sql`);

  if (!fs.existsSync(jsonPath)) {
    console.error(`File not found: ${jsonPath}`);
    return;
  }

  const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`\n======================================================`);
  console.log(`Starting translation for ${certInfo.id.toUpperCase()} (${questions.length} questions)...`);
  console.log(`======================================================`);

  let translatedCount = 0;
  const CONCURRENCY = 6;
  let cursor = 0;

  async function worker() {
    while (cursor < questions.length) {
      const idx = cursor++;
      const q = questions[idx];

      if (!q.explanation) continue;

      // Check cache first
      if (cache[q.id]) {
        q.explanation = cache[q.id];
        translatedCount++;
        continue;
      }

      try {
        const viExplanation = await translateExplanation(q.explanation);
        if (viExplanation) {
          cache[q.id] = viExplanation;
          q.explanation = viExplanation;
          translatedCount++;
        }
      } catch (err) {
        console.warn(`Error translating question ${q.id}:`, err.message);
      }

      if (translatedCount % 10 === 0 || idx === questions.length - 1) {
        saveCache();
        process.stdout.write(`[${certInfo.id.toUpperCase()}] Translated ${translatedCount}/${questions.length} questions...\r`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);
  saveCache();
  console.log(`\n[${certInfo.id.toUpperCase()}] Completed! ${translatedCount}/${questions.length} translated.`);

  // 1. Write updated JSON
  fs.writeFileSync(jsonPath, JSON.stringify(questions, null, 2));
  console.log(`Updated: ${jsonPath}`);

  // 2. Write updated TypeScript file
  const tsContent = `import { Question } from '../types';\n\nexport const ${certInfo.varName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(tsPath, tsContent);
  console.log(`Updated: ${tsPath}`);

  // 3. Write individual SQL upsert file
  const sqlLines = [
    `-- ${certInfo.id.toUpperCase()} Questions Upsert SQL Script (Vietnamese Explanations)`,
    `-- Total questions: ${questions.length}`,
    ``,
    `INSERT INTO public.questions (`,
    `  id, cert_id, question_number, text, question_type,`,
    `  options, choices, statements, correct_answers, explanation,`,
    `  category, tags, image_url, source_title, source_url, status`,
    `) VALUES`
  ];

  const valueRows = questions.map(q => {
    let optionsPayload = q.options;
    if (q.questionType === 'statement_matrix') {
      optionsPayload = { statements: q.statements, choices: q.options };
    } else if (q.questionType === 'matching_dropdown' || q.questionType === 'matching_drag_drop' || q.questionType === 'drag_drop') {
      optionsPayload = { statements: q.statements, choices: q.choices || q.options };
    }

    const optionsJson = escapeSql(JSON.stringify(optionsPayload || []));
    const choicesJson = escapeSql(JSON.stringify(q.choices || []));
    const statementsJson = escapeSql(JSON.stringify(q.statements || []));
    const correctAnsJson = escapeSql(JSON.stringify(q.correctAnswers || []));
    const tagsJson = escapeSql(JSON.stringify(q.tags || []));

    return `  (${escapeSql(q.id)}, ${escapeSql(certInfo.id)}, ${q.questionNumber}, ${escapeSql(q.text)}, ${escapeSql(q.questionType || 'multiple_choice')}, ${optionsJson}::jsonb, ${choicesJson}::jsonb, ${statementsJson}::jsonb, ${correctAnsJson}::jsonb, ${escapeSql(q.explanation)}, ${escapeSql(q.category || 'General')}, ${tagsJson}::jsonb, ${q.imageUrl ? escapeSql(q.imageUrl) : 'NULL'}, ${escapeSql(q.sourceTitle || '')}, ${escapeSql(q.sourceUrl || '')}, 'published')`;
  });

  sqlLines.push(valueRows.join(',\n'));
  sqlLines.push(`ON CONFLICT (id) DO UPDATE SET`);
  sqlLines.push(`  text = EXCLUDED.text,`);
  sqlLines.push(`  question_type = EXCLUDED.question_type,`);
  sqlLines.push(`  options = EXCLUDED.options,`);
  sqlLines.push(`  choices = EXCLUDED.choices,`);
  sqlLines.push(`  statements = EXCLUDED.statements,`);
  sqlLines.push(`  correct_answers = EXCLUDED.correct_answers,`);
  sqlLines.push(`  explanation = EXCLUDED.explanation,`);
  sqlLines.push(`  category = EXCLUDED.category,`);
  sqlLines.push(`  tags = EXCLUDED.tags,`);
  sqlLines.push(`  image_url = EXCLUDED.image_url,`);
  sqlLines.push(`  source_title = EXCLUDED.source_title,`);
  sqlLines.push(`  source_url = EXCLUDED.source_url,`);
  sqlLines.push(`  status = EXCLUDED.status;`);

  fs.writeFileSync(sqlPath, sqlLines.join('\n'));
  console.log(`Updated: ${sqlPath}`);
}

async function main() {
  for (const cert of CERTS) {
    await processCert(cert);
  }

  // Re-generate master SQL scripts
  console.log('\n--- Regenerating Master SQL Scripts ---');
  require('./generate_full_sql.cjs');
  require('./generate_az305_sql.cjs');
  console.log('\nAll done successfully!');
}

main().catch(err => {
  console.error('Fatal error during translation process:', err);
  process.exit(1);
});
