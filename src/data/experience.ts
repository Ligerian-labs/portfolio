import type { Locale } from '../i18n/ui';

type Translated = { en: string; fr: string };

type ExperienceSource = {
  company: string;
  location: string;
  role: Translated;
  period: Translated;
  summary: Translated;
  tags: readonly string[];
};

const experiences_all: readonly ExperienceSource[] = [
  {
    company: 'Cartridge.gg',
    location: 'New York',
    role: { en: 'Engineer', fr: 'Ingénieur' },
    period: { en: 'Sep 2024 - Present', fr: 'Sept. 2024 - aujourd’hui' },
    summary: {
      en: 'Building gaming infrastructure, blockchain services, and open source libraries with Rust and TypeScript.',
      fr: "Construction d'infrastructure gaming, de services blockchain et de bibliothèques open source en Rust et TypeScript.",
    },
    tags: ['Rust', 'TypeScript', 'Microservices', 'Blockchain', 'Gaming'],
  },
  {
    company: 'Pupuce CORP',
    location: 'Angers',
    role: { en: 'CTO', fr: 'CTO' },
    period: { en: 'May 2021 - Present', fr: 'Mai 2021 - aujourd’hui' },
    summary: {
      en: 'Leading architecture and delivery for tech clients with an emphasis on systems design, code quality, and pragmatic execution.',
      fr: "Pilotage de l'architecture et de la livraison pour des clients tech, avec un accent sur le design système, la qualité du code et l'exécution pragmatique.",
    },
    tags: ['Rust', 'Go', 'Microservices', 'Serverless', 'Consulting'],
  },
  {
    company: 'Pasquinade.fr',
    location: 'Paris',
    role: { en: 'Lead Developer / CTO', fr: 'Lead Développeur / CTO' },
    period: { en: 'Oct 2020 - May 2021', fr: 'Oct. 2020 - Mai 2021' },
    summary: {
      en: 'Drove CI/CD, infrastructure migrations from AWS ECS to Kubernetes, and engineering quality across backend-heavy systems.',
      fr: "Mise en place du CI/CD, migrations d'infrastructure d'AWS ECS vers Kubernetes, et qualité d'ingénierie sur des systèmes backend-lourds.",
    },
    tags: ['Node.js', 'Rust', 'Kubernetes', 'CI/CD', 'Open Source'],
  },
  {
    company: 'Fioulmarket.fr',
    location: 'Paris',
    role: { en: 'Lead Developer', fr: 'Lead Développeur' },
    period: { en: 'Sep 2017 - Oct 2020', fr: 'Sept. 2017 - Oct. 2020' },
    summary: {
      en: 'Owned frontend technical choices, code reviews, and pairing practices to raise quality across the team.',
      fr: "Responsable des choix techniques frontend, des revues de code et des pratiques de pair programming pour élever la qualité de l'équipe.",
    },
    tags: ['Frontend', 'Code Review', 'Pair Programming'],
  },
  {
    company: 'Freelance',
    location: 'Paris',
    role: { en: 'Developer', fr: 'Développeur' },
    period: { en: 'Sep 2013 - Jan 2017', fr: 'Sept. 2013 - Jan. 2017' },
    summary: {
      en: 'Built client work across stacks while establishing the engineering fundamentals that still shape how I ship today.',
      fr: "Réalisations clients sur différents stacks, en posant les fondamentaux d'ingénierie qui guident encore mes livraisons aujourd'hui.",
    },
    tags: ['Freelance', 'Full Stack'],
  },
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  tags: readonly string[];
};

export function getExperiences(locale: Locale): readonly Experience[] {
  return experiences_all.map((exp) => ({
    company: exp.company,
    location: exp.location,
    role: exp.role[locale],
    period: exp.period[locale],
    summary: exp.summary[locale],
    tags: exp.tags,
  }));
}

export const skills = [
  'Rust',
  'Zig',
  'TypeScript',
  'Go',
  'JavaScript',
  'Kubernetes',
  'Ansible',
  'Terraform',
  'Microservices',
  'jj-vcs',
  'GitHub',
  'Vim',
  'OpenCode',
  'Codex',
] as const;
