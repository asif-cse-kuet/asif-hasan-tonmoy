#!/usr/bin/env node
/** Dev-only helper: capture reference screenshots of the running dev server. */
import { mkdir } from 'node:fs/promises'
import { chromium, devices } from '@playwright/test'

const base = process.env.BASE_URL ?? 'http://127.0.0.1:5173'
const outDir = process.env.OUT_DIR ?? '.screenshots'

const shots = [
  { name: 'landing-desktop', path: '/', fullPage: true, mobile: false },
  { name: 'landing-mobile', path: '/', fullPage: true, mobile: true },
  { name: 'marketing', path: '/marketing', fullPage: true, mobile: false },
  { name: 'systems-hub', path: '/systems', fullPage: true, mobile: false },
  { name: 'problems-solved', path: '/problems/solved', fullPage: true, mobile: false },
  {
    name: 'article',
    path: '/systems/performance-capacity/amdahl-and-parallel-limits',
    fullPage: true,
    mobile: false,
  },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()

for (const shot of shots) {
  const context = await browser.newContext(
    shot.mobile ? devices['Pixel 7'] : { viewport: { width: 1440, height: 900 } },
  )
  const page = await context.newPage()
  await page.goto(`${base}${shot.path}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `${outDir}/${shot.name}.png`, fullPage: shot.fullPage })
  await context.close()
  console.log(`captured ${shot.name}`)
}

await browser.close()
