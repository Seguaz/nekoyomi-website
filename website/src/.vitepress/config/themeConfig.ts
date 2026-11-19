import type { DefaultTheme } from 'vitepress'

import nav from './navigation/navbar'
import sidebar from './navigation/sidebar'
import { APP_GITHUB_URL, DISCORD_URL, WEBSITE_GITHUB_URL } from './constants'

const themeConfig: DefaultTheme.Config = {
  logo: {
    src: '/img/logo-128px.png',
    width: 24,
    height: 24,
    alt: 'Nekoyomi logo',
  },

  nav,
  sidebar,

  outline: [2, 3],

  socialLinks: [
    {
      icon: 'github',
      link: APP_GITHUB_URL,
      ariaLabel: 'Project GitHub',
    },
    {
      icon: 'discord',
      link: DISCORD_URL,
      ariaLabel: 'Discord Server',
    },
  ],

  footer: {
    message: '<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">Open-source Apache Licensed</a> <span class="divider">|</span> <a href="/privacy/">Privacy policy</a>',
    copyright: `Copyright © ${new Date().getFullYear()} Nekoyomi · Based on Aniyomi and Mihon`,
  },

  editLink: {
    pattern: `${WEBSITE_GITHUB_URL}/edit/main/website/src/:path`,
    text: 'Help us improve this page',
  },

  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      forceLocale: true,
      dateStyle: 'long',
      timeStyle: 'short',
    },
  },

  search: {
    provider: 'local',
  },
}

export default themeConfig
