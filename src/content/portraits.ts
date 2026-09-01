/** Portrait assets — flip `heroPortrait` to switch the landing hero back to the AI cutout. */
export const PORTRAITS = {
  heroPortrait: 'ai' as 'me' | 'ai',
  hero: {
    me: '/images/profile/hero-me.png?v=1',
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
