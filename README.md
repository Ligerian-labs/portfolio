# Valentin Dosimont Portfolio

Astro SSR portfolio for `valentin.ligerianlabs.fr`, designed to position Valentin Dosimont for gaming, AI, and blockchain companies while surfacing curated public work from GitHub.

## Overview

This project is a server-rendered Astro site with three main surfaces:

- landing page with the main portfolio narrative
- projects page for curated open source work and contribution signals
- contact page with a Resend-backed form

The site is built to deploy cleanly on Dokploy and includes SEO fundamentals out of the box: sitemap generation, canonical URLs, Open Graph metadata, JSON-LD structured data, and a `robots.txt` route.

## Stack

- Astro SSR with `@astrojs/node`
- Bun for package management, scripts, and container workflow
- GitHub REST API for live repo and pull request signals
- Resend for contact form email delivery
- Vitest for small behavior tests

## Prerequisites

- Bun `1.3.x`
- A Resend account with a verified sending domain or sender
- Optional GitHub token for higher API limits

Check Bun locally with:

```bash
bun --version
```

## Getting Started

Install dependencies:

```bash
bun install
```

Create local environment variables:

```bash
cp .env.example .env
```

Start the development server:

```bash
bun run dev
```

## Environment Variables

The project ships with a `.env.example` file using `changeme` placeholders so it is easy to onboard.

| Variable | Required | Description |
| --- | --- | --- |
| `SITE_URL` | Yes | Public site URL, for example `https://valentin.ligerianlabs.fr` |
| `GITHUB_TOKEN` | No | Optional GitHub token to reduce rate-limit issues for live repo and PR data |
| `RESEND_API_KEY` | Yes | Resend API key used by the contact form API route |
| `CONTACT_FROM_EMAIL` | Yes | Verified sender identity in Resend |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives contact form submissions |

Example production values:

```env
SITE_URL=https://valentin.ligerianlabs.fr
GITHUB_TOKEN=ghp_your_token_here
RESEND_API_KEY=re_your_key_here
CONTACT_FROM_EMAIL=Portfolio <bonjour@ligerianlabs.fr>
CONTACT_TO_EMAIL=bonjour@ligerianlabs.fr
```

## Contact Form

The contact page posts to `src/pages/api/contact.ts`.

Behavior:

- validates input with Zod
- ignores honeypot spam submissions
- applies a small in-memory rate limit
- sends mail through Resend
- uses the sender configured in `CONTACT_FROM_EMAIL`
- replies directly to the sender email provided in the form

Important:

- `CONTACT_FROM_EMAIL` must be a verified sender or domain in Resend
- `CONTACT_TO_EMAIL` is the destination inbox for messages
- the in-memory rate limiter is simple by design and resets on restart

## GitHub Data

The portfolio pulls live GitHub signals at request time for:

- selected curated repositories
- recent authored pull requests

Implementation lives in `src/lib/github.ts`.

If GitHub is unavailable or rate-limited, the site falls back to safe static metadata so pages still render.

## SEO

SEO-related pieces included in this repository:

- page-level metadata via `SeoHead.astro`
- canonical URLs
- Open Graph and Twitter card tags
- JSON-LD schemas for person, website, and breadcrumbs
- sitemap generation via `@astrojs/sitemap`
- `robots.txt` route
- semantic content structure and internal linking

## Project Structure

```text
src/
  components/
  config/
  data/
  lib/
  layouts/
  pages/
public/
Dockerfile
.env.example
```

Useful files:

- `src/pages/index.astro`
- `src/pages/projects.astro`
- `src/pages/contact.astro`
- `src/pages/api/contact.ts`
- `src/lib/github.ts`
- `src/lib/contact.ts`
- `src/config/site.ts`

## Scripts

Run the development server:

```bash
bun run dev
```

Run tests:

```bash
bun run test
```

Build for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Docker

The included `Dockerfile` uses Bun for dependency installation, build, and runtime.

Build locally:

```bash
docker build -t valentin-portfolio .
```

Run locally:

```bash
docker run --rm -p 4321:4321 --env-file .env valentin-portfolio
```

The container exposes port `4321`.

## Dokploy Deployment

Recommended Dokploy setup:

- source: repository root
- build method: Dockerfile
- exposed port: `4321`
- domain: `valentin.ligerianlabs.fr`

Set these environment variables in Dokploy:

- `SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `GITHUB_TOKEN` optional

## Verification

Before shipping changes, run:

```bash
bun run test
bun run build
```

## Notes

- Bun is the expected package manager for this repository
- `bun.lock` is committed and should stay in sync with dependency changes
- `package-lock.json` is intentionally not used anymore
