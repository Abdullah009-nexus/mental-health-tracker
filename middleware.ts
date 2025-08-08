import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Create response object so Supabase can modify cookies
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const pathname = req.nextUrl.pathname

  // 1. Always allow the auth callback route
  if (pathname.startsWith('/auth/callback')) {
    return res
  }

  // 2. If user is logged in and tries to visit login, send to dashboard
  if (pathname.startsWith('/login') && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // 3. If user is NOT logged in and tries to visit dashboard, send to login
  if (pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/dashboard', '/login', '/auth/callback'],
}
