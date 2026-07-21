import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../config/site';
import { formatContactEmail, parseContactForm, parseContactPayload } from '../../lib/contact';

const rateLimitWindowMs = 60_000;
const maxRequestsPerWindow = 5;
const requestLog = new Map<string, number[]>();

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientAddress || 'unknown';

  if (!checkRateLimit(ip)) {
    return json({ error: 'Too many attempts. Please try again in a minute.' }, 429);
  }

  try {
    const payload = await parseContactRequest(request);

    if (payload.website) {
      return json({ ok: true });
    }

    const apiKey = env('RESEND_API_KEY');

    if (!apiKey) {
      return json({ error: 'Email delivery is not configured yet.' }, 500);
    }

    const resend = new Resend(apiKey);
    const email = formatContactEmail(payload);

    await resend.emails.send({
      from: env('CONTACT_FROM_EMAIL') || 'Portfolio <onboarding@resend.dev>',
      to: env('CONTACT_TO_EMAIL') || site.email,
      replyTo: payload.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    return json({ ok: true });
  } catch (error) {
    const validationMessage = getValidationMessage(error);

    if (validationMessage) {
      return json({ error: validationMessage }, 400);
    }

    return json({ error: 'Unable to send your message right now.' }, 500);
  }
};

function env(name: string) {
  return process.env[name] || import.meta.env[name];
}

function getValidationMessage(error: unknown) {
  if (!error || typeof error !== 'object' || !('issues' in error)) {
    return null;
  }

  const issues = (error as { issues?: unknown }).issues;

  if (!Array.isArray(issues)) {
    return null;
  }

  const firstIssue = issues[0];

  if (!firstIssue || typeof firstIssue !== 'object' || !('message' in firstIssue)) {
    return 'Please check the form fields and try again.';
  }

  return typeof firstIssue.message === 'string' ? firstIssue.message : 'Please check the form fields and try again.';
}

async function parseContactRequest(request: Request) {
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    const body = await request.json();

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      throw new Error('Invalid JSON payload.');
    }

    return parseContactPayload(body as Record<string, unknown>);
  }

  return parseContactForm(await request.formData());
}

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
