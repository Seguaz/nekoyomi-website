---
title: 快速上手
titleTemplate: 指南
description: 帮助你完成 Nekoyomi 设置的基本信息。
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# 快速上手

帮助你完成 Nekoyomi 设置的基本信息。

## 安装指南 {#installation-guide}

### 下载 Nekoyomi {#downloading-nekoyomi}

1. 访问我们的[下载](/download/)页面，获取最新版本的 **Nekoyomi**。
2. 下载完成后，打开 `.apk` 文件。
3. 按提示完成安装。

### 添加图源 {#adding-sources}

在设备上安装 **Nekoyomi** 后，你可以从各种图源获取想看的内容：

:::: tabs
== 本地图源
阅读或观看保存在设备本地的内容。

具体操作请参阅本地图源指南：
- [漫画](/docs/guides/local-manga-source/)
- [动画](/docs/guides/local-anime-source/)

== 外部仓库
外部仓库可以为 **Nekoyomi** 添加更多图源。前往 <nav to="browse"> 并点击**动画插件仓库**/**漫画插件仓库**，即可添加外部仓库。

进入后，输入以 `index.min.json` 结尾的网址即可添加仓库。

::: danger 注意
Nekoyomi 不会为任何非官方仓库提供资源。请注意，任何第三方仓库或插件都将拥有应用的完全访问权限，并可能包含恶意软件。
:::

添加仓库后，前往 <nav to="extensions"> 并刷新插件列表。

现在，点击插件旁边的下载按钮即可安装。

> 你可能需要[允许安装第三方应用](/docs/faq/browse/extensions#enabling-third-party-installations)。

== 手动安装插件
插件也可以通过 `.apk` 文件手动安装。

::: danger 注意
Nekoyomi 不会为任何非官方插件提供资源。请注意，任何第三方仓库或插件都将拥有应用的完全访问权限，并可能包含恶意软件。
:::
::::

### 将作品添加到书架 {#adding-series-to-your-library}

安装所需插件后，你可以在**漫画源**/**动画源**标签页中找到它。

将作品添加到书架的方法如下：

1. 选择你想浏览的图源。
2. 你可以通过**热门**/**最近更新**列表浏览，也可以直接搜索作品名称。
3. 找到想添加的作品后，点击它查看详情。
4. 点击“**添加到书架**”按钮，该作品就会被添加到你的书架，随时可以阅读/观看！

## 其他设置 {#additional-setup}

### 作品搜索选项 {#series-search-options}

如果你想在所有图源中搜索作品，可以使用全局搜索功能。

步骤如下：

1. 前往“**浏览**”页面。
2. 确保你位于右上角的“**图源**”标签页。
3. 使用工具栏中的搜索图标，在所有可用图源中查找作品。

### 找不到特定作品？ {#trouble-finding-a-specific-series}

如果你在搜索特定作品时遇到困难，请考虑以下几点：

<!-- markdownlint-disable MD004 -->
* 仔细检查拼写后再试一次，因为部分图源可能使用**日文罗马字**标题，而不是**英文**标题。
  > 示例：**Boku no Hero Academia** 而不是 **My Hero Academia**。

* 部分图源的标题可能使用不同的拼写或措辞。
  > 示例：**Bungo Stray Dogs** 而不是 **Bungou Stray Dogs**

  > 示例：**3-gatsu no Lion** 而不是 **Sangatsu no Lion**。
<!-- markdownlint-enable MD004 -->
