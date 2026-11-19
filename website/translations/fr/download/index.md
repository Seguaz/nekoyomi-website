---
title: Télécharger
description: Page de téléchargement permettant d'accéder à la dernière version de l'application et de l'installer.
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

# Télécharger

La dernière version de **Nekoyomi** est sortie **<ReleaseDate type="stable" />**.

<DownloadButtons />

::: tip Restez prudent
Téléchargez **Nekoyomi** uniquement depuis cette page ou depuis le [dépôt GitHub officiel](https://github.com/Seguaz/Nekoyomi/releases).
Chaque version est signée avec la même clé, donc Android refusera d'installer une mise à jour qui ne provient pas de nous.
:::

<Changelog type="stable" />
