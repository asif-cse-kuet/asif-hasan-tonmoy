<script setup lang="ts">
defineProps<{
  id: string
  eyebrow?: string
  title: string
  lead?: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-24 border-t border-steel/40 py-14 sm:py-20">
    <div class="page-wrap">
      <p
        v-if="eyebrow"
        class="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft sm:text-sm"
      >
        {{ eyebrow }}
      </p>
      <h2
        class="mt-2 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl lg:text-[2.75rem]"
      >
        {{ title }}
      </h2>
      <p v-if="lead" class="mt-3 max-w-3xl text-base text-mist sm:text-lg">
        {{ lead }}
      </p>

      <div class="mt-8 sm:mt-10">
        <slot />
      </div>
    </div>
  </section>
</template>
