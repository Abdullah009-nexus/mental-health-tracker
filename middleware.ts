import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database'; // Update if your type path is different

export async function middleware(req: NextRequest) {
  const res = NextResponse.next(); //  Create a response first
  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //  Log for debugging (remove later)
  console.log("Session:", session, "Code:", req.nextUrl.searchParams.get("code"));

  const pathname = req.nextUrl.pathname;
  const hasCode = req.nextUrl.searchParams.has('code');

  //  If user not logged in and accessing /dashboard, redirect to /login
  if (!session && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  //  If just logged in with magic link (code present), redirect to dashboard
  if (hasCode && pathname === '/') {
    if (session) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = '/dashboard';
      redirectUrl.search = '';
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}
