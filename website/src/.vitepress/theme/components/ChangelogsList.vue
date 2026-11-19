<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { data as changelogs } from '../data/changelogs.data'
import { APP_GITHUB_URL } from '../../config/constants'

// Raw HTML in release notes is NEVER rendered (html: false), only Markdown.
const md = new MarkdownIt({ html: false, linkify: false })

function renderMarkdown(string: string | null | undefined) {
  const body = string ?? 'No changelog provided.'
  const releasesUrl = APP_GITHUB_URL.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')
  const flavoredString = body
    // Checksums are shown on the download page and on GitHub; keep this list readable.
    .split(/\r?\n(?:---\r?\n\r?\n)?#{2,3} Checksums/)[0]
    // The version is already the heading of each entry.
    .replace(/^\s*#{1,2} Nekoyomi v[^\n]*\n/, '')
    .replace(/(?<=\(|(, ))@([\w-]+)(?=\)|(, ))/g, '[@$2](https://github.com/$2)')
    .replace(/(^|[\s(])#(\d+)\b/g, `$1[#$2](${APP_GITHUB_URL}/issues/$2)`)
    .replace(new RegExp(`${releasesUrl}/releases/tag/([\\w.-]+)`, 'g'), '#$1')
    .trim()
  return md.render(flavoredString)
}

const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
})
</script>

<template>
  <div
    v-for="(release, index) of changelogs"
    :key="release.tag_name"
  >
    <h2 :id="index === 0 ? 'latest' : release.tag_name">
      <a
        :href="release.html_url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ release.tag_name.substring(1) }}
      </a>
      <Badge v-if="index === 0" type="tip" text="Latest" />
      <a
        class="header-anchor"
        :href="index === 0 ? '#latest' : `#${release.tag_name}`"
        :aria-label="`Permalink to &quot;${release.tag_name}&quot;`"
      />
    </h2>
    <time :datetime="release.published_at!">
      {{ dateFormatter.format(new Date(release.published_at!)) }}
    </time>
    <div v-html="renderMarkdown(release.body)" />
  </div>
</template>

<style lang="stylus" scoped>
h2 {
  margin-bottom: 0
  display: flex
  align-items: center
  gap: 0.5rem
}

time {
  font-size: 0.875rem
  color: var(--vp-c-text-2)
}
</style>
