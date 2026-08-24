<script setup lang="ts">
import SkillMark from '@/components/SkillMark.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { MARKETING_SKILL_GROUPS } from '@/content/marketing-seed'

const { pick } = useLocaleText()

const disciplines = MARKETING_SKILL_GROUPS.find((g) => g.id === 'disciplines')
</script>

<template>
  <section v-if="disciplines">
    <h2 class="font-display text-xl font-semibold text-paper">
      {{ pick({ en: 'How demand work actually shows up', bn: 'চাহিদার কাজ আসলে কীভাবে দেখা যায়' }) }}
    </h2>
    <ul class="mt-4 grid gap-2 sm:grid-cols-2">
      <li
        v-for="item in disciplines.items"
        :key="item"
        class="flex min-h-10 items-center gap-2 rounded-md border border-steel/50 bg-steel/20 px-3 py-2 text-sm text-paper"
      >
        <SkillMark :label="item" />
        {{ item }}
      </li>
    </ul>
  </section>
</template>
