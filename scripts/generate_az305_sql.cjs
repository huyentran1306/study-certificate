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

function generateAZ305Sql() {
  const jsonPath = path.join(__dirname, '../src/data/az305_questions_import.json');
  if (!fs.existsSync(jsonPath)) {
    console.error('az305_questions_import.json not found!');
    return;
  }

  const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  const certMeta = {
    id: 'az-305',
    name: 'Designing Microsoft Azure Infrastructure Solutions',
    code: 'AZ-305',
    description: 'Chinh phục chứng chỉ Microsoft Certified: Azure Solutions Architect Expert (AZ-305). Bộ 285 câu hỏi bao quát Thiết kế Giải pháp Định danh, Quản trị và Giám sát; Giải pháp Lưu trữ Dữ liệu; Giải pháp Kinh doanh Liên tục; và Giải pháp Hạ tầng Đám mây.',
    difficulty: 'Nâng cao',
    estimatedHours: '20-25 Giờ',
    colorClass: 'bg-gradient-to-br from-blue-700 via-indigo-900 to-slate-950 text-white',
    iconName: 'Layers',
    badge: 'new'
  };

  const lines = [];
  lines.push(`-- =========================================================================`);
  lines.push(`-- STANDALONE SQL IMPORT FOR MICROSOFT AZ-305`);
  lines.push(`-- Exam: AZ-305: Designing Microsoft Azure Infrastructure Solutions`);
  lines.push(`-- Total questions: ${questions.length} questions`);
  lines.push(`-- =========================================================================`);
  lines.push(``);
  lines.push(`BEGIN;`);
  lines.push(``);
  lines.push(`-- 1. Ensure custom_certificates table has badge column`);
  lines.push(`ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';`);
  lines.push(``);
  lines.push(`-- 2. Upsert AZ-305 Certificate in custom_certificates table`);
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
  lines.push(`  ${escapeSql(certMeta.badge)}`);
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
  lines.push(`-- 3. Upsert AZ-305 Badge in cert_badge_statuses table (if table exists)`);
  lines.push(`DO $$`);
  lines.push(`BEGIN`);
  lines.push(`  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'cert_badge_statuses') THEN`);
  lines.push(`    INSERT INTO public.cert_badge_statuses (cert_id, badge, updated_at)`);
  lines.push(`    VALUES ('az-305', 'new', now())`);
  lines.push(`    ON CONFLICT (cert_id) DO UPDATE SET`);
  lines.push(`      badge = EXCLUDED.badge,`);
  lines.push(`      updated_at = EXCLUDED.updated_at;`);
  lines.push(`  END IF;`);
  lines.push(`END $$;`);
  lines.push(``);
  lines.push(`-- 4. Upsert all ${questions.length} questions for AZ-305`);
  lines.push(`INSERT INTO public.questions (`);
  lines.push(`  id, cert_id, question_number, text, options,`);
  lines.push(`  correct_answers, explanation, category, tags, image_url, status`);
  lines.push(`) VALUES`);

  const valueRows = questions.map((q) => {
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
      escapeSql('az-305'),
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
  lines.push(`COMMIT;`);
  lines.push(``);

  const finalSql = lines.join('\n');
  const outPath = path.join(__dirname, '../src/data/az305_questions_upsert.sql');
  fs.writeFileSync(outPath, finalSql);
  console.log(`Generated standalone SQL: ${outPath} (${questions.length} questions)`);
}

module.exports = { generateAZ305Sql };

if (require.main === module) {
  generateAZ305Sql();
}
