---
title: Download
description: Download page that allows users to access and install the latest version of the app.
lastUpdated: false
editLink: false
prev: false
next: false
---

<script setup>
import DownloadButtons from "@theme/components/DownloadButtons.vue";
import ReleaseDate from "@theme/components/ReleaseDate.vue";
import Changelog from "@theme/components/Changelog.vue";
</script>

# Download

The latest version of **Nekoyomi** was released **<ReleaseDate type="stable" />**.

<DownloadButtons />

::: tip Stay safe
Only download **Nekoyomi** from this page or from the [official GitHub repository](https://github.com/Seguaz/Nekoyomi/releases).
Every release is signed with the same key, so Android will refuse to install an update that doesn't come from us.
:::

<Changelog type="stable" />
