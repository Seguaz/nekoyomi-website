// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'

// Import Stylus files
import './styles/base.styl'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

// Import icon components
import { IconBugReport, IconDownload, IconGithub, IconNewspaperVariant } from '@iconify-prerendered/vue-mdi'

import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('IconDownload', IconDownload)
    app.component('IconGithub', IconGithub)
    app.component('IconNewspaperVariant', IconNewspaperVariant)
    app.component('IconBugReport', IconBugReport)
  },
  Layout,
}
