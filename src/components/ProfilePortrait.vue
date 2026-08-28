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
  isolation: isolate;
}

.profile-portrait::after {
  content: '';
  position: absolute;
  inset: auto 8% -6% 8%;
  height: 18%;
  background: radial-gradient(ellipse at center, rgb(0 0 0 / 0.45), transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.profile-portrait img {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center bottom;
  /* Soft lift so the cutout sits in the site atmosphere instead of floating hard */
  filter: drop-shadow(0 28px 48px rgb(0 0 0 / 0.55)) saturate(1.04) contrast(1.02);
}

.profile-portrait--hero {
  width: min(20rem, 78vw);
  margin-inline: auto;
  /* Elongate read on the page without distorting the face too hard */
  max-height: min(34rem, 72vh);
}

.profile-portrait--hero img {
  max-height: min(34rem, 72vh);
  width: auto;
  margin-inline: auto;
}

@media (min-width: 1024px) {
  .profile-portrait--hero {
    width: min(24rem, 34vw);
    margin-inline: 0;
    justify-self: end;
  }
}

.profile-portrait--about {
  width: min(13rem, 42vw);
  flex-shrink: 0;
}

.profile-portrait--about img {
  filter: drop-shadow(0 18px 32px rgb(0 0 0 / 0.45)) saturate(1.03);
}

.profile-portrait--card {
  max-width: 100%;
}
</style>
