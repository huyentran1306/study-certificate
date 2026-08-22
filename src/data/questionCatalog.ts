import type { Question } from '../types';

/**
 * Small metadata kept in the entry bundle. The large question banks are loaded
 * only when a learner opens a certificate, which keeps the home page fast.
 */
export const BUILTIN_QUESTION_COUNTS: Record<string, number> = {
  'gh-300': 152,
  'az-900': 323,
  'ai-900': 5,
  'cca-f': 90,
  'dp-800': 134,
  'istqb-ai': 119,
  'ab-731': 100,
};

const loaders: Record<string, () => Promise<Question[]>> = import.meta.env.DEV ? {
  'gh-300': async () => (await import('./initialQuestions')).initialQuestions,
  'az-900': async () => (await import('./az900Questions')).az900Questions,
  'ai-900': async () => (await import('./ai900Questions')).ai900Questions,
  'cca-f': async () => (await import('./ccaQuestions')).ccaQuestions,
  'dp-800': async () => (await import('./dp800Questions')).dp800Questions,
  'istqb-ai': async () => (await import('./istqbAiQuestions')).istqbAiQuestions,
} : {};

export async function loadBuiltinQuestions(certId: string): Promise<Question[]> {
  const loader = loaders[certId];
  return loader ? loader() : [];
}
