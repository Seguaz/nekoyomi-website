import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import en from '../i18n/en.json'
import localeList from '../i18n/locales.json'

export type Dictionary = typeof en

export interface LocaleInfo {
  key: string
  lang: string
  dir: 'ltr' | 'rtl'
  appLocale: string
}

export const english: Dictionary = en
export const locales = localeList as LocaleInfo[]

const I18N_DIR = fileURLToPath(new URL('../i18n/', import.meta.url))
const TRANSLATIONS_DIR = fileURLToPath(new URL('../../../translations/', import.meta.url))

/**
 * Whether a page has a real translation (website/translations/<key>/<page>.md).
 * Pages without one are English copies under the locale, so search engines are pointed to the English page.
 * @param key Locale key, e.g. 'es'.
 * @param page Page path relative to src/, e.g. 'docs/features.md'.
 */
export function isTranslated(key: string, page: string): boolean {
  return existsSync(`${TRANSLATIONS_DIR}${key}/${page}`)
}

/** Deep-merges a translation over the English dictionary, so missing keys fall back to English. */
function withFallback<T>(base: T, override: unknown): T {
  if (typeof base !== 'object' || base === null || typeof override !== 'object' || override === null)
    return (override ?? base) as T
  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) }
  for (const [key, value] of Object.entries(override as Record<string, unknown>))
    result[key] = key in result ? withFallback(result[key], value) : value
  return result as T
}

/** Dictionary of a locale (English for missing translations). */
export function dictionary(key: string): Dictionary {
  const file = `${I18N_DIR}${key}.json`
  return existsSync(file) ? withFallback(english, JSON.parse(readFileSync(file, 'utf8'))) : english
}

function searchTranslations(t: Dictionary) {
  return {
    translations: {
      button: { buttonText: t.search.button, buttonAriaLabel: t.search.button },
      modal: {
        displayDetails: t.search.details,
        resetButtonTitle: t.search.reset,
        backButtonTitle: t.search.close,
        noResultsText: t.search.noResults,
        footer: {
          selectText: t.search.select,
          navigateText: t.search.navigate,
          closeText: t.search.dismiss,
        },
      },
    },
  }
}

export const searchLocales = Object.fromEntries([
  ['root', searchTranslations(english)],
  ...locales.map(({ key }) => [key, searchTranslations(dictionary(key))]),
])
