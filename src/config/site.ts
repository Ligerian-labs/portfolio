import type { Locale } from '../i18n/ui';
import { t } from '../i18n/ui';

export const site = {
  name: 'Valentin Dosimont',
  url: 'https://valentin.ligerianlabs.fr',
  domain: 'valentin.ligerianlabs.fr',
  github: 'https://github.com/MartianGreed',
  githubHandle: 'MartianGreed',
  email: 'bonjour@ligerianlabs.fr',
  avatar: 'https://avatars.githubusercontent.com/u/11038484?v=4',
  ogImage: '/og-image.svg',
  keywords: [
    'Valentin Dosimont',
    'Rust engineer',
    'TypeScript engineer',
    'Gaming infrastructure engineer',
    'AI systems engineer',
    'Blockchain engineer',
    'Open source engineer',
    'Neovim plugin developer',
    'Developer tooling engineer',
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
