import { site } from '../config/site';
import type { Locale } from '../i18n/ui';
import { defaultLocale, localizedPath, locales, t } from '../i18n/ui';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article' | 'profile';
  locale: Locale;
};

export type SeoAlternate = { locale: Locale | 'x-default'; href: string };

export function buildSeo({ title, description, path = '/', type = 'website', locale }: SeoInput) {
  const canonical = new URL(localizedPath(locale, path), site.url).toString();
  const ogImage = new URL(site.ogImage, site.url).toString();
  const alternates = buildAlternates(path);

  return {
    title,
    description,
    canonical,
    type,
    ogImage,
    locale,
    alternates,
  };
}

export function buildAlternates(path: string): SeoAlternate[] {
  const entries: SeoAlternate[] = locales.map((loc) => ({
    locale: loc,
    href: new URL(localizedPath(loc, path), site.url).toString(),
  }));
  entries.push({
    locale: 'x-default',
    href: new URL(localizedPath(defaultLocale, path), site.url).toString(),
  });
  return entries;
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    image: site.avatar,
    email: site.email,
    sameAs: [site.github],
    jobTitle: 'Engineer',
    knowsAbout: ['Gaming infrastructure', 'AI systems', 'Blockchain', 'Rust', 'TypeScript', 'Open source'],
  };
}

export function buildWebsiteSchema(locale: Locale) {
  const s = t(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: s.site.title,
    url: site.url,
    description: s.site.description,
    inLanguage: locale,
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  locale: Locale = defaultLocale,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(localizedPath(locale, item.path), site.url).toString(),
    })),
  };
}
