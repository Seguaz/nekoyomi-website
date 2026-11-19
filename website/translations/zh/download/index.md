---
title: 下载
description: 下载页面，用户可在此获取并安装最新版本的应用。
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

# 下载

**Nekoyomi** 的最新版本发布于 **<ReleaseDate type="stable" />**。

<DownloadButtons />

::: tip 注意安全
请仅从本页面或[官方 GitHub 仓库](https://github.com/Seguaz/Nekoyomi/releases)下载 **Nekoyomi**。
每个版本都使用同一个密钥签名，因此 Android 会拒绝安装并非来自我们的更新。
:::

<Changelog type="stable" />
