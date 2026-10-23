const fs = require('fs');
const path = require('path');
const { crawlExam } = require('./crawl_cert_universal.cjs');
const { translateExplanation, cache, saveCache } = require('./localize_new_certs_explanations.cjs');

const projectDir = path.resolve(__dirname, '..');

const CLAUDE_CERTS = [
  {
    id: 'cca-f',
    slug: 'cca-f',
    provider: 'anthropic',
    name: 'cca',
    varName: 'ccaQuestions',
    code: 'CCA-F',
    title: 'Claude Certified Architect — Foundations',
    description: 'Chinh phục chứng chỉ Kiến trúc sư Claude (Foundations) ủy quyền bởi Anthropic. Bao quát thiết kế prompt, kiến trúc tác nhân, MCP (Model Context Protocol), và rào chắn an toàn.',
    difficulty: 'Trung cấp',
    estimatedHours: '12-18 Giờ',
    colorClass: 'bg-gradient-to-br from-amber-600 via-orange-700 to-amber-950 text-white',
    iconName: 'Trophy',
    totalQuestions: 134,
    isDisabled: false, // Active on homepage
    badge: 'verified'
  },
  {
    id: 'ccao-f',
    slug: 'ccao-f',
    provider: 'anthropic',
    name: 'ccao',
    varName: 'ccaoQuestions',
    code: 'CCAO-F',
    title: 'Claude Certified Associate — Foundations',
    description: 'Chinh phục chứng chỉ Claude Certified Associate (Foundations). Bao quát kiến thức nền tảng về mô hình Claude, prompt engineering cơ bản, khả năng đa phương thức và ứng dụng AI có trách nhiệm.',
    difficulty: 'Cơ bản',
    estimatedHours: '8-12 Giờ',
    colorClass: 'bg-gradient-to-br from-amber-500 via-orange-600 to-amber-900 text-white',
    iconName: 'Award',
    totalQuestions: 119,
    isDisabled: true, // Default hidden
    badge: 'new'
  },
  {
    id: 'ccdv-f',
    slug: 'ccdv-f',
    provider: 'anthropic',
    name: 'ccdv',
    varName: 'ccdvQuestions',
    code: 'CCDV-F',
    title: 'Claude Certified Developer — Foundations',
    description: 'Chinh phục chứng chỉ Claude Certified Developer (Foundations). Phát triển ứng dụng với Anthropic API, cấu trúc tin nhắn, gọi hàm (Tool Use / Tool Calling), quản lý ngữ cảnh và triển khai SDK.',
    difficulty: 'Trung cấp',
    estimatedHours: '10-15 Giờ',
    colorClass: 'bg-gradient-to-br from-orange-600 via-amber-700 to-amber-950 text-white',
    iconName: 'Cpu',
    totalQuestions: 53,
    isDisabled: true, // Default hidden
    badge: 'new'
  },
  {
    id: 'ccar-p',
    slug: 'ccar-p',
    provider: 'anthropic',
    name: 'ccarp',
    varName: 'ccarpQuestions',
    code: 'CCAR-P',
    title: 'Claude Certified Architect — Professional',
    description: 'Chinh phục chứng chỉ cấp cao Claude Certified Architect (Professional). Thiết kế hệ thống AI quy mô doanh nghiệp, quản trị rủi ro & an toàn bảo mật, tối ưu hóa độ trễ/chi phí và điều phối tác nhân đa luồng.',
    difficulty: 'Nâng cao',
    estimatedHours: '18-24 Giờ',
    colorClass: 'bg-gradient-to-br from-orange-700 via-red-800 to-slate-950 text-white',
    iconName: 'ShieldCheck',
    totalQuestions: 127,
    isDisabled: true, // Default hidden
    badge: 'new'
  }
];

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

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function toPostgresTextArray(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) {
    return 'ARRAY[]::text[]';
  }
  const escaped = arr.map(item => escapeSql(String(item)));
  return `ARRAY[${escaped.join(', ')}]::text[]`;
}

function hasVietnameseAccent(str) {
  if (!str) return false;
  return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);
}

function convertRawToQuestions(rawList, certConfig) {
  const certIdNoHyphen = certConfig.name;
  return rawList.map((item, idx) => {
    const qNum = item.qNum;
    const def = item.definition || {};
    const rawType = def.type || 'multiple_choice';

    let text = def.stemRaw || `Question ${qNum}`;
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
          correctAnswer: ans.toLowerCase().includes('yes') ? 'Yes' : 'No'
        };
      });
      correctAnswers = statements.map(s => `${s.id}:${s.correctAnswer}`);
    } else if (rawType === 'boxes' || rawType === 'dropdowns') {
      questionType = 'matching_dropdown';
      const allChoices = def.choices || [];
      choices = allChoices.map((c, i) => ({
        key: c.label || letters[i],
        text: cleanText(c.text)
      }));
      options = [...choices];

      statements = (def.boxes || def.dropdowns || []).map((b, i) => {
        const targetText = cleanText(b.answer || b.correct);
        let correctKey = letters[0];
        const match = choices.find(c => c.text.toLowerCase() === targetText.toLowerCase());
        if (match) correctKey = match.key;
        else if (b.correct && choices.some(c => c.key === b.correct)) correctKey = b.correct;

        const rowChoiceKeys = (b.choices || []).map(bcText => {
          const matchChoice = choices.find(c => c.text.toLowerCase() === cleanText(bcText).toLowerCase());
          return matchChoice ? matchChoice.key : null;
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

      choices = allItems.map((it, i) => ({
        key: letters[i] || String(i + 1),
        text: cleanText(it)
      }));
      options = [...choices];

      statements = (def.slots || []).map((slot, i) => {
        const targetText = cleanText(slot.answer);
        let correctKey = choices[0]?.key || 'A';
        const match = choices.find(c => c.text.toLowerCase() === targetText.toLowerCase());
        if (match) correctKey = match.key;

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

    const qId = `${certIdNoHyphen}-${qNum}`;
    let explanation = cleanText(item.finalExplanation || def.explanation || '');

    return {
      id: qId,
      questionNumber: qNum,
      text,
      questionType,
      statements: statements.length > 0 ? statements : undefined,
      options,
      choices: choices.length > 0 ? choices : undefined,
      correctAnswers,
      explanation,
      category: item.category || 'General',
      tags: [certConfig.code, item.category || 'General'],
      imageUrl,
      sourceTitle: `Examcademy ${certConfig.code} Question ${qNum}`,
      sourceUrl: item.url,
      lastVerifiedAt: new Date().toISOString()
    };
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function processSingleCert(certConfig) {
  console.log(`\n======================================================`);
  console.log(`PROCESSING: ${certConfig.code} - ${certConfig.title}`);
  console.log(`======================================================`);

  // 1. Crawl
  const rawDataPath = path.join(__dirname, `raw_${certConfig.slug.replace(/-/g, '')}_data.json`);
  let rawQuestions = [];
  if (fs.existsSync(rawDataPath)) {
    try {
      rawQuestions = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));
    } catch {}
  }
  if (rawQuestions.length < certConfig.totalQuestions) {
    rawQuestions = await crawlExam(certConfig.slug, certConfig.totalQuestions, 4, certConfig.provider || 'anthropic');
  }

  // 2. Convert
  const questions = convertRawToQuestions(rawQuestions, certConfig);
  console.log(`[${certConfig.code}] Loaded ${questions.length} questions.`);

  // 3. Localize explanations
  console.log(`[${certConfig.code}] Localizing explanations to Vietnamese...`);
  let translated = 0;
  let cursor = 0;
  const CONCURRENCY = 3;

  async function translateWorker() {
    while (cursor < questions.length) {
      const q = questions[cursor++];
      if (!q.explanation) continue;

      if (cache[q.id] && hasVietnameseAccent(cache[q.id])) {
        q.explanation = cache[q.id];
        translated++;
        continue;
      }

      let success = false;
      for (let attempt = 1; attempt <= 4; attempt++) {
        try {
          const viExp = await translateExplanation(q.explanation);
          if (viExp && hasVietnameseAccent(viExp)) {
            cache[q.id] = viExp;
            q.explanation = viExp;
            translated++;
            success = true;
            break;
          }
        } catch (err) {
          if (err.message.includes('429')) {
            console.warn(`[${certConfig.code}] Rate limit, sleeping ${attempt * 6}s...`);
            await sleep(attempt * 6000);
          } else {
            await sleep(1500);
          }
        }
      }

      if (!success && cache[q.id]) {
        q.explanation = cache[q.id];
      }

      await sleep(300);

      if (translated % 15 === 0 || cursor >= questions.length) {
        saveCache();
        process.stdout.write(`[${certConfig.code}] Progress: ${translated}/${questions.length} explanations...\r`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => translateWorker()));
  saveCache();
  console.log(`\n[${certConfig.code}] Complete! ${translated}/${questions.length} explanations localized.`);

  // 4. Output TypeScript file
  const tsPath = path.join(projectDir, 'src', 'data', `${certConfig.varName}.ts`);
  const tsHeader = `import { Question } from '../types';\n\nexport const ${certConfig.varName}: Question[] = `;
  fs.writeFileSync(tsPath, `${tsHeader}${JSON.stringify(questions, null, 2)};\n`);
  console.log(`Generated: ${tsPath}`);

  // 5. Output JSON import file
  const jsonPath = path.join(projectDir, 'src', 'data', `${certConfig.name}_questions_import.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(questions, null, 2));
  console.log(`Generated: ${jsonPath}`);

  // 6. Output SQL upsert file
  const sqlPath = path.join(projectDir, 'src', 'data', `${certConfig.name}_questions_upsert.sql`);
  const sqlLines = [
    `-- =========================================================================`,
    `-- STANDALONE SQL IMPORT FOR ${certConfig.code}: ${certConfig.title}`,
    `-- Total questions: ${questions.length} questions`,
    `-- Default status: is_disabled = ${certConfig.isDisabled ? 'true' : 'false'}`,
    `-- =========================================================================`,
    ``,
    `BEGIN;`,
    ``,
    `-- 1. Ensure custom_certificates table has is_disabled & badge column`,
    `ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS is_disabled BOOLEAN DEFAULT false;`,
    `ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';`,
    ``,
    `-- 2. Upsert Certificate metadata`,
    `INSERT INTO public.custom_certificates (`,
    `  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge`,
    `) VALUES (`,
    `  ${escapeSql(certConfig.id)},`,
    `  ${escapeSql(certConfig.title)},`,
    `  ${escapeSql(certConfig.code)},`,
    `  ${escapeSql(certConfig.description)},`,
    `  ${escapeSql(certConfig.difficulty)},`,
    `  ${escapeSql(certConfig.estimatedHours)},`,
    `  ${escapeSql(certConfig.colorClass)},`,
    `  ${escapeSql(certConfig.iconName)},`,
    `  false,`,
    `  ${certConfig.isDisabled ? 'true' : 'false'},`,
    `  ${escapeSql(certConfig.badge || 'new')}`,
    `) ON CONFLICT (id) DO UPDATE SET`,
    `  name = EXCLUDED.name,`,
    `  code = EXCLUDED.code,`,
    `  description = EXCLUDED.description,`,
    `  difficulty = EXCLUDED.difficulty,`,
    `  estimated_hours = EXCLUDED.estimated_hours,`,
    `  color_class = EXCLUDED.color_class,`,
    `  icon_name = EXCLUDED.icon_name,`,
    `  badge = EXCLUDED.badge;`,
    ``,
    `-- 3. Upsert Questions`,
    `INSERT INTO public.questions (`,
    `  id, cert_id, question_number, text, options,`,
    `  correct_answers, explanation, category, tags, image_url, status`,
    `) VALUES`
  ];

  const valueRows = questions.map(q => {
    let optionsPayload = q.options;
    if (q.questionType === 'statement_matrix') {
      optionsPayload = { statements: q.statements, choices: q.options };
    } else if (q.questionType === 'matching_dropdown' || q.questionType === 'matching_drag_drop') {
      optionsPayload = { statements: q.statements, choices: q.choices || q.options };
    }

    const optionsJson = escapeSql(JSON.stringify(optionsPayload || []));
    const correctAnswersArr = toPostgresTextArray(q.correctAnswers || []);
    const tagsArr = toPostgresTextArray(q.tags || [certConfig.code, q.category || 'General']);

    return `  (${escapeSql(q.id)}, ${escapeSql(certConfig.id)}, ${q.questionNumber}, ${escapeSql(q.text)}, ${optionsJson}::jsonb, ${correctAnswersArr}, ${escapeSql(q.explanation)}, ${escapeSql(q.category || 'General')}, ${tagsArr}, ${q.imageUrl ? escapeSql(q.imageUrl) : 'NULL'}, 'published')`;
  });

  sqlLines.push(valueRows.join(',\n'));
  sqlLines.push(`ON CONFLICT (id) DO UPDATE SET`);
  sqlLines.push(`  text = EXCLUDED.text,`);
  sqlLines.push(`  options = EXCLUDED.options,`);
  sqlLines.push(`  correct_answers = EXCLUDED.correct_answers,`);
  sqlLines.push(`  explanation = EXCLUDED.explanation,`);
  sqlLines.push(`  category = EXCLUDED.category,`);
  sqlLines.push(`  tags = EXCLUDED.tags,`);
  sqlLines.push(`  image_url = EXCLUDED.image_url,`);
  sqlLines.push(`  status = EXCLUDED.status;`);
  sqlLines.push(``);
  sqlLines.push(`COMMIT;`);

  fs.writeFileSync(sqlPath, sqlLines.join('\n'));
  console.log(`Generated: ${sqlPath}`);
  return { config: certConfig, count: questions.length, sqlContent: sqlLines.join('\n') };
}

async function main() {
  const results = {};
  const sqlContents = [];

  for (const cert of CLAUDE_CERTS) {
    const res = await processSingleCert(cert);
    results[cert.id] = res.count;
    sqlContents.push(res.sqlContent);
  }

  // Combined Claude Certs SQL
  const combinedSqlPath = path.join(projectDir, 'src', 'data', 'all_claude_certs_upsert.sql');
  const combinedSql = [
    `-- =========================================================================`,
    `-- COMBINED UPSERT SCRIPT FOR ANTHROPIC CLAUDE CERTIFICATIONS`,
    `-- Includes: CCA-F (134 Qs), CCAO-F (119 Qs), CCDV-F (53 Qs), CCAR-P (127 Qs)`,
    `-- Generated on: ${new Date().toISOString()}`,
    `-- Total questions: 433 questions`,
    `-- Note: correct_answers and tags use PostgreSQL ARRAY[...]::text[] syntax.`,
    `-- =========================================================================`,
    ``,
    sqlContents.join('\n\n')
  ].join('\n');

  fs.writeFileSync(combinedSqlPath, combinedSql);
  console.log(`Generated Combined SQL: ${combinedSqlPath}`);

  console.log('\n======================================================');
  console.log('ALL ANTHROPIC CLAUDE CERTS PROCESSED SUCCESSFULLY!');
  console.log(JSON.stringify(results, null, 2));
  console.log('======================================================');
}

main().catch(err => {
  console.error('Fatal pipeline error:', err);
  process.exit(1);
});
