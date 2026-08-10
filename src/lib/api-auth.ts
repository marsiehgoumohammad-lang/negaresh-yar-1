import { NextRequest } from 'next/server';

export function verifyApiToken(req: Request | NextRequest): boolean {
  const tokenHeader = req.headers.get('x-api-token');
  const expectedToken = process.env.ARTICLE_API_TOKEN;

  // 1. Check if token matches (for Windows App)
  if (expectedToken && expectedToken.trim() && tokenHeader && tokenHeader.trim() === expectedToken.trim()) {
    return true;
  }

  // 2. Allow same-origin requests from the browser admin panel
  const referer = req.headers.get('referer');
  const host = req.headers.get('host');
  if (referer && host && referer.includes(host)) {
    return true;
  }

  // 3. Fallback: If ARTICLE_API_TOKEN is not set in dev environment, allow dev test token or referer
  if (!expectedToken || !expectedToken.trim()) {
    if (tokenHeader === 'negaresh-secret-token' || (referer && host && referer.includes(host))) {
      return true;
    }
  }

  return false;
}
