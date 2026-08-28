#!/usr/bin/env node
/**
 * Builds public/sitemap.xml from the content modules.
 *
 * The content lives in TypeScript files, so instead of compiling them we read the
 * `slug` / `domain` literals in declaration order. Every topic object declares
 * `id`, `slug`, then `domain`, so zipping the two lists per file is stable.
 */
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = process.env.SITE_URL ?? 'https://asifhasantonmoy.com'

function matchAll(source, pattern) {
  return [...source.matchAll(pattern)].map((match) => match[1])
}

async function readTopicRoutes() {
  const dir = join(root, 'src/content/industry-topics/topics')
  const files = (await readdir(dir)).filter((file) => file.endsWith('.ts'))
  const routes = new Set()

  for (const file of files) {
    const source = await readFile(join(dir, file), 'utf8')
    const slugs = matchAll(source, /^\s*slug: '([a-z0-9-]+)'/gm)
    const domains = matchAll(source, /^\s*domain: '([a-z0-9-]+)'/gm)

    slugs.forEach((slug, index) => {
      const domain = domains[index]
      if (domain) routes.add(`/systems/${domain}/${slug}`)
    })
    domains.forEach((domain) => routes.add(`/systems/${domain}`))
  }

  return [...routes]
}

async function readSolvedRoutes() {
  const source = await readFile(join(root, 'src/content/solved-problems/index.ts'), 'utf8')
  return matchAll(source, /^\s*slug: '([a-z0-9-]+)'/gm).map((slug) => `/problems/solved/${slug}`)
}

async function readConceptRoutes() {
  const source = await readFile(join(root, 'src/content/systems/index.ts'), 'utf8')
  return matchAll(source, /^\s*slug: '([a-z0-9-]+)'/gm).map((slug) => `/systems/concepts/${slug}`)
}

const staticRoutes = ['/', '/life', '/marketing', '/problems/solved', '/systems']

const routes = [
  ...staticRoutes,
  ...(await readSolvedRoutes()),
  ...(await readConceptRoutes()),
  ...(await readTopicRoutes()),
]

const today = new Date().toISOString().slice(0, 10)

const body = [...new Set(routes)]
  .sort()
  .map((route) => {
    const priority = route === '/' ? '1.0' : route.split('/').length <= 2 ? '0.8' : '0.6'
    return `  <url>\n    <loc>${SITE}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

await writeFile(join(root, 'public/sitemap.xml'), xml)
console.log(`sitemap: ${new Set(routes).size} urls`)
