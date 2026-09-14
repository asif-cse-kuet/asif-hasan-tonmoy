/** Portrait assets — flip `heroPortrait` to switch the landing hero back to the AI cutout. */
export const PORTRAITS = {
  heroPortrait: 'me' as 'me' | 'ai',
  hero: {
    me: '/images/profile/portrait-me1-formal.png?v=2',
    ai: '/images/profile/hero-ai.png?v=6',
  },
  avatars: {
    about: '/images/profile/avatars/avatar-about.png?v=1',
    services: '/images/profile/avatars/avatar-services.png?v=1',
    contact: '/images/profile/avatars/avatar-contact.png?v=1',
  },
  lifeIntro: '/images/profile/life-intro-me.png?v=1',
} as const

export function heroPortraitSrc() {
  return PORTRAITS.hero[PORTRAITS.heroPortrait]
}
