import { describe, expect, it, beforeEach } from 'vitest';
import type { Question } from '../types';
import {
  encryptQuestions,
  decryptQuestions,
  getSecureQuestionsCache,
  setSecureQuestionsCache,
  removeSecureQuestionsCache,
} from './secureStorage';

const mockQuestions: Question[] = [
  {
    id: 'q-test-1',
    questionNumber: 1,
    text: 'What is Azure Cosmos DB?',
    options: [
      { key: 'A', text: 'A globally distributed multi-model database' },
      { key: 'B', text: 'A relational database service' },
    ],
    correctAnswers: ['A'],
    explanation: 'Cosmos DB is Microsoft globally distributed NoSQL database.',
    category: 'Databases',
  },
  {
    id: 'q-test-2',
    questionNumber: 2,
    text: 'What is Azure Blob Storage used for?',
    options: [
      { key: 'A', text: 'Unstructured object storage' },
      { key: 'B', text: 'Block storage for VMs only' },
    ],
    correctAnswers: ['A'],
    explanation: 'Azure Blob Storage stores massive amounts of unstructured data.',
    category: 'Storage',
  },
];

// In-memory Storage mock for Vitest Node environment
if (typeof globalThis.localStorage === 'undefined') {
  const store = new Map<string, string>();
  (globalThis as any).localStorage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => { store.set(key, String(value)); },
    removeItem: (key: string) => { store.delete(key); },
    clear: () => { store.clear(); },
  };
}

describe('secureStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('encryptQuestions and decryptQuestions', () => {
    it('encrypts questions into an opaque string prefixed with __ENC_V1__:', () => {
      const encrypted = encryptQuestions(mockQuestions);

      expect(encrypted.startsWith('__ENC_V1__:')).toBe(true);
      // Ensure plaintext words do not appear anywhere in the encrypted payload
      expect(encrypted.includes('Azure Cosmos DB')).toBe(false);
      expect(encrypted.includes('What is Azure Blob Storage')).toBe(false);
      expect(encrypted.includes('correctAnswers')).toBe(false);
    });

    it('decrypts back into the exact original question array', () => {
      const encrypted = encryptQuestions(mockQuestions);
      const decrypted = decryptQuestions(encrypted);

      expect(decrypted).toEqual(mockQuestions);
    });

    it('returns null if the ciphertext has been tampered with', () => {
      const encrypted = encryptQuestions(mockQuestions);
      // Tamper with the base64 part
      const prefix = '__ENC_V1__:';
      const b64 = encrypted.slice(prefix.length);
      const tamperedB64 = b64.slice(0, 20) + (b64[20] === 'A' ? 'B' : 'A') + b64.slice(21);
      const tampered = prefix + tamperedB64;

      const decrypted = decryptQuestions(tampered);
      expect(decrypted).toBeNull();
    });

    it('gracefully handles legacy plain JSON strings for backward compatibility', () => {
      const legacyJson = JSON.stringify(mockQuestions);
      const decrypted = decryptQuestions(legacyJson);

      expect(decrypted).toEqual(mockQuestions);
    });

    it('returns null for null, empty or invalid strings', () => {
      expect(decryptQuestions(null)).toBeNull();
      expect(decryptQuestions('')).toBeNull();
      expect(decryptQuestions('not-valid-json-or-encrypted')).toBeNull();
    });
  });

  describe('getSecureQuestionsCache and setSecureQuestionsCache', () => {
    it('stores encrypted questions and retrieves them correctly', () => {
      setSecureQuestionsCache('AZ-900', mockQuestions);

      // Verify that the stored item in localStorage is encrypted
      const rawStored = localStorage.getItem('questions_AZ-900');
      expect(rawStored).toBeTruthy();
      expect(rawStored!.startsWith('__ENC_V1__:')).toBe(true);
      expect(rawStored!.includes('Azure Cosmos DB')).toBe(false);

      // Retrieve via helper
      const cached = getSecureQuestionsCache('AZ-900');
      expect(cached).toEqual(mockQuestions);
    });

    it('automatically upgrades legacy plaintext localStorage data to encrypted format on read', () => {
      // Manually set plaintext into localStorage
      localStorage.setItem('questions_AZ-104', JSON.stringify(mockQuestions));

      // First read should retrieve questions AND automatically upgrade localStorage
      const cached = getSecureQuestionsCache('AZ-104');
      expect(cached).toEqual(mockQuestions);

      // Verify it was upgraded
      const upgradedStored = localStorage.getItem('questions_AZ-104');
      expect(upgradedStored!.startsWith('__ENC_V1__:')).toBe(true);
      expect(upgradedStored!.includes('Azure Cosmos DB')).toBe(false);
    });

    it('removes cache when removeSecureQuestionsCache is called', () => {
      setSecureQuestionsCache('AI-103', mockQuestions);
      expect(getSecureQuestionsCache('AI-103')).toBeTruthy();

      removeSecureQuestionsCache('AI-103');
      expect(getSecureQuestionsCache('AI-103')).toBeNull();
      expect(localStorage.getItem('questions_AI-103')).toBeNull();
    });
  });
});
