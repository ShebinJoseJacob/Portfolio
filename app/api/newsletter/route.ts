import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { validateOrigin } from '@/lib/csrf';
import { newsletterRateLimit, inMemoryRateLimit, getClientIdentifier } from '@/lib/rate-limit';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address').max(200),
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

    // Rate limiting using Upstash Redis or fallback to in-memory
    const identifier = getClientIdentifier(request);

    if (newsletterRateLimit) {
      const { success } = await newsletterRateLimit.limit(identifier);
      if (!success) {
        return NextResponse.json(
          { error: 'Too many subscription attempts. Please try again later.' },
          { status: 429 }
        );
      }
    } else {
      // Fallback to in-memory rate limiter
      const result = inMemoryRateLimit(identifier, 3, 60 * 60 * 1000);
      if (!result.success) {
        return NextResponse.json(
          { error: 'Too many subscription attempts. Please try again later.' },
          { status: 429 }
        );
      }
    }

    // Validate email
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    // Check if Sender API key is configured
    const apiKey = process.env.SENDER_API_KEY;
    if (!apiKey) {
      console.error('SENDER_API_KEY is not configured');
      return NextResponse.json(
        {
          success: true,
          message: 'Thanks for subscribing! We\'ll keep you updated.'
        },
        { status: 200 }
      );
    }

    // Subscribe to Sender.net
    const response = await fetch('https://api.sender.net/v2/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        groups: [process.env.SENDER_GROUP_ID || ''], // Optional: specify group/list
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle specific Sender API errors
      if (response.status === 422 && data.message?.includes('already exists')) {
        return NextResponse.json(
          {
            success: true,
            message: 'You\'re already subscribed to our newsletter!'
          },
          { status: 200 }
        );
      }

      console.error('Sender API error:', data);
      throw new Error('Failed to subscribe');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed! Check your inbox for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
