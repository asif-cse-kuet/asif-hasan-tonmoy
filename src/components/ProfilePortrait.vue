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
    <img :src="src" :alt="alt" loading="eager" decoding="async" />
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
  object-position: center bottom;
  filter: drop-shadow(0 18px 28px rgb(0 0 0 / 0.22));
}

.profile-portrait--about img {
  filter: drop-shadow(0 12px 20px rgb(0 0 0 / 0.18));
}

.profile-portrait--hero {
  width: 5.75rem;
  height: 5.75rem;
  flex-shrink: 0;
  border-radius: 1.15rem;
  overflow: hidden;
  isolation: isolate;
  background: #0a0d12;
  border: 1px solid rgb(255 255 255 / 0.1);
  box-shadow: 0 10px 24px rgb(0 0 0 / 0.28);
}

.profile-portrait--hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 8%;
  filter: none;
}

@media (min-width: 640px) {
  .profile-portrait--hero {
    width: 7.25rem;
    height: 7.25rem;
  }
}

@media (min-width: 1024px) {
  .profile-portrait--hero {
    width: 17.5rem;
    height: 17.5rem;
    border-radius: 1.05rem;
  }
}

.profile-portrait--about {
  width: min(13rem, 42vw);
  flex-shrink: 0;
}

.profile-portrait--card {
  max-width: 100%;
}
</style>
