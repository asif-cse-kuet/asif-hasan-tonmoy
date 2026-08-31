import { describe, it, expect } from 'vitest'

import { CAPABILITIES, SERVICE_PITCHES } from '@/content/capabilities'
import { hasArticle } from '@/content/articles/loadArticle'
import { TOPIC_COUNT } from '@/content/catalog-stats'
import { DOMAINS, getTopicsByDomain } from '@/content/industry-topics'
import { TOPICS } from '@/content/industry-topics/topics'
import { PRIMARY_LINKS, PROFILE_LINKS, PROOF_METRICS } from '@/content/profile'
import { PROJECTS } from '@/content/projects'
import { SOLVED_PROBLEMS } from '@/content/solved-problems'
import { SYSTEM_CONCEPTS } from '@/content/systems'
import { MARKETING_TECH_GROUPS, TECH_GROUPS, resolveTechIcon } from '@/content/tech-stack'
import { getBrandIcon } from '@/lib/brandIcons'

describe('industry knowledge library', () => {
  it('has 13 domains', () => {
    expect(DOMAINS.length).toBe(13)
  })

  it('keeps homepage topic count in sync with the catalog', () => {
    expect(TOPIC_COUNT).toBe(TOPICS.length)
  })

  it('has no duplicate topic slugs', () => {
    const slugs = TOPICS.map((topic) => topic.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('assigns every topic to a known domain', () => {
    const domainSlugs = new Set(DOMAINS.map((domain) => domain.slug))
    for (const topic of TOPICS) {
      expect(domainSlugs.has(topic.domain)).toBe(true)
    }
  })

  it('gives every domain at least one topic', () => {
    for (const domain of DOMAINS) {
      expect(getTopicsByDomain(domain.slug).length).toBeGreaterThan(0)
    }
  })

  it('keeps topic copy bilingual', () => {
    for (const topic of TOPICS) {
      expect(topic.titles.en.length).toBeGreaterThan(0)
      expect(topic.titles.bn.length).toBeGreaterThan(0)
      expect(topic.summary.en.length).toBeGreaterThan(0)
      expect(topic.summary.bn.length).toBeGreaterThan(0)
    }
  })

  it('maps a beginner track of foundation lessons', () => {
    expect(TOPICS.filter((topic) => topic.difficulty === 'intro').length).toBeGreaterThanOrEqual(20)
    expect(TOPICS[0]?.difficulty).toBe('intro')
  })

  it('numbers every topic on a beginner to advanced path', () => {
    expect(TOPICS.map((topic) => topic.lesson)).toEqual(
      Array.from({ length: TOPICS.length }, (_, index) => index + 1),
    )
    const rank = { intro: 0, intermediate: 1, advanced: 2 }
    for (let index = 1; index < TOPICS.length; index += 1) {
      const prev = TOPICS[index - 1]
      const current = TOPICS[index]
      if (!prev || !current) continue
      expect(rank[current.difficulty]).toBeGreaterThanOrEqual(rank[prev.difficulty])
    }
  })

  it('points systemsLinks at real concepts', () => {
    const conceptSlugs = new Set(SYSTEM_CONCEPTS.map((concept) => concept.slug))
    for (const topic of TOPICS) {
      for (const link of topic.systemsLinks) {
        expect(conceptSlugs.has(link)).toBe(true)
      }
    }
  })

  it('ships English and Bengali articles for every topic', () => {
    for (const topic of TOPICS) {
      expect(hasArticle(topic.slug, 'en'), topic.slug).toBe(true)
      expect(hasArticle(topic.slug, 'bn'), topic.slug).toBe(true)
    }
  })
})

describe('profile content', () => {
  it('has at least 10 solved problems', () => {
    expect(SOLVED_PROBLEMS.length).toBeGreaterThanOrEqual(10)
  })

  it('exposes coding platform links in the hero strip', () => {
    const labels = PRIMARY_LINKS.map((link) => link.label)
    for (const expected of ['GitHub', 'Codeforces', 'LeetCode', 'HackerRank']) {
      expect(labels).toContain(expected)
    }
  })

  it('uses absolute or mailto urls for every profile link', () => {
    for (const link of PROFILE_LINKS) {
      expect(link.url).toMatch(/^(https:\/\/|mailto:)/)
    }
  })

  it('has proof metrics and featured projects', () => {
    expect(PROOF_METRICS.length).toBeGreaterThanOrEqual(6)
    expect(PROJECTS.some((project) => project.featured)).toBe(true)
  })

  it('lists SupportPro with GitHub repos and business-value highlights', () => {
    const supportPro = PROJECTS.find((project) => project.slug === 'ticketing-system')
    expect(supportPro).toBeDefined()
    expect(supportPro!.featured).toBe(true)
    expect(supportPro!.highlights?.length).toBeGreaterThanOrEqual(7)
    expect(supportPro!.links.map((link) => link.url)).toEqual(
      expect.arrayContaining([
        'https://ticketing-system-fe-aht4.vercel.app/',
        'https://github.com/asif-cse-kuet/Ticketing_System_FE',
        'https://github.com/asif-cse-kuet/Ticketing_System_BE',
      ]),
    )
    const blob = supportPro!.highlights!.map((h) => h.en).join(' ')
    for (const role of ['Superadmin', 'Admin', 'Agents', 'Customer']) {
      expect(blob).toContain(role)
    }
  })
})

describe('tech stack presentation', () => {
  it('lists no proficiency ratings, only names and icons', () => {
    for (const group of [...TECH_GROUPS, ...MARKETING_TECH_GROUPS]) {
      expect(group.items.length).toBeGreaterThan(0)
      for (const item of group.items) {
        expect(Object.keys(item).sort()).toEqual(['icon', 'name'])
      }
    }
  })

  it('resolves every declared icon slug to real path data', () => {
    for (const group of [...TECH_GROUPS, ...MARKETING_TECH_GROUPS]) {
      for (const item of group.items) {
        if (!item.icon) continue
        expect(getBrandIcon(item.icon), `${item.name} -> ${item.icon}`).toBeDefined()
      }
    }
  })

  it('resolves free-form stack strings used by project cards', () => {
    expect(resolveTechIcon('Vue 3')).toBe('vuedotjs')
    expect(resolveTechIcon('Laravel')).toBe('laravel')
    expect(resolveTechIcon('Totally Unknown Thing')).toBeNull()
  })
})

describe('capabilities', () => {
  it('covers five practice areas with keyword clusters', () => {
    expect(CAPABILITIES.length).toBe(5)
    for (const capability of CAPABILITIES) {
      expect(capability.clusters.length).toBeGreaterThanOrEqual(2)
      for (const cluster of capability.clusters) {
        expect(cluster.items.length).toBeGreaterThanOrEqual(5)
      }
    }
  })

  it('frames services as build / improve / grow', () => {
    expect(SERVICE_PITCHES.map((pitch) => pitch.id)).toEqual(['build', 'improve', 'grow'])
  })
})
