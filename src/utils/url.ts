export function isSafeExternalUrl(value?: string): value is string {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

/**
 * Returns the root URL of the currently deployed SPA without transient query
 * parameters or auth fragments. This keeps GitHub Pages project paths such as
 * `/study-certificate/` instead of falling back to the domain root.
 */
export function getAuthRedirectUrl(currentHref: string): string {
  const currentUrl = new URL(currentHref);
  currentUrl.search = '';
  currentUrl.hash = '';

  if (!currentUrl.pathname.endsWith('/')) {
    const finalSegment = currentUrl.pathname.split('/').pop() || '';
    currentUrl.pathname = finalSegment.includes('.')
      ? currentUrl.pathname.replace(/[^/]*$/, '')
      : `${currentUrl.pathname}/`;
  }

  return currentUrl.toString();
}
