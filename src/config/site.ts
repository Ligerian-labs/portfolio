import type { Locale } from '../i18n/ui';
import { t } from '../i18n/ui';

export const site = {
  name: 'Valentin Dosimont',
  url: 'https://valentin.ligerianlabs.fr',
  domain: 'valentin.ligerianlabs.fr',
  github: 'https://github.com/MartianGreed',
  githubHandle: 'MartianGreed',
  email: 'bonjour@ligerianlabs.fr',
  bookCall: 'https://calendar.app.google/FzMpoa3KzpLGfZVU7',
  avatar: '/photo.jpg',
  ogImage: '/og-image.svg',
  keywords: [
    'Valentin Dosimont',
    'Fractional CTO',
    'Forward Deployed Engineer',
    'Software architecture',
    'Rust engineer',
    'Zig engineer',
    'Go engineer',
    'TypeScript engineer',
    'Cairo engineer',
    'Open source engineer',
  ],
} as const;

export function getSiteMeta(locale: Locale) {
  const s = t(locale);
  return {
    title: s.site.title,
    description: s.site.description,
    locale: s.html.ogLocale,
  };
}
