import type { HeadConfig, TransformContext } from 'vitepress'
import { locales } from '../i18n'

const cleanPath = (relativePath: string) => relativePath.replace(/((^|\/)index)?\.md$/, '$2')

function generateMeta(context: TransformContext, hostname: string) {
  const head: HeadConfig[] = []
  const { pageData } = context

  const url = `${hostname}/${cleanPath(pageData.relativePath)}`

  // Alternate language versions of the same page (every page exists in every locale).
  const firstSegment = pageData.relativePath.split('/')[0]
  const pageLocale = locales.find(l => l.key === firstSegment)
  const basePath = pageLocale ? pageData.relativePath.slice(firstSegment.length + 1) : pageData.relativePath
  if (!pageData.isNotFound) {
    head.push(['link', { rel: 'alternate', hreflang: 'en', href: `${hostname}/${cleanPath(basePath)}` }])
    for (const { key, lang } of locales)
      head.push(['link', { rel: 'alternate', hreflang: lang, href: `${hostname}/${key}/${cleanPath(basePath)}` }])
    head.push(['link', { rel: 'alternate', hreflang: 'x-default', href: `${hostname}/${cleanPath(basePath)}` }])
  }
  head.push(['meta', { property: 'og:locale', content: (pageLocale?.lang ?? 'en-US').replace('-', '_') }])

  const addMetaTag = (name: string, content: any) => {
    if (content !== undefined && content !== null)
      head.push(['meta', { name, content: String(content) }])
  }

  const addPropertyTag = (property: string, content: any) => {
    if (content !== undefined && content !== null)
      head.push(['meta', { property, content: String(content) }])
  }

  const addLinkTag = (rel: string, href: string, type?: string, title?: string) => {
    if (href) {
      const attributes: { rel: string, href: string, type?: string, title?: string } = { rel, href }
      if (type)
        attributes.type = type
      if (title)
        attributes.title = title
      head.push(['link', attributes])
    }
  }

  head.push(['link', { rel: 'canonical', href: url }])
  addPropertyTag('og:url', url)

  if (pageData.frontmatter.theme) {
    addMetaTag('theme-color', pageData.frontmatter.theme)
  }

  if (pageData.frontmatter.type) {
    addPropertyTag('og:type', pageData.frontmatter.type)
  }

  if (pageData.frontmatter.customMetaTitle) {
    addPropertyTag('og:title', pageData.frontmatter.customMetaTitle)
    addPropertyTag('og:site_name', '')
  }
  else {
    addPropertyTag('og:title', pageData.frontmatter.title)
  }

  if (pageData.frontmatter.description) {
    addPropertyTag('og:description', pageData.frontmatter.description)
  }

  if (pageData.frontmatter.image) {
    addPropertyTag('og:image', `${hostname}/${pageData.frontmatter.image.replace(/^\//, '')}`)
  }
  else {
    // One static, locally generated preview image for every page.
    addPropertyTag('og:image', `${hostname}/img/og-image.png`)
    addPropertyTag('og:image:width', '1200')
    addPropertyTag('og:image:height', '628')
    addPropertyTag('og:image:type', 'image/png')
    addPropertyTag('og:image:alt', 'Nekoyomi – Anime, manga and light novels in one app.')
    addMetaTag('twitter:card', 'summary_large_image')
  }

  if (pageData.frontmatter.tag) {
    addPropertyTag('article:tag', pageData.frontmatter.tag)
  }

  if (pageData.frontmatter.date) {
    addPropertyTag('article:published_time', pageData.frontmatter.date)
  }

  if (pageData.lastUpdated && pageData.frontmatter.lastUpdated !== false) {
    addPropertyTag('article:modified_time', new Date(pageData.lastUpdated).toISOString())
  }

  if (pageData.filePath === 'news/index.md') {
    addLinkTag('alternate', `${hostname}/feed.rss`, 'application/rss+xml', 'RSS feed for the news archive')
    addLinkTag('alternate', `${hostname}/news.json`, 'application/json', 'JSON of the news archive')
  }

  return head
}

export default generateMeta
