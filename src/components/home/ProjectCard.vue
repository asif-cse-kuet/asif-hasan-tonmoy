<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import ProjectCover from '@/components/ProjectCover.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import type { Project } from '@/content/projects'
import { resolveTechIcon } from '@/content/tech-stack'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  openGallery: [start: number]
}>()

const { pick } = useLocaleText()
</script>

<template>
  <article class="surface-card flex flex-col overflow-hidden transition-colors hover:border-glow/40">
    <button
      type="button"
      class="block w-full text-left"
      :class="project.gallery?.length ? 'cursor-zoom-in' : 'cursor-default'"
      :disabled="!project.gallery?.length"
      @click="project.gallery?.length ? emit('openGallery', 0) : undefined"
    >
      <ProjectCover :slug="project.slug" :title="pick(project.titles)" :tags="project.tags" />
    </button>
    <div
      v-if="project.gallery?.length"
      class="grid grid-cols-2 gap-1 border-b border-steel/40 bg-ink/30 p-2 md:grid-cols-4"
    >
      <button
        v-for="(shot, shotIndex) in project.gallery"
        :key="shot"
        type="button"
        class="group overflow-hidden rounded border border-steel/50 hover:border-glow/60"
        @click="emit('openGallery', shotIndex + 1)"
      >
        <img
          :src="shot"
          :alt="`${pick(project.titles)} screenshot`"
          class="h-20 w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </button>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-display text-lg font-semibold leading-snug text-paper">
          {{ pick(project.titles) }}
        </h3>
        <span
          class="shrink-0 rounded border border-steel/60 px-1.5 py-0.5 text-[0.75rem] uppercase tracking-wide text-mist/70"
        >
          {{ project.tier }}
        </span>
      </div>
      <p class="mt-2.5 text-sm leading-relaxed text-mist">{{ pick(project.summary) }}</p>
      <ul
        v-if="project.highlights?.length"
        class="mt-3 space-y-1.5 border-t border-steel/40 pt-3 text-[0.8rem] leading-snug text-paper/80"
      >
        <li v-for="(line, index) in project.highlights" :key="index" class="flex gap-2">
          <span class="mt-1.5 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden="true" />
          <span>{{ pick(line) }}</span>
        </li>
      </ul>
      <ul class="mt-4 flex flex-wrap gap-1.5">
        <li
          v-for="tech in project.stack"
          :key="tech"
          class="flex items-center gap-1 rounded border border-steel/60 bg-ink/40 px-2 py-1 text-[0.75rem] text-paper/85"
        >
          <span class="text-mist"><BrandIcon :name="tech" :slug="resolveTechIcon(tech)" :size="12" /></span>
          {{ tech }}
        </li>
      </ul>
      <div v-if="project.links.length" class="mt-4 flex flex-wrap gap-3">
        <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-semibold"
        >
          {{ link.label }} ↗
        </a>
      </div>
      <button
        v-if="project.gallery?.length"
        type="button"
        class="mt-4 self-start text-sm font-semibold text-glow hover:text-accent-soft"
        @click="emit('openGallery', 0)"
      >
        {{ pick({ en: 'View screenshots', bn: 'স্ক্রিনশট দেখুন' }) }}
      </button>
    </div>
  </article>
</template>
