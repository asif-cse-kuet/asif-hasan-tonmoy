import { test, expect } from '@playwright/test'

test('landing page carries the full profile', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Asif Hasan Tonmoy')

  for (const id of [
    'proof',
    'expertise',
    'stack',
    'projects',
    'experience',
    'research',
    'coding',
    'deep-dives',
    'services',
    'about',
    'contact',
  ]) {
    await expect(page.locator(`#${id}`)).toBeAttached()
  }
})

test('coding platform links appear near the top with handles', async ({ page }) => {
  await page.goto('/')
  const strip = page.getByLabel('Profiles and coding platforms')
  await expect(strip).toBeVisible()
  for (const name of ['GitHub', 'Codeforces', 'LeetCode', 'HackerRank', 'Upwork']) {
    await expect(strip.getByRole('link', { name: new RegExp(name) })).toBeVisible()
  }
})

test('portfolio section lists projects and filters', async ({ page }) => {
  await page.goto('/#projects')
  const section = page.locator('#projects')
  await expect(section.getByRole('heading', { level: 2 })).toBeVisible()
  await expect(section.locator('article').first()).toBeVisible()
  await section.getByRole('button', { name: /All|সব/ }).click()
  await expect(section.locator('article')).toHaveCount(20)
})

test('the three dedicated pages render', async ({ page }) => {
  for (const path of ['/marketing', '/problems/solved', '/systems']) {
    await page.goto(path)
    await expect(page.locator('#main-content')).toBeVisible()
    await expect(page.getByRole('contentinfo')).toBeVisible()
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  }
})

test('legacy routes redirect into the new structure', async ({ page }) => {
  await page.goto('/engineering')
  await expect(page).toHaveURL(/\/#expertise$/)

  await page.goto('/problems/industry')
  await expect(page).toHaveURL(/\/systems$/)
})

test('solved problem detail deep-links', async ({ page }) => {
  await page.goto('/problems/solved')
  const first = page.locator('a[href^="/problems/solved/"]').first()
  await expect(first).toBeVisible()
  await first.click()
  await expect(page).toHaveURL(/\/problems\/solved\/.+/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('engineering blog tree lists domains', async ({ page }) => {
  await page.goto('/systems')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/Engineering Blog|ইঞ্জিনিয়ারিং ব্লগ/)
  await expect(page.getByLabel('Engineering blog topics')).toBeVisible()
})

test('single header nav, no second section strip', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible()
  await expect(page.getByLabel('Page sections')).toHaveCount(0)
  await expect(page.getByRole('link', { name: /My Engineering Blog|ইঞ্জিনিয়ারিং ব্লগ/ }).first()).toBeVisible()
  await expect(page.getByRole('link', { name: /Software to business|সফটওয়্যার থেকে ব্যবসা/ }).first()).toBeVisible()
})

test('language toggle switches to Bengali', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: /BN|বাংলা/ }).first().click()
  await expect(page.locator('body')).toContainText('ইঞ্জিনিয়ার')
})
