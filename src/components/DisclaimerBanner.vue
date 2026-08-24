<script setup lang="ts"></script>

<template>
  <aside
    class="mb-8 rounded-md border border-glow/30 bg-glow/10 px-4 py-3 text-sm text-mist"
    role="note"
  >
    <p class="font-semibold text-glow">{{ $t('disclaimer.title') }}</p>
    <p class="mt-1">{{ $t('disclaimer.body') }}</p>
  </aside>
</template>
