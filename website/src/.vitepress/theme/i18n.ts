import { useData } from 'vitepress'
import { computed } from 'vue'
import en from '../i18n/en.json'

type ComponentKey = keyof typeof en.components

// Every locale dictionary, bundled at build time (they are small).
const dictionaries = import.meta.glob<typeof en>('../i18n/*.json', { eager: true, import: 'default' })

/** Component strings and helpers for the current locale (English fallback for anything missing). */
export function useI18n() {
  const { localeIndex, lang } = useData()

  const components = computed(() => {
    const dict = localeIndex.value === 'root' ? undefined : dictionaries[`../i18n/${localeIndex.value}.json`]
    return { ...en.components, ...(dict?.components ?? {}) }
  })

  const t = (key: ComponentKey) => components.value[key]

  /** Prefixes an absolute site path with the current locale (e.g. /docs/x -> /es/docs/x). */
  const localePath = (path: string) => (localeIndex.value === 'root' ? path : `/${localeIndex.value}${path}`)

  return { t, localePath, lang, localeIndex }
}

export type TemplatePart = { text: string } | { slot: string }

/** Splits "Made with {heart} by {author}" into text parts and named slots, keeping the word order of each language. */
export function splitTemplate(template: string): TemplatePart[] {
  return template
    .split(/(\{\w+\})/)
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^\{(\w+)\}$/)
      return match ? { slot: match[1] } : { text: part }
    })
}
