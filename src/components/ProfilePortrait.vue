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
  /* Soft lift only — no black plate behind the cutout */
  filter: drop-shadow(0 18px 28px rgb(0 0 0 / 0.22));
}

.profile-portrait--about img {
  filter: drop-shadow(0 12px 20px rgb(0 0 0 / 0.18));
}

/* Soft fade so transparent cutout blends into site atmosphere */
.profile-portrait--hero img {
  max-height: min(34rem, 72vh);
  width: auto;
  margin-inline: auto;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 6%,
    #000 88%,
    transparent 100%
  );
  mask-image: linear-gradient(to bottom, transparent 0%, #000 6%, #000 88%, transparent 100%);
}

.profile-portrait--hero {
  width: min(20rem, 78vw);
  margin-inline: auto;
  max-height: min(34rem, 72vh);
}

@media (min-width: 1024px) {
  .profile-portrait--hero {
    width: min(24rem, 34vw);
    margin-inline: 0;
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
