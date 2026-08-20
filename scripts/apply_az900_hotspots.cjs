const fs = require('node:fs');
const path = require('node:path');

const projectDir = path.resolve(__dirname, '..');
const jsonPath = path.join(projectDir, 'src', 'data', 'az900_questions_import.json');
const tsPath = path.join(projectDir, 'src', 'data', 'az900Questions.ts');
const fullSqlPath = path.join(projectDir, 'src', 'data', 'az900_questions_upsert.sql');
const updateSqlPath = path.join(projectDir, 'src', 'data', 'az900_type_corrections_update.sql');
const hotspotSqlPath = path.join(projectDir, 'src', 'data', 'az900_hotspot_update.sql');
const auditPath = path.join(projectDir, 'src', 'data', 'az900_generation_audit.json');
const removeStructuredImagesSqlPath = path.join(projectDir, 'src', 'data', 'az900_remove_structured_images_update.sql');

const patches = new Map([
  [78, [
    ['NAT gateways', 34.9, 16.8, 62, 8.5],
    ['Application gateways', 34.9, 27.2, 62, 8.5],
    ['Local network gateways', 34.9, 37.7, 62, 8.5],
    ['Virtual network gateways', 34.9, 48.1, 62, 8.5],
  ]],
  [86, [
    ['Blob containers', 8.5, 17, 44, 38],
    ['Azure file shares', 54.2, 17, 44.2, 38],
    ['Azure Table Storage', 8.5, 59.3, 44, 38],
    ['Azure Queue Storage', 54.2, 59.3, 44.2, 38],
  ]],
  [89, [
    ['Azure SQL Database', 51.5, 9.7, 47.5, 9],
    ['Azure Cosmos DB', 1.1, 9.7, 47.8, 9],
    ['Azure Database for MySQL', 1.1, 21, 47.8, 9],
    ['Azure Cache for Redis', 1.1, 54.5, 47.8, 9],
  ]],
  [150, [
    ['Overview', 0.9, 20.4, 21.5, 5.1],
    ['Activity log', 0.9, 25.5, 21.5, 4.7],
    ['Access control (IAM)', 0.9, 30.1, 21.5, 5.5],
    ['Tags', 0.9, 35.6, 21.5, 4.5],
  ]],
  [206, [
    ['Quickstart', 18.8, 11.7, 69.2, 10.4],
    ['Deployments', 18.8, 37.2, 69.2, 10.4],
    ['Policies', 18.8, 50, 69.2, 10.4],
    ['Locks', 18.8, 75.1, 69.2, 10.4],
  ]],
  [279, [
    ['Resource groups', 4.1, 1.7, 88.2, 5.2],
    ['App Services', 4.1, 13.9, 88.2, 5.2],
    ['Storage accounts', 4.1, 50.4, 88.2, 5.2],
    ['Virtual networks', 4.1, 56.5, 88.2, 5.2],
  ]],
  [282, [
    ['Create a resource', 7, 30.2, 7.2, 25.5],
    ['Subscriptions', 40.6, 30.2, 9.3, 25.5],
    ['Microsoft Entra ID', 51.8, 30.2, 9.9, 25.5],
    ['Resource groups', 7, 58.3, 7.6, 25.7],
  ]],
]);

const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
for (const [questionNumber, areas] of patches) {
  const question = questions.find(item => item.questionNumber === questionNumber);
  if (!question) throw new Error(`Missing AZ-900 question ${questionNumber}`);
  if (!question.imageUrl) throw new Error(`AZ-900 question ${questionNumber} has no imageUrl`);
  const previous = new Map(question.options.map(option => [option.text, option]));
  question.questionType = 'image_hotspot';
  question.options = areas.map(([text, x, y, width, height], index) => ({
    key: previous.get(text)?.key || String.fromCharCode(65 + index),
    text,
    hotspot: { x, y, width, height },
  }));
}

const reconstructedInteractionTypes = new Set(['statement_matrix', 'matching_dropdown', 'matching_drag_drop']);
for (const question of questions) {
  if (reconstructedInteractionTypes.has(question.questionType)) delete question.imageUrl;
}

const sqlText = value => `'${String(value ?? '').replaceAll("'", "''")}'`;
const sqlArray = values => `ARRAY[${(values || []).map(sqlText).join(', ')}]::text[]`;
const optionsPayload = question => question.questionType === 'multiple_choice'
  ? question.options
  : {
      type: question.questionType,
      ...(question.statements ? { statements: question.statements } : {}),
      choices: question.choices || question.options,
    };

fs.writeFileSync(jsonPath, `${JSON.stringify(questions, null, 2)}\n`);
fs.writeFileSync(tsPath, `import { Question } from '../types';\n\nexport const az900Questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);

const counts = questions.reduce((result, question) => {
  result[question.questionType] = (result[question.questionType] || 0) + 1;
  return result;
}, {});
if (fs.existsSync(auditPath)) {
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
  audit.counts = counts;
  fs.writeFileSync(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
}

const sqlRows = questions.map(question => `(
  ${sqlText(question.id)}, 'az-900', ${question.questionNumber}, ${sqlText(question.text)},
  ${sqlText(JSON.stringify(optionsPayload(question)))}::jsonb, ${sqlArray(question.correctAnswers)},
  ${sqlText(question.explanation)}, ${sqlText(question.category)}, ${sqlArray(question.tags)},
  ${sqlText(question.imageUrl || '')}
)`);
const ids = questions.map(question => sqlText(question.id));
const fullSql = `-- AZ-900 normalized question bank generated from AZ900_Questions.csv and its answer-area images.
-- Total: ${questions.length}
-- Types: ${JSON.stringify(counts)}
-- Safe to run repeatedly. Stale AZ-900 rows are removed after the upsert.

BEGIN;

ALTER TABLE questions ADD COLUMN IF NOT EXISTS image_url TEXT;

INSERT INTO questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags, image_url
) VALUES
${sqlRows.join(',\n')}
ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  image_url = EXCLUDED.image_url;

DELETE FROM questions
WHERE cert_id = 'az-900'
  AND id NOT IN (${ids.join(', ')});

COMMIT;

SELECT cert_id, count(*) AS question_count
FROM questions
WHERE cert_id = 'az-900'
GROUP BY cert_id;
`;
fs.writeFileSync(fullSqlPath, fullSql);

const correctedNumbers = [1, 78, 86, 89, 95, 96, 150, 206, 279, 282];
const updateStatements = correctedNumbers.map(questionNumber => {
  const question = questions.find(item => item.questionNumber === questionNumber);
  if (!question) throw new Error(`Missing corrected question ${questionNumber}`);
  return `UPDATE questions
SET
  options = ${sqlText(JSON.stringify(optionsPayload(question)))}::jsonb,
  correct_answers = ${sqlArray(question.correctAnswers)},
  explanation = ${sqlText(question.explanation)},
  image_url = ${question.imageUrl ? sqlText(question.imageUrl) : 'NULL'}
WHERE cert_id = 'az-900'
  AND id = ${sqlText(question.id)};`;
});
fs.writeFileSync(updateSqlPath, `-- UPDATE-only patch for corrected AZ-900 interaction types (including image hotspots).\nBEGIN;\n\n${updateStatements.join('\n\n')}\n\nCOMMIT;\n`);

const hotspotStatements = updateStatements.filter((_, index) => patches.has(correctedNumbers[index]));
fs.writeFileSync(hotspotSqlPath, `-- UPDATE-only patch for the 7 AZ-900 image-hotspot questions.\n-- Safe to run after the existing 323-question AZ-900 import.\nBEGIN;\n\n${hotspotStatements.join('\n\n')}\n\nCOMMIT;\n`);

fs.writeFileSync(removeStructuredImagesSqlPath, `-- Hide obsolete source answer-area images after rebuilding structured interactions in the UI.\n-- Keeps image_hotspot and ordinary diagram questions unchanged.\nBEGIN;\n\nUPDATE questions\nSET image_url = NULL\nWHERE cert_id = 'az-900'\n  AND options->>'type' IN ('statement_matrix', 'matching_dropdown', 'matching_drag_drop');\n\nCOMMIT;\n`);

console.log(`Updated ${patches.size} hotspots. Types: ${JSON.stringify(counts)}`);
