const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const projectDir = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(projectDir, 'src', 'data', 'dp800Questions.ts'), 'utf8');
const declaration = 'const dp800QuestionSource: Question[] = ';
const start = source.indexOf(declaration);
const end = source.indexOf('\n];', start);

if (start < 0 || end < 0) throw new Error('Unable to locate dp800QuestionSource in dp800Questions.ts');

const arrayLiteral = source.slice(start + declaration.length, end + 2);
const questions = vm.runInNewContext(`(${arrayLiteral})`);
const vietnamese = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]|\b(?:chọn|tránh|thuộc tính|trong TRY|trong CATCH|tính cận|điều kiện WHERE|trích xuất|loại bỏ|kiểm tra mẫu|khi trả)\b/i;
const issues = [];

questions.forEach(question => {
  const fields = [
    ['question', question.text],
    ...(question.statements || []).map(statement => [`statement ${statement.id}`, statement.text]),
    ...(question.choices || []).map(choice => [`choice ${choice.key}`, choice.text]),
    ...(question.options || []).map(option => [`option ${option.key}`, option.text]),
  ];
  fields.forEach(([field, text]) => {
    if (vietnamese.test(String(text || ''))) issues.push({ id: question.id, questionNumber: question.questionNumber, field, text });
  });
});

console.log(JSON.stringify({ questions: questions.length, mixedLanguageInteractionFields: issues }, null, 2));
if (issues.length) process.exitCode = 1;
