import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Generate a unique nonce for each request
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Create CSP header with appropriate policies for Next.js 15
  const scriptSrc = isDevelopment
    ? `'self' 'nonce-${nonce}' 'unsafe-eval' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net`
    : `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net`;

  const styleSrc = isDevelopment
    ? `'self' 'nonce-${nonce}' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com`
    : `'self' 'nonce-${nonce}' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com`;

  const cspHeader = `
    default-src 'self';
    script-src ${scriptSrc};
    script-src-elem 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net;
    style-src ${styleSrc};
    style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com;
    style-src-attr 'unsafe-inline';
    font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net;
    img-src 'self' blob: data: https:;
    connect-src 'self' ${isDevelopment ? 'ws: wss:' : ''};
    media-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    ${isDevelopment ? '' : 'upgrade-insecure-requests;'}
  `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue,
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue,
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - _next/webpack-hmr (webpack hot reload)
     * - favicon.ico (favicon file)
     */
    {
      source:
        '/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
