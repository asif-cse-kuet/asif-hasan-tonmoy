<script setup lang="ts">
import type { SkillCategory } from '@/content/skills'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  categories: SkillCategory[]
}>()

const { pick } = useLocaleText()

const proficiencyWidth: Record<string, string> = {
  expert: '100%',
  strong: '82%',
  working: '62%',
  familiar: '40%',
}
</script>

<template>
  <div class="space-y-8">
    <section v-for="category in categories" :key="category.id">
      <h3 class="mb-4 font-display text-xl font-semibold text-paper">
        {{ pick(category.titles) }}
      </h3>
      <ul class="space-y-3">
        <li v-for="skill in category.skills" :key="skill.name" class="surface-card px-4 py-3">
          <div class="flex items-center justify-between gap-4 text-sm">
            <span class="font-medium text-paper">{{ skill.name }}</span>
            <span class="text-xs uppercase tracking-wide text-mist">{{ skill.proficiency }}</span>
          </div>
          <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-ink">
            <div
              class="h-full rounded-full bg-glow transition-all"
              :style="{ width: proficiencyWidth[skill.proficiency] ?? '50%' }"
            />
          </div>
          <p v-if="skill.note" class="mt-2 text-xs text-mist">{{ pick(skill.note) }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
