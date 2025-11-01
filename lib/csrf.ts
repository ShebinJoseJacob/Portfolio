import { NextRequest } from 'next/server';

/**
 * Validates the origin header for CSRF protection
 * @param request - Next.js request object
 * @returns boolean indicating if the origin is valid
 */
export function validateOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  // Get allowed origins from environment
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const allowedOrigins = [
    siteUrl,
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ];

  // Check origin header
  if (origin && !allowedOrigins.includes(origin)) {
    console.warn('CSRF: Invalid origin:', origin);
    return false;
  }

  // Check referer as fallback
  if (!origin && referer) {
    try {
      const refererUrl = new URL(referer);
      const refererOrigin = `${refererUrl.protocol}//${refererUrl.host}`;
      if (!allowedOrigins.includes(refererOrigin)) {
        console.warn('CSRF: Invalid referer:', refererOrigin);
        return false;
      }
    } catch (error) {
      console.warn('CSRF: Invalid referer URL:', referer);
      return false;
    }
  }

  // Reject if both origin and referer are missing
  if (!origin && !referer) {
    console.warn('CSRF: Missing both origin and referer headers');
    return false;
  }

  return true;
}
