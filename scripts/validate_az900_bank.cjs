const fs = require('node:fs');
const path = require('node:path');

const projectDir = path.resolve(__dirname, '..');
const questions = JSON.parse(fs.readFileSync(path.join(projectDir, 'src', 'data', 'az900_questions_import.json'), 'utf8'));
const errors = [];
const warnings = [];
const signatures = new Map();

const normalized = value => String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

questions.forEach((question, index) => {
  const label = `#${index + 1} (${question.id})`;
  if (question.questionNumber !== index + 1) errors.push(`${label}: questionNumber is not sequential`);
  if (!question.text || !question.explanation || !question.category || !question.tags?.length) errors.push(`${label}: missing required content`);
  if (/^reference\.?$/i.test(question.explanation.trim())) errors.push(`${label}: explanation is only Reference`);
  if (!/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(question.explanation)) errors.push(`${label}: explanation is not localized to Vietnamese`);
  if (/ZXQTERM\d+QXZ|https?:\/\/|%20|Cảm ơn bạn|Thank you/i.test(question.explanation)) errors.push(`${label}: explanation contains a localization artifact`);
  if (/Statement \d+ shown in the answer-area image/i.test(JSON.stringify(question))) errors.push(`${label}: placeholder statement`);
  if (/\bOption \d+\b/i.test(JSON.stringify(question))) warnings.push(`${label}: generated Option label needs review`);
  if (/exponditure|\b(?:1|l)aaS\b|fo\)|fe\)/i.test(JSON.stringify(question))) warnings.push(`${label}: possible OCR artifact`);
  if (question.questionType === 'matching_dropdown' && /\b(?:match|drag|arrange)\b/i.test(question.text)) warnings.push(`${label}: drag/order instruction classified as dropdown`);
  if ((question.statements || []).some(statement => /(?:\s[~|]\s?|\bWw\b|\bwv\b|\bAnswer Area\b|\bUCEEL\b)/i.test(statement.text))) warnings.push(`${label}: suspicious OCR in statement text`);
  if ((question.choices || []).some(choice => /\b(?:Answer Area|Options Answer|UCEEL)\b|\s[~|]\s?/i.test(choice.text))) warnings.push(`${label}: suspicious OCR in choice text`);

  if (question.questionType === 'multiple_choice') {
    const keys = new Set((question.options || []).map(option => option.key));
    if (keys.size < 2 || !question.correctAnswers?.length || question.correctAnswers.some(key => !keys.has(key))) {
      errors.push(`${label}: invalid multiple-choice options or answer keys`);
    }
  } else if (question.questionType === 'image_hotspot') {
    const keys = new Set((question.options || []).map(option => option.key));
    const invalidArea = (question.options || []).some(option => {
      const area = option.hotspot;
      return !area || ['x', 'y', 'width', 'height'].some(field => !Number.isFinite(area[field])) ||
        area.x < 0 || area.y < 0 || area.width <= 0 || area.height <= 0 ||
        area.x + area.width > 100.01 || area.y + area.height > 100.01;
    });
    if (!question.imageUrl || keys.size < 2 || invalidArea || question.correctAnswers.some(key => !keys.has(key))) {
      errors.push(`${label}: invalid image hotspot data`);
    }
  } else {
    if (!question.statements?.length) errors.push(`${label}: structured question has no statements`);
    if (question.questionType === 'statement_matrix') {
      if (question.statements?.some(statement => !['Yes', 'No'].includes(statement.correctAnswer))) errors.push(`${label}: invalid Yes/No answer`);
    } else {
      const keys = new Set((question.choices || []).map(choice => choice.key));
      if (keys.size < 2 || question.statements?.some(statement => !keys.has(statement.correctAnswer))) errors.push(`${label}: invalid matching choices or answers`);
    }
  }

  const signature = `${normalized(question.text)}|${(question.options || []).map(option => normalized(option.text)).join('|')}|${(question.statements || []).map(statement => normalized(statement.text)).join('|')}`;
  if (signatures.has(signature)) warnings.push(`${label}: exact duplicate of ${signatures.get(signature)}`);
  else signatures.set(signature, label);
});

console.log(JSON.stringify({ questions: questions.length, errors, warnings }, null, 2));
if (errors.length) process.exitCode = 1;
