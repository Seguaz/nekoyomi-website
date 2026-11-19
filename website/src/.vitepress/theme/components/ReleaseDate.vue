<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from 'vue'
import { type AppRelease, data as release } from '../data/release.data'
import { useI18n } from '../i18n'

const { t, lang } = useI18n()

const props = defineProps<{ type: keyof AppRelease }>()
const { type } = toRefs(props)

const exactFormatter = computed(() => new Intl.DateTimeFormat(lang.value, {
  dateStyle: 'full',
  timeStyle: 'short',
  timeZone: 'UTC',
}))

const relativeFormatter = computed(() => new Intl.RelativeTimeFormat(lang.value, { numeric: 'auto' }))

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
      return relativeFormatter.value.format(Math.round(seconds / size), unit)
  }
  return t('justNow')
}

const info = computed(() => {
  const iso = release[type.value].published_at ?? undefined
  const date = iso ? new Date(iso) : undefined
  return {
    iso,
    exact: date ? `${exactFormatter.value.format(date)} UTC` : t('unknownDate'),
    relative: date ? relative(date) : t('unknownDate'),
    // Locale-independent text for the server render, so it never differs from the browser's first render
    // (Node and the browser can ship different ICU locale data).
    plain: iso ? iso.slice(0, 10) : t('unknownDate'),
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
    {{ info.plain }}
  </time>
</template>
