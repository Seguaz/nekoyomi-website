---
title: Local anime source
titleTemplate: Guides
description: For users who would like to download and organize their own media.
---

# Local anime source

If you like to download and organize your media, then you want to know how to manage your own anime in Nekoyomi.

::: warning
This page explores some advanced features.
:::

## Importing from the app

The easiest way to add anime is to import them from **Nekoyomi** itself, without a file manager.

1. Open <nav to="sources"> and tap the **Local anime source**.
1. Tap the **Import** button in the toolbar.
1. Enter a title for the anime.
1. Tap **Add files** or **Add folder** and pick what you want to import. Videos inside per-episode subfolders are imported as episodes.
1. Confirm, and the anime appears in the Local anime source.

**Nekoyomi** copies the files into its `localanime` folder, so your original files aren't touched.

::: tip Deleting local anime
Long-press an anime in the Local anime source and choose **Delete from local** to remove it and its copied files.
If you import the same title again later, it starts fresh.
:::

## Creating local series

1. In the location you specified as your storage location (e.g., `/Nekoyomi/`), there should be a `localanime` folder. Place correctly structured series inside that (e.g. `/Nekoyomi/localanime/`).

    > If adding series in folders it is recommended to add a file named `.nomedia` to the local folder so images and videos do not show up in the gallery.

1. You should now be able to access the series in <nav to="sources"> under **Local anime source**.

If you add more episodes then you'll have to manually refresh the episode list (by pulling down the list).

Supported episode formats are `.mp4` and `.mkv` video files.

### Folder structure

Nekoyomi requires a specific folder structure for local series to be correctly processed.
Local anime will be read from the `localanime` folder.
Each series must have a `Anime` folder.
Videos will then go into the Anime folder.
See below for more information on archive files.
You can refer to the following example:

:::info Example
<div class="tree">
  <ul>
    <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
    <span class="folder root">[your storage location]/localanime</span>
    <li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">[the anime title]</span>
      <ul>
        <li>
          <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
          <span class="file jpg">cover<span class="file-extension">.jpg</span></span>
        </li>
        <li>
          <img src="/img/video.svg" alt="Video" class="tree-icon icon-video">
          <span class="file jpg">ep01<span class="file-extension">.mp4</span></span>
        </li>
        <li>
          <img src="/img/video.svg" alt="Video" class="tree-icon icon-video">
          <span class="file jpg">ep02<span class="file-extension">.mkv</span></span>
        </li>
      </ul>
    </li>
    <li>...</li>
  </ul>
</div>
:::

<style scoped>
  @import "../../../.vitepress/theme/styles/tree.styl"
</style>
