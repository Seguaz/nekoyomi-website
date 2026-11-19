<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from 'vue'
import { type AppRelease, data as release } from '../data/release.data'

const props = defineProps<{ type: keyof AppRelease }>()
const { type } = toRefs(props)

const exactFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'full',
  timeStyle: 'short',
  timeZone: 'UTC',
})

const relativeFormatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 365 * 24 * 3600],
  ['month', 30 * 24 * 3600],
  ['week', 7 * 24 * 3600],
  ['day', 24 * 3600],
  ['hour', 3600],
  ['minute', 60],
]

function relative(date: Date): string {
  const seconds = (date.getTime() - Date.now()) / 1000
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size)
      return relativeFormatter.format(Math.round(seconds / size), unit)
  }
  return 'just now'
}

const info = computed(() => {
  const iso = release[type.value].published_at ?? undefined
  const date = iso ? new Date(iso) : undefined
  return {
    iso,
    exact: date ? `${exactFormatter.format(date)} UTC` : 'unknown date',
    relative: date ? relative(date) : 'unknown date',
  }
})

// Mimic the <ClientOnly /> behavior to show custom text while rendering.
const show = ref(false)

onMounted(() => {
  show.value = true
})
</script>

<template>
  <time v-if="show" :datetime="info.iso" :title="info.exact">
    {{ info.relative }}
  </time>
  <time v-else :datetime="info.iso">
    {{ info.exact }}
  </time>
</template>
