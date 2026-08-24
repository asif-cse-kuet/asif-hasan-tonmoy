<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import { PRIMARY_LINKS } from '@/content/profile'
</script>

<template>
  <ul class="flex flex-wrap gap-2 sm:gap-3" aria-label="Profiles and coding platforms">
    <li v-for="link in PRIMARY_LINKS" :key="link.id">
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
</template>
