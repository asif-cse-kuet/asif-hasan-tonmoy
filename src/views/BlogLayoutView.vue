<script setup lang="ts">
import { RouterView } from 'vue-router'

import TopicTree from '@/components/blog/TopicTree.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()
const { pick } = useLocaleText()
</script>

<template>
  <div class="relative z-10 flex min-h-[calc(100vh-4rem)]">
    <aside
      class="hidden w-72 shrink-0 border-r border-steel/50 bg-ink-soft/70 lg:block"
      aria-label="Topic tree"
    >
      <div class="sticky top-[3.6rem] h-[calc(100vh-3.6rem)]">
        <TopicTree />
      </div>
    </aside>

    <button
      type="button"
      class="fixed bottom-5 left-4 z-40 rounded-full border border-steel bg-ink px-4 py-2.5 text-sm font-semibold text-paper shadow-lg lg:hidden"
      @click="ui.toggleBlogNav()"
    >
      {{ ui.blogNavOpen ? pick({ en: 'Close topics', bn: 'বন্ধ' }) : pick({ en: 'Topics', bn: 'টপিক' }) }}
    </button>

    <div
      v-if="ui.blogNavOpen"
      class="fixed inset-0 z-40 bg-ink/70 lg:hidden"
      @click="ui.closeBlogNav()"
    />
    <aside
      v-if="ui.blogNavOpen"
      class="fixed inset-y-0 left-0 z-50 w-[min(20rem,88vw)] border-r border-steel/60 bg-ink lg:hidden"
    >
      <TopicTree />
    </aside>

    <div class="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-10">
      <RouterView />
    </div>
  </div>
</template>
