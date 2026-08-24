<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header class="mb-10 border-b border-steel/60 pb-8">
    <h1 class="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="mt-3 max-w-3xl text-lg text-mist">{{ subtitle }}</p>
  </header>
</template>
