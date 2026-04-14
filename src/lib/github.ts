import { site } from '../config/site';
import { projectDefinitions } from '../data/projects';

export type GitHubRepoSignal = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
};

export type GitHubPullRequestSignal = {
  title: string;
  repository: string;
  state: string;
  updatedAt: string;
  url: string;
};

export type GitHubShowcase = {
  repos: Record<string, GitHubRepoSignal>;
  pullRequests: GitHubPullRequestSignal[];
};

const apiBase = 'https://api.github.com';

export async function getGithubShowcase(): Promise<GitHubShowcase> {
  const repoSignals = await Promise.all(
    projectDefinitions.map(async (project) => {
      const signal = await fetchRepoSignal(project.repository);
      return [project.slug, signal] as const;
    }),
  );

  const pullRequests = await fetchRecentPullRequests();

  return {
    repos: Object.fromEntries(repoSignals),
    pullRequests,
  };
}

async function fetchRepoSignal(repository: string): Promise<GitHubRepoSignal> {
  const fallbackName = repository.split('/')[1] ?? repository;

  try {
    const response = await githubFetch(`/repos/${repository}`);

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const repo = (await response.json()) as {
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      pushed_at: string | null;
      html_url: string;
    };

    return {
      name: repo.name,
      description: repo.description ?? 'No description published yet.',
      language: repo.language ?? 'Mixed',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.pushed_at ?? '',
      url: repo.html_url,
    };
  } catch {
    return {
      name: fallbackName,
      description: 'Live repository metadata unavailable at the moment.',
      language: 'Mixed',
      stars: 0,
      forks: 0,
      updatedAt: '',
      url: `https://github.com/${repository}`,
    };
  }
}

async function fetchRecentPullRequests(): Promise<GitHubPullRequestSignal[]> {
  try {
    const query = encodeURIComponent(`author:${site.githubHandle} is:pr sort:updated-desc`);
    const response = await githubFetch(`/search/issues?q=${query}&per_page=6`);

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const payload = (await response.json()) as {
      items: Array<{
        title: string;
        state: string;
        updated_at: string;
        html_url: string;
        repository_url: string;
      }>;
    };

    return payload.items.map((item) => ({
      title: item.title,
      state: item.state,
      updatedAt: item.updated_at,
      url: item.html_url,
      repository: item.repository_url.replace(`${apiBase}/repos/`, ''),
    }));
  } catch {
    return [];
  }
}

function githubFetch(path: string) {
  const token = import.meta.env.GITHUB_TOKEN;

  return fetch(`${apiBase}${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

export function formatRelativeDate(dateString: string) {
  if (!dateString) {
    return 'recently';
  }

  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.max(1, Math.floor((now.getTime() - date.getTime()) / 86400000));

  if (diffInDays < 30) {
    return `${diffInDays}d ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);

  if (diffInMonths < 12) {
    return `${diffInMonths}mo ago`;
  }

  return `${Math.floor(diffInMonths / 12)}y ago`;
}
