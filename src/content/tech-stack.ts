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
 * Presented as logos + names only — no self-assigned proficiency scores.
 */
export const TECH_GROUPS: TechGroup[] = [
  {
    id: 'languages',
    titles: { en: 'Languages', bn: 'ভাষা' },
    items: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'PHP', icon: 'php' },
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'C', icon: 'c' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'C#', icon: null },
      { name: 'SQL', icon: null },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Bash', icon: 'gnubash' },
    ],
  },
  {
    id: 'frontend',
    titles: { en: 'Frontend', bn: 'ফ্রন্টএন্ড' },
    items: [
      { name: 'Vue 3', icon: 'vuedotjs' },
      { name: 'Quasar', icon: 'quasar' },
      { name: 'Pinia', icon: 'pinia' },
      { name: 'Vite', icon: 'vite' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Chart.js', icon: 'chartdotjs' },
      { name: 'Blade', icon: 'laravel' },
      { name: 'Micro-packaging', icon: null },
      { name: 'Design systems', icon: null },
      { name: 'Figma → code', icon: 'figma' },
    ],
  },
  {
    id: 'backend',
    titles: { en: 'Backend & APIs', bn: 'ব্যাকএন্ড ও API' },
    items: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'REST', icon: null },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'OpenAPI', icon: 'swagger' },
      { name: 'Auth & RBAC', icon: null },
      { name: 'Middleware', icon: null },
      { name: 'WebSockets', icon: null },
      { name: 'Gmail API', icon: null },
      { name: 'Stripe', icon: 'stripe' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
  {
    id: 'data',
    titles: { en: 'Data & storage', bn: 'ডেটা ও স্টোরেজ' },
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Oracle', icon: null },
      { name: 'Elasticsearch', icon: 'elasticsearch' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Schema design', icon: null },
      { name: 'Query tuning', icon: null },
    ],
  },
  {
    id: 'devops',
    titles: { en: 'DevOps & infrastructure', bn: 'ডেভঅপস ও ইনফ্রা' },
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Apache', icon: 'apache' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Ubuntu', icon: 'ubuntu' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'GitLab', icon: 'gitlab' },
      { name: 'CI/CD', icon: null },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Cloudflare', icon: 'cloudflare' },
      { name: 'AWS', icon: null },
      { name: 'Azure', icon: null },
    ],
  },
  {
    id: 'observability',
    titles: { en: 'Observability & reliability', bn: 'পর্যবেক্ষণ ও নির্ভরযোগ্যতা' },
    items: [
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'Structured logging', icon: null },
      { name: 'Distributed tracing', icon: null },
      { name: 'Metrics & dashboards', icon: null },
      { name: 'SLI / SLO', icon: null },
      { name: 'Error budgets', icon: null },
      { name: 'Golden signals', icon: null },
      { name: 'Health checks', icon: null },
      { name: 'Alerting', icon: null },
    ],
  },
  {
    id: 'architecture',
    titles: { en: 'Architecture & distributed systems', bn: 'আর্কিটেকচার ও ডিস্ট্রিবিউটেড সিস্টেম' },
    items: [
      { name: 'CAP / PACELC', icon: null },
      { name: 'Consistent hashing', icon: null },
      { name: 'Sharding', icon: null },
      { name: 'Caching / CDN', icon: null },
      { name: 'Idempotency', icon: null },
      { name: 'Circuit breakers', icon: null },
      { name: 'Backpressure', icon: null },
      { name: 'CQRS / event sourcing', icon: null },
      { name: 'Saga / outbox', icon: null },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
      { name: 'Kafka', icon: 'apachekafka' },
      { name: 'Multi-region', icon: null },
      { name: "Little's Law", icon: null },
      { name: 'OSI / TCP / UDP', icon: null },
    ],
  },
  {
    id: 'ai',
    titles: { en: 'AI engineering', bn: 'এআই ইঞ্জিনিয়ারিং' },
    items: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Hugging Face', icon: 'huggingface' },
      { name: 'Transformers', icon: null },
      { name: 'BanglaBERT', icon: null },
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'RAG', icon: null },
      { name: 'Agentic RAG', icon: null },
      { name: 'Vector DBs', icon: null },
      { name: 'Embeddings', icon: null },
      { name: 'Rerankers', icon: null },
      { name: 'Evals & guardrails', icon: null },
      { name: 'Gemini', icon: 'googlegemini' },
      { name: 'OpenAI', icon: null },
      { name: 'Ollama', icon: 'ollama' },
    ],
  },
  {
    id: 'quality',
    titles: { en: 'Testing & quality', bn: 'টেস্টিং ও কোয়ালিটি' },
    items: [
      { name: 'Vitest', icon: 'vitest' },
      { name: 'Playwright', icon: null },
      { name: 'ESLint', icon: 'eslint' },
      { name: 'Prettier', icon: 'prettier' },
      { name: 'npm', icon: 'npm' },
      { name: 'Code review', icon: null },
      { name: 'Edge-case analysis', icon: null },
      { name: 'Debugging', icon: null },
      { name: 'Markdown docs', icon: 'markdown' },
    ],
  },
  {
    id: 'collab',
    titles: { en: 'Process & collaboration', bn: 'প্রসেস ও সহযোগিতা' },
    items: [
      { name: 'Agile / Scrum', icon: null },
      { name: 'Kanban', icon: null },
      { name: 'Jira', icon: 'jira' },
      { name: 'Trello', icon: 'trello' },
      { name: 'Asana', icon: 'asana' },
      { name: 'Monday.com', icon: null },
      { name: 'Slack', icon: null },
      { name: 'Notion', icon: 'notion' },
      { name: 'Google Workspace', icon: null },
      { name: 'SDLC', icon: null },
    ],
  },
  {
    id: 'graphics',
    titles: { en: 'Graphics & extras', bn: 'গ্রাফিকস ও অন্যান্য' },
    items: [
      { name: 'OpenGL / GLUT', icon: 'opengl' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Canva', icon: null },
      { name: 'Photoshop', icon: null },
      { name: 'Illustrator', icon: null },
      { name: 'Android (Java)', icon: null },
      { name: 'IoT sensors', icon: null },
    ],
  },
]

/** Compact marquee row for the hero area. */
export const HERO_TECH: TechItem[] = [
  { name: 'Vue 3', icon: 'vuedotjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Python', icon: 'python' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'Nginx', icon: 'nginx' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'Hugging Face', icon: 'huggingface' },
  { name: 'Kafka', icon: 'apachekafka' },
  { name: 'Grafana', icon: 'grafana' },
  { name: 'C++', icon: 'cplusplus' },
]

const ICON_ALIASES: Record<string, string | null> = {
  vue: 'vuedotjs',
  'vue.js': 'vuedotjs',
  js: 'javascript',
  ts: 'typescript',
  'c / c++': 'cplusplus',
  node: 'nodedotjs',
  html: 'html5',
  tailwind: 'tailwindcss',
  transformers: 'huggingface',
  banglabert: 'huggingface',
  kafka: 'apachekafka',
  '.net': null,
  oop: null,
  algorithms: null,
  rest: null,
  glut: 'opengl',
  localstorage: null,
  ajax: 'javascript',
  json: null,
  pinterest: 'pinterest',
  instagram: 'instagram',
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
