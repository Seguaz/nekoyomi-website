import type { DefaultTheme } from 'vitepress'

import { navFor } from './navigation/navbar'
import { sidebarFor } from './navigation/sidebar'
import { APP_GITHUB_URL, DISCORD_URL, KOFI_URL, WEBSITE_GITHUB_URL } from './constants'
import { type Dictionary, english, searchLocales } from './i18n'

const escapeHtml = (text: string) => text
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

/**
 * The parts of the theme config that change with the language.
 * @param t Dictionary of the locale.
 * @param prefix Locale path prefix, e.g. '/es' ('' for English).
 */
export function localeThemeConfig(t: Dictionary, prefix = ''): DefaultTheme.Config {
  return {
    nav: navFor(t.nav, prefix),
    sidebar: sidebarFor(t.sidebar, prefix),

    outline: { level: [2, 3], label: t.theme.outlineLabel },
    docFooter: { prev: t.theme.prev, next: t.theme.next },
    returnToTopLabel: t.theme.returnToTop,
    sidebarMenuLabel: t.theme.sidebarMenu,
    darkModeSwitchLabel: t.theme.appearance,
    lightModeSwitchTitle: t.theme.switchToLight,
    darkModeSwitchTitle: t.theme.switchToDark,
    langMenuLabel: t.theme.langMenu,
    skipToContentLabel: t.theme.skipToContent,
    notFound: {
      title: t.theme.notFoundTitle,
      quote: t.theme.notFoundQuote,
      linkText: t.theme.notFoundLink,
      link: `${prefix}/`,
    },

    socialLinks: [
      {
        icon: 'github',
        link: APP_GITHUB_URL,
        ariaLabel: 'GitHub',
      },
      {
        icon: 'discord',
        link: DISCORD_URL,
        ariaLabel: 'Discord',
      },
      {
        // Plain link only: no Ko-fi widget/script, so the CSP stays third-party free.
        icon: 'kofi',
        link: KOFI_URL,
        ariaLabel: t.theme.kofi,
      },
    ],

    footer: {
      message: `<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">${escapeHtml(t.theme.license)}</a> <span class="divider">|</span> <a href="${prefix}/privacy/">${escapeHtml(t.theme.privacyPolicy)}</a>`,
      copyright: `Copyright © ${new Date().getFullYear()} Nekoyomi · ${escapeHtml(t.theme.basedOn)}`,
    },

    editLink: {
      // Translated pages live in website/translations/<locale>/, English pages in website/src/.
      pattern: prefix
        ? `${WEBSITE_GITHUB_URL}/edit/main/website/translations/:path`
        : `${WEBSITE_GITHUB_URL}/edit/main/website/src/:path`,
      text: t.theme.editLink,
    },

    lastUpdated: {
      text: t.theme.lastUpdated,
      formatOptions: {
        forceLocale: true,
        dateStyle: 'long',
        timeStyle: 'short',
      },
    },
  }
}

const themeConfig: DefaultTheme.Config = {
  logo: {
    src: '/img/logo-128px.png',
    width: 24,
    height: 24,
    alt: 'Nekoyomi logo',
  },

  ...localeThemeConfig(english),

  search: {
    provider: 'local',
    options: {
      locales: searchLocales,
    },
  },
}

export default themeConfig
