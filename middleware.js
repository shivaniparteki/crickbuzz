import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = ['/login', '/signup'].includes(path);
  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    // If it's a public path and the user is authenticated, redirect to a different page.
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    // If it's not a public path and the user is not authenticated, redirect to the login page.
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // If none of the above conditions match, allow access to the requested page.
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',    // Public path: Login
    '/signup',   // Public path: Signup
    '/',     // The home page that authenticated users are redirected to
    '/profile',  // Protected path: Profile page
    '/live-scores',  // Protected path: Live scores page
    '/schedule',     // Protected path: Schedule page
    '/archives',     // Protected path: Archives page
  ]
};

