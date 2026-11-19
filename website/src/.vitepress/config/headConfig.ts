import type { HeadConfig } from 'vitepress'
import { BRAND_BLUE } from './constants'

const headConfig: HeadConfig[] = [
  ['meta', { name: 'darkreader-lock' }],
  ['meta', { name: 'theme-color', content: BRAND_BLUE }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  // Never leak the visited page to other sites.
  ['meta', { name: 'referrer', content: 'no-referrer' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ['meta', { property: 'og:site_name', content: 'Nekoyomi' }],
  ['meta', { property: 'og:description', content: 'Watch anime, read manga and light novels – all in one app, on your Android device.' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:type', content: 'website' }],
]

export default headConfig
