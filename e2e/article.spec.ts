import { test, expect } from '@playwright/test'

const ARTICLE = '/systems/performance-capacity/amdahl-and-parallel-limits'

test('article renders prose, code blocks, and Mermaid diagrams', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })

  await page.goto(ARTICLE)

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  const article = page.locator('.prose-article')
  await expect(article).toBeVisible()
  await expect(article.locator('h2').first()).toBeVisible()
  await expect(article.locator('pre code').first()).toBeVisible()
  await expect(article.locator('table').first()).toBeVisible()

  const diagrams = page.locator('.mermaid-host')
  expect(await diagrams.count()).toBeGreaterThan(0)
  await expect(diagrams.first().locator('svg')).toBeVisible({ timeout: 20000 })

  expect(errors, `console errors: ${errors.join(' | ')}`).toEqual([])
})

test('article language switch loads the Bengali version', async ({ page }) => {
  await page.goto(ARTICLE)

  const english = (await page.locator('.prose-article').innerText()).slice(0, 400)

  await page.getByRole('button', { name: 'বাংলা' }).click()
  await expect(page.locator('.prose-article')).toBeVisible()

  const bengali = (await page.locator('.prose-article').innerText()).slice(0, 400)
  expect(bengali).not.toEqual(english)
  expect(bengali).toMatch(/[\u0980-\u09FF]/)
})

test('topic pages link back up the hierarchy', async ({ page }) => {
  await page.goto(ARTICLE)

  await page.getByRole('link', { name: /Performance|পারফরম/ }).first().click()
  await expect(page).toHaveURL(/\/systems\/performance-capacity$/)

  await page.getByRole('link', { name: /System design guide|সিস্টেম ডিজাইন গাইড/ }).first().click()
  await expect(page).toHaveURL(/\/systems$/)
})
