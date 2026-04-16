import type { Locale } from '../i18n/ui';

export type ProjectCategory = 'gaming' | 'ai' | 'blockchain' | 'tooling';

type Translated = { en: string; fr: string };

type ProjectSource = {
  slug: string;
  name: string;
  year: string;
  language: string;
  href: string;
  repository: string;
  summary: Translated;
  problem: Translated;
  build: Translated;
  impact: Translated;
  categories: readonly ProjectCategory[];
  featured: boolean;
};

export type ProjectDefinition = {
  slug: string;
  name: string;
  year: string;
  language: string;
  href: string;
  repository: string;
  summary: string;
  problem: string;
  build: string;
  impact: string;
  categories: readonly ProjectCategory[];
  featured: boolean;
};

const projectDefinitions_all: readonly ProjectSource[] = [
  {
    slug: 'marathon',
    name: 'marathon',
    year: '2026',
    language: 'Zig',
    href: 'https://github.com/MartianGreed/marathon',
    repository: 'MartianGreed/marathon',
    summary: {
      en: 'A distributed Claude Code runner that executes tasks inside isolated Firecracker VMs.',
      fr: "Un runner Claude Code distribué qui exécute les tâches dans des VMs Firecracker isolées.",
    },
    problem: {
      en: 'Agentic development only becomes credible at scale when execution is isolated, schedulable, and measurable.',
      fr: "Le développement agentique ne devient crédible à l'échelle que quand l'exécution est isolée, planifiable et mesurable.",
    },
    build: {
      en: 'Built an orchestrator, node operator, and VM agent architecture for running coding workloads across sandboxed machines.',
      fr: "Architecture orchestrateur, opérateur de nœud et agent VM pour exécuter des charges de travail de code sur des machines isolées.",
    },
    impact: {
      en: 'Demonstrates systems depth across AI orchestration, virtualization, metering, and low-level runtime concerns.',
      fr: "Démontre une profondeur systèmes en orchestration IA, virtualisation, métrologie et préoccupations runtime bas niveau.",
    },
    categories: ['ai', 'tooling'],
    featured: true,
  },
  {
    slug: 'claudeswarm',
    name: 'claudeswarm',
    year: '2026',
    language: 'TypeScript',
    href: 'https://github.com/MartianGreed/claudeswarm',
    repository: 'MartianGreed/claudeswarm',
    summary: {
      en: 'Automated ticket-to-PR orchestration with sandboxed execution and multi-provider issue sync.',
      fr: "Orchestration automatisée ticket-vers-PR avec exécution isolée et synchronisation d'issues multi-providers.",
    },
    problem: {
      en: 'AI-assisted engineering workflows need more than prompts; they need queues, state machines, review boundaries, and observability.',
      fr: "Les workflows d'ingénierie assistés par IA demandent plus que des prompts : il faut des files, des machines à états, des frontières de revue et de l'observabilité.",
    },
    build: {
      en: 'Designed a multi-service platform with API, dashboard, worker, PostgreSQL, pg-boss, and PR automation.',
      fr: "Conception d'une plateforme multi-services avec API, dashboard, worker, PostgreSQL, pg-boss et automatisation de PR.",
    },
    impact: {
      en: 'Shows product thinking around AI operations, developer workflows, and reliable automation loops.',
      fr: "Montre une réflexion produit autour des opérations IA, des workflows développeur et des boucles d'automatisation fiables.",
    },
    categories: ['ai', 'tooling'],
    featured: true,
  },
  {
    slug: 'sqlv',
    name: 'sqlv',
    year: '2026',
    language: 'Rust',
    href: 'https://github.com/MartianGreed/sqlv',
    repository: 'MartianGreed/sqlv',
    summary: {
      en: 'A keyboard-first SQLite explorer for the terminal, built with Ratatui.',
      fr: "Un explorateur SQLite clavier-first pour le terminal, construit avec Ratatui.",
    },
    problem: {
      en: 'Database inspection in the terminal is still clumsy for engineers who want speed, multiple connections, and serious keyboard ergonomics.',
      fr: "L'inspection de bases de données en terminal reste maladroite pour les ingénieurs qui veulent de la vitesse, plusieurs connexions et une ergonomie clavier sérieuse.",
    },
    build: {
      en: 'Implemented a full-screen TUI with schema browsing, query tabs, autocomplete, inline editing, and Vim-style navigation.',
      fr: "TUI plein écran avec navigation de schéma, onglets de requêtes, autocomplétion, édition inline et navigation Vim.",
    },
    impact: {
      en: 'Highlights Rust product craftsmanship and a strong eye for practical developer experience.',
      fr: "Met en avant un artisanat produit Rust et un œil affûté pour l'expérience développeur pratique.",
    },
    categories: ['tooling'],
    featured: true,
  },
  {
    slug: 'autobahn-nvim',
    name: 'autobahn.nvim',
    year: '2025',
    language: 'Lua',
    href: 'https://github.com/MartianGreed/autobahn.nvim',
    repository: 'MartianGreed/autobahn.nvim',
    summary: {
      en: 'A multi-agent coding session manager for Neovim with isolated workspaces and multi-VCS support.',
      fr: "Un gestionnaire de sessions de code multi-agents pour Neovim avec espaces de travail isolés et support multi-VCS.",
    },
    problem: {
      en: 'Running multiple coding agents from the editor quickly becomes chaotic without session isolation, process management, and ergonomic control surfaces.',
      fr: "Faire tourner plusieurs agents de code depuis l'éditeur devient vite chaotique sans isolation de session, gestion des processus et surfaces de contrôle ergonomiques.",
    },
    build: {
      en: 'Built workspace-aware session management across git worktrees and jj workspaces with real-time monitoring inside Neovim.',
      fr: "Gestion de sessions workspace-aware sur worktrees git et workspaces jj avec monitoring temps réel dans Neovim.",
    },
    impact: {
      en: 'Strengthens the developer-tooling story with editor-native automation and sharp workflow design.',
      fr: "Renforce le récit outillage développeur avec de l'automatisation native éditeur et un design de workflow tranchant.",
    },
    categories: ['ai', 'tooling'],
    featured: false,
  },
  {
    slug: 'ccmanager',
    name: 'ccmanager',
    year: '2026',
    language: 'Go',
    href: 'https://github.com/MartianGreed/ccmanager',
    repository: 'MartianGreed/ccmanager',
    summary: {
      en: 'A gamified macro manager for Claude Code sessions inspired by StarCraft 2 mechanics.',
      fr: "Un gestionnaire de macros gamifié pour les sessions Claude Code inspiré des mécaniques de StarCraft 2.",
    },
    problem: {
      en: 'Agent-heavy workflows need faster control, richer feedback loops, and better session awareness than a plain terminal tab list can offer.',
      fr: "Les workflows agent-intensifs exigent un contrôle plus rapide, des boucles de feedback plus riches et une meilleure conscience des sessions qu'une simple liste d'onglets terminal.",
    },
    build: {
      en: 'Created a tmux-native dashboard with APM tracking, control groups, streak systems, Pomodoro support, and SQLite persistence.',
      fr: "Dashboard tmux-natif avec suivi APM, groupes de contrôle, systèmes de streaks, support Pomodoro et persistance SQLite.",
    },
    impact: {
      en: 'Adds a memorable gaming-inflected systems story that fits the target audience without feeling superficial.',
      fr: "Ajoute un récit systèmes teinté gaming mémorable qui parle à l'audience cible sans paraître superficiel.",
    },
    categories: ['gaming', 'ai', 'tooling'],
    featured: false,
  },
];

export function getProjects(locale: Locale): readonly ProjectDefinition[] {
  return projectDefinitions_all.map((p) => ({
    slug: p.slug,
    name: p.name,
    year: p.year,
    language: p.language,
    href: p.href,
    repository: p.repository,
    summary: p.summary[locale],
    problem: p.problem[locale],
    build: p.build[locale],
    impact: p.impact[locale],
    categories: p.categories,
    featured: p.featured,
  }));
}

export const projectRepositories = projectDefinitions_all.map((p) => ({
  slug: p.slug,
  repository: p.repository,
})) as readonly { slug: string; repository: string }[];

type ContributionSource = {
  name: string;
  href: string;
  summary: Translated;
  categories: readonly ProjectCategory[];
};

export type ContributionHighlight = {
  name: string;
  href: string;
  summary: string;
  categories: readonly ProjectCategory[];
};

const contributionHighlights_all: readonly ContributionSource[] = [
  {
    name: 'dojoengine/torii-core',
    href: 'https://github.com/dojoengine/torii-core',
    summary: {
      en: 'Recent public work on Starknet indexing infrastructure, including ERC standards, controller fixes, and database refactors.',
      fr: "Travaux publics récents sur l'infrastructure d'indexation Starknet, incluant les standards ERC, des corrections de contrôleur et des refactors de base de données.",
    },
    categories: ['blockchain', 'gaming'],
  },
  {
    name: 'Cartridge.gg',
    href: 'https://cartridge.gg',
    summary: {
      en: 'Production experience in gaming infrastructure, blockchain services, and open source libraries.',
      fr: "Expérience en production sur l'infrastructure gaming, les services blockchain et les bibliothèques open source.",
    },
    categories: ['gaming', 'blockchain'],
  },
];

export function getContributionHighlights(locale: Locale): readonly ContributionHighlight[] {
  return contributionHighlights_all.map((c) => ({
    name: c.name,
    href: c.href,
    summary: c.summary[locale],
    categories: c.categories,
  }));
}
