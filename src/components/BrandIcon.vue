<script setup lang="ts">
import { computed } from 'vue'

import { getBrandIcon } from '@/lib/brandIcons'

const props = withDefaults(
  defineProps<{
    name: string
    slug?: string | null
    size?: number
  }>(),
  { slug: null, size: 20 },
)

const icon = computed(() => getBrandIcon(props.slug))

const monogram = computed(() =>
  props.name
    .replace(/[^A-Za-z0-9+#.]/g, '')
    .slice(0, 2)
    .toUpperCase(),
)
</script>

<template>
  <svg
    v-if="icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    focusable="false"
    class="brand-icon"
  >
    <path :d="icon.path" fill="currentColor" />
  </svg>
  <span
    v-else
    class="brand-monogram"
    :style="{ width: `${size}px`, height: `${size}px` }"
    aria-hidden="true"
  >
    {{ monogram }}
  </span>
</template>

<style scoped>
.brand-icon {
  display: block;
  flex-shrink: 0;
}

.brand-monogram {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid currentColor;
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
}
</style>
