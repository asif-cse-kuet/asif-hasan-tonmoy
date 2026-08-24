# Asif Hasan Tonmoy - Portfolio

Vue 3 personal site: Fullstack AI Engineer · System / Software Architect · Marketing Consultant.

## Stack

Vue 3 · Vite · TypeScript · Vue Router · Pinia · Tailwind CSS v4 · vue-i18n (EN/BN) ·
marked + Mermaid for articles · simple-icons for brand logos · Vitest · Playwright

Frontend-only, no backend. All content lives in `src/content/` (typed TS modules plus
markdown articles).

## Information architecture

The landing page carries the whole profile as one scrollable document. Only three
subjects get their own pages, because they keep growing:

| Route | Purpose |
| --- | --- |
| `/` | Hero, coding profiles, proof metrics, expertise, tech stack, portfolio, experience timeline, research, competitive programming, services, about, contact |
| `/marketing` | Marketing consultancy with its own timeline, channel stack, and campaign proof |
| `/problems/solved` | Critical problems solved first-hand, with detail pages |
| `/systems` | Engineering systems & system design guide - 15 domains, bilingual topic articles, core concept atlas |

Old standalone routes (`/engineering`, `/about`, `/coding`, `/problems/industry`, …)
redirect into the new structure.

## Scripts

```bash
npm install --legacy-peer-deps
npm run dev
npm run lint
npm run type-check
npm run test:unit -- --run
npm run test:e2e
npm run build          # regenerates public/sitemap.xml, then type-checks and builds
```

## Adding knowledge-library content

1. Add topics to `src/content/industry-topics/topics/<domain>.ts` - each file
   default-exports an `IndustryTopic[]` and is picked up automatically.
2. Write `src/content/articles/industry/<slug>.en.md` and `<slug>.bn.md` following
   `src/content/articles/AUTHORING.md`.
3. Run `npm run sitemap` (or `npm run build`) to refresh `public/sitemap.xml`.

Articles support GitHub-flavoured markdown, fenced code blocks, and ` ```mermaid `
diagrams rendered client-side.
