export type ProjectCategory = 'gaming' | 'ai' | 'blockchain' | 'tooling';

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
  categories: ProjectCategory[];
  featured: boolean;
};

export const projectDefinitions: ProjectDefinition[] = [
  {
    slug: 'marathon',
    name: 'marathon',
    year: '2026',
    language: 'Zig',
    href: 'https://github.com/MartianGreed/marathon',
    repository: 'MartianGreed/marathon',
    summary:
      'A distributed Claude Code runner that executes tasks inside isolated Firecracker VMs.',
    problem:
      'Agentic development only becomes credible at scale when execution is isolated, schedulable, and measurable.',
    build:
      'Built an orchestrator, node operator, and VM agent architecture for running coding workloads across sandboxed machines.',
    impact:
      'Demonstrates systems depth across AI orchestration, virtualization, metering, and low-level runtime concerns.',
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
    summary:
      'Automated ticket-to-PR orchestration with sandboxed execution and multi-provider issue sync.',
    problem:
      'AI-assisted engineering workflows need more than prompts; they need queues, state machines, review boundaries, and observability.',
    build:
      'Designed a multi-service platform with API, dashboard, worker, PostgreSQL, pg-boss, and PR automation.',
    impact:
      'Shows product thinking around AI operations, developer workflows, and reliable automation loops.',
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
    summary:
      'A keyboard-first SQLite explorer for the terminal, built with Ratatui.',
    problem:
      'Database inspection in the terminal is still clumsy for engineers who want speed, multiple connections, and serious keyboard ergonomics.',
    build:
      'Implemented a full-screen TUI with schema browsing, query tabs, autocomplete, inline editing, and Vim-style navigation.',
    impact:
      'Highlights Rust product craftsmanship and a strong eye for practical developer experience.',
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
    summary:
      'A multi-agent coding session manager for Neovim with isolated workspaces and multi-VCS support.',
    problem:
      'Running multiple coding agents from the editor quickly becomes chaotic without session isolation, process management, and ergonomic control surfaces.',
    build:
      'Built workspace-aware session management across git worktrees and jj workspaces with real-time monitoring inside Neovim.',
    impact:
      'Strengthens the developer-tooling story with editor-native automation and sharp workflow design.',
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
    summary:
      'A gamified macro manager for Claude Code sessions inspired by StarCraft 2 mechanics.',
    problem:
      'Agent-heavy workflows need faster control, richer feedback loops, and better session awareness than a plain terminal tab list can offer.',
    build:
      'Created a tmux-native dashboard with APM tracking, control groups, streak systems, Pomodoro support, and SQLite persistence.',
    impact:
      'Adds a memorable gaming-inflected systems story that fits the target audience without feeling superficial.',
    categories: ['gaming', 'ai', 'tooling'],
    featured: false,
  },
] as const;

export const contributionHighlights = [
  {
    name: 'dojoengine/torii-core',
    href: 'https://github.com/dojoengine/torii-core',
    summary:
      'Recent public work on Starknet indexing infrastructure, including ERC standards, controller fixes, and database refactors.',
    categories: ['blockchain', 'gaming'],
  },
  {
    name: 'Cartridge.gg',
    href: 'https://cartridge.gg',
    summary:
      'Production experience in gaming infrastructure, blockchain services, and open source libraries.',
    categories: ['gaming', 'blockchain'],
  },
] as const;
