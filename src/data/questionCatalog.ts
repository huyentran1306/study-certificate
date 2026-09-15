import type { Question } from '../types';

/**
 * Small metadata kept in the entry bundle. The large question banks are loaded
 * only when a learner opens a certificate, which keeps the home page fast.
 */
export const BUILTIN_QUESTION_COUNTS: Record<string, number> = {
  'gh-300': 152,
  'az-900': 323,
  'ai-900': 128,
  'ai-103': 135,
  'ai-200': 128,
  'cca-f': 90,
  'dp-800': 134,
  'istqb-ai': 119,
  'ab-731': 100,
  'ab-100': 120,
  'az-305': 285,
  'az-104': 188,
  'dp-900': 322,
  'az-204': 348,
  'az-500': 347,
  'az-400': 495,
  'pl-300': 397,
  'dp-600': 220,
  'sc-100': 360,
  'sc-200': 480,
};

export const BUILTIN_CERT_IDS = Object.keys(BUILTIN_QUESTION_COUNTS);

const loaders: Record<string, () => Promise<Question[]>> = {
  'gh-300': async () => (await import('./initialQuestions')).initialQuestions,
  'az-900': async () => (await import('./az900Questions')).az900Questions,
  'ai-900': async () => (await import('./ai900Questions')).ai900Questions,
  'ai-103': async () => (await import('./ai103Questions')).ai103Questions,
  'ai-200': async () => (await import('./ai200Questions')).ai200Questions,
  'ab-100': async () => (await import('./ab100Questions')).ab100Questions,
  'az-305': async () => (await import('./az305Questions')).az305Questions,
  'az-104': async () => (await import('./az104Questions')).az104Questions,
  'dp-900': async () => (await import('./dp900Questions')).dp900Questions,
  'az-204': async () => (await import('./az204Questions')).az204Questions,
  'az-500': async () => (await import('./az500Questions')).az500Questions,
  'az-400': async () => (await import('./az400Questions')).az400Questions,
  'pl-300': async () => (await import('./pl300Questions')).pl300Questions,
  'dp-600': async () => (await import('./dp600Questions')).dp600Questions,
  'sc-100': async () => (await import('./sc100Questions')).sc100Questions,
  'sc-200': async () => (await import('./sc200Questions')).sc200Questions,
  'cca-f': async () => (await import('./ccaQuestions')).ccaQuestions,
  'dp-800': async () => (await import('./dp800Questions')).dp800Questions,
  'istqb-ai': async () => (await import('./istqbAiQuestions')).istqbAiQuestions,
};

export async function loadBuiltinQuestions(certId: string): Promise<Question[]> {
  const loader = loaders[certId];
  return loader ? loader() : [];
}
