<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  /** Visual emphasis: hero is largest on the landing page. */
  variant?: 'hero' | 'about' | 'card'
}>()
</script>

<template>
  <div
    class="profile-portrait"
    :class="{
      'profile-portrait--hero': variant === 'hero' || !variant,
      'profile-portrait--about': variant === 'about',
      'profile-portrait--card': variant === 'card',
    }"
  >
    <img :src="src" :alt="alt" loading="lazy" decoding="async" />
  </div>
</template>

<style scoped>
.profile-portrait {
  position: relative;
  pointer-events: none;
  user-select: none;
}

.profile-portrait img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 22px 42px rgb(0 0 0 / 0.38));
}

.profile-portrait--hero {
  max-width: min(22rem, 42vw);
  margin-inline: auto;
}

@media (min-width: 1024px) {
  .profile-portrait--hero {
    max-width: 26rem;
    margin-inline: 0;
  }
}

.profile-portrait--about {
  max-width: 14rem;
}

.profile-portrait--card {
  max-width: 100%;
}
</style>
