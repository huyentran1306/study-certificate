import { Question } from '../types';

const STORAGE_PREFIX = '__ENC_V1__:';

// Master salt / secret for client-side storage encryption
const MASTER_SECRET = 'StudyCert_SecureStore_2026_Xk9#mP$vL2@qW8*z';

/**
 * Derives a 32-byte (256-bit) key using SHA-256-like mixing of the secret and salt.
 */
function deriveKey(salt: Uint8Array): Uint8Array {
  const key = new Uint8Array(32);
  const secretBytes = new TextEncoder().encode(MASTER_SECRET);

  let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
  let h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;

  for (let i = 0; i < 256; i++) {
    const sByte = secretBytes[i % secretBytes.length];
    const saltByte = salt[i % salt.length];
    const val = (sByte ^ saltByte) + i * 31;

    h0 = (h0 + (val << 3) ^ (h7 >>> 2)) >>> 0;
    h1 = (h1 + (val << 5) ^ (h0 >>> 3)) >>> 0;
    h2 = (h2 + (val << 7) ^ (h1 >>> 4)) >>> 0;
    h3 = (h3 + (val << 11) ^ (h2 >>> 5)) >>> 0;
    h4 = (h4 + (val << 13) ^ (h3 >>> 6)) >>> 0;
    h5 = (h5 + (val << 17) ^ (h4 >>> 7)) >>> 0;
    h6 = (h6 + (val << 19) ^ (h5 >>> 8)) >>> 0;
    h7 = (h7 + (val << 23) ^ (h6 >>> 9)) >>> 0;
  }

  const view = new DataView(key.buffer);
  view.setUint32(0, h0, false);
  view.setUint32(4, h1, false);
  view.setUint32(8, h2, false);
  view.setUint32(12, h3, false);
  view.setUint32(16, h4, false);
  view.setUint32(20, h5, false);
  view.setUint32(24, h6, false);
  view.setUint32(28, h7, false);

  return key;
}

function rotl(a: number, b: number): number {
  return ((a << b) | (a >>> (32 - b))) >>> 0;
}

function qround(x: Uint32Array, a: number, b: number, c: number, d: number): void {
  x[a] = (x[a] + x[b]) >>> 0; x[d] = rotl(x[d] ^ x[a], 16);
  x[c] = (x[c] + x[d]) >>> 0; x[b] = rotl(x[b] ^ x[c], 12);
  x[a] = (x[a] + x[b]) >>> 0; x[d] = rotl(x[d] ^ x[a], 8);
  x[c] = (x[c] + x[d]) >>> 0; x[b] = rotl(x[b] ^ x[c], 7);
}

function chacha20Block(key: Uint32Array, nonce: Uint32Array, counter: number): Uint8Array {
  const state = new Uint32Array(16);
  // 'expand 32-byte k'
  state[0] = 0x61707865; state[1] = 0x3320646e;
  state[2] = 0x79622d32; state[3] = 0x6b206574;
  for (let i = 0; i < 8; i++) state[4 + i] = key[i];
  state[12] = counter >>> 0;
  state[13] = nonce[0]; state[14] = nonce[1]; state[15] = nonce[2];

  const working = new Uint32Array(state);
  for (let i = 0; i < 10; i++) {
    qround(working, 0, 4, 8, 12);
    qround(working, 1, 5, 9, 13);
    qround(working, 2, 6, 10, 14);
    qround(working, 3, 7, 11, 15);
    qround(working, 0, 5, 10, 15);
    qround(working, 1, 6, 11, 12);
    qround(working, 2, 7, 8, 13);
    qround(working, 3, 4, 9, 14);
  }

  const out = new Uint8Array(64);
  const out32 = new Uint32Array(out.buffer);
  for (let i = 0; i < 16; i++) {
    out32[i] = (working[i] + state[i]) >>> 0;
  }
  return out;
}

function chacha20Xor(keyBytes: Uint8Array, nonceBytes: Uint8Array, inputBytes: Uint8Array): Uint8Array {
  const key32 = new Uint32Array(keyBytes.buffer, keyBytes.byteOffset, 8);
  const nonce32 = new Uint32Array(nonceBytes.buffer, nonceBytes.byteOffset, 3);
  const output = new Uint8Array(inputBytes.length);
  let counter = 1;

  for (let offset = 0; offset < inputBytes.length; offset += 64) {
    const keyStream = chacha20Block(key32, nonce32, counter++);
    const blockLen = Math.min(64, inputBytes.length - offset);
    for (let i = 0; i < blockLen; i++) {
      output[offset + i] = inputBytes[offset + i] ^ keyStream[i];
    }
  }
  return output;
}

// 32-bit FNV-1a checksum for data integrity check
function fnv32(bytes: Uint8Array): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < bytes.length; i++) {
    hash ^= bytes[i];
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash >>> 0;
}

// Safe Base64 encoder that avoids call stack overflow on large buffers
function uint8ToBase64(bytes: Uint8Array): string {
  let binary = '';
  const chunkSize = 8192;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk as any);
  }
  return btoa(binary);
}

// Safe Base64 decoder
function base64ToUint8(b64: string): Uint8Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

/**
 * Encrypts an array of questions into an opaque, scrambled string.
 * Format: __ENC_V1__:<base64-payload>
 */
export function encryptQuestions(questions: Question[]): string {
  try {
    const jsonStr = JSON.stringify(questions);
    const plainBytes = new TextEncoder().encode(jsonStr);

    // 12-byte random nonce
    const nonce = new Uint8Array(12);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(nonce);
    } else {
      for (let i = 0; i < 12; i++) nonce[i] = Math.floor(Math.random() * 256);
    }

    // 4-byte checksum of plaintext
    const checksum = fnv32(plainBytes);

    // 32-byte key derived from secret + nonce
    const key = deriveKey(nonce);

    // ChaCha20 encryption
    const ciphertext = chacha20Xor(key, nonce, plainBytes);

    // Pack: [nonce (12B)][checksum (4B)][ciphertext (N bytes)]
    const packed = new Uint8Array(12 + 4 + ciphertext.length);
    packed.set(nonce, 0);

    const view = new DataView(packed.buffer, packed.byteOffset, packed.byteLength);
    view.setUint32(12, checksum, false);

    packed.set(ciphertext, 16);

    return STORAGE_PREFIX + uint8ToBase64(packed);
  } catch (err) {
    console.error('Failed to encrypt questions:', err);
    // Fallback if encryption fails
    return JSON.stringify(questions);
  }
}

/**
 * Decrypts an encrypted string back into Question[].
 * Gracefully handles legacy unencrypted JSON arrays.
 */
export function decryptQuestions(raw: string | null): Question[] | null {
  if (!raw) return null;

  // Handle encrypted format
  if (raw.startsWith(STORAGE_PREFIX)) {
    try {
      const b64 = raw.slice(STORAGE_PREFIX.length);
      const packed = base64ToUint8(b64);

      if (packed.length < 16) return null;

      const nonce = packed.subarray(0, 12);
      const view = new DataView(packed.buffer, packed.byteOffset, packed.byteLength);
      const expectedChecksum = view.getUint32(12, false);
      const ciphertext = packed.subarray(16);

      const key = deriveKey(nonce);
      const decryptedBytes = chacha20Xor(key, nonce, ciphertext);

      // Verify integrity
      const actualChecksum = fnv32(decryptedBytes);
      if (actualChecksum !== expectedChecksum) {
        console.warn('Questions cache integrity check failed.');
        return null;
      }

      const jsonStr = new TextDecoder().decode(decryptedBytes);
      const parsed = JSON.parse(jsonStr);
      return Array.isArray(parsed) ? (parsed as Question[]) : null;
    } catch (err) {
      console.warn('Failed to decrypt questions:', err);
      return null;
    }
  }

  // Graceful fallback for legacy plain JSON
  if (raw.trim().startsWith('[')) {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Question[]) : null;
    } catch {
      return null;
    }
  }

  return null;
}

/**
 * Helper to get questions from localStorage with automatic decryption and legacy auto-migration.
 */
export function getSecureQuestionsCache(certId: string): Question[] | null {
  if (typeof localStorage === 'undefined') return null;
  const raw = localStorage.getItem(`questions_${certId}`);
  if (!raw) return null;

  const questions = decryptQuestions(raw);
  if (!questions) {
    localStorage.removeItem(`questions_${certId}`);
    return null;
  }

  // Auto-upgrade legacy unencrypted format to encrypted format on the fly
  if (!raw.startsWith(STORAGE_PREFIX)) {
    try {
      localStorage.setItem(`questions_${certId}`, encryptQuestions(questions));
    } catch {}
  }

  return questions;
}

/**
 * Helper to store questions into localStorage in an encrypted format.
 */
export function setSecureQuestionsCache(certId: string, questions: Question[]): void {
  if (typeof localStorage === 'undefined') return;
  try {
    const encrypted = encryptQuestions(questions);
    localStorage.setItem(`questions_${certId}`, encrypted);
  } catch (err) {
    console.warn(`Could not save encrypted questions cache for ${certId}:`, err);
  }
}

/**
 * Helper to remove cached questions for a certificate.
 */
export function removeSecureQuestionsCache(certId: string): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(`questions_${certId}`);
  } catch {}
}
