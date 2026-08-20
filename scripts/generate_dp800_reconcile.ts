import { writeFileSync } from 'node:fs';
import { dp800Questions } from '../src/data/dp800Questions';

const out = './src/data/dp800_reconcile_2026_08_20.sql';
const sql = (value: string) => `'${value.replace(/'/g, "''")}'`;
const textArray = (values: string[]) => values.length
  ? `ARRAY[${values.map(sql).join(', ')}]::text[]`
  : `ARRAY[]::text[]`;

const rows = dp800Questions.map(question => {
  const options = question.statements?.length
    ? {
        type: question.questionType || 'statement_matrix',
        statements: question.statements,
        choices: question.choices || question.options,
      }
    : question.options;

  const correctAnswers = question.statements?.length
    ? question.statements.map(statement => question.questionType === 'statement_matrix'
        ? `${statement.id}:${statement.correctAnswer}`
        : `${statement.id}=${statement.correctAnswer}`)
    : question.correctAnswers;

  return `(
    ${sql(question.id)}, 'dp-800', ${question.questionNumber}, ${sql(question.text)},
    ${sql(JSON.stringify(options))}::jsonb, ${textArray(correctAnswers)},
    ${sql(question.explanation || '')}, ${sql(question.category || 'General')},
    ${textArray(question.tags || [])}
  )`;
});

const ids = dp800Questions.map(question => sql(question.id)).join(', ');
const content = `-- DP-800 full question bank generated from dp-800 (2)_1732 (1).pdf
-- Keeps all 134 prepared rows, including 29 repeated/source-variant questions by user request.
-- This script upserts the full bank and preserves structured question formats.

BEGIN;

INSERT INTO questions
  (id, cert_id, question_number, text, options, correct_answers, explanation, category, tags)
VALUES
${rows.join(',\n')}
ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

-- Remove only rows outside the complete 134-question bank, never another certificate.
DELETE FROM study_history
WHERE cert_id = 'dp-800'
  AND question_id NOT IN (${ids});

DELETE FROM questions
WHERE cert_id = 'dp-800'
  AND id NOT IN (${ids});

COMMIT;

-- Verification: expected result = 134 DP-800 questions.
SELECT cert_id, COUNT(*) AS question_count
FROM questions
WHERE cert_id = 'dp-800'
GROUP BY cert_id;
`;

writeFileSync(out, content, 'utf8');
console.log(`Generated ${out} with ${dp800Questions.length} questions (including retained source variants).`);
