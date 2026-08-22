import { describe, expect, it } from 'vitest';
import type { Question } from '../types';
import { isQuestionAnswerCorrect } from './questionHelper';

const baseQuestion = (overrides: Partial<Question>): Question => ({
  id: 'q-1',
  questionNumber: 1,
  text: 'Question',
  options: [
    { key: 'A', text: 'A' },
    { key: 'B', text: 'B' },
    { key: 'C', text: 'C' },
  ],
  correctAnswers: ['A'],
  explanation: 'Explanation',
  category: 'General',
  ...overrides,
});

describe('isQuestionAnswerCorrect', () => {
  it('scores single and multi-select answers independent of order and casing', () => {
    expect(isQuestionAnswerCorrect(baseQuestion({ correctAnswers: ['A'] }), ['a'])).toBe(true);
    expect(isQuestionAnswerCorrect(baseQuestion({ correctAnswers: ['A', 'C'] }), ['c', 'A'])).toBe(true);
    expect(isQuestionAnswerCorrect(baseQuestion({ correctAnswers: ['A', 'C'] }), ['A'])).toBe(false);
  });

  it('scores statement matrices', () => {
    const question = baseQuestion({
      questionType: 'statement_matrix',
      statements: [
        { id: '1', text: 'One', correctAnswer: 'Yes' },
        { id: '2', text: 'Two', correctAnswer: 'No' },
      ],
      correctAnswers: ['1:Yes', '2:No'],
    });
    expect(isQuestionAnswerCorrect(question, ['1:Yes', '2:No'])).toBe(true);
    expect(isQuestionAnswerCorrect(question, ['1:No', '2:No'])).toBe(false);
  });

  it.each(['matching_dropdown', 'matching_drag_drop', 'drag_drop'] as const)('scores %s questions', questionType => {
    const question = baseQuestion({
      questionType,
      statements: [
        { id: '1', text: 'One', correctAnswer: 'B' },
        { id: '2', text: 'Two', correctAnswer: 'A' },
      ],
      correctAnswers: ['1=B', '2=A'],
    });
    expect(isQuestionAnswerCorrect(question, ['2=A', '1=b'])).toBe(true);
    expect(isQuestionAnswerCorrect(question, ['1=A', '2=B'])).toBe(false);
  });

  it('scores image hotspots as selected region keys', () => {
    const question = baseQuestion({
      questionType: 'image_hotspot',
      correctAnswers: ['B'],
      options: [
        { key: 'A', text: 'Left', hotspot: { x: 0, y: 0, width: 50, height: 100 } },
        { key: 'B', text: 'Right', hotspot: { x: 50, y: 0, width: 50, height: 100 } },
      ],
    });
    expect(isQuestionAnswerCorrect(question, ['B'])).toBe(true);
    expect(isQuestionAnswerCorrect(question, ['A'])).toBe(false);
  });
});
