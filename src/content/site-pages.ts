import type { LocaleText } from './types'

export type SitePage = {
  to: string
  label: LocaleText
}

/** Top-level pages only — section hashes stay on the landing page itself. */
export const SITE_PAGES: SitePage[] = [
  { to: '/', label: { en: 'Home', bn: 'হোম' } },
  { to: '/problems/solved', label: { en: 'Problems solved', bn: 'সমাধান করা সমস্যা' } },
  { to: '/systems', label: { en: 'My Engineering Blog', bn: 'ইঞ্জিনিয়ারিং ব্লগ' } },
  { to: '/marketing', label: { en: 'Software to business', bn: 'সফটওয়্যার থেকে ব্যবসা' } },
  { to: '/life', label: { en: 'Life & travel', bn: 'জীবন ও ভ্রমণ' } },
]

export function isSitePageActive(path: string, to: string) {
  if (to === '/') return path === '/'
  return path === to || path.startsWith(`${to}/`)
}
