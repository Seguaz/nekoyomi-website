---
title: Features
description: Everything Nekoyomi adds on top of Aniyomi — light novels, library organization, player and reader extras, and more.
---

# What Nekoyomi adds

**Nekoyomi** started as a fork of [Aniyomi](https://github.com/aniyomiorg/aniyomi), so everything Aniyomi does still works the same way.
This page lists what Nekoyomi adds on top of it, as of the latest release.
For the full history, version by version, see the [changelogs](/changelogs/).

## Light novels

- **A third content type.** Novels get their own library (the **Novels** tab), their own categories, and their own **Novels** sub-tab in Updates and History, so they never mix with your manga.
- **Novel extensions.** Add novel extension repositories and install novel sources just like manga and anime ones. Browse has dedicated **Novel sources**, **Novel extensions** and **Migrate Novels** tabs.
- **A real text reader.** Novels are read as text, not images. Change the text size, font (serif, sans or mono), line spacing, margins and justification, and pick a background color, including a warm **Beige** paper look.
- **Auto-scroll for novels.** Hands-free reading with adjustable speed. It moves on to the next chapter on its own and keeps the screen on.
- **Offline reading.** Download novel chapters and read them without a connection.
- **Local novels.** A dedicated **Local novel source** for your own `.epub` files, which you can import straight from the app.
- **Independent settings.** Filters, tag filters, grouping, pinning, column count, custom series and the categories to update are all separate from the manga library.

Learn how to set everything up in the [light novels guide](/docs/guides/novels).

## Library

- **Custom series.** Select several entries and choose **Group into series** to turn them into a folder with a count badge. Open the folder to see its members, set a custom cover or a 2×2 collage, rename it, or ungroup it from its <nav to="overflow"> menu.
- **Group your library.** The new **Group** tab in the library display options groups entries on the fly by source, status, language, tag or tracking status, without touching your categories.
- **Filter by tags.** The filter sheet has a **Tags** section with a chip for every tag: tap once to show only that tag, tap again to hide it. The section can be collapsed and shows how many tags are active.
- **Pin to top.** Long-press entries and choose **Pin to top** to keep them above everything else in their category. Pinned entries show a pushpin badge.
- **Private categories.** Mark a category as private and it hides itself again every time you close the app. Hidden categories are also left out of Updates.
- **Reading mode per category.** Set a default reading mode (paged, webtoon…) for a whole category from its menu in <nav to="categories">.
- **Times read / watched.** Every finished chapter or episode is counted, re-reads and re-watches included. The count shows as `×N` in the list, you can sort the library by it, and it is kept in backups.
- **Grid view for chapters and episodes.** Show an entry's chapter or episode list as a 2-column card grid, from the list's display settings.
- **Download size.** Optionally show the on-disk size of each downloaded chapter or episode, from <nav to="appearance">.

## Video player

- **Hold to speed up.** Press and hold the video to fast-forward, then slide your finger to go faster or slower. The speed is adjustable, and the gesture can be turned off in <nav to="gestures">.
- **Quick screenshots.** Tap with two fingers to take a screenshot of the current frame.
- **Online subtitles.** Search [OpenSubtitles](https://www.opensubtitles.com/) from the player's subtitles sheet and attach a subtitle to the video without leaving the app.
- **Automatic source fallback** *(experimental)*. When a source has no working video for an episode, Nekoyomi can look for the same episode in your other installed sources and switch to the first one that plays. Turn it on in <nav to="internal-player"> -> **Hosters**.
- **Reduce screen tearing** *(experimental)*. Syncs playback to your display's refresh rate and interpolates frames. You can find it in <nav to="decoder">.

## Manga reader

- **Webtoon auto-scroll.** Hands-free scrolling with adjustable speed. It keeps going after you swipe manually, and the screen stays on while it runs.
- **Beige background.** A warm, paper-like background with sepia text, for both manga and novels.

## Browse and extensions

- **Newer manga extensions.** Full support for the newer manga extension format (tachiyomix 1.6) used by current repositories such as Keiyoushi.
- **Easier repositories.** Add a repository by its base URL or by any index file (`index.min.json`, `index.json` or `index.pb`). Each extension shows which repository it came from.
- **Smoother installs.** When you install several extensions at once, they are queued and installed one by one, so the system prompts don't stack up.
- **Clear update errors.** Updating an extension signed with a different certificate now explains what happened, instead of failing silently.
- **Local sources first.** The local sources have their own section at the top of Browse.
- **Search inside filters.** Type to find an option in a source's filter sheet.
- **Global search remembers your choice** between **Pinned** and **All** sources.
- **Incognito per source.** Turn incognito mode on or off for a source straight from its <nav to="overflow"> menu while browsing it.

## Migration

- **Mass migration.** Long-press entries in a source's migration list to select several, and Nekoyomi will find the best match for each one. Review the results, pick a different match by hand or skip any entry, then tap **Migrate all**.
- **Source priority.** Choose the order in which sources are searched, uncheck sources to skip them, and filter them by language. The same order is used by the automatic source fallback in the player.
- **Type-aware searches.** Novels are only matched with novel sources, and manga only with manga sources.

See the [source migration guide](/docs/guides/source-migration) for details.

## Local source

- **Import from the app.** Add files or whole folders, subfolders included, to your local manga, anime or novel source from the source's toolbar. No file manager needed.
- **Delete local entries.** Long-press an entry in a local source to delete it and its files.

See the [local manga source](/docs/guides/local-manga-source/#importing-from-the-app) and [local anime source](/docs/guides/local-anime-source/#importing-from-the-app) guides.

## Look and feel

- **Floating navigation bar.** An optional translucent bar that your content scrolls behind, with adjustable opacity, blur, height and icon size. You can also keep the classic solid bar.
- **Your tabs, your order.** Choose which tabs appear in the bottom bar, including **Novels**, and drag them into the order you like. The rest move to the **More** tab.
- **Navigation bar labels.** Hide the labels, show them beside the selected icon, or show them below every icon.
- **Manga / Anime sections.** Choose which sections appear in Updates and History, and which one comes first.
- **App icons.** Pick a launcher icon in <nav to="appearance"> -> **App icon**, including icons designed by the community in our art contest. On Android 13 and newer, the icon can also follow your system theme.
- **Blurred cover backdrop.** Each entry shows its own cover as a soft, blurred banner behind the header, with adjustable opacity, blur and darkening.

## Updates, downloads and data

- **Update at a specific time.** Run the automatic library update at a time of day that suits you, in <nav to="library">.
- **Separate manga and novel updates.** Refreshing the Manga library only updates manga, and refreshing the Novel library only updates novels. Scheduled updates still refresh both.
- **Downloads that resume on their own.** If you lose connection in the middle of a download, it pauses and picks up again when the connection comes back.
- **Better update notifications.** A manual update tells you when your library is already up to date, and one failing extension no longer stops the rest.
- **Updates list widget.** A home-screen widget that lists your latest updates with cover, title and new chapter or episode, for both manga and anime.
- **Auto-delete old history.** Clear reading and watching history older than a period of your choice, in <nav to="data-and-storage">.
- **Hide the source name.** Hide the source on the entry screen, so you can share screenshots without revealing which extension you use. You can find it in <nav to="security-and-privacy">.

## Fixes and compatibility

Nekoyomi also fixes many issues found in the original app, such as the Cloudflare verification loop, MyAnimeList tracking and a long list of crashes.
The [changelogs](/changelogs/) list every fix.
