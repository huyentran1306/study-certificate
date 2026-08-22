import { Question } from '../types';

export const normalizeQuestionSearchText = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[đĐ]/g, 'd')
  .toLocaleLowerCase('vi')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

const parseQuestionNumberQuery = (query: string) => {
  const normalized = normalizeQuestionSearchText(query);
  const match = normalized.match(/^(?:q|cau)?\s*(\d+)$/);
  return match ? Number(match[1]) : null;
};

export const getQuestionSearchCorpus = (question: Question) => normalizeQuestionSearchText([
  `q ${question.questionNumber}`,
  `cau ${question.questionNumber}`,
  question.text,
  question.explanation,
  question.category,
  question.questionType || '',
  question.sourceTitle || '',
  ...(question.tags || []),
  ...question.options.flatMap(option => [option.key, option.text]),
  ...(question.choices || []).flatMap(choice => [choice.key, choice.text]),
  ...(question.statements || []).flatMap(statement => [
    statement.id,
    statement.text,
    statement.correctAnswer,
  ]),
  ...question.correctAnswers,
].join(' '));

export const getQuestionSearchScore = (question: Question, query: string) => {
  const normalizedQuery = normalizeQuestionSearchText(query);
  if (!normalizedQuery) return 0;

  const requestedQuestionNumber = parseQuestionNumberQuery(query);
  if (requestedQuestionNumber !== null) {
    return question.questionNumber === requestedQuestionNumber ? 10_000 : -1;
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const corpus = getQuestionSearchCorpus(question);
  if (!tokens.every(token => corpus.includes(token))) return -1;

  const questionText = normalizeQuestionSearchText(question.text);
  const category = normalizeQuestionSearchText(question.category);
  const tags = normalizeQuestionSearchText((question.tags || []).join(' '));
  let score = tokens.reduce((total, token) => total + (questionText.includes(token) ? 20 : 5), 0);

  if (questionText.includes(normalizedQuery)) score += 200;
  if (category.includes(normalizedQuery)) score += 100;
  if (tags.includes(normalizedQuery)) score += 80;

  return score;
};

export const matchesAdvancedQuestionSearch = (question: Question, query: string) => (
  !query.trim() || getQuestionSearchScore(question, query) >= 0
);

