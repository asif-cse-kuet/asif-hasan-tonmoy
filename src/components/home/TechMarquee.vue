<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import { HERO_TECH } from '@/content/tech-stack'
</script>

<template>
  <ul
    class="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-mist/80 sm:gap-x-6"
    aria-label="Stack, DevOps, monitoring, logging and metrics"
  >
    <li
      v-for="tech in HERO_TECH"
      :key="tech.name"
      class="flex items-center gap-1.5 text-xs font-medium sm:text-sm"
    >
      <BrandIcon :name="tech.name" :slug="tech.icon" :size="16" />
      {{ tech.name }}
    </li>
  </ul>
</template>
