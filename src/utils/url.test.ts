import { describe, expect, it } from 'vitest';
import { isSafeExternalUrl } from './url';

describe('isSafeExternalUrl', () => {
  it('accepts HTTP and HTTPS references', () => {
    expect(isSafeExternalUrl('https://learn.microsoft.com/')).toBe(true);
    expect(isSafeExternalUrl('http://localhost/docs')).toBe(true);
  });

  it('rejects executable and malformed URLs', () => {
    expect(isSafeExternalUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeExternalUrl('data:text/html,test')).toBe(false);
    expect(isSafeExternalUrl('not-a-url')).toBe(false);
  });
});
