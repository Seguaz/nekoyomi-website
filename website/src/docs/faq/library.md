---
title: Library
titleTemplate: Frequently Asked Questions
description: Frequently Asked Questions about the Library.
---

# Library
Frequently Asked Questions about the Library.

## Why is Global Update skipping entries?
The app's default behavior is to skip updates for entries that meet the following criteria:

* Have unwatched episodes/unread chapters
* Haven't been initiated
* Carry a "**Completed**" status
* Isn't expected to have new chapters yet

This strategy prevents unnecessary load which may lead to sources implementing measures against **Nekoyomi**.
To manage entries with infrequent or no updates, consider using categories and excluding them from updates.

We recommend using the default settings and prioritizing unwatched episodes for watching and unread episodes for reading.

If you wish to disable the notification about skipped items, you can do so at <nav to="advanced"> and then **Manage notifications** (doing so requires Android 8 or above).

## Why am I warned about large bulk updates and downloads?
Excessive server load may trigger anti-**Nekoyomi** measures from sources. See the previous question for more context. Long-running update checks and downloads may also impact your device's battery life.

To mitigate these concerns:

* Use categories to segment your library ("Watching", "Plan to Watch", "Completed", etc.).
* Update only the "Watching" category by navigating to <nav to="library">, then tap **Categories** under **Global update**.
* If the warning persists, create a new category for infrequently updated entries (like monthly series or those on hiatus) and set global updates to target the more frequently updated "watching" category.

## Why aren't library updates working?
Some Android skins (e.g., **MIUI**) aggressively save battery, potentially shutting down apps in the background.

Whitelist **Nekoyomi** from your battery saver by going to <nav to="advanced"> and tapping **Disable battery optimization**.

If unsuccessful, refer to [Don't Kill My App](https://dontkillmyapp.com/) for how to disable specific battery-saving options for your device.

## How can I see the number of downloaded episodes/chapters?
Badges can be enabled by navigating to <nav to="main_library">, then going to **Filter** and clicking the **Display** tab.
Then, at the bottom, select **Download badges**.

## How do I group several entries into one series?
Long press the entries you want to group, press **Group into series** and give the series a name.
The series becomes a folder with a count badge. Tap it to see its entries.

From the folder's <nav to="overflow"> menu (or by long pressing it) you can rename it, set a custom cover or a 2×2 collage, or ungroup it.

## How do I group my library by source, status or tag?
Go to <nav to="main_library">, open **Filter** and select the **Group** tab.
You can group by source, status, language, tag or tracking status. Your categories aren't changed.

## How do I filter my library by tags?
Go to <nav to="main_library">, open **Filter** and expand the **Tags** section.
Tap a tag once to show only entries with it, and tap it again to hide those entries instead. Press **Reset** to clear them all.

## How do I keep entries at the top of a category?
Long press the entries and press **Pin to top**.
Pinned entries always stay above the rest of their category and show a pushpin badge.

## How do I see how many times I've watched or read something?
Every time you finish an episode or chapter, it's counted, re-watches and re-reads included.
Once the count goes above one, it shows as `×N` in the episode or chapter list.

You can also sort your library by **Times watched** or **Times read**.

## Can I show episodes or chapters as a grid?
Yes. In an entry, open the **Filter** menu of the episode or chapter list, go to the **Display** tab and turn on **Grid view (2 columns)**.

## Can I choose what time the library updates?
Yes. In <nav to="library">, set **Update at a specific time** under **Global update**.
It's available for daily and longer update intervals.

## Can I sync between multiple devices?
**Nekoyomi** can't sync between devices.
Use its [backup and restore](/docs/guides/backups) features, including [auto backups](/docs/guides/backups#enabling-automatic-backups), for series database and content migration to another device.

## How can I ignore duplicate episodes?
Dealing with series translated by multiple groups that result in duplicate episode releases?

Bookmark or mark as watched the undesired episodes, then open the **Filter** menu, ensure you're on the **Filter** tab, then double-tap **Bookmarked** or single-tap **Unwatched**.

This hides bookmarked or watched episodes, enabling you to skip them as you watch.
Ensure [Skip filtered episodes](/docs/guides/reader-settings#skip-filtered-chapters) is enabled at <nav to="reader"> under the section **Watching**.

Alternatively, migrate to a source without duplicates.
Refer to the [migration guide](/docs/guides/source-migration) for detailed instructions.

## Why are some cover thumbnails corrupted or blank?
If cover thumbnails appear corrupted, blank, or broken, it's likely due to an incomplete download. Fix this by refreshing the covers in settings.

Refresh your covers at <nav to="advanced"> then tap **Refresh library covers**.

## Why have some episodes been marked as unwatched?
If certain series episodes are marked as unwatched without your interaction, it could be due to changed URLs.
**Nekoyomi** detects these changes and interprets the episodes as new.

## How do I pause watching history?
Enable **Incognito Mode** through <nav to="incognito-mode">.

## Can I delete old history automatically?
Yes. In <nav to="data-and-storage">, set **Auto-delete history older than** to the period you want.
Reading and watching history older than that is removed automatically.

## How do I only read downloaded episodes?
Enable **Download only** via <nav to="downloaded-only">.

## Why can't I disable the Downloaded filter?
Disable **Download only** via <nav to="downloaded-only">.
