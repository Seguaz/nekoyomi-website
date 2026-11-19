import type { DefaultTheme } from 'vitepress'

export interface NavTexts {
  get: string
  download: string
  changelogs: string
  features: string
  docs: string
  news: string
}

/**
 * Builds the navbar for a locale.
 * @param t Translated labels.
 * @param prefix Locale path prefix, e.g. '/es' ('' for English).
 */
export function navFor(t: NavTexts, prefix = ''): DefaultTheme.NavItem[] {
  return [
    {
      text: t.get,
      activeMatch: `^${prefix}/(download|changelogs)/?$`,
      items: [
        {
          text: t.download,
          link: `${prefix}/download/`,
        },
        {
          text: t.changelogs,
          link: `${prefix}/changelogs/`,
        },
      ],
    },
    {
      text: t.features,
      link: `${prefix}/docs/features`,
      activeMatch: `^${prefix}/docs/features`,
    },
    {
      text: t.docs,
      link: `${prefix}/docs/guides/getting-started`,
      activeMatch: `^${prefix}/docs/(?!features)`,
    },
    {
      text: t.news,
      link: `${prefix}/news/`,
      activeMatch: `^${prefix}/news/`,
    },
  ]
}
