import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Get v{app_version}',
    activeMatch: '^/*?(download|changelogs)/*?$',
    items: [
      {
        text: 'Download',
        link: '/download/',
      },
      {
        text: 'Changelogs',
        link: '/changelogs/',
      },
    ],
  },
  {
    text: 'Features',
    link: '/docs/features',
    activeMatch: '^/docs/features',
  },
  {
    text: 'Docs',
    link: '/docs/guides/getting-started',
    activeMatch: '^/docs/(?!features)',
  },
  {
    text: 'News',
    link: '/news/',
    activeMatch: '/news/',
  },
]

export default nav
