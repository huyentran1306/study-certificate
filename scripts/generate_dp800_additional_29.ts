import { writeFileSync } from 'node:fs';
import { dp800Questions } from '../src/data/dp800Questions';

const outputPath = './src/data/dp800_additional_29_upsert.sql';
const additionalQuestions = dp800Questions.slice(105);

if (additionalQuestions.length !== 29) {
  throw new Error(`Expected 29 additional DP-800 questions, received ${additionalQuestions.length}.`);
}

const sqlString = (value: string) => `'${String(value ?? '').replace(/'/g, "''")}'`;
const sqlArray = (values: string[]) => values.length
  ? `ARRAY[${values.map(sqlString).join(', ')}]::text[]`
  : 'ARRAY[]::text[]';

const rows = additionalQuestions.map(question => {
  const optionsPayload = question.statements?.length
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
    ${sqlString(question.id)}, 'dp-800', ${question.questionNumber}, ${sqlString(question.text)},
    ${sqlString(JSON.stringify(optionsPayload))}::jsonb, ${sqlArray(correctAnswers)},
    ${sqlString(question.explanation || '')}, ${sqlString(question.category || 'General')},
    ${sqlArray(question.tags || [])}
  )`;
});

const sql = `-- DP-800: 29 additional source-variant questions only
-- IDs: dp-800-106 through dp-800-134
-- Safe to run repeatedly. This script does not update/delete the existing first 105 questions.

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

COMMIT;

-- Verification: expected result = 29 rows.
SELECT COUNT(*) AS additional_question_count
FROM questions
WHERE cert_id = 'dp-800'
  AND id IN (${additionalQuestions.map(question => sqlString(question.id)).join(', ')});
`;

writeFileSync(outputPath, sql, 'utf8');
console.log(`Generated ${outputPath} with ${additionalQuestions.length} questions.`);
