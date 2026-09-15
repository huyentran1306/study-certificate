const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(__dirname, '..');

const CERTS = [
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
    iconName: 'ShieldCheck'
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
    iconName: 'Database'
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
    iconName: 'Cpu'
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
    iconName: 'ShieldCheck'
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
    iconName: 'Zap'
  }
];

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

function generateSqlForCert(cert, questions) {
  const lines = [
    `-- =========================================================================`,
    `-- STANDALONE SQL IMPORT FOR ${cert.code}: ${cert.title}`,
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
    `  ${escapeSql(cert.id)},`,
    `  ${escapeSql(cert.title)},`,
    `  ${escapeSql(cert.code)},`,
    `  ${escapeSql(cert.description)},`,
    `  ${escapeSql(cert.difficulty)},`,
    `  ${escapeSql(cert.estimatedHours)},`,
    `  ${escapeSql(cert.colorClass)},`,
    `  ${escapeSql(cert.iconName)},`,
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
    const correctAnswersArr = toPostgresTextArray(q.correctAnswers || []);
    const tagsArr = toPostgresTextArray(q.tags || [cert.code, q.category || 'General']);

    return `  (${escapeSql(q.id)}, ${escapeSql(cert.id)}, ${q.questionNumber}, ${escapeSql(q.text)}, ${optionsJson}::jsonb, ${correctAnswersArr}, ${escapeSql(q.explanation)}, ${escapeSql(q.category || 'General')}, ${tagsArr}, ${q.imageUrl ? escapeSql(q.imageUrl) : 'NULL'}, 'published')`;
  });

  lines.push(valueRows.join(',\n'));
  lines.push(`ON CONFLICT (id) DO UPDATE SET`);
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

  return lines.join('\n');
}

function run() {
  const combinedBlocks = [
    `-- =========================================================================`,
    `-- COMBINED SQL UPSERT FOR 5 NEW CERTIFICATES: AZ-104, DP-900, AZ-204, AZ-500, AZ-400`,
    `-- Total questions: 1,900 questions`,
    `-- Default status: is_disabled = true for all 5 certs`,
    `-- =========================================================================`,
    ``,
    `BEGIN;`,
    ``,
    `ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS is_disabled BOOLEAN DEFAULT false;`,
    `ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';`,
    ``
  ];

  for (const cert of CERTS) {
    const jsonPath = path.join(projectDir, 'src', 'data', `${cert.name}_questions_import.json`);
    if (!fs.existsSync(jsonPath)) {
      console.warn(`File not found: ${jsonPath}`);
      continue;
    }

    const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    console.log(`Processing ${cert.code}: ${questions.length} questions...`);

    const sqlContent = generateSqlForCert(cert, questions);
    const sqlPath = path.join(projectDir, 'src', 'data', `${cert.name}_questions_upsert.sql`);
    fs.writeFileSync(sqlPath, sqlContent);
    console.log(`Updated SQL: ${sqlPath}`);

    // Add to combined script (without nested BEGIN/COMMIT)
    combinedBlocks.push(`-- -------------------------------------------------------------`);
    combinedBlocks.push(`-- CERTIFICATE: ${cert.code} (${questions.length} questions)`);
    combinedBlocks.push(`-- -------------------------------------------------------------`);
    combinedBlocks.push(`INSERT INTO public.custom_certificates (`);
    combinedBlocks.push(`  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge`);
    combinedBlocks.push(`) VALUES (`);
    combinedBlocks.push(`  ${escapeSql(cert.id)}, ${escapeSql(cert.title)}, ${escapeSql(cert.code)}, ${escapeSql(cert.description)},`);
    combinedBlocks.push(`  ${escapeSql(cert.difficulty)}, ${escapeSql(cert.estimatedHours)}, ${escapeSql(cert.colorClass)}, ${escapeSql(cert.iconName)},`);
    combinedBlocks.push(`  false, true, 'new'`);
    combinedBlocks.push(`) ON CONFLICT (id) DO UPDATE SET`);
    combinedBlocks.push(`  name = EXCLUDED.name, code = EXCLUDED.code, description = EXCLUDED.description,`);
    combinedBlocks.push(`  difficulty = EXCLUDED.difficulty, estimated_hours = EXCLUDED.estimated_hours,`);
    combinedBlocks.push(`  color_class = EXCLUDED.color_class, icon_name = EXCLUDED.icon_name, badge = EXCLUDED.badge;`);
    combinedBlocks.push(``);

    combinedBlocks.push(`INSERT INTO public.questions (`);
    combinedBlocks.push(`  id, cert_id, question_number, text, options,`);
    combinedBlocks.push(`  correct_answers, explanation, category, tags, image_url, status`);
    combinedBlocks.push(`) VALUES`);

    const rows = questions.map(q => {
      let optionsPayload = q.options;
      if (q.questionType === 'statement_matrix') {
        optionsPayload = { statements: q.statements, choices: q.options };
      } else if (q.questionType === 'matching_dropdown' || q.questionType === 'matching_drag_drop') {
        optionsPayload = { statements: q.statements, choices: q.choices || q.options };
      }

      const optionsJson = escapeSql(JSON.stringify(optionsPayload || []));
      const correctAnswersArr = toPostgresTextArray(q.correctAnswers || []);
      const tagsArr = toPostgresTextArray(q.tags || [cert.code, q.category || 'General']);

      return `  (${escapeSql(q.id)}, ${escapeSql(cert.id)}, ${q.questionNumber}, ${escapeSql(q.text)}, ${optionsJson}::jsonb, ${correctAnswersArr}, ${escapeSql(q.explanation)}, ${escapeSql(q.category || 'General')}, ${tagsArr}, ${q.imageUrl ? escapeSql(q.imageUrl) : 'NULL'}, 'published')`;
    });

    combinedBlocks.push(rows.join(',\n'));
    combinedBlocks.push(`ON CONFLICT (id) DO UPDATE SET`);
    combinedBlocks.push(`  text = EXCLUDED.text, options = EXCLUDED.options, correct_answers = EXCLUDED.correct_answers,`);
    combinedBlocks.push(`  explanation = EXCLUDED.explanation, category = EXCLUDED.category, tags = EXCLUDED.tags,`);
    combinedBlocks.push(`  image_url = EXCLUDED.image_url, status = EXCLUDED.status;`);
    combinedBlocks.push(``);
  }

  combinedBlocks.push(`COMMIT;`);

  const combinedPath = path.join(projectDir, 'src', 'data', 'all_5_new_certs_upsert.sql');
  fs.writeFileSync(combinedPath, combinedBlocks.join('\n'));
  console.log(`Generated combined SQL: ${combinedPath}`);
}

run();
