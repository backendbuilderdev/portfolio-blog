/**
 * Single source of truth for site and author context.
 * Edit this file to update name, bio, links, and base URL across the portfolio.
 */

export const site = {
  name: 'Sandeep P.',
  shortName: 'Sandeep P.',
  description:
    'Python backend developer building scalable APIs and AI-infused tools. FastAPI, Django, Redis, Go.',
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-blog-starter.vercel.app',
}

export const author = {
  name: 'Sandeep P.',
  tagline: 'Go | Python | AI',
  bio: `I'm a Python backend developer on a mission to simplify complexity and automate the boring stuff. From logistics to edtech to real-time systems, I've spent the last few years writing scalable APIs, designing smart workflows, and building AI-infused tools like Talk to docs and real-time leaderboards. I vibe with Python, FastAPI, Django, Redis, Docker, and a dash of Rust when performance calls—writing clean code, shipping fast, and learning in public.`,
  /** Short intro (first paragraph on home). */
  intro: `I'm a developer and builder. I work on scalable backends and AI-infused tools—from "Talk to docs" to real-time systems. I've been coding in Python for years and love turning messy problems into clean APIs.`,
  /** "My life's work" paragraph (second paragraph on home). */
  lifeWork: `My life's work is to make backend systems reliable and easy to reason about. I care about clean code, fast feedback loops, and learning in public. I'm based in Bikaner and always up for chai and tech talk.`,
  /** Closing line (after "Some of my favorite writing"). */
  closing: `You can read my writing or code, or follow me online. Reach out if you're building something or want to geek out over APIs and systems.`,
  /** Optional email for "Reach out" link (mailto). */
  email: null as string | null,
}

export const social = {
  github: 'https://github.com/backendbuilder',
  linkedin: 'https://www.linkedin.com/in/backendbuilder',
  twitter: 'https://x.com/backend_builder',
  medium: null as string | null,
}

/** Medium RSS feed username (feed URL: https://medium.com/feed/@mediumUsername) */
export const mediumUsername = 'backendbuilder'

/** LinkedIn articles: add manually when you publish (no API). */
export const linkedInArticles: Array<{
  title: string
  url: string
  publishedAt?: string
}> = []

export const nav = [
  { href: '/', name: 'home' },
  { href: '/blog', name: 'writing' },
]
