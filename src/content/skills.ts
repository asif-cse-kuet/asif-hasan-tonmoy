import type { LocaleText, Proficiency } from './types'

export type SkillCategory = {
  id: string
  titles: LocaleText
  skills: SkillEntry[]
}

export type SkillEntry = {
  name: string
  proficiency: Proficiency
  note?: LocaleText
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    titles: { en: 'Languages', bn: 'ভাষা' },
    skills: [
      { name: 'JavaScript', proficiency: 'expert' },
      { name: 'TypeScript', proficiency: 'strong' },
      { name: 'PHP', proficiency: 'strong' },
      { name: 'Python', proficiency: 'strong' },
      { name: 'C / C++', proficiency: 'strong' },
      { name: 'Java', proficiency: 'working' },
      { name: 'C#', proficiency: 'working' },
      { name: 'SQL', proficiency: 'strong' },
      { name: 'HTML5 / CSS3', proficiency: 'expert' },
      { name: 'Bash', proficiency: 'familiar' },
    ],
  },
  {
    id: 'frontend',
    titles: { en: 'Frontend', bn: 'ফ্রন্টএন্ড' },
    skills: [
      { name: 'Vue 3', proficiency: 'expert' },
      { name: 'Quasar', proficiency: 'expert' },
      { name: 'Pinia', proficiency: 'expert' },
      { name: 'Vite', proficiency: 'strong' },
      { name: 'React', proficiency: 'working' },
      { name: 'Tailwind CSS', proficiency: 'strong' },
      { name: 'Bootstrap', proficiency: 'working' },
      { name: 'Chart.js', proficiency: 'working' },
      {
        name: 'Micro-packaging / modular FE',
        proficiency: 'expert',
        note: {
          en: 'Decoupled modules for low-code R&D at Proficient IS',
          bn: 'Proficient IS-এ লো-কোড R&D-র জন্য ডিকপ্লড মডিউল',
        },
      },
    ],
  },
  {
    id: 'backend',
    titles: { en: 'Backend', bn: 'ব্যাকএন্ড' },
    skills: [
      { name: 'Laravel', proficiency: 'strong' },
      { name: 'REST API design', proficiency: 'strong' },
      { name: 'Auth & RBAC', proficiency: 'expert' },
      { name: 'Middleware & validation', proficiency: 'strong' },
      { name: 'Gmail API / email scheduling', proficiency: 'working' },
      { name: 'File uploads & CRUD', proficiency: 'strong' },
    ],
  },
  {
    id: 'data',
    titles: { en: 'Data & storage', bn: 'ডেটা ও স্টোরেজ' },
    skills: [
      { name: 'MySQL', proficiency: 'strong' },
      { name: 'PostgreSQL', proficiency: 'working' },
      { name: 'Oracle', proficiency: 'familiar' },
      { name: 'Schema design', proficiency: 'strong' },
      { name: 'Query optimization', proficiency: 'strong' },
      { name: 'Indexing strategy', proficiency: 'working' },
    ],
  },
  {
    id: 'realtime',
    titles: { en: 'Realtime systems', bn: 'রিয়েলটাইম সিস্টেম' },
    skills: [
      { name: 'Chat (read/unread/favorites)', proficiency: 'expert' },
      { name: 'WebSocket patterns', proficiency: 'working' },
      { name: 'Presence & state sync', proficiency: 'working' },
    ],
  },
  {
    id: 'devops',
    titles: { en: 'DevOps & platforms', bn: 'ডেভঅপস ও প্ল্যাটফর্ম' },
    skills: [
      { name: 'Docker', proficiency: 'strong' },
      { name: 'Kubernetes', proficiency: 'working' },
      { name: 'nginx / Apache', proficiency: 'working' },
      { name: 'CI/CD (GitHub / GitLab)', proficiency: 'strong' },
      { name: 'Linux', proficiency: 'working' },
      { name: 'Git', proficiency: 'expert' },
    ],
  },
  {
    id: 'networking',
    titles: { en: 'Networking', bn: 'নেটওয়ার্কিং' },
    skills: [
      { name: 'HTTP / REST semantics', proficiency: 'strong' },
      { name: 'TCP/IP fundamentals', proficiency: 'working' },
      { name: 'TLS & reverse proxies', proficiency: 'working' },
    ],
  },
  {
    id: 'architecture',
    titles: { en: 'Architecture & distributed systems', bn: 'আর্কিটেকচার ও বিতরণকৃত সিস্টেম' },
    skills: [
      { name: 'CAP / PACELC tradeoffs', proficiency: 'strong' },
      { name: 'Idempotency & retries', proficiency: 'strong' },
      { name: 'Circuit breakers & bulkheads', proficiency: 'working' },
      { name: 'Caching & CDN strategy', proficiency: 'working' },
      { name: 'Saga / outbox patterns', proficiency: 'working' },
      { name: 'Micro-frontends & bounded contexts', proficiency: 'strong' },
    ],
  },
  {
    id: 'observability',
    titles: { en: 'Observability', bn: 'পর্যবেক্ষণযোগ্যতা' },
    skills: [
      { name: 'Logging & structured logs', proficiency: 'working' },
      { name: 'Metrics & dashboards', proficiency: 'working' },
      { name: 'Distributed tracing', proficiency: 'familiar' },
      { name: 'SLI / SLO / error budgets', proficiency: 'working' },
      { name: 'Golden signals', proficiency: 'working' },
    ],
  },
  {
    id: 'ai',
    titles: { en: 'AI & ML engineering', bn: 'এআই ও ML ইঞ্জিনিয়ারিং' },
    skills: [
      { name: 'Transformers / Bangla NLP', proficiency: 'strong' },
      { name: 'Imbalanced classification', proficiency: 'strong' },
      { name: 'RAG pipelines', proficiency: 'working' },
      { name: 'Agentic RAG & tool calling', proficiency: 'working' },
      { name: 'Vector DBs (Pinecone / pgvector)', proficiency: 'working' },
      { name: 'Evals & guardrails', proficiency: 'working' },
      { name: 'Prompt injection awareness', proficiency: 'working' },
    ],
  },
  {
    id: 'quality',
    titles: { en: 'Quality & debugging', bn: 'গুণমান ও ডিবাগিং' },
    skills: [
      { name: 'Production debugging', proficiency: 'expert' },
      { name: 'Vitest / Playwright', proficiency: 'working' },
      { name: 'Edge-case thinking', proficiency: 'strong' },
    ],
  },
  {
    id: 'growth',
    titles: { en: 'Growth & marketing', bn: 'গ্রোথ ও মার্কেটিং' },
    skills: [
      { name: 'SEO / SEM', proficiency: 'strong' },
      { name: 'Content & social strategy', proficiency: 'expert' },
      { name: 'Paid / organic funnels', proficiency: 'strong' },
      { name: 'Pinterest / Instagram growth', proficiency: 'expert' },
      { name: 'Shopify / WordPress', proficiency: 'working' },
      { name: 'Canva / Adobe creative', proficiency: 'working' },
    ],
  },
  {
    id: 'collaboration',
    titles: { en: 'PM & collaboration', bn: 'PM ও সহযোগিতা' },
    skills: [
      { name: 'Agile / Scrum', proficiency: 'strong' },
      { name: 'Jira / Asana / Monday', proficiency: 'working' },
      { name: 'Figma design-to-code', proficiency: 'working' },
      { name: 'Technical mentoring', proficiency: 'strong' },
    ],
  },
]
