<script setup lang="ts">
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const { prefersReducedMotion } = usePrefersReducedMotion()
</script>

<template>
  <div
    class="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
    aria-hidden="true"
  >
    <div
      class="hero-orb hero-orb-a"
      :class="{ 'hero-orb-static': prefersReducedMotion }"
    />
    <div
      class="hero-orb hero-orb-b"
      :class="{ 'hero-orb-static': prefersReducedMotion }"
    />
    <svg
      class="hero-wireframe"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200 20 L380 120 L380 280 L200 380 L20 280 L20 120 Z"
        stroke="currentColor"
        stroke-width="0.75"
        opacity="0.35"
      />
      <path
        d="M200 20 L200 380 M20 120 L380 280 M380 120 L20 280"
        stroke="currentColor"
        stroke-width="0.5"
        opacity="0.25"
      />
      <circle cx="200" cy="200" r="80" stroke="currentColor" stroke-width="0.5" opacity="0.2" />
    </svg>
  </div>
</template>

<style scoped>
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.hero-orb-a {
  width: 280px;
  height: 280px;
  top: -60px;
  right: -40px;
  background: rgb(61 126 166 / 0.35);
  animation: float-a 14s ease-in-out infinite;
}

.hero-orb-b {
  width: 200px;
  height: 200px;
  bottom: 10%;
  left: -30px;
  background: rgb(42 58 77 / 0.5);
  animation: float-b 18s ease-in-out infinite;
}

.hero-orb-static {
  animation: none;
}

.hero-wireframe {
  position: absolute;
  right: 5%;
  top: 15%;
  width: min(320px, 40vw);
  height: auto;
  color: var(--color-glow);
  opacity: 0.5;
}

@keyframes float-a {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-20px, 24px);
  }
}

@keyframes float-b {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(16px, -20px);
  }
}
</style>
