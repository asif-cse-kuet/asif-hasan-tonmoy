import type { LocaleText } from './types'

export type TechItem = {
  name: string
  /** simple-icons slug; null renders a monogram chip instead */
  icon: string | null
}

export type TechGroup = {
  id: string
  titles: LocaleText
  note?: LocaleText
  items: TechItem[]
}

/**
 * Presented as logos + names only - no self-assigned proficiency scores.
 */
export const TECH_GROUPS: TechGroup[] = [
  {
    id: 'languages',
    titles: { en: 'Languages', bn: 'ভাষা' },
    items: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'PHP', icon: 'php' },
      { name: 'C', icon: 'c' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'SQL', icon: null },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css' },
      { name: 'JS OOP', icon: null },
    ],
  },
  {
    id: 'frontend',
    titles: { en: 'Frontend', bn: 'ফ্রন্টএন্ড' },
    items: [
      { name: 'Vue 3', icon: 'vuedotjs' },
      { name: 'React', icon: 'react' },
      { name: 'Quasar', icon: 'quasar' },
      { name: 'Pinia', icon: 'pinia' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Axios', icon: 'axios' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Blade', icon: 'laravel' },
      { name: 'Chart.js', icon: 'chartdotjs' },
    ],
  },
  {
    id: 'backend',
    titles: { en: 'Backend & APIs', bn: 'ব্যাকএন্ড ও API' },
    items: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'PHP', icon: 'php' },
      { name: 'REST', icon: null },
      { name: 'Eloquent, Query Builder & SQL', icon: 'laravel' },
      { name: 'Auth & RBAC', icon: null },
      { name: 'Middleware', icon: null },
      { name: 'Queues & jobs', icon: null },
      { name: 'WebSockets', icon: null },
      { name: 'Webhooks', icon: null },
    ],
  },
  {
    id: 'data',
    titles: { en: 'Data & storage', bn: 'ডেটা ও স্টোরেজ' },
    items: [
      { name: 'RDBMS (MySQL, PostgreSQL)', icon: 'mysql' },
      { name: 'NoSQL (MongoDB)', icon: null },
      { name: 'Redis', icon: 'redis' },
      { name: 'Schema design', icon: null },
      { name: 'Query tuning', icon: null },
      { name: 'Migrations', icon: null },
    ],
  },
  {
    id: 'devops',
    titles: { en: 'DevOps & infrastructure', bn: 'ডেভঅপস ও ইনফ্রা' },
    items: [
      { name: 'AWS', icon: null },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'GitLab CI', icon: 'gitlab' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'CI/CD', icon: null },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    id: 'quality',
    titles: { en: 'Testing & craft', bn: 'টেস্টিং ও ক্রাফট' },
    items: [
      { name: 'Vitest', icon: 'vitest' },
      { name: 'Playwright', icon: null },
      { name: 'ESLint', icon: 'eslint' },
      { name: 'Code review', icon: null },
      { name: 'OOP & SOLID', icon: null },
      { name: 'Debugging', icon: null },
    ],
  },
]

/** Compact marquee row for the hero area — AI → backend → frontend → deploy → scale → observe. */
export const HERO_TECH: TechItem[] = [
  { name: 'AI tooling', icon: null },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'PHP', icon: 'php' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Vue 3', icon: 'vuedotjs' },
  { name: 'Quasar', icon: 'quasar' },
  { name: 'Pinia', icon: 'pinia' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Docker', icon: 'docker' },
  { name: 'CI/CD', icon: null },
  { name: 'Nginx', icon: 'nginx' },
  { name: 'Observability', icon: null },
]

const ICON_ALIASES: Record<string, string | null> = {
  vue: 'vuedotjs',
  'vue.js': 'vuedotjs',
  js: 'javascript',
  ts: 'typescript',
  'c / c++': 'cplusplus',
  node: 'nodedotjs',
  next: 'nextdotjs',
  'next.js': 'nextdotjs',
  nuxt: 'nuxt',
  nest: 'nestjs',
  nestjs: 'nestjs',
  express: 'express',
  axios: 'axios',
  fastapi: 'fastapi',
  spring: 'springboot',
  'spring boot': 'springboot',
  springboot: 'springboot',
  '.net': 'dotnet',
  dotnet: 'dotnet',
  pinecone: null,
  claude: 'anthropic',
  cursor: null,
  codex: null,
  antigravity: null,
  langchain: 'langchain',
  langgraph: null,
  llamaindex: null,
  html: 'html5',
  tailwind: 'tailwindcss',
  transformers: 'huggingface',
  banglabert: 'huggingface',
  kafka: 'apachekafka',
  oop: null,
  algorithms: null,
  rest: null,
  glut: 'opengl',
  localstorage: null,
  ajax: 'javascript',
  json: null,
  pinterest: 'pinterest',
  instagram: 'instagram',
  eloquent: 'laravel',
  'vue router': 'vuedotjs',
  mysql: 'mysql',
  redis: 'redis',
  nginx: 'nginx',
  docker: 'docker',
  gitlab: 'gitlab',
  vitest: 'vitest',
  playwright: null,
  websocket: null,
  websockets: null,
  seo: null,
  'content strategy': null,
}

const NAME_TO_ICON: Map<string, string | null> = (() => {
  const map = new Map<string, string | null>()
  for (const group of TECH_GROUPS) {
    for (const item of group.items) {
      map.set(item.name.toLowerCase(), item.icon)
    }
  }
  for (const [alias, slug] of Object.entries(ICON_ALIASES)) {
    if (!map.has(alias)) map.set(alias, slug)
  }
  return map
})()

/** Best-effort logo lookup for free-form stack strings on project cards. */
export function resolveTechIcon(name: string): string | null {
  const key = name.trim().toLowerCase()
  const exact = NAME_TO_ICON.get(key)
  if (exact !== undefined) return exact

  for (const [candidate, slug] of NAME_TO_ICON) {
    if (!slug || candidate.length < 4) continue
    if (key.startsWith(candidate) || candidate.startsWith(key)) return slug
  }
  return null
}

export const MARKETING_TECH_GROUPS: TechGroup[] = [
  {
    id: 'channels',
    titles: { en: 'Channels', bn: 'চ্যানেল' },
    items: [
      { name: 'Pinterest', icon: 'pinterest' },
      { name: 'Instagram', icon: 'instagram' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'TikTok', icon: 'tiktok' },
      { name: 'X', icon: 'x' },
      { name: 'LinkedIn', icon: null },
      { name: 'Email', icon: 'mailchimp' },
    ],
  },
  {
    id: 'platforms',
    titles: { en: 'Commerce & CMS', bn: 'কমার্স ও সিএমএস' },
    items: [
      { name: 'Shopify', icon: 'shopify' },
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'Wix', icon: 'wix' },
      { name: 'Kajabi', icon: null },
      { name: 'Amazon', icon: null },
      { name: 'eBay', icon: 'ebay' },
    ],
  },
  {
    id: 'analytics',
    titles: { en: 'Analytics & ops', bn: 'অ্যানালিটিকস ও অপস' },
    items: [
      { name: 'Google Analytics', icon: 'googleanalytics' },
      { name: 'Semrush', icon: 'semrush' },
      { name: 'Hootsuite', icon: 'hootsuite' },
      { name: 'Buffer', icon: 'buffer' },
      { name: 'Canva', icon: null },
      { name: 'Adobe Suite', icon: null },
    ],
  },
]
