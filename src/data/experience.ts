import type { Locale } from '../i18n/ui';

type Translated = { en: string; fr: string };

type ExperienceSource = {
  company: Translated;
  location: string;
  role: Translated;
  period: Translated;
  summary: Translated;
  accent?: boolean;
};

const experiences_all: readonly ExperienceSource[] = [
  {
    company: { en: 'Pupuce CORP', fr: 'Pupuce CORP' },
    location: 'Angers · Remote',
    role: {
      en: 'Fractional CTO / Forward Deployed Engineer',
      fr: 'CTO à temps partagé / Forward Deployed Engineer',
    },
    period: { en: '2021 → Now', fr: '2021 → Auj.' },
    summary: {
      en: 'Discovery, architecture & delivery for complex business apps — DDD + event-driven, owned end-to-end.',
      fr: "Discovery, architecture & livraison d'applications métier complexes — DDD + event-driven, prises en charge de bout en bout.",
    },
    accent: true,
  },
  {
    company: { en: 'Cartridge.gg', fr: 'Cartridge.gg' },
    location: 'NYC · Remote',
    role: {
      en: 'Software Engineer · client engagement',
      fr: 'Software Engineer · mission client',
    },
    period: { en: '2024 → 2026', fr: '2024 → 2026' },
    summary: {
      en: 'Rust & TypeScript gaming and onchain infrastructure; maintained dojo.js, torii-core, arcade.',
      fr: 'Infrastructure gaming et onchain en Rust & TypeScript ; mainteneur de dojo.js, torii-core, arcade.',
    },
  },
  {
    company: { en: 'Pasquinade.fr', fr: 'Pasquinade.fr' },
    location: 'Paris · Remote',
    role: {
      en: 'Lead Developer / CTO · client engagement',
      fr: 'Lead Développeur / CTO · mission client',
    },
    period: { en: '2020 → 2021', fr: '2020 → 2021' },
    summary: {
      en: 'Migrated AWS ECS → Kubernetes; introduced CI/CD and tooling with Ansible & Terraform.',
      fr: "Migration d'AWS ECS → Kubernetes ; mise en place du CI/CD et de l'outillage avec Ansible & Terraform.",
    },
  },
  {
    company: {
      en: 'FioulMarket / Total Proxi Énergies',
      fr: 'FioulMarket / Total Proxi Énergies',
    },
    location: 'Rueil · Remote',
    role: {
      en: 'Technical Lead · client engagement',
      fr: 'Technical Lead · mission client',
    },
    period: { en: '2017 → 2020', fr: '2017 → 2020' },
    summary: {
      en: 'Led technical decisions and weekly production releases on a Symfony + React platform.',
      fr: 'Pilotage des décisions techniques et des mises en production hebdomadaires sur une plateforme Symfony + React.',
    },
  },
  {
    company: { en: 'Independent', fr: 'Indépendant' },
    location: 'Paris',
    role: { en: 'Software Developer', fr: 'Développeur' },
    period: { en: '2013 → 2017', fr: '2013 → 2017' },
    summary: {
      en: 'Frontend and backend web applications for clients across the stack.',
      fr: 'Applications web frontend et backend pour des clients, sur toute la stack.',
    },
  },
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  accent: boolean;
};

export function getExperiences(locale: Locale): readonly Experience[] {
  return experiences_all.map((exp) => ({
    company: exp.company[locale],
    location: exp.location,
    role: exp.role[locale],
    period: exp.period[locale],
    summary: exp.summary[locale],
    accent: exp.accent ?? false,
  }));
}

type StackGroupSource = {
  label: Translated;
  items: readonly Translated[];
};

const same = (s: string): Translated => ({ en: s, fr: s });

const stackGroups_all: readonly StackGroupSource[] = [
  {
    label: { en: 'Systems', fr: 'Systèmes' },
    items: ['Rust', 'Zig', 'Go', 'Python', 'TypeScript', 'JavaScript', 'Node.js', 'Cairo'].map(same),
  },
  {
    label: { en: 'Architecture', fr: 'Architecture' },
    items: [
      same('DDD'),
      same('Event-driven'),
      same('CQRS'),
      same('Microservices'),
      { en: 'Distributed systems', fr: 'Systèmes distribués' },
      { en: 'API design', fr: "Design d'API" },
    ],
  },
  {
    label: { en: 'Infra', fr: 'Infra' },
    items: ['Kubernetes', 'AWS', 'Terraform', 'Ansible', 'Docker', 'CI/CD', 'Serverless'].map(same),
  },
  {
    label: { en: 'Delivery', fr: 'Livraison' },
    items: [
      same('Discovery'),
      { en: 'Stakeholder translation', fr: 'Traduction des enjeux' },
      { en: 'Code review', fr: 'Revue de code' },
      same('Scrum'),
      { en: 'Pairing', fr: 'Pair programming' },
      { en: 'OSS maintenance', fr: 'Maintenance OSS' },
    ],
  },
];

export type StackGroup = {
  label: string;
  items: readonly string[];
};

export function getStackGroups(locale: Locale): readonly StackGroup[] {
  return stackGroups_all.map((group) => ({
    label: group.label[locale],
    items: group.items.map((item) => item[locale]),
  }));
}
