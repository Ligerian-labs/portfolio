import { site } from '../config/site';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article' | 'profile';
};

export function buildSeo({ title, description, path = '/', type = 'website' }: SeoInput) {
  const canonical = new URL(path, site.url).toString();
  const ogImage = new URL(site.ogImage, site.url).toString();

  return {
    title,
    description,
    canonical,
    type,
    ogImage,
  };
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

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.title,
    url: site.url,
    description: site.description,
    inLanguage: 'en',
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}
