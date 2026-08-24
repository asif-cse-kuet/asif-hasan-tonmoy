<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { CODING_NARRATIVE, CODING_PROFILES, FEATURED_REPOS } from '@/content/coding-profiles'
import { resolveTechIcon } from '@/content/tech-stack'

const { pick } = useLocaleText()

const ICONS: Record<string, string | null> = {
  codeforces: 'codeforces',
  hackerrank: 'hackerrank',
  leetcode: 'leetcode',
  github: 'github',
}
</script>

<template>
  <SectionShell
    id="coding"
    :eyebrow="pick({ en: 'Problem solving', bn: 'সমস্যা সমাধান' })"
    :title="pick({ en: 'Competitive programming & repos', bn: 'কম্পিটিটিভ প্রোগ্রামিং ও রিপো' })"
    :lead="pick(CODING_NARRATIVE)"
  >
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a
        v-for="profile in CODING_PROFILES"
        :key="profile.id"
        :href="profile.url"
        target="_blank"
        rel="noopener noreferrer"
        class="surface-card group flex flex-col p-5 no-underline transition-colors hover:border-glow/50"
      >
        <span class="text-mist transition-colors group-hover:text-glow">
          <BrandIcon :name="profile.platform" :slug="ICONS[profile.id] ?? null" :size="26" />
        </span>
        <h3 class="mt-3 font-display text-lg font-semibold text-paper">{{ profile.platform }}</h3>
        <p class="text-xs text-glow">@{{ profile.handle }}</p>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-mist">{{ pick(profile.narrative) }}</p>
      </a>
    </div>

    <h3 class="mt-10 font-display text-xl font-semibold text-paper">
      {{ pick({ en: 'Featured repositories', bn: 'নির্বাচিত রিপোজিটরি' }) }}
    </h3>
    <div class="mt-4 grid gap-4 md:grid-cols-3">
      <a
        v-for="repo in FEATURED_REPOS"
        :key="repo.name"
        :href="repo.url"
        target="_blank"
        rel="noopener noreferrer"
        class="surface-card block p-5 no-underline transition-colors hover:border-glow/50"
      >
        <p class="break-words font-mono text-sm font-semibold text-glow">{{ repo.name }}</p>
        <p class="mt-2 text-sm leading-relaxed text-mist">{{ pick(repo.description) }}</p>
        <p
          v-if="repo.language"
          class="mt-3 flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wide text-mist/70"
        >
          <BrandIcon :name="repo.language" :slug="resolveTechIcon(repo.language)" :size="12" />
          {{ repo.language }}
        </p>
      </a>
    </div>
  </SectionShell>
</template>
