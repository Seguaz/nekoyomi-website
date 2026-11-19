// Generates the localized copies of the site before VitePress runs.
//
// For every locale in src/.vitepress/i18n/locales.json and every English page in src/:
//   - if translations/<locale>/<page>.md exists, that translation is used;
//   - otherwise the English page is used, with a short "not translated yet" notice.
// Internal links are rewritten to stay inside the locale (/docs/x -> /es/docs/x).
// The output goes to src/<locale>/, which is generated on every build and ignored by git.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const WEBSITE = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(WEBSITE, 'src')
const TRANSLATIONS = join(WEBSITE, 'translations')
const I18N = join(SRC, '.vitepress', 'i18n')

const readJson = file => JSON.parse(readFileSync(file, 'utf8'))
const locales = readJson(join(I18N, 'locales.json'))
const english = readJson(join(I18N, 'en.json'))

for (const { key } of locales) {
  if (!/^[a-z]{2}(?:-[a-z]{2})?$/.test(key))
    throw new Error(`Invalid locale key: ${key}`)
}
const localeKeys = new Set(locales.map(l => l.key))

// --- English source pages -------------------------------------------------------------------
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    const rel = relative(SRC, path).split(sep).join('/')
    if (rel === '.vitepress' || rel === 'public' || localeKeys.has(rel))
      continue
    if (statSync(path).isDirectory())
      walk(path, out)
    else if (name.endsWith('.md'))
      out.push(rel)
  }
  return out
}
const pages = walk(SRC)

// --- Helpers ----------------------------------------------------------------------------------
function isPageLink(link) {
  if (!link.startsWith('/') || link.startsWith('//'))
    return false
  const path = link.split(/[?#]/)[0]
  return !path.split('/').pop().includes('.') // assets have a file extension
}
const localize = (link, key) => (link === '/' ? `/${key}/` : `/${key}${link}`)

function rewriteLinks(text, key) {
  return text
    // Markdown links (not images): [text](/path)
    .replace(/(?<!!)(\]\()(\/[^)\s]*)/g, (m, a, link) => (isPageLink(link) ? a + localize(link, key) : m))
    // Reference links: [id]: /path
    .replace(/^(\[[^\]]+\]:\s*)(\/\S+)/gm, (m, a, link) => (isPageLink(link) ? a + localize(link, key) : m))
    // HTML attributes: href="/path"
    .replace(/(\shref=")(\/[^"]*)"/g, (m, a, link) => (isPageLink(link) ? `${a}${localize(link, key)}"` : m))
    // Frontmatter (home page actions/features): link: /path
    .replace(/^(\s*-?\s*link:\s*)(\/\S*)\s*$/gm, (m, a, link) => (isPageLink(link) ? a + localize(link, key) : m))
}

function splitFrontmatter(source) {
  const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  return m ? { fm: m[1], body: source.slice(m[0].length) } : { fm: '', body: source }
}

function setFrontmatter(fm, field, value) {
  const re = new RegExp(`^${field}:.*$`, 'm')
  return re.test(fm) ? fm.replace(re, `${field}: ${value}`) : `${fm}${fm ? '\n' : ''}${field}: ${value}`
}

function insertNotice(body, notice) {
  let inFence = false
  const lines = body.split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i]))
      inFence = !inFence
    if (!inFence && /^# /.test(lines[i])) {
      lines.splice(i + 1, 0, '', notice, '')
      return lines.join('\n')
    }
  }
  return `${notice}\n\n${body}`
}

// --- Generation -------------------------------------------------------------------------------
let translatedCount = 0
let fallbackCount = 0

for (const { key } of locales) {
  const dictFile = join(I18N, `${key}.json`)
  const dict = existsSync(dictFile) ? readJson(dictFile) : english
  const translateLabel = text => text.split(' - ').map(part => dict.sidebar?.[part] ?? part).join(' - ')

  const outDir = join(SRC, key)
  rmSync(outDir, { recursive: true, force: true })

  for (const page of pages) {
    const translationFile = join(TRANSLATIONS, key, page)
    const translated = existsSync(translationFile)
    let { fm, body } = splitFrontmatter(readFileSync(translated ? translationFile : join(SRC, page), 'utf8'))

    if (!translated) {
      const template = fm.match(/^titleTemplate:\s*(.+)$/m)
      if (template)
        fm = setFrontmatter(fm, 'titleTemplate', translateLabel(template[1].trim()))
      // The English page's own edit link would point to a translation that doesn't exist.
      fm = setFrontmatter(fm, 'editLink', 'false')
      body = insertNotice(body, `::: info ${dict.untranslatedTitle}\n${dict.untranslated}\n:::`)
      // Keep the app UI names in English next to English text.
      body = body.replace(/<nav to="([^"]+)">/g, '<nav to="$1" lang="en">')
    }

    // The copy sits one folder deeper (src/<locale>/...), so relative imports need one more "../".
    body = body.replace(/(@import\s+["'])((?:\.\.\/)+)/g, '$1../$2')

    const out = rewriteLinks(`---\n${fm}\n---\n${body}`, key)
    const target = join(outDir, page)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, out)
    translated ? translatedCount++ : fallbackCount++
  }
}

console.log(`i18n: ${locales.length} locales, ${pages.length} pages each (${translatedCount} translated, ${fallbackCount} English fallback)`)
