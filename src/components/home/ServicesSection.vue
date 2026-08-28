<script setup lang="ts">
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { HIRE_SEATS, SERVICE_PITCHES } from '@/content/capabilities'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()
</script>

<template>
  <SectionShell
    id="services"
    :eyebrow="pick({ en: 'For founders & hiring teams', bn: 'ফাউন্ডার ও হায়ারিং টিমের জন্য' })"
    :title="pick({ en: 'Three seats. One hire.', bn: 'তিন আসন। এক নিয়োগ।' })"
    :lead="
      pick({
        en: 'Owners usually split Tech Lead and Marketing Director across two people who then argue. I already speak both dialects.',
        bn: 'মালিকরা সাধারণত টেক লিড ও মার্কেটিং ডিরেক্টর দুইজনে ভাগ করেন, তারপর তারা তর্ক করেন। আমি দুই ভাষাই বলি।',
      })
    "
  >
    <div class="grid gap-4 md:grid-cols-3">
      <article
        v-for="pitch in SERVICE_PITCHES"
        :key="pitch.id"
        class="surface-card flex flex-col p-5"
      >
        <h3 class="font-display text-xl font-semibold text-accent-soft">{{ pick(pitch.titles) }}</h3>
        <p class="mt-2 text-sm font-medium text-paper">{{ pick(pitch.outcome) }}</p>
        <ul class="mt-4 flex-1 space-y-2">
          <li
            v-for="bullet in pitch.bullets"
            :key="bullet.en"
            class="flex gap-2 text-sm text-mist"
          >
            <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-glow" />
            {{ pick(bullet) }}
          </li>
        </ul>
      </article>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-3">
      <article v-for="seat in HIRE_SEATS" :key="seat.id" class="rounded-lg border border-glow/30 bg-glow/10 p-5">
        <h3 class="font-display text-lg font-semibold text-glow">{{ pick(seat.titles) }}</h3>
        <p class="mt-2 text-sm text-paper/90">{{ pick(seat.pitch) }}</p>
      </article>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <a :href="PROFILE.telHref" class="btn-primary">
        {{ pick({ en: 'Call now', bn: 'এখনই কল' }) }} · {{ PROFILE.phone }}
      </a>
      <a :href="`mailto:${PROFILE.email}`" class="btn-ghost">
        {{ pick({ en: 'Email a brief', bn: 'ব্রিফ পাঠান' }) }}
      </a>
    </div>
  </SectionShell>
</template>
