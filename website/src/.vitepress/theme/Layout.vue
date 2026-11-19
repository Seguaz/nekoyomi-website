<script setup lang='ts'>
import { useData } from 'vitepress'
import DefaultTheme, { useSidebar } from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import MadeBy from './components/MadeBy.vue'

const { isDark } = useData()
// The default footer is hidden on pages with a sidebar, so the credit line is placed
// after the doc content there, and below the footer everywhere else.
const { hasSidebar } = useSidebar()

function shouldEnableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!shouldEnableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  // @ts-expect-error Missing types as its experimental
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <MadeBy v-if="hasSidebar" class="made-by-doc" />
    </template>
    <template #layout-bottom>
      <MadeBy v-if="!hasSidebar" class="made-by-footer" />
    </template>
  </DefaultTheme.Layout>
</template>

<style lang='stylus'>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none
  mix-blend-mode: normal
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999
}

.Layout .MadeBy.made-by-footer {
  padding-top: 0
}

.VPDoc .MadeBy.made-by-doc {
  margin-top: 48px
  padding: 24px 0 0
  border-top: 1px solid var(--vp-c-divider)
}
</style>
