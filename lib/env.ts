import { z } from 'zod';

// Environment variable schema
const envSchema = z.object({
  // Required public variables
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1, 'Sanity project ID is required'),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1, 'Sanity dataset is required'),
  NEXT_PUBLIC_SITE_URL: z.string().url('Site URL must be a valid URL'),

  // Email configuration (Resend)
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL_TO: z.string().email().optional(),
  CONTACT_EMAIL_FROM: z.string().email().optional(),
  SEND_CONFIRMATION_EMAIL: z.string().optional(),

  // Rate limiting (Upstash Redis)
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

  // Newsletter (Sender.net)
  SENDER_API_KEY: z.string().optional(),
  SENDER_GROUP_ID: z.string().optional(),

  // Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Validate and export environment variables
function validateEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map(err => `${err.path.join('.')}: ${err.message}`).join('\n');
      throw new Error(`❌ Invalid environment variables:\n${missingVars}`);
    }
    throw error;
  }
}

export const env = validateEnv();
