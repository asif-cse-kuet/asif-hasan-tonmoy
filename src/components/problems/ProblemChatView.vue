<script setup lang="ts">
import type { ChatTurn } from '@/content/solved-problems'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  turns: ChatTurn[]
}>()

const { pick } = useLocaleText()
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="(turn, idx) in turns"
      :key="idx"
      class="flex"
      :class="turn.role === 'user' ? 'justify-end' : 'justify-start'"
    >
      <div
        class="max-w-[85%] rounded-lg px-4 py-3 text-sm"
        :class="turn.role === 'user' ? 'bg-accent/20 text-paper' : 'surface-card text-mist'"
      >
        <p class="text-xs uppercase tracking-wide text-mist/70">{{ turn.role }}</p>
        <p class="mt-1">{{ pick(turn.content) }}</p>
      </div>
    </div>
  </div>
</template>
