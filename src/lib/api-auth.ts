import { NextRequest } from 'next/server';

export function verifyApiToken(req: Request | NextRequest): boolean {
  // Extract token from multiple possible headers (case-insensitive in Fetch API)
  const authHeader = req.headers.get('authorization') || '';
  const bearerMatch = authHeader.match(/^Bearer\s+(.+)$/i);
  const bearerToken = bearerMatch ? bearerMatch[1] : '';

  const tokenHeader = (
    req.headers.get('x-api-token') ||
    req.headers.get('x-api-key') ||
    req.headers.get('api-token') ||
    req.headers.get('token') ||
    bearerToken ||
    ''
  ).trim();

  // Also check URL search params for API clients sending token in query
  let urlToken = '';
  try {
    const url = new URL(req.url);
    urlToken = (url.searchParams.get('api_token') || url.searchParams.get('token') || '').trim();
  } catch {
    // ignore
  }

  const providedToken = tokenHeader || urlToken;

  const expectedToken = (
    process.env.ARTICLE_API_TOKEN ||
    process.env.API_TOKEN ||
    process.env.NEGARESH_API_TOKEN ||
    ''
  ).trim();

  // 1. Check if token matches (for Windows Software & external callers)
  if (expectedToken && providedToken) {
    if (providedToken === expectedToken) {
      return true;
    }
  }

  // 2. Allow same-origin requests from the browser admin panel
  const referer = req.headers.get('referer');
  const host = req.headers.get('host');
  const origin = req.headers.get('origin');

  if (host) {
    if (referer && referer.includes(host)) {
      return true;
    }
    if (origin && origin.includes(host)) {
      return true;
    }
  }

  // 3. Fallback: If ARTICLE_API_TOKEN is not explicitly configured, accept known dev token or localhost
  if (!expectedToken) {
    if (providedToken === 'negaresh-secret-token' || providedToken === 'negaresh-token-2026') {
      return true;
    }
    if (host && (host.includes('localhost') || host.includes('127.0.0.1') || host.includes('.run.app'))) {
      return true;
    }
  }

  return false;
}

