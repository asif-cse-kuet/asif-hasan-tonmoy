<script setup lang="ts">
import { useLocaleText } from '@/composables/useLocaleText'
import SearchField from '@/components/SearchField.vue'

const query = defineModel<string>('query', { default: '' })
const activeTag = defineModel<string | null>('activeTag', { default: null })

defineProps<{
  tags: string[]
}>()

const { pick } = useLocaleText()
</script>

<template>
  <div class="space-y-4">
    <label class="block">
      <span class="sr-only">{{ pick({ en: 'Search problems', bn: 'সমস্যা খুঁজুন' }) }}</span>
      <SearchField
        v-model="query"
        input-class="min-h-11 w-full rounded-md border border-steel/80 bg-ink-soft/80 px-4 py-2 text-paper placeholder:text-mist/60 focus:border-glow focus:outline-none"
        :placeholder="pick({ en: 'Search by title, stack, or tag…', bn: 'title, stack বা tag দিয়ে খুঁজুন…' })"
      />
    </label>

    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class="min-h-10 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors"
        :class="activeTag === null ? 'bg-glow text-ink' : 'border border-steel text-mist hover:border-glow'"
        @click="activeTag = null"
      >
        {{ pick({ en: 'All', bn: 'সব' }) }}
      </button>
      <button
        v-for="tag in tags"
        :key="tag"
        type="button"
        class="min-h-10 rounded-full px-3 py-1.5 text-sm font-semibold capitalize transition-colors"
        :class="activeTag === tag ? 'bg-glow text-ink' : 'border border-steel text-mist hover:border-glow'"
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>
