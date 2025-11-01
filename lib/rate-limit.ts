import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

// Initialize Redis client (only if credentials are provided)
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Create rate limiters for different use cases
export const contactRateLimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '15 m'), // 3 requests per 15 minutes
      analytics: true,
      prefix: '@ratelimit/contact',
    })
  : null;

export const newsletterRateLimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 requests per hour
      analytics: true,
      prefix: '@ratelimit/newsletter',
    })
  : null;

// Fallback in-memory rate limiter for development/testing
const inMemoryLimiter = new Map<string, { count: number; resetTime: number }>();

function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, value] of inMemoryLimiter.entries()) {
    if (now > value.resetTime) {
      inMemoryLimiter.delete(key);
    }
  }
}

export function inMemoryRateLimit(
  identifier: string,
  limit: number,
  windowMs: number
): { success: boolean; reset?: number } {
  const now = Date.now();

  // Clean up expired entries periodically (10% chance on each request)
  if (Math.random() < 0.1) {
    cleanupExpiredEntries();
  }

  const record = inMemoryLimiter.get(identifier);

  if (!record || now > record.resetTime) {
    // First request or window expired
    inMemoryLimiter.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }

  if (record.count >= limit) {
    return {
      success: false,
      reset: Math.ceil((record.resetTime - now) / 1000),
    };
  }

  // Increment count
  record.count++;
  return { success: true };
}

// Helper function to get client identifier
export function getClientIdentifier(request: Request): string {
  const headers = request.headers;
  return (
    headers.get('x-forwarded-for') ||
    headers.get('x-real-ip') ||
    'unknown'
  );
}
