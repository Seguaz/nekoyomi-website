import { createHash } from 'node:crypto'

/**
 * Security hardening for a static site hosted on GitHub Pages.
 *
 * GitHub Pages does not allow custom HTTP response headers, so the
 * Content-Security-Policy is delivered through a <meta http-equiv> tag that is
 * injected as the FIRST element of <head> in every generated page.
 *
 * Inline scripts that VitePress emits (theme bootstrap, page hash map) are
 * allowed by their exact SHA-256 hash, so no `'unsafe-inline'` is needed for
 * scripts and nothing else can run, even if some content were ever injected.
 */

const INLINE_SCRIPT_RE = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi

function isExecutableInlineScript(attrs: string): boolean {
  if (/\bsrc\s*=/i.test(attrs))
    return false
  const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase()
  // Data blocks (JSON, JSON-LD...) are never executed by the browser.
  return !type || type === 'module' || type === 'text/javascript' || type === 'application/javascript'
}

export function inlineScriptHashes(html: string): string[] {
  const hashes = new Set<string>()
  for (const [, attrs, body] of html.matchAll(INLINE_SCRIPT_RE)) {
    if (!isExecutableInlineScript(attrs) || body.length === 0)
      continue
    hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`)
  }
  return [...hashes]
}

export function buildCsp(scriptHashes: string[]): string {
  const directives: Record<string, string[]> = {
    'default-src': [`'none'`],
    'script-src': [`'self'`, ...scriptHashes],
    // Vue/VitePress render a few style="" attributes; styles cannot execute code.
    'style-src': [`'self'`, `'unsafe-inline'`],
    'img-src': [`'self'`, 'data:'],
    'font-src': [`'self'`],
    'media-src': [`'self'`],
    'connect-src': [`'self'`],
    'manifest-src': [`'self'`],
    'frame-src': [`'none'`],
    'worker-src': [`'none'`],
    'object-src': [`'none'`],
    'base-uri': [`'self'`],
    'form-action': [`'none'`],
    'upgrade-insecure-requests': [],
  }

  return Object.entries(directives)
    .map(([name, values]) => [name, ...values].join(' '))
    .join('; ')
}

/** Injects the CSP meta tag right after <meta charset>, before any script or stylesheet. */
export function injectCsp(html: string): string {
  if (html.includes('http-equiv="Content-Security-Policy"'))
    return html

  const csp = buildCsp(inlineScriptHashes(html))
  const tag = `<meta http-equiv="Content-Security-Policy" content="${csp}">`

  const charset = /<meta charset="[^"]*">/i
  if (charset.test(html))
    return html.replace(charset, match => `${match}\n    ${tag}`)

  return html.replace(/<head>/i, `<head>\n    ${tag}`)
}

/** Strict, script-free page used for legacy URL redirects. */
export function redirectPage(target: string): string {
  const csp = `default-src 'none'; base-uri 'none'; form-action 'none'`
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Security-Policy" content="${csp}">
    <meta name="referrer" content="no-referrer">
    <meta name="robots" content="noindex">
    <meta http-equiv="refresh" content="0; url=${target}">
    <link rel="canonical" href="${target}">
    <title>Redirecting…</title>
  </head>
  <body>
    <p>This page has moved to <a href="${target}">${target}</a>.</p>
  </body>
</html>
`
}

/**
 * Old URL paths (kept from the original Aniyomi site layout) -> current docs pages.
 * GitHub Pages has no server-side redirects, so a tiny static page is generated for each.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/help/': '/docs/guides/troubleshooting/',
  '/help/guides/getting-started/': '/docs/guides/getting-started',
  '/help/guides/troubleshooting/': '/docs/guides/troubleshooting/',
  '/help/guides/source-migration/': '/docs/guides/source-migration',
  '/help/guides/backups/': '/docs/guides/backups',
  '/help/guides/tracking/': '/docs/guides/tracking',
  '/help/guides/categories/': '/docs/guides/categories',
  '/help/guides/local-manga/': '/docs/guides/local-manga-source/',
  '/help/guides/local-anime/': '/docs/guides/local-anime-source/',
  '/help/guides/reader-settings/': '/docs/guides/reader-settings',
  '/help/guides/player-settings/': '/docs/guides/player-settings/',
  '/help/contribution/': '/docs/contribute',
  '/help/faq/': '/docs/faq/general',
}
