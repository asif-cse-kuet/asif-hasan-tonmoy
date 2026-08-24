import type { Locale } from '@/content/types'

const articleLoaders = import.meta.glob<string>('./industry/*.md', {
  query: '?raw',
  import: 'default',
})

export async function loadArticle(slug: string, locale: Locale): Promise<string | null> {
  const key = `./industry/${slug}.${locale}.md`
  const loader = articleLoaders[key]
  if (!loader) return null
  return loader()
}

export function hasArticle(slug: string, locale: Locale): boolean {
  return Boolean(articleLoaders[`./industry/${slug}.${locale}.md`])
}
