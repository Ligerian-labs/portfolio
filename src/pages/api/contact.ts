import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../config/site';
import { formatContactEmail, parseContactForm } from '../../lib/contact';

const rateLimitWindowMs = 60_000;
const maxRequestsPerWindow = 5;
const requestLog = new Map<string, number[]>();

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientAddress || 'unknown';

  if (!checkRateLimit(ip)) {
    return json({ error: 'Too many attempts. Please try again in a minute.' }, 429);
  }

  try {
    const formData = await request.formData();
    const payload = parseContactForm(formData);

    if (payload.website) {
      return json({ ok: true });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      return json({ error: 'Email delivery is not configured yet.' }, 500);
    }

    const resend = new Resend(apiKey);
    const email = formatContactEmail(payload);

    await resend.emails.send({
      from: import.meta.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: import.meta.env.CONTACT_TO_EMAIL || site.email,
      replyTo: payload.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    return json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return json({ error: 'Please check the form fields and try again.' }, 400);
    }

    return json({ error: 'Unable to send your message right now.' }, 500);
  }
};

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = requestLog.get(ip) ?? [];
  const recent = current.filter((timestamp) => now - timestamp < rateLimitWindowMs);

  if (recent.length >= maxRequestsPerWindow) {
    requestLog.set(ip, recent);
    return false;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return true;
}

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
