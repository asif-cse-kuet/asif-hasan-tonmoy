<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  slug: string
  title: string
  tags?: string[]
}>()

const COVERS: Record<string, string> = {
  'ticketing-system':
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80',
  'docker-gmail-registration-api':
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1400&q=80',
  'proficient-production':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  'tree-explorer': '/images/projects/tree-explorer.png',
  'transmentalnet-research':
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
  'quasar-dashboard':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  'marketing-growth-portfolio':
    'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1400&q=80',
  pms: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80',
  'banking-api':
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
  'banking-cpp-oop':
    'https://images.unsplash.com/photo-1541354329998-f4d9a9f7438b?auto=format&fit=crop&w=1400&q=80',
  'seat-allocation':
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3dd?auto=format&fit=crop&w=1400&q=80',
  'employee-management':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  harmonymatch:
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=80',
  'font-uploader':
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
  'digital-classroom-opengl':
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80',
  'appointment-system':
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80',
  'figma-to-html':
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80',
  'task-management':
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80',
  supercards: '/images/projects/supercards-dashboard.png',
  'brac-social':
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80',
}

const src = computed(() => COVERS[props.slug])

const palette = computed(() => {
  let hash = 2166136261
  for (const char of props.slug) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619)
  const a = Math.abs(hash)
  return {
    a: `hsl(${a % 360} 38% 28%)`,
    b: `hsl(${(a >> 8) % 360} 42% 18%)`,
    c: `hsl(${(a >> 16) % 360} 55% 52%)`,
  }
})

const motif = computed(() => {
  const hay = `${props.slug} ${(props.tags ?? []).join(' ')}`.toLowerCase()
  if (hay.includes('card') || hay.includes('payment')) return 'cards'
  if (hay.includes('brac') || hay.includes('social') || hay.includes('ngo')) return 'people'
  if (hay.includes('ticket') || hay.includes('support') || hay.includes('chat')) return 'tickets'
  if (hay.includes('docker') || hay.includes('api')) return 'boxes'
  if (hay.includes('tree')) return 'tree'
  if (hay.includes('nlp') || hay.includes('research') || hay.includes('ai')) return 'net'
  if (hay.includes('market') || hay.includes('growth')) return 'trend'
  if (hay.includes('bank')) return 'vault'
  return 'grid'
})
</script>

<template>
  <div class="project-cover" :style="{ background: `linear-gradient(135deg, ${palette.a}, ${palette.b})` }">
    <img
      v-if="src"
      :src="src"
      :alt="title"
      class="absolute inset-0 h-full w-full object-cover object-top"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
    <svg viewBox="0 0 320 180" class="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
      <g :stroke="palette.c" fill="none" stroke-width="1.4">
        <circle v-if="motif === 'net'" cx="80" cy="70" r="22" />
        <circle v-if="motif === 'net'" cx="150" cy="50" r="16" />
        <circle v-if="motif === 'net'" cx="210" cy="90" r="26" />
        <path v-if="motif === 'net'" d="M80 70 L150 50 L210 90 L80 70" />

        <rect v-if="motif === 'cards'" x="70" y="50" width="90" height="58" rx="8" />
        <rect v-if="motif === 'cards'" x="130" y="72" width="90" height="58" rx="8" />

        <circle v-if="motif === 'people'" cx="120" cy="70" r="14" />
        <circle v-if="motif === 'people'" cx="168" cy="64" r="16" />
        <circle v-if="motif === 'people'" cx="214" cy="74" r="12" />
        <path v-if="motif === 'people'" d="M90 130 C110 100, 130 100, 150 130" />
        <path v-if="motif === 'people'" d="M140 130 C160 92, 190 92, 210 130" />

        <rect v-if="motif === 'tickets'" x="90" y="48" width="140" height="84" rx="10" />
        <path v-if="motif === 'tickets'" d="M90 90 H230 M130 48 V132" />

        <rect v-if="motif === 'boxes'" x="80" y="50" width="50" height="50" />
        <rect v-if="motif === 'boxes'" x="140" y="70" width="50" height="50" />
        <rect v-if="motif === 'boxes'" x="200" y="42" width="50" height="50" />

        <path v-if="motif === 'tree'" d="M160 150 V70 M160 90 L120 50 M160 90 L210 46 M160 118 L110 90 M160 118 L220 88" />

        <path v-if="motif === 'trend'" d="M60 130 L110 90 L150 108 L210 48 L260 70" />
        <circle v-if="motif === 'trend'" cx="210" cy="48" r="5" :fill="palette.c" />

        <rect v-if="motif === 'vault'" x="110" y="48" width="100" height="90" rx="12" />
        <circle v-if="motif === 'vault'" cx="160" cy="96" r="18" />

        <path v-if="motif === 'grid'" d="M40 40 H280 M40 90 H280 M40 140 H280 M80 20 V160 M160 20 V160 M240 20 V160" />
      </g>
    </svg>
    <span class="relative z-10 px-4 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper">
      {{ title }}
    </span>
  </div>
</template>

<style scoped>
.project-cover {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 10.5rem;
  overflow: hidden;
  border-radius: 0.4rem 0.4rem 0 0;
}
</style>
