import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with environment variable (never hardcoded in source)
const resend = new Resend(process.env.RESEND_API_KEY);

const enquiryLabels: Record<string, string> = {
  retail: '🛒 Retail Order',
  bulk: '📦 Bulk / B2B Order',
  distribution: '🚚 Distribution Inquiry',
  partnership: '🤝 Partnership Proposal',
  other: 'General Inquiry',
};

const productLabels: Record<string, string> = {
  'rice-bran': 'Physically Refined Rice Bran Oil',
  mustard: 'Kacchi Ghani Mustard Oil',
  soybean: 'Refined Soybean Oil',
  all: 'All / Multiple Products',
};

// Simple in-memory sliding window rate limiter
// Max 5 submissions per IP address per 10-minute window
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

// Clean up stale rate limit entries periodically
if (process.env.NODE_ENV !== 'test') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting Check
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before submitting again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { fname, company, email, phone, enquiry, product, message, website_url } = body;

    // 2. Honeypot Anti-Spam Check: If bot autofilled hidden website_url field, return fake 200 without sending
    if (website_url && String(website_url).trim().length > 0) {
      return NextResponse.json({ success: true, id: 'hp-filtered' });
    }

    // 3. Strict Server-Side Length & Data Validation
    if (!fname?.trim() || typeof fname !== 'string') {
      return NextResponse.json({ error: 'Full name is required' }, { status: 400 });
    }
    if (fname.trim().length > 100) {
      return NextResponse.json({ error: 'Full name is too long (max 100 characters)' }, { status: 400 });
    }

    if (!email?.trim() || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
    }
    if (email.trim().length > 150) {
      return NextResponse.json({ error: 'Email address is too long (max 150 characters)' }, { status: 400 });
    }

    if (!message?.trim() || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message body is required' }, { status: 400 });
    }
    if (message.trim().length > 3000) {
      return NextResponse.json({ error: 'Message is too long (max 3000 characters)' }, { status: 400 });
    }

    if (!enquiry || typeof enquiry !== 'string') {
      return NextResponse.json({ error: 'Enquiry type is required' }, { status: 400 });
    }

    // 4. Header Injection Prevention (Strip \r and \n from headers & subject)
    const sanitizeHeader = (str: string) => str.replace(/[\r\n]/g, '').trim();

    const cleanFname = sanitizeHeader(fname);
    const cleanEmail = sanitizeHeader(email);
    const cleanCompany = company && typeof company === 'string' ? sanitizeHeader(company).slice(0, 150) : '';
    const cleanPhone = phone && typeof phone === 'string' ? sanitizeHeader(phone).slice(0, 30) : '';

    const enquiryTypeFormatted = enquiryLabels[enquiry] || sanitizeHeader(enquiry) || 'Website Inquiry';
    const productFormatted = productLabels[product] || (product ? sanitizeHeader(String(product)) : 'Not specified');
    const companyFormatted = cleanCompany ? cleanCompany : 'N/A';
    const phoneFormatted = cleanPhone ? cleanPhone : 'N/A';

    // Format subject with [JR Website] prefix and clean inputs
    const cleanSubjectTitle = enquiryTypeFormatted.replace(/^[^\w\s]+\s*/, '');
    const subject = `[JR Website] ${cleanSubjectTitle} Inquiry from ${cleanFname}`;

    // Target recipient email & verified sender
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'info@abudyog.in';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Jeevan Rekha Website <notifications@jeevanrekhafoods.com>';

    // Submission timestamp (IST)
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Kolkata',
    }).format(now);

    // Escape HTML special characters for email body render
    const sanitizeHtml = (str: string) =>
      str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m] || m));

    const cleanMessageText = sanitizeHtml(message.trim()).replace(/\n/g, '<br />');

    // Secure HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f3f8; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2d2b38; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f3f8; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="620" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid #e6e2f0;">
          
          <!-- BRAND HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #1D1240 0%, #351C6E 100%); padding: 32px 35px; text-align: left; position: relative;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; line-height: 1.2;">
                      Jeevan <span style="color: #FEDC06;">Rekha</span>
                    </div>
                    <div style="font-size: 12px; color: #d0c8ec; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">
                      Purity. Health. Happiness.
                    </div>
                  </td>
                  <td align="right" valign="top">
                    <span style="background-color: rgba(254, 220, 6, 0.15); border: 1px solid #FEDC06; color: #FEDC06; font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                      Website Inquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- YELLOW ACCENT BAR -->
          <tr>
            <td style="background-color: #FEDC06; height: 4px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- BODY CONTENT -->
          <tr>
            <td style="padding: 35px;">
              <h2 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #1D1240;">
                New Inquiry Received
              </h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #66607c; line-height: 1.5;">
                A new message has been submitted via the official contact form on <strong>jeevanrekhafoods.com</strong>.
              </p>

              <!-- INQUIRY BADGE STRIP -->
              <div style="background-color: #f8f6fc; border-left: 4px solid #4B2685; padding: 14px 18px; border-radius: 0 8px 8px 0; margin-bottom: 25px;">
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #766d92; font-weight: 600;">Enquiry Classification</div>
                <div style="font-size: 16px; font-weight: 700; color: #1D1240; margin-top: 3px;">
                  ${sanitizeHtml(enquiryTypeFormatted)}
                </div>
              </div>

              <!-- SENDER DETAILS TABLE -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px; border-collapse: collapse;">
                <tr>
                  <td width="48%" valign="top" style="padding-right: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #faf9fd; border: 1px solid #ebe7f5; border-radius: 8px; padding: 14px;">
                      <tr>
                        <td>
                          <div style="font-size: 11px; text-transform: uppercase; color: #847a9e; font-weight: 600; letter-spacing: 0.5px;">Full Name</div>
                          <div style="font-size: 14px; font-weight: 600; color: #1D1240; margin-top: 4px;">${sanitizeHtml(cleanFname)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="48%" valign="top" style="padding-left: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #faf9fd; border: 1px solid #ebe7f5; border-radius: 8px; padding: 14px;">
                      <tr>
                        <td>
                          <div style="font-size: 11px; text-transform: uppercase; color: #847a9e; font-weight: 600; letter-spacing: 0.5px;">Company Name</div>
                          <div style="font-size: 14px; font-weight: 600; color: #1D1240; margin-top: 4px;">${sanitizeHtml(companyFormatted)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td height="12" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
                <tr>
                  <td width="48%" valign="top" style="padding-right: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #faf9fd; border: 1px solid #ebe7f5; border-radius: 8px; padding: 14px;">
                      <tr>
                        <td>
                          <div style="font-size: 11px; text-transform: uppercase; color: #847a9e; font-weight: 600; letter-spacing: 0.5px;">Email Address</div>
                          <div style="font-size: 14px; font-weight: 600; color: #4B2685; margin-top: 4px;">
                            <a href="mailto:${sanitizeHtml(cleanEmail)}" style="color: #4B2685; text-decoration: none;">${sanitizeHtml(cleanEmail)}</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="48%" valign="top" style="padding-left: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #faf9fd; border: 1px solid #ebe7f5; border-radius: 8px; padding: 14px;">
                      <tr>
                        <td>
                          <div style="font-size: 11px; text-transform: uppercase; color: #847a9e; font-weight: 600; letter-spacing: 0.5px;">Phone Number</div>
                          <div style="font-size: 14px; font-weight: 600; color: #1D1240; margin-top: 4px;">
                            ${phoneFormatted !== 'N/A' ? `<a href="tel:${sanitizeHtml(phoneFormatted)}" style="color: #1D1240; text-decoration: none;">${sanitizeHtml(phoneFormatted)}</a>` : 'N/A'}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td height="12" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
                <tr>
                  <td colspan="2" valign="top">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #faf9fd; border: 1px solid #ebe7f5; border-radius: 8px; padding: 14px;">
                      <tr>
                        <td>
                          <div style="font-size: 11px; text-transform: uppercase; color: #847a9e; font-weight: 600; letter-spacing: 0.5px;">Product of Interest</div>
                          <div style="font-size: 14px; font-weight: 600; color: #1D1240; margin-top: 4px;">${sanitizeHtml(productFormatted)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE BOX -->
              <div style="margin-bottom: 25px;">
                <div style="font-size: 12px; text-transform: uppercase; color: #766d92; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px;">
                  Message Body
                </div>
                <div style="background-color: #ffffff; border: 1px solid #e2ddf0; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #2d2b38; white-space: pre-wrap;">${cleanMessageText}</div>
              </div>

              <!-- REPLY ACTION BOX -->
              <div style="background-color: #f1edfa; border: 1px dashed #a395c9; border-radius: 8px; padding: 16px; text-align: center;">
                <div style="font-size: 13px; color: #3b2866; font-weight: 600;">
                  💡 Tip: Hitting <strong>&quot;Reply&quot;</strong> in your email client will reply directly to <u>${sanitizeHtml(cleanEmail)}</u>.
                </div>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #faf9fd; border-top: 1px solid #eeeaf7; padding: 20px 35px; text-align: center;">
              <div style="font-size: 12px; color: #867ea3; line-height: 1.5;">
                Submitted on ${formattedDate}<br />
                AB Udyog Private Limited · Jeevan Rekha Foods<br />
                <a href="https://jeevanrekhafoods.com" style="color: #4B2685; text-decoration: none; font-weight: 600;">jeevanrekhafoods.com</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 5. Dispatch email via Resend API with replyTo header
    const data = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: cleanEmail,
      subject: subject,
      html: htmlContent,
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return NextResponse.json({ error: data.error.message || 'Failed to dispatch email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (err: unknown) {
    console.error('Contact Form Server Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
