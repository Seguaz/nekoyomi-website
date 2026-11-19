---
title: Скачать
description: Страница загрузки, где можно получить и установить последнюю версию приложения.
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

# Скачать

Последняя версия **Nekoyomi** вышла **<ReleaseDate type="stable" />**.

<DownloadButtons />

::: tip Будьте осторожны
Скачивайте **Nekoyomi** только с этой страницы или из [официального репозитория на GitHub](https://github.com/Seguaz/Nekoyomi/releases).
Каждый выпуск подписан одним и тем же ключом, поэтому Android откажется устанавливать обновление, выпущенное не нами.
:::

<Changelog type="stable" />
