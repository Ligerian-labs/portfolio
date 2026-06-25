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
    company: 'Ligerian Labs',
    location: 'Angers',
    role: { en: 'Founder', fr: 'Fondateur' },
    period: { en: '2026 - Present', fr: '2026 - aujourd’hui' },
    summary: {
      en: 'Building pragmatic AI automation and custom agent systems for SMEs, from workflow discovery to production infrastructure.',
      fr: "Construction d'automatisations IA pragmatiques et d'agents sur mesure pour les PME, du cadrage métier à l'infrastructure de production.",
    },
    tags: ['AI Automation', 'Agentic Coding', 'TypeScript', 'Infrastructure', 'SMEs'],
  },
  {
    company: 'Pupuce CORP',
    location: 'Angers',
    role: { en: 'Chief Technology Officer', fr: 'Chief Technology Officer' },
    period: { en: 'May 2021 - Present', fr: 'Mai 2021 - aujourd’hui' },
    summary: {
      en: 'Leading technical strategy, architecture, delivery, and engineering quality across client work and internal products.',
      fr: "Pilotage de la stratégie technique, de l'architecture, de la livraison et de la qualité d'ingénierie sur les missions clients et les produits internes.",
    },
    tags: ['Technology Management', 'TDD', 'Rust', 'Go', 'TypeScript'],
  },
  {
    company: 'Cartridge.gg',
    location: 'New York',
    role: { en: 'Software Engineer', fr: 'Software Engineer' },
    period: { en: 'Sep 2024 - Apr 2026', fr: 'Sept. 2024 - Avr. 2026' },
    summary: {
      en: 'Maintained open source gaming and blockchain infrastructure across dojo.js, torii-core, and Cartridge Arcade.',
      fr: "Maintenance d'infrastructure open source gaming et blockchain sur dojo.js, torii-core et Cartridge Arcade.",
    },
    tags: ['Rust', 'TypeScript', 'Open Source', 'Blockchain', 'Gaming'],
  },
  {
    company: 'Pasquinade.fr',
    location: 'Paris',
    role: { en: 'Lead Developer / CTO', fr: 'Lead Développeur / CTO' },
    period: { en: 'Oct 2020 - Dec 2021', fr: 'Oct. 2020 - Déc. 2021' },
    summary: {
      en: 'Took over infrastructure, migrated services to Kubernetes, improved CI/CD, developer experience, code review, and product delivery.',
      fr: "Reprise de l'infrastructure, migration vers Kubernetes, amélioration du CI/CD, de l'expérience développeur, des revues de code et de la livraison produit.",
    },
    tags: ['TypeScript', 'Kubernetes', 'CI/CD', 'Ansible', 'Terraform'],
  },
  {
    company: 'Fioulmarket.fr',
    location: 'Rueil-Malmaison',
    role: { en: 'Technical Lead', fr: 'Référent technique' },
    period: { en: 'Sep 2017 - Oct 2020', fr: 'Sept. 2017 - Oct. 2020' },
    summary: {
      en: 'Led the development team for total-proxi-energies.fr, covering technical choices, code review, weekly production releases, and Scrum facilitation.',
      fr: "Lead de l'équipe de développement sur total-proxi-energies.fr : choix techniques, revues de code, mises en production hebdomadaires et facilitation Scrum.",
    },
    tags: ['Symfony', 'React.js', 'Scrum', 'Code Review', 'Delivery'],
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
  'TDD',
  'Agentic Coding',
  'Technology Management',
  'AI Automation',
  'Kubernetes',
  'Ansible',
  'Terraform',
  'Microservices',
  'CI/CD',
  'jj-vcs',
  'GitHub',
  'Vim',
  'OpenCode',
  'Codex',
] as const;
