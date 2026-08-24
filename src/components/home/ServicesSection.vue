<script setup lang="ts">
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { SERVICE_PITCHES } from '@/content/capabilities'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()
</script>

<template>
  <SectionShell
    id="services"
    :eyebrow="pick({ en: 'For founders & hiring teams', bn: 'ফাউন্ডার ও হায়ারিং টিমের জন্য' })"
    :title="pick({ en: 'What I can do for you', bn: 'আমি আপনার জন্য কী করতে পারি' })"
    :lead="
      pick({
        en: 'Plain-language outcomes — no jargon required to understand what you get.',
        bn: 'সরল ভাষায় ফলাফল — বোঝার জন্য কোনো কঠিন পরিভাষা লাগবে না।',
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

    <div class="mt-6 flex flex-wrap gap-3">
      <a :href="`mailto:${PROFILE.email}`" class="btn-primary">
        {{ pick({ en: 'Start a conversation', bn: 'আলোচনা শুরু করুন' }) }}
      </a>
      <a
        href="https://www.upwork.com/workwith/asifhasantonmoy"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-ghost"
      >
        {{ pick({ en: 'Hire on Upwork', bn: 'Upwork-এ নিয়োগ' }) }}
      </a>
    </div>
  </SectionShell>
</template>
