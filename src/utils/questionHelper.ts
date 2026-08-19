import { Question } from '../types';

export interface MatrixParsedInfo {
  isMatrix: boolean;
  promptText: string;
  statements: { number: number; text: string }[];
  options: { key: string; text: string }[];
}

/**
 * Parses a question to determine if it is a Yes/No or Statement Matrix question,
 * extracting the prompt header, the individual numbered statements, and the choice columns.
 */
export function parseQuestionMatrix(q: Question): MatrixParsedInfo {
  // 1. Explicit statements provided on question object
  if (q.statements && Array.isArray(q.statements) && q.statements.length > 0) {
    return {
      isMatrix: true,
      promptText: q.text,
      statements: q.statements.map((s, idx) => ({
        number: idx + 1,
        text: typeof s === 'object' && s !== null ? (s as any).text : String(s)
      })),
      options: q.options
    };
  }

  // 2. Check if correctAnswers has pattern like "1=A" or "1=Yes"
  const hasEqualsInAnswers = q.correctAnswers.some(ans => /^\d+\s*=\s*/.test(ans.trim()));

  // 3. Check if text has numbered lines like "1. ... \n 2. ... "
  const lines = q.text.split('\n').map(l => l.trim()).filter(Boolean);
  const statementMatches: { number: number; text: string }[] = [];
  const promptLines: string[] = [];

  let inStatements = false;
  for (const line of lines) {
    const match = line.match(/^(\d+)[\.\)\:\-]\s*(.*)$/);
    if (match) {
      inStatements = true;
      statementMatches.push({
        number: parseInt(match[1], 10),
        text: match[2].trim()
      });
    } else if (!inStatements) {
      promptLines.push(line);
    } else {
      // Continuation of last statement
      if (statementMatches.length > 0) {
        statementMatches[statementMatches.length - 1].text += ' ' + line;
      } else {
        promptLines.push(line);
      }
    }
  }

  if (statementMatches.length >= 2 && (hasEqualsInAnswers || q.options.length <= 4)) {
    return {
      isMatrix: true,
      promptText: promptLines.join('\n') || q.text,
      statements: statementMatches,
      options: q.options
    };
  }

  if (hasEqualsInAnswers && statementMatches.length > 0) {
    return {
      isMatrix: true,
      promptText: promptLines.join('\n') || q.text,
      statements: statementMatches,
      options: q.options
    };
  }

  return {
    isMatrix: false,
    promptText: q.text,
    statements: [],
    options: q.options
  };
}

/**
 * Checks if a specific option is selected for a given statement in a matrix question
 */
export function isStatementOptionSelected(
  selectedKeys: string[],
  statementNumber: number,
  optionKey: string
): boolean {
  const normTarget = `${statementNumber}=${optionKey.trim().toUpperCase()}`;
  return selectedKeys.some(k => k.trim().toUpperCase() === normTarget);
}

/**
 * Finds which option key the user selected for a statement number
 */
export function getSelectedOptionForStatement(
  selectedKeys: string[],
  statementNumber: number
): string | undefined {
  const found = selectedKeys.find(k => {
    const parts = k.split('=');
    return parts.length === 2 && parseInt(parts[0].trim(), 10) === statementNumber;
  });
  return found ? found.split('=')[1]?.trim().toUpperCase() : undefined;
}

/**
 * Evaluates whether all matrix statement rows are answered correctly
 */
export function evaluateMatrixAnswers(
  correctAnswers: string[],
  selectedKeys: string[],
  statementsCount: number
): { 
  isAllCorrect: boolean; 
  answeredRowsCount: number;
  rowResults: Record<number, { isCorrect: boolean; userKey?: string; correctKey?: string }> 
} {
  const rowResults: Record<number, { isCorrect: boolean; userKey?: string; correctKey?: string }> = {};
  let correctRows = 0;
  let answeredRowsCount = 0;

  for (let i = 1; i <= statementsCount; i++) {
    // Find expected answer for row i
    const correctEntry = correctAnswers.find(a => {
      const parts = a.split('=');
      return parts.length === 2 && parseInt(parts[0].trim(), 10) === i;
    });
    const expectedKey = correctEntry ? correctEntry.split('=')[1]?.trim().toUpperCase() : undefined;

    // Find user answer for row i
    const userEntry = selectedKeys.find(k => {
      const parts = k.split('=');
      return parts.length === 2 && parseInt(parts[0].trim(), 10) === i;
    });
    const userKey = userEntry ? userEntry.split('=')[1]?.trim().toUpperCase() : undefined;

    if (userKey) {
      answeredRowsCount++;
    }

    const rowCorrect = expectedKey !== undefined && userKey !== undefined && expectedKey === userKey;
    if (rowCorrect) correctRows++;

    rowResults[i] = {
      isCorrect: rowCorrect,
      userKey,
      correctKey: expectedKey
    };
  }

  return {
    isAllCorrect: statementsCount > 0 && correctRows === statementsCount,
    answeredRowsCount,
    rowResults
  };
}

/**
 * Universal evaluation function for single, multiple, and matrix questions
 */
export function isQuestionAnswerCorrect(question: Question, selectedKeys: string[]): boolean {
  const matrixInfo = parseQuestionMatrix(question);
  if (matrixInfo.isMatrix) {
    const { isAllCorrect } = evaluateMatrixAnswers(
      question.correctAnswers,
      selectedKeys,
      matrixInfo.statements.length
    );
    return isAllCorrect;
  }

  const normUser = selectedKeys.map(ans => ans.trim().toUpperCase()).sort();
  const normCorrect = question.correctAnswers.map(ans => ans.trim().toUpperCase()).sort();
  return (
    normUser.length === normCorrect.length &&
    normUser.every((ans, index) => ans === normCorrect[index])
  );
}
