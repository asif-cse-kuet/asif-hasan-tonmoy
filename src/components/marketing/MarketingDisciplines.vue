<script setup lang="ts">
import { useLocaleText } from '@/composables/useLocaleText'
import { MARKETING_SKILL_GROUPS } from '@/content/marketing-seed'

const { pick } = useLocaleText()

const disciplines = MARKETING_SKILL_GROUPS.find((g) => g.id === 'disciplines')
</script>

<template>
  <section v-if="disciplines">
    <h2 class="font-display text-xl font-semibold text-paper">
      {{ pick(disciplines.titles) }}
    </h2>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="item in disciplines.items"
        :key="item"
        class="min-h-10 rounded-md bg-steel/40 px-3 py-2 text-sm text-mist"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>
