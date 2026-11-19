---
title: Завантажити
description: Сторінка завантаження, де можна отримати та встановити останню версію застосунку.
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

# Завантажити

Останню версію **Nekoyomi** випущено **<ReleaseDate type="stable" />**.

<DownloadButtons />

::: tip Будьте обережні
Завантажуйте **Nekoyomi** лише з цієї сторінки або з [офіційного репозиторію на GitHub](https://github.com/Seguaz/Nekoyomi/releases).
Кожен випуск підписано тим самим ключем, тож Android відмовиться встановлювати оновлення, яке випустили не ми.
:::

<Changelog type="stable" />
