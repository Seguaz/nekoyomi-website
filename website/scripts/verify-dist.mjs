// Post-build security verification. Fails (exit code 1) if any generated page
// could load or run something it shouldn't. Run with: pnpm verify
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const dist = resolve(fileURLToPath(new URL('../dist', import.meta.url)))
const errors = []
const fail = (file, message) => errors.push(`${relative(dist, file) || file}: ${message}`)

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? walk(path) : [path]
  })
}

if (!existsSync(dist)) {
  console.error(`dist folder not found at ${dist}. Run "pnpm build" first.`)
  process.exit(1)
}

const files = walk(dist)
const htmlFiles = files.filter(f => f.endsWith('.html'))

const REQUIRED_DIRECTIVES = [
  `default-src 'none'`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'none'`,
  `frame-src 'none'`,
]

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8')
  const isRedirect = html.includes('http-equiv="refresh"')

  // 1. A CSP meta tag must exist and come before any script or stylesheet.
  const cspMatch = /<meta http-equiv="Content-Security-Policy" content="([^"]+)">/.exec(html)
  if (!cspMatch) {
    fail(file, 'missing Content-Security-Policy meta tag')
    continue
  }
  const csp = cspMatch[1]
  const firstResource = html.search(/<script\b|<link\b[^>]*rel="(?:stylesheet|modulepreload|preload)"/i)
  if (firstResource !== -1 && firstResource < cspMatch.index)
    fail(file, 'CSP meta tag appears after a script or stylesheet')

  if (!isRedirect) {
    for (const directive of REQUIRED_DIRECTIVES) {
      if (!csp.includes(directive))
        fail(file, `CSP is missing "${directive}"`)
    }
    if (/script-src[^;]*'unsafe-(?:inline|eval)'/.test(csp))
      fail(file, 'CSP allows unsafe inline/eval scripts')
  }

  // 2. Every executable inline script must be allowed by its exact hash.
  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/i.test(attrs)) {
      const src = /\bsrc\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1] ?? ''
      if (/^(?:https?:)?\/\//i.test(src))
        fail(file, `external script: ${src}`)
      continue
    }
    const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase()
    if (type && !['module', 'text/javascript', 'application/javascript'].includes(type))
      continue
    if (!body)
      continue
    const hash = `'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`
    if (!csp.includes(hash))
      fail(file, `inline script not covered by CSP hash ${hash}`)
  }

  // 3. No iframes/embeds, inline event handlers or javascript: URLs.
  if (/<(?:iframe|embed|object|frame)\b/i.test(html))
    fail(file, 'contains an iframe/embed/object')
  if (/<[a-z][^>]*\son[a-z]+\s*=/i.test(html))
    fail(file, 'contains an inline event handler attribute (on...=)')
  if (/(?:href|src|action)\s*=\s*["']?\s*javascript:/i.test(html))
    fail(file, 'contains a javascript: URL')

  // 4. No third-party resources (images, media, stylesheets, fonts...).
  for (const [tag] of html.matchAll(/<(?:img|video|audio|source|track|link)\b[^>]*>/gi)) {
    if (/^<link/i.test(tag) && !/rel="(?:stylesheet|preload|modulepreload|icon|manifest|apple-touch-icon|prefetch)"/i.test(tag))
      continue
    const url = /\b(?:src|href|srcset)\s*=\s*["']?([^"'\s>]+)/i.exec(tag)?.[1] ?? ''
    if (/^(?:https?:)?\/\//i.test(url))
      fail(file, `third-party resource: ${url}`)
  }

  // 5. Pages must not leak the referrer.
  if (!isRedirect && !html.includes('<meta name="referrer" content="no-referrer">'))
    fail(file, 'missing no-referrer policy')
}

// 6. Static files that must be published.
for (const required of ['CNAME', 'robots.txt', '.well-known/security.txt', '404.html', 'index.html', 'sitemap.xml']) {
  if (!existsSync(join(dist, required)))
    errors.push(`missing ${required}`)
}

// 7. No source maps in production.
for (const file of files.filter(f => f.endsWith('.map')))
  fail(file, 'source map published')

if (errors.length) {
  console.error(`\n✖ Security verification failed (${errors.length} problem(s)):\n`)
  for (const error of errors)
    console.error(`  - ${error}`)
  process.exit(1)
}

console.log(`✔ Security verification passed: ${htmlFiles.length} HTML pages checked.`)
