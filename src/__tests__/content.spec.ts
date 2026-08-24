import { describe, it, expect } from 'vitest'

import { DOMAINS } from '@/content/industry-topics'
import { TOPICS } from '@/content/industry-topics/topics'
import { SOLVED_PROBLEMS } from '@/content/solved-problems'

describe('content modules', () => {
  it('has expected industry topic count', () => {
    expect(TOPICS.length).toBeGreaterThanOrEqual(15)
    expect(TOPICS.length).toBeLessThanOrEqual(25)
  })

  it('has 15 industry domains', () => {
    expect(DOMAINS.length).toBe(15)
  })

  it('has at least 10 solved problems', () => {
    expect(SOLVED_PROBLEMS.length).toBeGreaterThanOrEqual(10)
  })
})
