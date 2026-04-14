import { describe, expect, it, vi } from 'vitest';
import { formatRelativeDate, getGithubShowcase } from './github';

describe('formatRelativeDate', () => {
  it('returns a day-based label for recent dates', () => {
    const now = Date.now();
    expect(formatRelativeDate(new Date(now - 3 * 86400000).toISOString())).toBe('3d ago');
  });
});

describe('getGithubShowcase', () => {
  it('falls back when GitHub fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('boom')));

    const result = await getGithubShowcase();

    expect(result.repos.marathon.description).toContain('Live repository metadata unavailable');
    expect(result.pullRequests).toEqual([]);

    vi.unstubAllGlobals();
  });
});
