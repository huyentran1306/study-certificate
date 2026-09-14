const fs = require('fs');
const path = require('path');
const { crawlExam } = require('./crawl_cert_universal.cjs');
const { translateExplanation, cache, saveCache } = require('./localize_new_certs_explanations.cjs');

const projectDir = path.resolve(__dirname, '..');

const CERTS_CONFIG = [
  {
    id: 'az-104',
    name: 'az104',
    varName: 'az104Questions',
    code: 'AZ-104',
    title: 'Microsoft Azure Administrator',
    description: 'Chinh phục chứng chỉ Microsoft Azure Administrator (AZ-104). Bộ câu hỏi toàn diện về Quản lý danh tính và quản trị Azure, Triển khai và quản lý lưu trữ, Triển khai tài nguyên điện toán Azure, Cấu hình và quản lý mạng ảo, Giám sát và sao lưu tài nguyên Azure.',
    difficulty: 'Trung cấp',
    estimatedHours: '16-20 Giờ',
    colorClass: 'bg-gradient-to-br from-blue-700 via-sky-800 to-slate-950 text-white',
    iconName: 'ShieldCheck',
    totalQuestions: 192
  },
  {
    id: 'dp-900',
    name: 'dp900',
    varName: 'dp900Questions',
    code: 'DP-900',
    title: 'Microsoft Azure Data Fundamentals',
    description: 'Chinh phục chứng chỉ Microsoft Azure Data Fundamentals (DP-900). Nắm vững các khái niệm dữ liệu cốt lõi, dữ liệu quan hệ và phi quan hệ trên Azure, cùng các giải pháp phân tích dữ liệu hiện đại.',
    difficulty: 'Cơ bản',
    estimatedHours: '8-12 Giờ',
    colorClass: 'bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white',
    iconName: 'Database',
    totalQuestions: 323
  },
  {
    id: 'az-204',
    name: 'az204',
    varName: 'az204Questions',
    code: 'AZ-204',
    title: 'Developing Solutions for Microsoft Azure',
    description: 'Chinh phục chứng chỉ Microsoft Certified: Azure Developer Associate (AZ-204). Bao quát phát triển Azure compute solutions (App Service, Functions, Containers), lưu trữ Azure, bảo mật đám mây, giám sát và tối ưu hóa giải pháp.',
    difficulty: 'Nâng cao',
    estimatedHours: '18-24 Giờ',
    colorClass: 'bg-gradient-to-br from-indigo-700 via-purple-800 to-slate-950 text-white',
    iconName: 'Cpu',
    totalQuestions: 349
  },
  {
    id: 'az-500',
    name: 'az500',
    varName: 'az500Questions',
    code: 'AZ-500',
    title: 'Microsoft Azure Security Technologies',
    description: 'Chinh phục chứng chỉ Microsoft Azure Security Technologies (AZ-500). Quản lý danh tính và quyền truy cập, bảo mật mạng, bảo vệ dữ liệu và ứng dụng, và quản lý các hoạt động bảo mật với Defender và Sentinel.',
    difficulty: 'Nâng cao',
    estimatedHours: '18-22 Giờ',
    colorClass: 'bg-gradient-to-br from-rose-700 via-red-800 to-slate-950 text-white',
    iconName: 'ShieldCheck',
    totalQuestions: 383
  },
  {
    id: 'az-400',
    name: 'az400',
    varName: 'az400Questions',
    code: 'AZ-400',
    title: 'Designing and Implementing Microsoft DevOps Solutions',
    description: 'Chinh phục chứng chỉ Microsoft Certified: DevOps Engineer Expert (AZ-400). Thiết kế và triển khai chiến lược CI/CD, quản lý mã nguồn, cơ sở hạ tầng dưới dạng mã (IaC), tuân thủ bảo mật DevSecOps và giám sát liên tục.',
    difficulty: 'Nâng cao',
    estimatedHours: '22-28 Giờ',
    colorClass: 'bg-gradient-to-br from-amber-600 via-orange-800 to-slate-950 text-white',
    iconName: 'Zap',
    totalQuestions: 525
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

async function processSingleCert(certConfig) {
  console.log(`\n======================================================`);
  console.log(`PROCESSING: ${certConfig.code} - ${certConfig.title}`);
  console.log(`======================================================`);

  // 1. Crawl
  const rawQuestions = await crawlExam(certConfig.id, certConfig.totalQuestions, 6);

  // 2. Convert
  const questions = convertRawToQuestions(rawQuestions, certConfig);
  console.log(`[${certConfig.code}] Converted ${questions.length} questions.`);

  // 3. Translate Explanations
  console.log(`[${certConfig.code}] Translating explanations to Vietnamese...`);
  let translated = 0;
  let cursor = 0;
  const CONCURRENCY = 6;

  async function translateWorker() {
    while (cursor < questions.length) {
      const q = questions[cursor++];
      if (!q.explanation) continue;

      if (cache[q.id]) {
        q.explanation = cache[q.id];
        translated++;
        continue;
      }

      try {
        const viExp = await translateExplanation(q.explanation);
        if (viExp) {
          cache[q.id] = viExp;
          q.explanation = viExp;
          translated++;
        }
      } catch (err) {
        console.warn(`[${certConfig.code}] Translation error Q${q.questionNumber}:`, err.message);
      }

      if (translated % 15 === 0 || cursor >= questions.length) {
        saveCache();
        process.stdout.write(`[${certConfig.code}] Translated: ${translated}/${questions.length} explanations...\r`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => translateWorker()));
  saveCache();
  console.log(`\n[${certConfig.code}] Translation complete! ${translated}/${questions.length} translated.`);

  // 4. Output TypeScript file
  const tsPath = path.join(projectDir, 'src', 'data', `${certConfig.varName}.ts`);
  const tsHeader = `import { Question } from '../types';\n\nexport const ${certConfig.varName}: Question[] = `;
  fs.writeFileSync(tsPath, `${tsHeader}${JSON.stringify(questions, null, 2)};\n`);
  console.log(`Generated: ${tsPath}`);

  // 5. Output JSON import file
  const jsonPath = path.join(projectDir, 'src', 'data', `${certConfig.name}_questions_import.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(questions, null, 2));
  console.log(`Generated: ${jsonPath}`);

  // 6. Output SQL upsert file with is_disabled = true
  const sqlPath = path.join(projectDir, 'src', 'data', `${certConfig.name}_questions_upsert.sql`);
  const sqlLines = [
    `-- =========================================================================`,
    `-- STANDALONE SQL IMPORT FOR ${certConfig.code}: ${certConfig.title}`,
    `-- Total questions: ${questions.length} questions`,
    `-- Default status: is_disabled = true (Hidden from home screen to avoid clutter)`,
    `-- =========================================================================`,
    ``,
    `BEGIN;`,
    ``,
    `-- 1. Ensure custom_certificates table has is_disabled & badge column`,
    `ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS is_disabled BOOLEAN DEFAULT false;`,
    `ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';`,
    ``,
    `-- 2. Upsert Certificate metadata with is_disabled = true`,
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
    `  true, -- is_disabled = true by default`,
    `  'new'`,
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
    const correctAns = escapeSql(JSON.stringify(q.correctAnswers || []));
    const tagsJson = escapeSql(JSON.stringify(q.tags || []));

    return `  (${escapeSql(q.id)}, ${escapeSql(certConfig.id)}, ${q.questionNumber}, ${escapeSql(q.text)}, ${optionsJson}::jsonb, ${correctAns}::jsonb, ${escapeSql(q.explanation)}, ${escapeSql(q.category)}, ${tagsJson}::jsonb, ${q.imageUrl ? escapeSql(q.imageUrl) : 'NULL'}, 'published')`;
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
  return questions.length;
}

async function main() {
  const results = {};
  for (const cert of CERTS_CONFIG) {
    results[cert.id] = await processSingleCert(cert);
  }

  console.log('\n======================================================');
  console.log('ALL 5 CERTS PROCESSED SUCCESSFULLY!');
  console.log(JSON.stringify(results, null, 2));
  console.log('======================================================');
}

main().catch(err => {
  console.error('Fatal pipeline error:', err);
  process.exit(1);
});
