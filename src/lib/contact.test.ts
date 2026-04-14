import { describe, expect, it } from 'vitest';
import { formatContactEmail, parseContactForm } from './contact';

describe('parseContactForm', () => {
  it('parses a valid contact payload', () => {
    const formData = new FormData();
    formData.set('name', 'Valentin');
    formData.set('email', 'hello@example.com');
    formData.set('company', 'Ligerian Labs');
    formData.set('message', 'This is a valid message with enough detail to pass validation.');
    formData.set('website', '');

    expect(parseContactForm(formData)).toMatchObject({
      name: 'Valentin',
      email: 'hello@example.com',
      company: 'Ligerian Labs',
    });
  });

  it('rejects short messages', () => {
    const formData = new FormData();
    formData.set('name', 'Valentin');
    formData.set('email', 'hello@example.com');
    formData.set('message', 'Too short');

    expect(() => parseContactForm(formData)).toThrowError();
  });
});

describe('formatContactEmail', () => {
  it('escapes unsafe html in the generated body', () => {
    const formatted = formatContactEmail({
      name: 'Valentin',
      email: 'hello@example.com',
      company: '<script>',
      message: 'Line one\n<script>alert(1)</script>',
      website: '',
    });

    expect(formatted.html).not.toContain('<script>');
    expect(formatted.html).toContain('&lt;script&gt;');
  });
});
