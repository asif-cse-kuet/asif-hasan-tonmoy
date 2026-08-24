<script setup lang="ts">
import { useLocaleText } from '@/composables/useLocaleText'
import { UPWORK_METRICS } from '@/content/marketing-seed'

const { pick } = useLocaleText()

const hireUrl = UPWORK_METRICS.hireUrl
const email = 'mailto:asifhasan.cse75@gmail.com'
</script>

<template>
  <header class="mb-10 border-b border-steel/60 pb-8">
    <span
      class="mb-4 inline-block rounded-full border border-glow/40 bg-glow/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glow"
    >
      {{ UPWORK_METRICS.status }}
    </span>
    <h1 class="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl">
      {{ pick({ en: 'Marketing Strategist & Growth Consultant', bn: 'মার্কেটিং স্ট্রategist ও Growth Consultant' }) }}
    </h1>
    <p class="mt-3 max-w-3xl text-lg text-mist">
      {{
        pick({
          en: '8+ years helping business owners grow through social, funnels, and measurable campaigns — 50+ clients across North America and Australia.',
          bn: '৮+ বছর social, funnel ও measurable campaign-এ business owner-দের growth — North America ও Australia-এ ৫০+ client।',
        })
      }}
    </p>
    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        :href="hireUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary min-h-11 text-center"
      >
        {{ pick({ en: 'Hire on Upwork', bn: 'Upwork-এ hire করুন' }) }}
      </a>
      <a :href="email" class="btn-ghost min-h-11 text-center">
        {{ pick({ en: 'Email me', bn: 'ইমেইল করুন' }) }}
      </a>
    </div>
  </header>
</template>
