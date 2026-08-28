<script setup lang="ts">
import { ref } from 'vue'

import BrandIcon from '@/components/BrandIcon.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PRIMARY_LINKS } from '@/content/profile'

const { pick } = useLocaleText()
const profilesExpanded = ref(false)

const mobileVisibleCount = 3
</script>

<template>
  <ul class="flex flex-wrap gap-2 sm:gap-3" aria-label="Profiles and coding platforms">
    <li
      v-for="(link, index) in PRIMARY_LINKS"
      :key="link.id"
      :class="index >= mobileVisibleCount && !profilesExpanded ? 'hidden sm:list-item' : ''"
    >
      <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-2.5 rounded-lg border border-steel/70 bg-ink-soft/60 px-3 py-2.5 no-underline transition-colors hover:border-glow/60 hover:bg-ink-soft"
      >
        <span class="text-mist transition-colors group-hover:text-glow">
          <BrandIcon :name="link.label" :slug="link.icon" :size="18" />
        </span>
        <span class="leading-tight">
          <span class="block text-sm font-semibold text-paper">{{ link.label }}</span>
          <span v-if="link.handle" class="block text-[0.75rem] text-mist/80">{{ link.handle }}</span>
        </span>
      </a>
    </li>
  </ul>
  <button
    v-if="PRIMARY_LINKS.length > mobileVisibleCount"
    type="button"
    class="expandable-text__toggle mt-2 inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-glow sm:hidden"
    :aria-expanded="profilesExpanded"
    @click="profilesExpanded = !profilesExpanded"
  >
    <span class="text-base leading-none" aria-hidden="true">{{ profilesExpanded ? '−' : '⋯' }}</span>
    {{
      pick(
        profilesExpanded
          ? { en: 'Less', bn: 'কম' }
          : { en: 'More profiles', bn: 'আরও প্রোফাইল' },
      )
    }}
  </button>
</template>
