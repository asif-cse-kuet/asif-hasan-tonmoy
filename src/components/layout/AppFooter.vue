<script setup lang="ts">
import { PROFILE, PROFILE_LINKS } from '@/content/profile'
</script>

<template>
  <footer class="mt-16 border-t border-steel/60 bg-ink-soft/50">
    <div class="page-wrap py-10">
      <nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
        <a
          v-for="link in PROFILE_LINKS"
          :key="link.id"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-mist hover:text-glow"
        >
          {{ link.label }}
        </a>
      </nav>
      <p class="mt-6 text-sm text-mist">
        {{ $t('footer.copyright', { year: new Date().getFullYear(), name: PROFILE.name }) }}
      </p>
    </div>
  </footer>
</template>
