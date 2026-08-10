import { NextRequest, NextResponse } from 'next/server';
import { verifyApiToken } from '@/lib/api-auth';

export async function GET(req: NextRequest) {
  if (!verifyApiToken(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized: Invalid or missing API token' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    ok: true,
    site: 'negaresh-yar',
    time: new Date().toISOString(),
  });
}
