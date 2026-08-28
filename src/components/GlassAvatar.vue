<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  size?: 'md' | 'lg'
}>()
</script>

<template>
  <div
    class="glass-avatar"
    :class="{ 'glass-avatar--lg': size === 'lg' }"
    :aria-hidden="!alt"
  >
    <img :src="src" :alt="alt ?? ''" loading="lazy" />
  </div>
</template>
