<script setup lang="ts">
import { useLocaleText } from '@/composables/useLocaleText'
import { UPWORK_METRICS } from '@/content/marketing-seed'

const { pick } = useLocaleText()

const hireUrl = UPWORK_METRICS.hireUrl
</script>

<template>
  <header class="mb-10 border-b border-steel/60 pb-8">
    <span
      class="mb-4 inline-block rounded-full border border-glow/40 bg-glow/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glow"
    >
      {{ UPWORK_METRICS.status }}
    </span>
    <h1 class="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl">
      {{ pick({ en: 'Software to business expertise', bn: 'সফটওয়্যার থেকে ব্যবসা — দক্ষতা' }) }}
    </h1>
    <p class="mt-3 max-w-3xl text-lg text-mist">
      {{
        pick({
          en: 'I do not “also do marketing.” I spent 8+ years as the growth operator for 50+ owners — then I started shipping the software those funnels depend on. Put me in as Tech Lead, Marketing Director, or both chairs at once.',
          bn: 'আমি “মার্কেটিংও করি” বলি না। ৮+ বছর ৫০+ মালিকের গ্রোথ অপারেটর ছিলাম — তারপর সেই ফানেল যে সফটওয়্যার চালায় সেটাই শিপ করি। টেক লিড, মার্কেটিং ডিরেক্টর, বা দুই আসনই দিন।',
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
        {{ pick({ en: 'Give me both chairs', bn: 'দুই আসনই দিন' }) }}
      </a>
      <a href="tel:+8801937181793" class="btn-ghost min-h-11 text-center">
        {{ pick({ en: 'Call +880 1937-181793', bn: 'কল +৮৮০ ১৯৩৭-১৮১৭৯৩' }) }}
      </a>
    </div>
  </header>
</template>
