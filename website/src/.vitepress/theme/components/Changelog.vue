<script setup lang="ts">
import { computed, toRefs } from 'vue'
import MarkdownIt from 'markdown-it'
import { type AppRelease, data as release } from '../data/release.data'
import { APP_GITHUB_URL } from '../../config/constants'

const props = defineProps<{ type: keyof AppRelease }>()
const { type } = toRefs(props)

// Raw HTML in release notes is NEVER rendered (html: false), only Markdown.
const md = new MarkdownIt({ html: false, linkify: false })

const changelog = computed(() => {
  const flavoredString = (release[type.value].body ?? '')
    // The page already has its own heading; drop the "## Nekoyomi vX.Y.Z" title of the release notes.
    .replace(/^\s*#{1,2} Nekoyomi v[^\n]*\n/, '')
    .replace(/(?<=\(|(, ))@([\w-]+)(?=\)|(, ))/g, '[@$2](https://github.com/$2)')
    .replace(`${APP_GITHUB_URL}/releases`, '/changelogs/')
  return md.render(flavoredString)
})
</script>

<template>
  <div class="changelog">
    <header>
      <IconNewspaperVariant />
      <h2>Changelog</h2>
    </header>
    <div v-html="changelog" />
  </div>
  <div class="fullChangelog">
    <p>
      View the full release
      <a :href="`${APP_GITHUB_URL}/releases/latest`" target="_blank" rel="noopener noreferrer">
        here
      </a>
    </p>
  </div>
</template>

<style lang="stylus">
.changelog {
  display: block
  border: 1px solid var(--vp-c-bg-soft)
  border-radius: 12px
  background-color: var(--vp-c-bg-soft)
  transition: border-color 0.25s, background-color 0.25s
  padding: 24px
  height: 100%
  margin: 1.5em auto 0.5em

  header {
    display: flex
    justify-content: center
    align-items: baseline
    margin: 0 0 1rem
  }

  svg {
    font-size: 1.2em
    margin-right: 0.5rem
    vertical-align: middle
  }

  h2 {
    font-size: 1.5rem
    margin: 0
    padding: 0
    color: var(--vp-c-text-1)
    border: none
  }

  div > p {
    margin: 0 0 1rem
    color: var(--vp-c-text-2)
    font-size: 0.9rem
  }

  table {
    display: block
    overflow-x: auto
    border-radius: 8px
    border-collapse: collapse
    border: 1px solid var(--vp-c-divider)

    tr,
    th,
    td {
      border: none
    }

    tbody tr {
      border-top: 1px solid var(--vp-c-divider)
    }

    tr > td {
      &:first-child {
        color: var(--vp-c-text-2)
      }

      &:last-child {
        font-family: var(--vp-font-family-mono)
        font-size: var(--vp-code-font-size)
        word-break: break-all
      }
    }
  }
}

.fullChangelog {
  margin: 0 0 1rem
  color: var(--vp-c-text-2)
  font-size: 0.9rem
}
</style>
