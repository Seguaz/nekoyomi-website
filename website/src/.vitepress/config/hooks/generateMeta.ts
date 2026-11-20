import type { HeadConfig, TransformContext } from 'vitepress'
import { APP_GITHUB_URL, DISCORD_URL, WEBSITE_GITHUB_URL } from '../constants'
import { dictionary, isTranslated, locales } from '../i18n'

const cleanPath = (relativePath: string) => relativePath.replace(/((^|\/)index)?\.md$/, '$2')

/** JSON-LD for the home pages, so search engines know Nekoyomi is an Android app and which repo is its official one. */
function structuredData(hostname: string, homeUrl: string, lang: string, description: string) {
  const json = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${hostname}/#website`,
        'url': `${hostname}/`,
        'name': 'Nekoyomi',
        'inLanguage': lang,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${hostname}/#app`,
        'name': 'Nekoyomi',
        'url': homeUrl,
        'description': description,
        'applicationCategory': 'MultimediaApplication',
        'operatingSystem': 'Android 8.0+',
        'downloadUrl': `${hostname}/download/`,
        'isAccessibleForFree': true,
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
        'image': `${hostname}/img/logo.png`,
        'license': 'https://www.apache.org/licenses/LICENSE-2.0',
        'author': { '@type': 'Person', 'name': 'Seguaz', 'url': 'https://github.com/Seguaz' },
        'codeRepository': APP_GITHUB_URL,
        'sameAs': [APP_GITHUB_URL, WEBSITE_GITHUB_URL, DISCORD_URL],
      },
    ],
  })
  // Data block (not executed), escaped so it can never close the <script> element.
  return json.replace(/</g, String.fromCharCode(92) + 'u003c')
}

function generateMeta(context: TransformContext, hostname: string) {
  const head: HeadConfig[] = []
  const { pageData } = context

  const url = `${hostname}/${cleanPath(pageData.relativePath)}`

  const firstSegment = pageData.relativePath.split('/')[0]
  const pageLocale = locales.find(l => l.key === firstSegment)
  const basePath = pageLocale ? pageData.relativePath.slice(firstSegment.length + 1) : pageData.relativePath
  const englishUrl = `${hostname}/${cleanPath(basePath)}`
  // Untranslated pages under a locale are English copies: point search engines to the English original.
  const isFallback = !!pageLocale && !isTranslated(pageLocale.key, basePath)
  const canonical = isFallback ? englishUrl : url

  if (!pageData.isNotFound && !isFallback) {
    // Alternate language versions: English plus every locale that really translates this page.
    head.push(['link', { rel: 'alternate', hreflang: 'en', href: englishUrl }])
    for (const { key, lang } of locales) {
      if (isTranslated(key, basePath))
        head.push(['link', { rel: 'alternate', hreflang: lang, href: `${hostname}/${key}/${cleanPath(basePath)}` }])
    }
    head.push(['link', { rel: 'alternate', hreflang: 'x-default', href: englishUrl }])
  }
  head.push(['meta', { property: 'og:locale', content: (pageLocale?.lang ?? 'en-US').replace('-', '_') }])
  head.push(['meta', { property: 'og:site_name', content: 'Nekoyomi' }])

  if (basePath === 'index.md' && !isFallback) {
    const description = pageData.frontmatter.description ?? dictionary(pageLocale?.key ?? 'en').description
    head.push(['script', { type: 'application/ld+json' }, structuredData(hostname, url, pageLocale?.lang ?? 'en-US', description)])
  }

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

  head.push(['link', { rel: 'canonical', href: canonical }])
  addPropertyTag('og:url', canonical)

  if (pageData.frontmatter.theme) {
    addMetaTag('theme-color', pageData.frontmatter.theme)
  }

  if (pageData.frontmatter.type) {
    addPropertyTag('og:type', pageData.frontmatter.type)
  }

  if (pageData.frontmatter.customMetaTitle) {
    addPropertyTag('og:title', pageData.frontmatter.customMetaTitle)
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
