<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { data as release } from '../data/release.data'
import { APP_GITHUB_URL } from '../../config/constants'

interface Variant {
  abi: string
  label: string
  hint: string
}

// Asset names produced by the Nekoyomi CI:
//   nekoyomi-v0.20.6.apk (universal)
//   nekoyomi-arm64-v8a-v0.20.6.apk, nekoyomi-armeabi-v7a-..., nekoyomi-x86-..., nekoyomi-x86_64-...
const VARIANTS: Variant[] = [
  { abi: 'arm64-v8a', label: 'arm64-v8a', hint: 'Most phones from the last ~8 years' },
  { abi: 'armeabi-v7a', label: 'armeabi-v7a', hint: 'Older 32-bit phones' },
  { abi: 'x86_64', label: 'x86_64', hint: 'Emulators, Chromebooks' },
  { abi: 'x86', label: 'x86', hint: 'Old emulators' },
]

const tagName = computed(() => release.stable.tag_name ?? 'v0.0.0')
const assets = computed(() => release.stable.assets ?? [])

function isTrustedAssetUrl(url: string | undefined): url is string {
  // Only ever link to release assets of the official repository.
  return !!url && url.startsWith(`${APP_GITHUB_URL}/releases/download/`)
}

const universal = computed(() => {
  const asset = assets.value.find(a => /^nekoyomi-v\d+(?:\.\d+)*\.apk$/.test(a.name))
  return asset && isTrustedAssetUrl(asset.browser_download_url) ? asset : undefined
})

const variants = computed(() => VARIANTS
  .map((variant) => {
    const asset = assets.value.find(a => a.name === `nekoyomi-${variant.abi}-${tagName.value}.apk`)
    return { ...variant, asset: asset && isTrustedAssetUrl(asset.browser_download_url) ? asset : undefined }
  })
  .filter(variant => variant.asset))

const isAndroid = ref(true)

onMounted(() => {
  isAndroid.value = /android/i.test(navigator.userAgent)
})
</script>

<template>
  <div>
    <div v-if="!isAndroid" class="custom-block danger">
      <p class="custom-block-title">
        Unsupported operating system
      </p>
      <p>
        <strong>Nekoyomi</strong> is an <strong>Android app</strong> only.
        Use an <strong>Android device</strong> to download and install the app.
      </p>
    </div>
    <div v-if="!isAndroid" class="custom-block warning">
      <p class="custom-block-title">
        Caution
      </p>
      <p>
        Any app for any operating systems other than Android called
        <strong>Nekoyomi</strong> is not affiliated with this project.
      </p>
      <blockquote>
        For more information, read the
        <a href="/docs/faq/general">General FAQ</a>.
      </blockquote>
    </div>
    <div class="download-buttons">
      <a
        v-if="universal"
        class="download-button primary"
        :download="universal.name"
        :href="universal.browser_download_url"
      >
        <IconDownload />
        <span class="text">Download</span>
        <span class="version">{{ tagName }}</span>
      </a>
      <a
        class="download-button secondary"
        :href="`${APP_GITHUB_URL}/releases/latest`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGithub />
        <span class="text">All releases</span>
      </a>
    </div>
    <span class="version-disclaimer">
      Universal APK · Requires <strong>Android 8.0</strong> or higher.
    </span>

    <details v-if="variants.length" class="custom-block details variants">
      <summary>Smaller downloads for a specific device (advanced)</summary>
      <p>
        The universal APK works on every device. If you know your device's CPU architecture,
        you can download a smaller APK instead. When in doubt, use the universal one.
      </p>
      <ul>
        <li v-for="variant of variants" :key="variant.abi">
          <a :href="variant.asset!.browser_download_url" :download="variant.asset!.name">
            <code>{{ variant.label }}</code>
          </a>
          – {{ variant.hint }}
        </li>
      </ul>
      <p>
        You can verify any download against the <strong>SHA-256 checksums</strong>
        published in the changelog below.
      </p>
    </details>
  </div>
</template>

<style lang="stylus">
.download-buttons {
  display: flex
  flex-wrap: wrap
  gap: 0.75em
  justify-content: center
  align-items: center
  margin: 0.75em auto
}

.download-button {
  display: inline-block
  border: 1px solid transparent
  text-align: center
  font-weight: 600
  white-space: nowrap
  cursor: pointer
  transition: all 0.3s ease
  border-radius: 20px
  padding: 0 20px
  line-height: 38px
  font-size: 14px

  &:hover {
    text-decoration: none !important
  }

  &.primary {
    border-color: var(--vp-button-brand-border)
    color: var(--vp-button-brand-text)
    background-color: var(--vp-button-brand-bg)

    &:hover {
      border-color: var(--vp-button-brand-hover-border)
      color: var(--vp-button-brand-hover-text)
      background-color: var(--vp-button-brand-hover-bg)
    }

    &:active {
      border-color: var(--vp-button-brand-active-border)
      color: var(--vp-button-brand-active-text)
      background-color: var(--vp-button-brand-active-bg)
    }
  }

  &.secondary {
    border-color: var(--vp-button-alt-border)
    color: var(--vp-button-alt-text)
    background-color: var(--vp-button-alt-bg)

    &:hover {
      border-color: var(--vp-button-alt-hover-border)
      color: var(--vp-button-alt-hover-text)
      background-color: var(--vp-button-alt-hover-bg)
    }

    &:active {
      border-color: var(--vp-button-alt-active-border)
      color: var(--vp-button-alt-active-text)
      background-color: var(--vp-button-alt-active-bg)
    }
  }

  svg {
    display: inline-block
    vertical-align: middle
    margin-right: 0.5em
    font-size: 1.25em
  }

  .text {
    margin-right: 10px
  }

  .version {
    font-size: 0.8em
  }
}

.version-disclaimer {
  display: block
  text-align: center
  margin: 0.75em auto
  font-size: 0.75rem
}

.variants {
  margin-top: 1.5em
}
</style>
