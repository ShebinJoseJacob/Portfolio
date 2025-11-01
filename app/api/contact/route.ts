import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { validateOrigin } from '@/lib/csrf';
import { contactRateLimit, inMemoryRateLimit, getClientIdentifier } from '@/lib/rate-limit';
import { sendContactEmail } from '@/lib/email';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  company: z.string().max(200).optional(),
  project: z.string().min(20).max(5000),
  budget: z.string().min(1),
  timeline: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection
    if (!validateOrigin(request)) {
      return NextResponse.json(
        { error: 'Invalid origin' },
        { status: 403 }
      );
    }

    // Get client identifier for rate limiting
    const identifier = getClientIdentifier(request);

    // Check rate limit using Upstash Redis or fallback to in-memory
    if (contactRateLimit) {
      const { success, reset } = await contactRateLimit.limit(identifier);
      if (!success) {
        return NextResponse.json(
          {
            error: 'Too many requests. Please try again later.',
            retryAfter: reset,
          },
          { status: 429 }
        );
      }
    } else {
      // Fallback to in-memory rate limiter
      const result = inMemoryRateLimit(identifier, 3, 15 * 60 * 1000);
      if (!result.success) {
        return NextResponse.json(
          {
            error: 'Too many requests. Please try again later.',
            retryAfter: result.reset,
          },
          { status: 429 }
        );
      }
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send email notification
    const emailResult = await sendContactEmail(validatedData);

    if (!emailResult.success) {
      // Log error but don't expose details to client
      console.error('Email sending failed:', emailResult.error);

      // Still return success to user (email failure shouldn't block submission)
      // In a production system, you might want to store this in a database as backup
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your inquiry. We will get back to you within 24 hours.',
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
