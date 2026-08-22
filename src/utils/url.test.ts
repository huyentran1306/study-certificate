import { describe, expect, it } from 'vitest';
import { getAuthRedirectUrl, isSafeExternalUrl } from './url';

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

describe('getAuthRedirectUrl', () => {
  it('keeps the GitHub Pages project path and removes temporary URL state', () => {
    expect(getAuthRedirectUrl('https://huyentran1306.github.io/study-certificate/?__v=123#access_token=test'))
      .toBe('https://huyentran1306.github.io/study-certificate/');
  });

  it('supports localhost and explicit index files', () => {
    expect(getAuthRedirectUrl('http://localhost:3000/?mode=signup')).toBe('http://localhost:3000/');
    expect(getAuthRedirectUrl('https://example.com/study-certificate/index.html'))
      .toBe('https://example.com/study-certificate/');
  });
});
