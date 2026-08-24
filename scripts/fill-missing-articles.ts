import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { TOPICS } from '../src/content/industry-topics/topics'
import type { IndustryTopic } from '../src/content/industry-topics/topic-types'
import type { Locale } from '../src/content/types'
import { difficultyBn, difficultyEn, kitFor } from './article-kits'

const dir = join(dirname(fileURLToPath(import.meta.url)), '../src/content/articles/industry')
const TEMPLATE_MARKERS = ['submitOrder(payload: OrderDraft', 'OrderDraft, key: string']

function isTemplate(file: string) {
  if (!existsSync(file)) return true
  const body = readFileSync(file, 'utf8')
  if (TEMPLATE_MARKERS.some((marker) => body.includes(marker))) return true
  if (process.env.FORCE_ARTICLES === '1') {
    return body.includes('This lesson is specifically about') || body.includes('এই পাঠটা ঠিক')
  }
  return false
}

function padLesson(topic: IndustryTopic) {
  return String(topic.lesson ?? 0).padStart(2, '0')
}

function renderEn(topic: IndustryTopic): string {
  const kit = kitFor(topic)
  const tags = topic.tags.join(', ')
  const related = topic.related.slice(0, 3).join(', ') || 'the next numbered lesson'

  return `> **Lesson ${padLesson(topic)} · ${difficultyEn(topic.difficulty)}** - ${topic.summary.en}

## Why it matters

- ${kit.whyEn[0]}
- ${kit.whyEn[1]}
- ${kit.whyEn[2]}
- This lesson is specifically about **${topic.titles.en}**. Tags: ${tags}.

## Symptoms

| Signal | What you observe |
| --- | --- |
| ${kit.symptomsEn[0][0]} | ${kit.symptomsEn[0][1]} |
| ${kit.symptomsEn[1][0]} | ${kit.symptomsEn[1][1]} |
| ${kit.symptomsEn[2][0]} | ${kit.symptomsEn[2][1]} |
| ${kit.symptomsEn[3][0]} | ${kit.symptomsEn[3][1]} |

## How it breaks

${kit.mermaidEn(topic.titles.en)}

The named technology is rarely the villain. Two code paths (often a Vue/Quasar screen and a Laravel write) assume opposite contracts. Production finds the race. For this topic that contract is: ${topic.summary.en}

## Root causes

1. ${kit.rootEn[0]}
2. ${kit.rootEn[1]}
3. ${kit.rootEn[2]}
4. ${kit.rootEn[3]}

## How to solve it

### 1. Write the invariant in one sentence

${topic.summary.en} Put that sentence in the PR, the Pinia action, and the Laravel class.

### 2. Guard the edge in code

\`\`\`ts
${kit.vue}
\`\`\`

\`\`\`php
${kit.php}
\`\`\`

### 3. Keep a chart you will actually look at

${kit.chartEn} If the chart cannot catch a regression in **${topic.titles.en}**, the lesson is not done.

## Worked example

${kit.exampleEn}

On this topic, start from the symptom in the table that matches your last incident, then walk the diagram until the guard above would have fired.

## Check before you ship

- [ ] The invariant for **${topic.titles.en}** is written in one sentence.
- [ ] Empty, duplicate, timeout, or permission paths have a test or a staged rehearsal.
- [ ] A dashboard or log query would catch a regression within one deploy.
- [ ] Related reading still makes sense: ${related}.

## What not to do

- Copy a blog snippet that retries forever or caches the error as success.
- Treat Pinia as the source of truth for a Laravel row.
- Skip the previous numbered lesson if this one feels dense — the path is beginner → intermediate → advanced on purpose.
`
}

function renderBn(topic: IndustryTopic): string {
  const kit = kitFor(topic)
  const tags = topic.tags.join(', ')
  const related = topic.related.slice(0, 3).join(', ') || 'পরের নম্বরের পাঠ'

  return `> **পাঠ ${padLesson(topic)} · ${difficultyBn(topic.difficulty)}** - ${topic.summary.bn}

## কেন এটা জরুরি

- ${kit.whyBn[0]}
- ${kit.whyBn[1]}
- ${kit.whyBn[2]}
- এই পাঠটা ঠিক **${topic.titles.bn}** নিয়ে। ট্যাগ: ${tags}।

## কী দেখে বুঝবেন সমস্যা আছে

| সংকেত | যা দেখা যায় |
| --- | --- |
| ${kit.symptomsBn[0][0]} | ${kit.symptomsBn[0][1]} |
| ${kit.symptomsBn[1][0]} | ${kit.symptomsBn[1][1]} |
| ${kit.symptomsBn[2][0]} | ${kit.symptomsBn[2][1]} |
| ${kit.symptomsBn[3][0]} | ${kit.symptomsBn[3][1]} |

## কীভাবে ভাঙে

${kit.mermaidBn(topic.titles.bn)}

ভাঙে প্রযুক্তির নামে নয়, চুক্তির অভাবে। Vue/Quasar স্ক্রিন আর Laravel রাইট যদি উল্টো উত্তর ধরে, প্রোডাকশন সেই রেসটা খুঁজে বের করে। এই টপিকের চুক্তিটা হলো: ${topic.summary.bn}

## মূল কারণ

1. ${kit.rootBn[0]}
2. ${kit.rootBn[1]}
3. ${kit.rootBn[2]}
4. ${kit.rootBn[3]}

## কীভাবে সমাধান করবেন

### ১. ইনভেরিয়েন্ট এক বাক্যে লিখুন

${topic.summary.bn} এই বাক্য পিআর, Pinia অ্যাকশন, আর Laravel ক্লাসে রাখুন।

### ২. কোডে কিনারা আটকে দিন

\`\`\`ts
${kit.vue}
\`\`\`

\`\`\`php
${kit.php}
\`\`\`

### ৩. যে চার্ট সত্যি দেখবেন, সেটাই রাখুন

${kit.chartBn} **${topic.titles.bn}**-এর রিগ্রেশন এই চার্টে না ধরা পড়লে পাঠ শেষ হয়নি।

## কাজের উদাহরণ

${kit.exampleBn}

এই টপিকে নিজের শেষ ইনসিডেন্টের লক্ষণ টেবিলে মিলিয়ে নিন, তারপর ডায়াগ্রাম ধরে এগোন যতক্ষণ না উপরের গার্ড আগুন ধরত।

## শিপ করার আগে

- [ ] **${topic.titles.bn}**-এর ইনভেরিয়েন্ট এক বাক্যে লেখা।
- [ ] খালি, ডুপ্লিকেট, টাইমআউট বা পারমিশন পাথের টেস্ট বা রিহার্সাল আছে।
- [ ] এক ডিপ্লয়ের মধ্যে রিগ্রেশন ধরার লগ বা চার্ট আছে।
- [ ] আত্মীয় পাঠ এখনও মিলছে: ${related}।

## যা করবেন না

- অনন্ত রিট্রাই বা এররকে সাকসেস হিসেবে ক্যাশ করা ব্লগ স্নিপেট কপি করবেন না।
- Laravel সারির সত্য Pinia-কে বলে দেবেন না।
- ঘন মনে হলে আগের নম্বরের পাঠ আগে শেষ করুন। পথটা ইচ্ছা করেই শুরু → মাঝারি → উন্নত।
`
}

let written = 0
for (const topic of TOPICS) {
  for (const locale of ['en', 'bn'] as Locale[]) {
    const file = join(dir, `${topic.slug}.${locale}.md`)
    if (!isTemplate(file)) continue
    writeFileSync(file, locale === 'bn' ? renderBn(topic) : renderEn(topic))
    written += 1
  }
}

console.log(`wrote ${written} article files (missing or old template)`)
