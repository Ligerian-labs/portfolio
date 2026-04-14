import { z } from 'zod';

const messageMin = 30;

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please add your name.'),
  email: z.email('Please provide a valid email address.'),
  company: z.string().trim().max(120, 'Company name is too long.').optional().default(''),
  message: z
    .string()
    .trim()
    .min(messageMin, `Please share at least ${messageMin} characters.`)
    .max(5000, 'Message is too long.'),
  website: z.string().trim().max(255, 'Invalid field value.').optional().default(''),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function parseContactForm(formData: FormData): ContactInput {
  const payload = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    company: String(formData.get('company') ?? ''),
    message: String(formData.get('message') ?? ''),
    website: String(formData.get('website') ?? ''),
  };

  return contactSchema.parse(payload);
}

export function formatContactEmail(input: ContactInput) {
  const companyLine = input.company ? `Company: ${input.company}` : 'Company: not provided';

  return {
    subject: `Portfolio inquiry from ${input.name}`,
    text: `${companyLine}\nEmail: ${input.email}\n\n${input.message}`,
    html: `<p><strong>Company:</strong> ${escapeHtml(input.company || 'not provided')}</p><p><strong>Email:</strong> ${escapeHtml(input.email)}</p><p>${escapeHtml(input.message).replace(/\n/g, '<br />')}</p>`,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
