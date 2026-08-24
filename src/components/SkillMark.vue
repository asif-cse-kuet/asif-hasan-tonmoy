<script setup lang="ts">
/**
 * Unique geometric marks for engineering vocabulary — not brand logos,
 * so architecture ideas stay distinguishable from the tech-stack chips.
 */
defineProps<{ label: string }>()

function hue(label: string) {
  let hash = 0
  for (let i = 0; i < label.length; i += 1) hash = (hash * 33 + label.charCodeAt(i)) >>> 0
  return hash % 360
}

function family(label: string) {
  const key = label.toLowerCase()
  if (key.includes('solid') || key.includes('oop')) return 'pillars'
  if (key.includes('cap') || key.includes('pacelc') || key.includes('consistency')) return 'ring'
  if (key.includes('seo') || key.includes('funnel') || key.includes('cac') || key.includes('growth')) return 'trend'
  if (key.includes('rbac') || key.includes('auth')) return 'keys'
  if (key.includes('queue') || key.includes('kafka') || key.includes('rabbit')) return 'waves'
  if (key.includes('cache') || key.includes('cdn')) return 'layers'
  if (key.includes('shard') || key.includes('hash')) return 'ring'
  if (key.includes('trace') || key.includes('log') || key.includes('metric')) return 'pulse'
  if (key.includes('slo') || key.includes('sli') || key.includes('budget')) return 'gauge'
  if (key.includes('docker') || key.includes('kubern') || key.includes('container')) return 'hex'
  if (key.includes('rag') || key.includes('embed') || key.includes('agent') || key.includes('llm')) return 'brain'
  if (key.includes('circuit') || key.includes('retry') || key.includes('idempot')) return 'shield'
  if (key.includes('api') || key.includes('rest') || key.includes('graphql')) return 'nodes'
  if (key.includes('realtime') || key.includes('socket')) return 'bolt'
  if (key.includes('migrat') || key.includes('schema')) return 'stairs'
  if (key.includes('test') || key.includes('eval')) return 'check'
  if (key.includes('design') || key.includes('figma') || key.includes('ui')) return 'frame'
  return 'spark'
}
</script>

<template>
  <svg
    class="skill-mark"
    viewBox="0 0 32 32"
    width="22"
    height="22"
    aria-hidden="true"
    :style="{ color: `hsl(${hue(label)} 42% 62%)` }"
  >
    <g v-if="family(label) === 'pillars'" fill="none" stroke="currentColor" stroke-width="1.7">
      <rect x="4" y="10" width="5" height="16" rx="1" />
      <rect x="13.5" y="6" width="5" height="20" rx="1" />
      <rect x="23" y="12" width="5" height="14" rx="1" />
    </g>
    <g v-else-if="family(label) === 'keys'" fill="none" stroke="currentColor" stroke-width="1.7">
      <circle cx="12" cy="12" r="5" />
      <path d="M16 16 L26 26 M22 22 h4 v4" />
    </g>
    <g v-else-if="family(label) === 'waves'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M4 10 C9 4, 14 16, 19 10 S29 16, 29 10" />
      <path d="M4 18 C9 12, 14 24, 19 18 S29 24, 29 18" />
      <path d="M4 26 C9 20, 14 32, 19 26 S29 32, 29 26" />
    </g>
    <g v-else-if="family(label) === 'layers'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M16 4 L28 10 L16 16 L4 10 Z" />
      <path d="M4 16 L16 22 L28 16" />
      <path d="M4 22 L16 28 L28 22" />
    </g>
    <g v-else-if="family(label) === 'ring'" fill="none" stroke="currentColor" stroke-width="1.7">
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="4" />
      <path d="M16 6 L16 12 M26 16 L20 16" />
    </g>
    <g v-else-if="family(label) === 'pulse'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M3 16 H9 L12 8 L16 24 L20 12 L23 16 H29" />
    </g>
    <g v-else-if="family(label) === 'gauge'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M6 22 A11 11 0 1 1 26 22" />
      <path d="M16 22 L22 12" />
      <circle cx="16" cy="22" r="1.6" fill="currentColor" />
    </g>
    <g v-else-if="family(label) === 'hex'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M16 4 L26 10 V22 L16 28 L6 22 V10 Z" />
      <path d="M16 4 V28 M6 10 L26 22 M26 10 L6 22" />
    </g>
    <g v-else-if="family(label) === 'brain'" fill="none" stroke="currentColor" stroke-width="1.7">
      <circle cx="11" cy="14" r="6" />
      <circle cx="21" cy="14" r="6" />
      <circle cx="16" cy="22" r="5" />
    </g>
    <g v-else-if="family(label) === 'shield'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M16 4 L26 8 V16 C26 23 16 28 16 28 C16 28 6 23 6 16 V8 Z" />
      <path d="M12 16 L15 19 L21 12" />
    </g>
    <g v-else-if="family(label) === 'nodes'" fill="none" stroke="currentColor" stroke-width="1.7">
      <circle cx="8" cy="8" r="3" />
      <circle cx="24" cy="8" r="3" />
      <circle cx="16" cy="24" r="3" />
      <path d="M10.5 10 L14 22 M21.5 10 L18 22 M11 8 H21" />
    </g>
    <g v-else-if="family(label) === 'bolt'" fill="currentColor">
      <path d="M18 3 L8 18 H15 L13 29 L24 13 H17 Z" />
    </g>
    <g v-else-if="family(label) === 'stairs'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M4 26 H12 V20 H18 V14 H24 V8 H28" />
    </g>
    <g v-else-if="family(label) === 'check'" fill="none" stroke="currentColor" stroke-width="1.8">
      <circle cx="16" cy="16" r="11" />
      <path d="M10 16 L14.5 21 L22 12" />
    </g>
    <g v-else-if="family(label) === 'frame'" fill="none" stroke="currentColor" stroke-width="1.7">
      <rect x="5" y="7" width="22" height="18" rx="2" />
      <path d="M5 13 H27" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
    </g>
    <g v-else-if="family(label) === 'trend'" fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M4 24 L12 16 L18 19 L28 7" />
      <path d="M20 7 H28 V15" />
    </g>
    <g v-else fill="none" stroke="currentColor" stroke-width="1.7">
      <path d="M16 3 L19 12 H28 L21 18 L24 28 L16 22 L8 28 L11 18 L4 12 H13 Z" />
    </g>
  </svg>
</template>

<style scoped>
.skill-mark {
  flex-shrink: 0;
  display: block;
}
</style>
