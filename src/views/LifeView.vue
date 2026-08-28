<script setup lang="ts">
import { RouterLink } from 'vue-router'

import PageHero from '@/components/PageHero.vue'
import ProfilePortrait from '@/components/ProfilePortrait.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { LIFE_INTRO, LIFE_MOMENTS } from '@/content/life'

const { pick } = useLocaleText()

const sorted = [...LIFE_MOMENTS].sort((a, b) => b.when.localeCompare(a.when))

/** Studio strip — skip oxford (already in intro above). */
const studioShots = [
  {
    src: '/images/profile/portrait-01-campus.png',
    label: { en: 'Campus linen — tall & calm', bn: 'ক্যাম্পাস linen — লম্বা ও শান্ত' },
  },
  {
    src: '/images/profile/portrait-06-tall.png',
    label: { en: 'Full frame — loafers optional', bn: 'ফুল ফ্রেম' },
  },
  {
    src: '/images/profile/portrait-07-lean.png',
    label: { en: 'Knit layer — quiet hour', bn: 'নিট লেয়ার — শান্ত সময়' },
  },
]
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="pick(LIFE_INTRO.title)" :lead="pick(LIFE_INTRO.lead)" />

    <div class="glass-panel mb-10 flex flex-col items-start gap-6 p-5 sm:flex-row sm:items-center">
      <ProfilePortrait
        variant="about"
        src="/images/profile/life-intro-ai.png"
        alt="Asif Hasan Tonmoy — sky blue oxford"
      />
      <p class="max-w-2xl text-sm leading-relaxed text-mist sm:text-base">
        {{
          pick({
            en: 'Highly skilled on the laptop, very chill off it. I like routes that mix culture, food, and quiet hours to think — the same curiosity I bring to a codebase.',
            bn: 'ল্যাপটপে দক্ষ, বাইরে চিল। সংস্কৃতি, খাবার, আর চিন্তার শান্ত সময় — কোডবেসে যে কৌতূহল, ভ্রমণেও সেটাই।',
          })
        }}
      </p>
    </div>

    <div class="mb-12 grid gap-4 sm:grid-cols-3">
      <figure v-for="shot in studioShots" :key="shot.src" class="glass-panel p-4">
        <div class="flex min-h-64 items-end justify-center bg-transparent">
          <img
            :src="shot.src"
            :alt="pick(shot.label)"
            class="max-h-72 w-auto bg-transparent object-contain"
            loading="lazy"
          />
        </div>
        <figcaption class="mt-3 text-center text-xs text-mist">{{ pick(shot.label) }}</figcaption>
      </figure>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="moment in sorted"
        :key="moment.id"
        class="group glass-panel overflow-hidden"
      >
        <div class="relative aspect-[4/5] overflow-hidden bg-ink/40">
          <img
            :src="moment.image"
            :alt="pick(moment.title)"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
          />
          <div class="absolute inset-x-0 bottom-0 p-4">
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-glow/90">
              {{ moment.when }} · {{ pick(moment.place) }}
            </p>
            <h2 class="mt-1 font-display text-lg font-semibold text-paper">
              {{ pick(moment.title) }}
            </h2>
          </div>
        </div>
        <p class="p-4 text-sm leading-relaxed text-mist">{{ pick(moment.caption) }}</p>
      </article>
    </div>

    <p class="mt-8 text-sm text-mist/80">
      {{
        pick({
          en: 'More albums on the way — send a note if a place here matches a project you want to talk through.',
          bn: 'আরও অ্যালবাম আসছে — কোনো জায়গা প্রজেক্টের সাথে মিললে লিখুন।',
        })
      }}
    </p>

    <RouterLink to="/" class="btn-ghost mt-8 inline-flex min-h-11">
      {{ pick({ en: '← Back to home', bn: '← হোমে ফিরুন' }) }}
    </RouterLink>
  </div>
</template>
