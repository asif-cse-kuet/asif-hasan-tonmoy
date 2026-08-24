<script setup lang="ts">
import { Marked } from 'marked'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{ markdown: string }>()

const root = ref<HTMLElement | null>(null)

/** Mermaid fences become placeholders so we can render them after mount. */
const md = new Marked({ gfm: true, breaks: false }).use({
  renderer: {
    code(token) {
      if (token.lang !== 'mermaid') return false
      return `<div class="mermaid-host" data-graph="${encodeURIComponent(token.text)}"></div>`
    },
  },
})

const html = computed(() => md.parse(props.markdown, { async: false }))

let mermaidReady: Promise<typeof import('mermaid').default> | null = null

function loadMermaid() {
  if (!mermaidReady) {
    mermaidReady = import('mermaid').then((mod) => {
      mod.default.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'strict',
        fontFamily: '"Source Sans 3", system-ui, sans-serif',
        themeVariables: {
          background: '#0c1219',
          primaryColor: '#1a2330',
          primaryTextColor: '#e8eef4',
          primaryBorderColor: '#3d7ea6',
          lineColor: '#c5d0dc',
          secondaryColor: '#2a3a4d',
          tertiaryColor: '#1a2330',
          fontSize: '14px',
        },
      })
      return mod.default
    })
  }
  return mermaidReady
}

async function renderDiagrams() {
  const hosts = root.value?.querySelectorAll<HTMLElement>('.mermaid-host[data-graph]')
  if (!hosts?.length) return

  const mermaid = await loadMermaid()
  let index = 0
  for (const host of hosts) {
    const source = decodeURIComponent(host.dataset.graph ?? '')
    if (!source) continue
    host.removeAttribute('data-graph')
    try {
      const { svg } = await mermaid.render(`diagram-${Date.now()}-${index++}`, source)
      host.innerHTML = svg
    } catch {
      host.innerHTML = `<pre class="mermaid-fallback">${source.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c] ?? c)}</pre>`
    }
  }
}

onMounted(renderDiagrams)
watch(html, async () => {
  await nextTick()
  await renderDiagrams()
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -- content is local, authored markdown -->
  <div ref="root" class="prose-article" v-html="html" />
</template>
