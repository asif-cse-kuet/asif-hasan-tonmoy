<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  kicker?: string
}>()
</script>

<template>
  <header class="mb-10 w-full border-b border-steel/60 pb-8">
    <p v-if="kicker" class="mb-2 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-accent-soft">
      {{ kicker }}
    </p>
    <h1 class="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="mt-3 w-full text-lg leading-relaxed text-mist">{{ subtitle }}</p>
  </header>
</template>
