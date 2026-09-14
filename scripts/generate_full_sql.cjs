const fs = require('fs');
const path = require('path');

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function escapeJson(obj) {
  if (obj === null || obj === undefined) return 'NULL';
  return escapeSql(JSON.stringify(obj)) + '::jsonb';
}

function escapeArray(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return 'ARRAY[]::text[]';
  const escapedElements = arr.map(e => escapeSql(e)).join(', ');
  return `ARRAY[${escapedElements}]::text[]`;
}

function buildSqlForCert(certId, questions, certMeta) {
  const lines = [];
  lines.push(`-- ============================================================`);
  lines.push(`-- CERTIFICATE: ${certMeta.code} - ${certMeta.name}`);
  lines.push(`-- Total questions: ${questions.length}`);
  lines.push(`-- ============================================================`);
  lines.push(``);
  lines.push(`-- 1. Ensure Certificate is registered in custom_certificates table`);
  lines.push(`INSERT INTO public.custom_certificates (`);
  lines.push(`  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge`);
  lines.push(`) VALUES (`);
  lines.push(`  ${escapeSql(certMeta.id)},`);
  lines.push(`  ${escapeSql(certMeta.name)},`);
  lines.push(`  ${escapeSql(certMeta.code)},`);
  lines.push(`  ${escapeSql(certMeta.description)},`);
  lines.push(`  ${escapeSql(certMeta.difficulty)},`);
  lines.push(`  ${escapeSql(certMeta.estimatedHours)},`);
  lines.push(`  ${escapeSql(certMeta.colorClass)},`);
  lines.push(`  ${escapeSql(certMeta.iconName)},`);
  lines.push(`  false,`);
  lines.push(`  false,`);
  lines.push(`  ${escapeSql(certMeta.badge || 'new')}`);
  lines.push(`) ON CONFLICT (id) DO UPDATE SET`);
  lines.push(`  name = EXCLUDED.name,`);
  lines.push(`  code = EXCLUDED.code,`);
  lines.push(`  description = EXCLUDED.description,`);
  lines.push(`  difficulty = EXCLUDED.difficulty,`);
  lines.push(`  estimated_hours = EXCLUDED.estimated_hours,`);
  lines.push(`  color_class = EXCLUDED.color_class,`);
  lines.push(`  icon_name = EXCLUDED.icon_name,`);
  lines.push(`  badge = EXCLUDED.badge;`);
  lines.push(``);
  lines.push(`-- 2. Upsert Questions into questions table`);
  lines.push(`INSERT INTO public.questions (`);
  lines.push(`  id, cert_id, question_number, text, options,`);
  lines.push(`  correct_answers, explanation, category, tags, image_url, status`);
  lines.push(`) VALUES`);

  const valueRows = questions.map((q) => {
    // Format optionsPayload exactly like sync.ts
    let optionsPayload = q.options;
    if (q.statements && q.statements.length > 0) {
      optionsPayload = {
        type: q.questionType || 'statement_matrix',
        statements: q.statements,
        choices: q.choices || q.options
      };
    }

    const row = [
      escapeSql(q.id),
      escapeSql(certId),
      q.questionNumber,
      escapeSql(q.text),
      escapeJson(optionsPayload),
      escapeArray(q.correctAnswers),
      escapeSql(q.explanation),
      escapeSql(q.category),
      escapeArray(q.tags),
      escapeSql(q.imageUrl || null),
      `'published'`
    ];

    return `  (${row.join(', ')})`;
  });

  lines.push(valueRows.join(',\n'));
  lines.push(`ON CONFLICT (id) DO UPDATE SET`);
  lines.push(`  cert_id = EXCLUDED.cert_id,`);
  lines.push(`  question_number = EXCLUDED.question_number,`);
  lines.push(`  text = EXCLUDED.text,`);
  lines.push(`  options = EXCLUDED.options,`);
  lines.push(`  correct_answers = EXCLUDED.correct_answers,`);
  lines.push(`  explanation = EXCLUDED.explanation,`);
  lines.push(`  category = EXCLUDED.category,`);
  lines.push(`  tags = EXCLUDED.tags,`);
  lines.push(`  image_url = EXCLUDED.image_url,`);
  lines.push(`  status = EXCLUDED.status;`);
  lines.push(``);

  return lines.join('\n');
}

// Load 3 sets of questions
const q103 = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/ai103_questions_import.json'), 'utf8'));
const q200 = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/ai200_questions_import.json'), 'utf8'));
const q100 = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/ab100_questions_import.json'), 'utf8'));

const meta103 = {
  id: 'ai-103',
  name: 'Developing AI Apps and Agents on Azure',
  code: 'AI-103',
  description: 'Chinh phục chứng chỉ Microsoft AI-103: Developing AI Apps and Agents on Azure. Bộ 135 câu hỏi bao quát xây dựng và quản trị Azure AI solutions, Agentic solutions, Microsoft Foundry, Computer Vision, Text Analysis và Trích xuất thông tin.',
  difficulty: 'Trung cấp',
  estimatedHours: '14-18 Giờ',
  colorClass: 'bg-gradient-to-br from-cyan-600 via-teal-700 to-indigo-950 text-white',
  iconName: 'Bot'
};

const meta200 = {
  id: 'ai-200',
  name: 'Developing AI Cloud Solutions on Azure',
  code: 'AI-200',
  description: 'Chinh phục chứng chỉ Microsoft AI-200: Developing AI Cloud Solutions on Azure. Bộ 128 câu hỏi bao quát phát triển giải pháp container hóa, kết nối và tiêu thụ dịch vụ Azure AI, quản trị dữ liệu AI, bảo mật và giám sát.',
  difficulty: 'Trung cấp',
  estimatedHours: '12-16 Giờ',
  colorClass: 'bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-950 text-white',
  iconName: 'Cpu'
};

const meta100 = {
  id: 'ab-100',
  name: 'Agentic AI Business Solutions Architect',
  code: 'AB-100',
  description: 'Chinh phục chứng chỉ Microsoft AB-100: Agentic AI Business Solutions Architect. Bộ 120 câu hỏi bao quát lập kế hoạch, thiết kế kiến trúc và triển khai các giải pháp AI Agentic tích hợp Copilot Studio, Microsoft Foundry và Azure AI.',
  difficulty: 'Nâng cao',
  estimatedHours: '14-18 Giờ',
  colorClass: 'bg-gradient-to-br from-emerald-600 via-teal-800 to-slate-950 text-white',
  iconName: 'Sparkles'
};

const sql103 = buildSqlForCert('ai-103', q103, meta103);
const sql200 = buildSqlForCert('ai-200', q200, meta200);
const sql100 = buildSqlForCert('ab-100', q100, meta100);

fs.writeFileSync(path.join(__dirname, '../src/data/ai103_questions_upsert.sql'), sql103);
fs.writeFileSync(path.join(__dirname, '../src/data/ai200_questions_upsert.sql'), sql200);
fs.writeFileSync(path.join(__dirname, '../src/data/ab100_questions_upsert.sql'), sql100);

const badgeSetupSql = [
  `-- =========================================================================`,
  `-- CERTIFICATE BADGE STATUSES SCHEMA & CONFIGURATION`,
  `-- Creates table cert_badge_statuses and sets initial badge values`,
  `-- =========================================================================`,
  ``,
  `CREATE TABLE IF NOT EXISTS public.cert_badge_statuses (`,
  `  cert_id TEXT PRIMARY KEY,`,
  `  badge TEXT NOT NULL DEFAULT 'none',`,
  `  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())`,
  `);`,
  ``,
  `ALTER TABLE public.cert_badge_statuses ENABLE ROW LEVEL SECURITY;`,
  ``,
  `DO $$`,
  `BEGIN`,
  `  IF NOT EXISTS (`,
  `    SELECT 1 FROM pg_policies WHERE tablename = 'cert_badge_statuses' AND policyname = 'Allow public read cert_badge_statuses'`,
  `  ) THEN`,
  `    CREATE POLICY "Allow public read cert_badge_statuses" ON public.cert_badge_statuses`,
  `      FOR SELECT USING (true);`,
  `  END IF;`,
  ``,
  `  IF NOT EXISTS (`,
  `    SELECT 1 FROM pg_policies WHERE tablename = 'cert_badge_statuses' AND policyname = 'Allow public upsert cert_badge_statuses'`,
  `  ) THEN`,
  `    CREATE POLICY "Allow public upsert cert_badge_statuses" ON public.cert_badge_statuses`,
  `      FOR ALL USING (true) WITH CHECK (true);`,
  `  END IF;`,
  `END $$;`,
  ``,
  `-- Ensure custom_certificates table has badge column`,
  `ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';`,
  ``,
  `-- Upsert default badge statuses (Verified: GH-300, AZ-900, AI-900, CCA-F, DP-800, ISTQB-AI, AB-731; New: AI-103, AI-200, AB-100)`,
  `INSERT INTO public.cert_badge_statuses (cert_id, badge, updated_at)`,
  `VALUES`,
  `  ('gh-300', 'verified', now()),`,
  `  ('az-900', 'verified', now()),`,
  `  ('ai-900', 'verified', now()),`,
  `  ('cca-f', 'verified', now()),`,
  `  ('dp-800', 'verified', now()),`,
  `  ('istqb-ai', 'verified', now()),`,
  `  ('ab-731', 'verified', now()),`,
  `  ('ai-103', 'new', now()),`,
  `  ('ai-200', 'new', now()),`,
  `  ('ab-100', 'new', now())`,
  `ON CONFLICT (cert_id) DO UPDATE SET`,
  `  badge = EXCLUDED.badge,`,
  `  updated_at = EXCLUDED.updated_at;`,
  ``
].join('\n');

fs.writeFileSync(path.join(__dirname, '../src/data/cert_badge_setup.sql'), badgeSetupSql);

const masterSql = [
  `-- =========================================================================`,
  `-- MASTER SQL IMPORT FOR 3 NEW CERTIFICATES: AI-103, AI-200, AB-100 & BADGE CONFIG`,
  `-- Total questions: ${q103.length + q200.length + q100.length} questions (135 + 128 + 120)`,
  `-- Run this entire script in your Supabase SQL Editor to populate the DB.`,
  `-- =========================================================================`,
  ``,
  badgeSetupSql,
  `BEGIN;`,
  ``,
  sql103,
  sql200,
  sql100,
  `COMMIT;`,
  ``
].join('\n');

fs.writeFileSync(path.join(__dirname, '../src/data/all_new_certs_upsert.sql'), masterSql);

console.log('Successfully generated:');
console.log('- src/data/cert_badge_setup.sql (Badge statuses schema & default values)');
console.log('- src/data/ai103_questions_upsert.sql (135 questions)');
console.log('- src/data/ai200_questions_upsert.sql (128 questions)');
console.log('- src/data/ab100_questions_upsert.sql (120 questions)');
console.log('- src/data/all_new_certs_upsert.sql (Badge setup + 383 questions total)');
