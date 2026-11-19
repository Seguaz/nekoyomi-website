---
title: Light novels
titleTemplate: Guides
description: How to add novel sources, read light novels as text, and organize your novel library in Nekoyomi.
---

# Light novels

**Nekoyomi** treats light novels as their own content type, next to anime and manga.
Novels have a separate library, separate categories and their own sections in Updates and History, and they open in a text reader made for long reading sessions.

## Show the Novels tab

New and existing installs don't show the **Novels** tab in the bottom bar by default.
Until you add it, you can open the novel library from the <nav to="main_more"> tab.

To add it to the bottom bar:

1. Go to <nav to="appearance"> -> **Navigation style**.
1. Check **Novels** and drag it to the position you want.

## Add novel sources

Novel sources come from novel extension repositories, just like manga and anime sources.

1. Go to <nav to="browse"> -> **Novel extension repos**.
    > You can also open the **Novel extensions** tab in <nav to="main_browse"> and tap the button to add a repository.
1. Paste the repository URL (it usually ends in `index.min.json`).
1. Open the **Novel extensions** tab in <nav to="main_browse"> and install the extensions you want.
1. The installed sources appear in the **Novel sources** tab.

::: warning Repository format
Nekoyomi uses novel repositories in the **tsundoku / NovelSourcery** format (`index.min.json` or `index.pb`).
Repositories made for other apps, such as Mangayomi or LNReader, use a different format and can't be added.
:::

::: tip
The **Filter** action in the novel sources and extensions tabs only lists novel languages.
:::

## Reading

Novels open in the text reader automatically.
Scroll to read within a section and swipe to move between sections. Chapter illustrations and covers are shown inline.
A chapter is marked as read when you reach the end of its text, not when you open it.

### Reader settings

Open the reader settings (the ⚙ button in the reader menu) to customize the text.

In the **Reading mode** tab you can change:

- **Text size**.
- **Font**: serif, sans or mono.
- **Line spacing** and **Margins**.
- **Justify text**.

In the **General** tab you can pick the background color, including **Beige**, a warm paper-like background with sepia text.

### Auto-scroll

1. Tap the ▶ **Auto-scroll** button in the reader menu.
1. Adjust the speed with **Auto-scroll speed** in the **Reading mode** tab of the reader settings.

While auto-scroll is running, the screen stays on.
Tap the screen to pause it. Swiping only pauses it for a moment, and it carries on afterwards.
When a chapter ends, it continues into the next one, and it stops at the end of the last chapter.

## Downloads

Novel chapters can be downloaded like manga chapters, and downloaded chapters can be read offline.

## Local novels

To read your own `.epub` files, use the **Local novel source** in the **Novel sources** tab.

### Importing from the app

1. Open the **Local novel source**.
1. Tap the **Import** button in the toolbar.
1. Enter a title, then add the `.epub` files (or a whole folder) and confirm.

### Adding files manually

You can also place novels in the `localnovel` folder inside your storage location (e.g. `/Nekoyomi/localnovel/`), with one folder per novel:

```
Nekoyomi/
└── localnovel/
    └── Novel title/
        ├── Volume 1.epub
        └── Volume 2.epub
```

Epubs in the Local novel source count as novels: they go to the novel library, updates and history, and they open in the text reader.

## Organizing your novels

- **Categories:** novel categories are separate from manga ones. Manage them in <nav to="categories"> -> **Novels**.
- **Library settings:** filters, tag filters, grouping, pinning, column count and [custom series](/docs/faq/library#how-do-i-group-several-entries-into-one-series) work the same as in the manga library, but are saved separately.
- **Updates and history:** novels have their own **Novels** sub-tab in Updates and History.
- **Library updates:** refreshing the novel library only updates novels. To choose which novel categories are included in or excluded from automatic updates, go to <nav to="library">.
- **Migration:** use the **Migrate Novels** tab in <nav to="main_browse">. Novels are only matched with novel sources.
- **Backups:** novels and their categories are included in your backups.
