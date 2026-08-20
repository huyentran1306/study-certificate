import fs from 'node:fs/promises';

const sourcePath = new URL('../src/data/ab731_questions_import.json', import.meta.url);
const outputPath = new URL('../src/data/ab731_questions_upsert.sql', import.meta.url);
const jsonOutputPath = new URL('../src/data/ab731_questions_import.json', import.meta.url);
const questions = JSON.parse(await fs.readFile(sourcePath, 'utf8'));

// The screenshots render these sentence-completion questions as a real dropdown.
// Earlier extraction flattened them into multiple-choice cards, which changes the exam experience.
const singleDropdownQuestionNumbers = new Set([
  7, 8, 14, 16, 19, 21, 23, 25, 28, 30, 35,
  44, 63, 65, 67, 73, 75, 84, 88, 91, 94,
]);

for (const question of questions) {
  if (!singleDropdownQuestionNumbers.has(question.questionNumber)) continue;

  const correctKey = question.correctAnswers?.[0];
  if (!correctKey || !Array.isArray(question.options)) {
    throw new Error(`Cannot convert AB-731 Q${question.questionNumber} to dropdown: invalid choices or answer.`);
  }

  const sentence = question.text;
  question.text = 'Select the answer that correctly completes the sentence.';
  question.questionType = 'matching_dropdown';
  question.statements = [{ id: '1', text: sentence, correctAnswer: correctKey }];
  question.choices = question.options;
  question.correctAnswers = [`1=${correctKey}`];
}

if (!Array.isArray(questions) || questions.length !== 100) {
  throw new Error(`Expected 100 AB-731 questions, received ${Array.isArray(questions) ? questions.length : 'invalid JSON'}`);
}

const sqlText = value => `'${String(value ?? '').replaceAll("'", "''")}'`;
const sqlArray = values => `ARRAY[${(values || []).map(sqlText).join(', ')}]::text[]`;

const rows = questions.map(question => {
  const id = `ab-731-question-${String(question.questionNumber).padStart(3, '0')}`;
  const isStructured = question.questionType === 'statement_matrix' || question.questionType === 'matching_dropdown' || question.questionType === 'matching_drag_drop';
  const choices = question.choices || question.options || [];
  const optionsPayload = isStructured
    ? { type: question.questionType, statements: question.statements, choices }
    : question.options;
  const correctAnswers = question.correctAnswers || question.statements.map(statement =>
    question.questionType === 'statement_matrix'
      ? `${statement.id}:${statement.correctAnswer}`
      : `${statement.id}=${statement.correctAnswer}`
  );

  return `(
  ${sqlText(id)},
  'ab-731',
  ${question.questionNumber},
  ${sqlText(question.text)},
  ${sqlText(JSON.stringify(optionsPayload))}::jsonb,
  ${sqlArray(correctAnswers)},
  ${sqlText(question.explanation)},
  ${sqlText(question.category)},
  ${sqlArray(question.tags)}
)`;
});

const ids = questions.map(question => sqlText(`ab-731-question-${String(question.questionNumber).padStart(3, '0')}`));
const counts = questions.reduce((result, question) => {
  result[question.questionType] = (result[question.questionType] || 0) + 1;
  return result;
}, {});

const sql = `-- AB-731 question bank: 100 unique questions
-- multiple_choice: ${counts.multiple_choice || 0}
-- statement_matrix: ${counts.statement_matrix || 0}
-- matching_dropdown: ${counts.matching_dropdown || 0}
-- matching_drag_drop: ${counts.matching_drag_drop || 0}
-- Safe to run repeatedly. Existing AB-731 rows are updated and stale AB-731 rows are removed.

BEGIN;

INSERT INTO questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags
) VALUES
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

DELETE FROM questions
WHERE cert_id = 'ab-731'
  AND id NOT IN (${ids.join(', ')});

COMMIT;
`;

await fs.writeFile(outputPath, sql, 'utf8');
await fs.writeFile(jsonOutputPath, JSON.stringify(questions, null, 2), 'utf8');
console.log(JSON.stringify({ outputPath: outputPath.pathname, jsonOutputPath: jsonOutputPath.pathname, questions: questions.length, counts }, null, 2));
