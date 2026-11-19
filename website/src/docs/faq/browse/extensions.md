---
title: Extensions
titleTemplate: Browse - Frequently Asked Questions
description: Frequently Asked Questions about Extensions.
---

# Extensions
Frequently Asked Questions about Extensions.

## What are some recommended extensions and sources?
Nekoyomi is bring-your-own-content and does not offer anything.

::: info Disclaimer
**Nekoyomi** isn't responsible for slow, down, missing chapters/episodes, or subpar image/video quality of sources as it doesn't host content.
:::

## Enabling third-party installations
::::tabs
== Android 8.0 and higher
When prompted while installing your first extension, allow unknown apps installation from that source. For newer Androids, enable per-app in **Install unknown apps**.

::: details Video guide - Recorded on Android 10
<video controls muted preload="metadata">
  <source src="/docs/faq/browse/extensions/unknown-sources-A10.light.webm" type="video/webm">
</video>
:::

::: tip Still got questions?
If you need more help regarding this, read [this post](https://nerdschalk.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/ "nerdschalk.com | How to allow apps installation from unknown sources on Android 9 Pie").
:::
== Android 7.1 and lower
When prompted while installing your first extension, allow unknown apps installation from that source. For older Androids, enable globally in **Unknown sources**.

::: details Video guide - Recorded on Android 7
<video controls muted preload="metadata">
  <source src="/docs/faq/browse/extensions/unknown-sources-A7.light.webm">
</video>
:::
::::

## Which repositories can I add?
**Nekoyomi** works with Aniyomi and Mihon extension repositories, including those using the newer manga extension format (tachiyomix 1.6), such as Keiyoushi.
You can add a repository by its base URL or by any of its index files (`index.min.json`, `index.json` or `index.pb`).
Each installed extension shows which repository it came from.

For novel repositories, see the [light novels guide](/docs/guides/novels#add-novel-sources).

## Can I install several extensions at once?
Yes. Extensions are queued and installed one at a time, so the system install prompts don't stack up.
Extensions waiting their turn show **Queued**.

## Why can't I update an extension?
If the new version is signed with a different certificate (usually because it comes from another repository), Android won't let it replace the installed one.
**Nekoyomi** shows a message when this happens: uninstall the extension first, then install it again.

## How do I uninstall an extension?
Uninstall extensions like regular apps: through device settings or in **Nekoyomi**.

::: tip Uninstalling an extension
In **Nekoyomi**, uninstall an extension via <nav to="extensions">, then tap **Uninstall** on the chosen extension.
:::
