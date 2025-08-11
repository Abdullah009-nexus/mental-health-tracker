import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const loggedIn = req.cookies.get('isLoggedIn')?.value === 'true';
  const pathname = req.nextUrl.pathname;

  // Allow static files & API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Redirect logged-in users away from /login
  if (pathname.startsWith('/login') && loggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Protect dashboard
  if (pathname.startsWith('/dashboard') && !loggedIn) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
