<script setup lang="ts">
import { useLocaleText } from '@/composables/useLocaleText'

const { pick } = useLocaleText()

const steps = [
  {
    title: { en: 'Audit & goals', bn: 'Audit ও লক্ষ্য' },
    body: {
      en: 'We clarify where you are today - traffic, conversions, and brand - and set realistic growth targets.',
      bn: 'আজ কোথায় আছেন - traffic, conversion, brand - স্পষ্ট করে realistic growth target ঠিক করি।',
    },
  },
  {
    title: { en: 'Strategy & positioning', bn: 'Strategy ও positioning' },
    body: {
      en: 'I map channels, audience, and messaging so every post and ad supports a coherent story.',
      bn: 'channel, audience ও messaging map করি যাতে প্রতিটি post ও ad coherent story support করে।',
    },
  },
  {
    title: { en: 'Content system', bn: 'Content system' },
    body: {
      en: 'Templates, calendars, and workflows your team can run without reinventing the wheel each week.',
      bn: 'template, calendar ও workflow যাতে team প্রতি সপ্তাহে wheel reinvent না করে।',
    },
  },
  {
    title: { en: 'Campaign execution', bn: 'Campaign execution' },
    body: {
      en: 'Organic and paid campaigns launch with clear owners, deadlines, and quality checks.',
      bn: 'organic ও paid campaign clear owner, deadline ও quality check সহ launch।',
    },
  },
  {
    title: { en: 'Analytics & ROI', bn: 'Analytics ও ROI' },
    body: {
      en: 'Dashboards and weekly reviews tie activity to leads, sales, and cost - not vanity metrics alone.',
      bn: 'dashboard ও weekly review activity-কে lead, sale ও cost-এর সাথে bind করে - শুধু vanity metric নয়।',
    },
  },
  {
    title: { en: 'Iterate & scale', bn: 'Iterate ও scale' },
    body: {
      en: 'Double down on what works, cut what does not, and scale without burning out your team.',
      bn: 'যা কাজ করে তাতে double down, যা নয় তা cut, team burn out না করে scale।',
    },
  },
]
</script>

<template>
  <section>
    <h2 class="font-display text-xl font-semibold text-paper">
      {{ pick({ en: 'How I work', bn: 'আমি কীভাবে কাজ করি' }) }}
    </h2>
    <p class="mt-2 max-w-2xl text-sm text-mist">
      {{
        pick({
          en: 'A straightforward process for business owners who want clarity, not jargon.',
          bn: 'business owner-দের জন্য সোজা process - jargon নয়, clarity।',
        })
      }}
    </p>
    <ol class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(step, idx) in steps"
        :key="idx"
        class="surface-card p-5"
      >
        <span class="text-xs font-semibold uppercase tracking-wide text-accent">
          {{ pick({ en: `Step ${idx + 1}`, bn: `ধাপ ${idx + 1}` }) }}
        </span>
        <h3 class="mt-1 font-display text-lg text-paper">{{ pick(step.title) }}</h3>
        <p class="mt-2 text-sm text-mist">{{ pick(step.body) }}</p>
      </li>
    </ol>
  </section>
</template>
