import { test, expect, type Page } from '@playwright/test'

const PAGES = ['/', '/marketing', '/problems/solved', '/systems']

async function horizontalOverflow(page: Page) {
  return page.evaluate(() => {
    const doc = document.documentElement
    return {
      overflowBy: doc.scrollWidth - window.innerWidth,
      culprits: [...document.querySelectorAll<HTMLElement>('body *')]
        .filter((el) => el.getBoundingClientRect().right > window.innerWidth + 1)
        .slice(0, 5)
        .map((el) => `${el.tagName.toLowerCase()}.${el.className}`.slice(0, 120)),
    }
  })
}

for (const path of PAGES) {
  test(`no horizontal overflow on ${path}`, async ({ page }) => {
    await page.goto(path)
    await expect(page.getByRole('contentinfo')).toBeVisible()
    const { overflowBy, culprits } = await horizontalOverflow(page)
    expect(overflowBy, `overflowing elements: ${culprits.join(' | ')}`).toBeLessThanOrEqual(1)
  })
}

test('mobile menu opens and links are large enough to tap', async ({ page }) => {
  await page.goto('/')

  const toggle = page.getByRole('button', { name: /Menu|মেনু/i })
  await expect(toggle).toBeVisible()
  await toggle.click()

  const nav = page.locator('#mobile-nav')
  await expect(nav).toBeVisible()

  const links = nav.getByRole('link')
  const count = await links.count()
  expect(count).toBeGreaterThanOrEqual(6)

  for (let index = 0; index < count; index += 1) {
    const box = await links.nth(index).boundingBox()
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(36)
  }
})

test('body copy stays readable at mobile sizes', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('contentinfo')).toBeVisible()

  const tooSmall = await page.evaluate(() => {
    const offenders: string[] = []
    for (const el of document.querySelectorAll<HTMLElement>('p, li, dd, dt, a, span, h1, h2, h3')) {
      if (!el.textContent?.trim()) continue
      if (el.getBoundingClientRect().height === 0) continue
      // Decorative logo substitutes are aria-hidden and read as marks, not copy.
      if (el.closest('[aria-hidden="true"]')) continue
      const size = Number.parseFloat(getComputedStyle(el).fontSize)
      if (size < 12) {
        offenders.push(`${el.tagName.toLowerCase()} ${size}px "${el.textContent.trim().slice(0, 30)}"`)
      }
    }
    return offenders.slice(0, 8)
  })

  expect(tooSmall).toEqual([])
})

test('mobile menu is the only extra nav', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Page sections')).toHaveCount(0)
  const toggle = page.getByRole('button', { name: /Menu|মেনু/i })
  await expect(toggle).toBeVisible()
})

test('article pages keep diagrams and code blocks inside the viewport', async ({ page }) => {
  await page.goto('/systems/performance-capacity/amdahl-and-parallel-limits')

  const article = page.locator('.prose-article')
  await expect(article).toBeVisible()
  await expect(page.locator('.mermaid-host svg').first()).toBeVisible({ timeout: 20000 })

  const { overflowBy, culprits } = await horizontalOverflow(page)
  expect(overflowBy, `overflowing elements: ${culprits.join(' | ')}`).toBeLessThanOrEqual(1)
})
