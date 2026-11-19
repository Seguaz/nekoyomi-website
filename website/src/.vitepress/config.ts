import process from 'node:process'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vitepress'

import markdownConfig from './config/markdownConfig'

// For use with loading Markdown plugins
import themeConfig from './config/themeConfig'

// Theme related config
import headConfig from './config/headConfig'

import generateMeta from './config/hooks/generateMeta'

// Enhanced meta generation
import generateFeed from './config/hooks/generateFeed'

import { SITE_URL } from './config/constants'
import { dictionary, english, locales } from './config/i18n'
import { LEGACY_REDIRECTS, injectCsp, redirectPage } from './config/security'
import { localeThemeConfig } from './config/themeConfig'

const title = 'Nekoyomi'
const description = 'Watch anime, read manga and light novels – all in one app, on your Android device.'

const env = loadEnv('', process.cwd())
const hostname: string = (env.VITE_HOSTNAME || SITE_URL).replace(/\/$/, '')

export default defineConfig({
  outDir: '../dist',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  // Site data (nav/sidebar of every locale) goes into one cacheable script instead of being inlined in every page.
  metaChunk: true,
  title,
  description,
  sitemap: {
    hostname,
  },
  head: headConfig,
  markdown: markdownConfig,
  themeConfig,
  // Localized copies of the pages are generated into src/<locale>/ by scripts/i18n.mjs.
  locales: {
    root: { label: english.label, lang: 'en-US' },
    ...Object.fromEntries(locales.map(({ key, lang, dir }) => {
      const t = dictionary(key)
      return [key, {
        label: t.label,
        lang,
        dir,
        link: `/${key}/`,
        description: t.description,
        themeConfig: localeThemeConfig(t, `/${key}`),
      }]
    })),
  },
  transformHead: async context => generateMeta(context, hostname),
  // Every generated page gets a strict, hash-based Content-Security-Policy.
  transformHtml: html => injectCsp(html),
  buildEnd: async (context) => {
    await generateFeed(context, hostname)

    // Static redirect pages for legacy URLs (GitHub Pages has no server redirects).
    for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
      const dir = resolve(context.outDir, `.${from}`)
      await mkdir(dir, { recursive: true })
      await writeFile(resolve(dir, 'index.html'), redirectPage(to))
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          // Used to show the release version on navbar.
          find: /^.*\/VPNavBarMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomNavBarMenu.vue', import.meta.url),
          ),
        },
        {
          find: /^.*VPNavScreenMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomNavScreenMenu.vue', import.meta.url),
          ),
        },
        {
          find: /^.*VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomSwitchAppearance.vue', import.meta.url),
          ),
        },
      ],
    },
    build: {
      // Never ship source maps to production.
      sourcemap: false,
    },
  },
})
