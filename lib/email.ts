import { Resend } from 'resend';

// Initialize Resend client (only if API key is provided)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  project: string;
  budget: string;
  timeline: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<{
  success: boolean;
  error?: string;
}> {
  // If Resend is not configured, log to console (development fallback)
  if (!resend) {
    console.log('📧 Contact Form Submission (Resend not configured):', {
      ...data,
      timestamp: new Date().toISOString(),
    });
    return { success: true };
  }

  const contactEmail = process.env.CONTACT_EMAIL_TO || 'mail.coderscafe@gmail.com';
  const fromEmail = process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev';

  try {
    // Send email to business
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                margin: -20px -20px 20px -20px;
              }
              .content {
                background: #f9fafb;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
              }
              .field {
                margin-bottom: 15px;
                padding: 15px;
                background: white;
                border-radius: 6px;
                border-left: 3px solid #3b82f6;
              }
              .label {
                font-weight: 600;
                color: #374151;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                color: #111827;
                font-size: 16px;
              }
              .project {
                white-space: pre-wrap;
                background: white;
                padding: 15px;
                border-radius: 6px;
                border-left: 3px solid #3b82f6;
              }
              .footer {
                text-align: center;
                color: #6b7280;
                font-size: 12px;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Coders Cafe - Portfolio Website</p>
            </div>

            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${data.name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></div>
              </div>

              ${data.company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Budget Range</div>
                <div class="value">${formatBudget(data.budget)}</div>
              </div>

              <div class="field">
                <div class="label">Timeline</div>
                <div class="value">${formatTimeline(data.timeline)}</div>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <div class="label" style="margin-bottom: 10px;">Project Description</div>
              <div class="project">${data.project.replace(/\n/g, '<br>')}</div>
            </div>

            <div class="footer">
              <p>This email was sent from your portfolio website contact form.</p>
              <p>Received on ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short'
              })}</p>
            </div>
          </body>
        </html>
      `,
    });

    // Optionally send confirmation email to user
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: 'Thank you for contacting Coders Cafe',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                  color: white;
                  padding: 30px;
                  border-radius: 8px;
                  text-align: center;
                  margin: -20px -20px 20px -20px;
                }
                .content {
                  padding: 20px 0;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
              </div>
              <div class="content">
                <p>Hi ${data.name},</p>
                <p>Thank you for reaching out to Coders Cafe. We've received your inquiry and will get back to you within 24 hours.</p>
                <p>In the meantime, feel free to check out our portfolio and case studies on our website.</p>
                <p>Best regards,<br><strong>Coders Cafe Team</strong></p>
              </div>
            </body>
          </html>
        `,
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}

function formatBudget(budget: string): string {
  const budgetMap: Record<string, string> = {
    'under-5k': 'Under $5,000',
    '5k-15k': '$5,000 - $15,000',
    '15k-50k': '$15,000 - $50,000',
    '50k-plus': '$50,000+',
    'not-sure': 'Not sure yet',
  };
  return budgetMap[budget] || budget;
}

function formatTimeline(timeline: string): string {
  const timelineMap: Record<string, string> = {
    'asap': 'ASAP',
    '1-3-months': '1-3 months',
    '3-6-months': '3-6 months',
    '6-plus-months': '6+ months',
  };
  return timelineMap[timeline] || timeline;
}
