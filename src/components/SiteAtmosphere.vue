<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  EdgesGeometry,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
  type Material,
} from 'three'

import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const { prefersReducedMotion } = usePrefersReducedMotion()
const root = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

let renderer: WebGLRenderer | undefined
let scene: Scene | undefined
let camera: PerspectiveCamera | undefined
let points: Points | undefined
let lattice: LineSegments | undefined
let frame = 0
let running = false
const pointer = { x: 0, y: 0 }
const target = { x: 0, y: 0 }

function webglAvailable() {
  try {
    const probe = document.createElement('canvas')
    return Boolean(probe.getContext('webgl2') || probe.getContext('webgl'))
  } catch {
    return false
  }
}

function aim(clientX: number, clientY: number) {
  const w = window.innerWidth || 1
  const h = window.innerHeight || 1
  target.x = (clientX / w) * 2 - 1
  target.y = -((clientY / h) * 2 - 1)
  root.value?.style.setProperty('--px', String(target.x))
  root.value?.style.setProperty('--py', String(target.y))
}

function onPointer(event: PointerEvent) {
  aim(event.clientX, event.clientY)
}

function onTouch(event: TouchEvent) {
  const touch = event.touches[0]
  if (!touch) return
  aim(touch.clientX, touch.clientY)
}

function resize() {
  if (!renderer || !camera || !canvas.value) return
  const width = window.innerWidth
  const height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height, false)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
}

function buildField() {
  const count = prefersReducedMotion.value ? 220 : 720
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const teal = new Color('#3cb8a4')
  const copper = new Color('#e25d2a')
  const mist = new Color('#d5c9bc')

  for (let i = 0; i < count; i += 1) {
    const r = 18 + Math.random() * 28
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)

    const mix = Math.random()
    const color = mix > 0.72 ? copper : mix > 0.4 ? teal : mist
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  geometry.setAttribute('color', new BufferAttribute(colors, 3))

  const material = new PointsMaterial({
    size: 0.11,
    vertexColors: true,
    transparent: true,
    opacity: 0.72,
    depthWrite: false,
    blending: AdditiveBlending,
  })

  return new Points(geometry, material)
}

function buildLattice() {
  const geometry = new IcosahedronGeometry(9.5, 1)
  const edges = new EdgesGeometry(geometry)
  const material = new LineBasicMaterial({
    color: '#3cb8a4',
    transparent: true,
    opacity: 0.22,
  })
  return new LineSegments(edges, material)
}

function tick() {
  if (!running || !renderer || !scene || !camera) return
  frame = requestAnimationFrame(tick)

  pointer.x += (target.x - pointer.x) * 0.045
  pointer.y += (target.y - pointer.y) * 0.045

  const t = performance.now() * 0.00012
  if (points) {
    points.rotation.y = t * (prefersReducedMotion.value ? 0.15 : 1.1)
    points.rotation.x = Math.sin(t * 0.7) * 0.12 + pointer.y * 0.28
    points.rotation.z = pointer.x * 0.18
  }
  if (lattice) {
    lattice.rotation.y = -t * 0.55 + pointer.x * 0.45
    lattice.rotation.x = pointer.y * 0.4 + 0.35
  }

  camera.position.x = pointer.x * 2.4
  camera.position.y = pointer.y * 1.6
  camera.lookAt(0, 0, 0)
  renderer.render(scene, camera)
}

onMounted(() => {
  window.addEventListener('pointermove', onPointer, { passive: true })
  window.addEventListener('touchmove', onTouch, { passive: true })
  window.addEventListener('touchstart', onTouch, { passive: true })
  window.addEventListener('resize', resize)

  if (!canvas.value || !webglAvailable()) return

  try {
    scene = new Scene()
    camera = new PerspectiveCamera(55, 1, 0.1, 120)
    camera.position.z = 28

    renderer = new WebGLRenderer({
      canvas: canvas.value,
      antialias: true,
      alpha: true,
      powerPreference: 'low-power',
    })
    renderer.setClearColor(0x000000, 0)

    points = buildField()
    lattice = buildLattice()
    scene.add(points)
    scene.add(lattice)

    resize()
    running = true
    tick()
  } catch {
    running = false
  }
})

onBeforeUnmount(() => {
  running = false
  cancelAnimationFrame(frame)
  window.removeEventListener('pointermove', onPointer)
  window.removeEventListener('touchmove', onTouch)
  window.removeEventListener('touchstart', onTouch)
  window.removeEventListener('resize', resize)
  points?.geometry.dispose()
  ;(points?.material as Material | undefined)?.dispose()
  lattice?.geometry.dispose()
  ;(lattice?.material as Material | undefined)?.dispose()
  renderer?.dispose()
})
</script>

<template>
  <div ref="root" class="atmosphere-root" aria-hidden="true">
    <div class="orb orb-a" />
    <div class="orb orb-b" />
    <div class="orb orb-c" />
    <canvas ref="canvas" class="site-atmosphere" />
  </div>
</template>

<style scoped>
.atmosphere-root {
  --px: 0;
  --py: 0;
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.site-atmosphere {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(48px);
  opacity: 0.42;
  mix-blend-mode: screen;
  will-change: transform;
}

.orb-a {
  top: -18%;
  left: -12%;
  width: 48vw;
  height: 48vw;
  background: radial-gradient(circle, rgb(226 93 42 / 0.55), transparent 68%);
  animation: drift-a 28s ease-in-out infinite;
  transform: translate(calc(var(--px) * 36px), calc(var(--py) * -28px));
}

.orb-b {
  top: 12%;
  right: -18%;
  width: 42vw;
  height: 42vw;
  background: radial-gradient(circle, rgb(60 184 164 / 0.5), transparent 70%);
  animation: drift-b 34s ease-in-out infinite;
  transform: translate(calc(var(--px) * -42px), calc(var(--py) * 34px));
}

.orb-c {
  bottom: -22%;
  left: 28%;
  width: 56vw;
  height: 36vw;
  background: radial-gradient(circle, rgb(240 160 106 / 0.28), transparent 72%);
  animation: drift-c 40s ease-in-out infinite;
  transform: translate(calc(var(--px) * 22px), calc(var(--py) * 18px));
}

@keyframes drift-a {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 8% 12%;
  }
}

@keyframes drift-b {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: -10% 6%;
  }
}

@keyframes drift-c {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 6% -10%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orb {
    animation: none;
    opacity: 0.22;
  }
}
</style>
