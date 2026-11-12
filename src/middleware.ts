import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === '/samples' && searchParams.has('category')) {
    return NextResponse.redirect('https://www.negaresh-yar.ir/samples', {
      status: 301,
    });
  }

  if (pathname === '/request' && searchParams.has('service')) {
    return NextResponse.redirect('https://www.negaresh-yar.ir/request', {
      status: 301,
    });
  }

  if (searchParams.get('utm_source') === 'chatgpt.com') {
    return NextResponse.redirect(`https://www.negaresh-yar.ir${pathname}`, {
      status: 301,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|admin|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.json|site\\.webmanifest|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|eot)$).*)',
  ],
};
