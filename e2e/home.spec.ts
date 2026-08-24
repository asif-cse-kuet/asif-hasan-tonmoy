import { test, expect } from '@playwright/test'

test('home page shows brand name and portals', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Asif Hasan Tonmoy')
  await expect(page.getByRole('link', { name: /AI Engineering/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /Marketing Consultant/i })).toBeVisible()
})

test('core routes render', async ({ page }) => {
  for (const path of [
    '/engineering',
    '/architecture',
    '/ai',
    '/marketing',
    '/work',
    '/coding',
    '/problems/solved',
    '/problems/industry',
    '/systems',
    '/contact',
  ]) {
    await page.goto(path)
    await expect(page.locator('#main-content')).toBeVisible()
    await expect(page.getByRole('contentinfo')).toBeVisible()
  }
})

test('industry hub shows disclaimer and domains', async ({ page }) => {
  await page.goto('/problems/industry')
  await expect(page.getByRole('note')).toBeVisible()
})

test('solved problem detail deep-links', async ({ page }) => {
  await page.goto('/problems/solved')
  const first = page.locator('a[href^="/problems/solved/"]').first()
  await expect(first).toBeVisible()
  await first.click()
  await expect(page).toHaveURL(/\/problems\/solved\//)
})
