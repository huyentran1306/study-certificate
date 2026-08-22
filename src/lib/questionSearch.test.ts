import { describe, expect, it } from 'vitest';
import { getQuestionSearchScore, matchesAdvancedQuestionSearch } from './questionSearch';
import { Question } from '../types';

const question: Question = {
  id: 'q-12',
  questionNumber: 12,
  text: 'Which Azure service provides globally distributed storage?',
  questionType: 'statement_matrix',
  statements: [
    { id: '1', text: 'Dịch vụ hỗ trợ nhiều vùng.', correctAnswer: 'Yes' },
  ],
  options: [
    { key: 'A', text: 'Azure SQL Database' },
    { key: 'B', text: 'Azure Cosmos DB' },
  ],
  correctAnswers: ['B'],
  explanation: 'Cosmos DB có khả năng phân phối toàn cầu.',
  category: 'Azure Architecture',
  tags: ['Storage', 'Global distribution'],
};

describe('advanced question search', () => {
  it('matches an exact question number without returning partial numbers', () => {
    expect(matchesAdvancedQuestionSearch(question, '12')).toBe(true);
    expect(matchesAdvancedQuestionSearch({ ...question, questionNumber: 120 }, '12')).toBe(false);
    expect(matchesAdvancedQuestionSearch(question, 'câu 12')).toBe(true);
  });

  it('matches multiple keywords across question fields without accents', () => {
    expect(matchesAdvancedQuestionSearch(question, 'dich vu nhieu vung')).toBe(true);
    expect(matchesAdvancedQuestionSearch(question, 'cosmos global')).toBe(true);
  });

  it('matches category and tags, and ranks exact phrases higher', () => {
    expect(matchesAdvancedQuestionSearch(question, 'azure architecture')).toBe(true);
    expect(matchesAdvancedQuestionSearch(question, 'storage')).toBe(true);
    expect(getQuestionSearchScore(question, 'globally distributed')).toBeGreaterThan(
      getQuestionSearchScore(question, 'cosmos global'),
    );
  });
});
