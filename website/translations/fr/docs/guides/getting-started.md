---
title: Premiers pas
titleTemplate: Guides
description: Les informations essentielles pour bien configurer Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Premiers pas

Les informations essentielles pour bien configurer Nekoyomi.

## Guide d'installation {#installation-guide}

### Télécharger Nekoyomi {#downloading-nekoyomi}

1. Rendez-vous sur notre page de [téléchargement](/download/) pour obtenir la dernière version de **Nekoyomi**.
2. Une fois le téléchargement terminé, ouvrez le fichier `.apk`.
3. Suivez le processus d'installation.

### Ajouter des sources {#adding-sources}

Une fois **Nekoyomi** installé sur votre appareil, vous pouvez apporter votre propre contenu à lire depuis diverses sources :

:::: tabs
== Source locale
Lisez ou regardez du contenu stocké localement sur votre appareil.

Consultez les guides des sources locales pour les instructions :
- [Manga](/docs/guides/local-manga-source/)
- [Animé](/docs/guides/local-anime-source/)

== Dépôts externes
Les dépôts externes ajoutent des sources supplémentaires à **Nekoyomi**. Vous pouvez ajouter des dépôts externes en allant dans <nav to="browse"> et en appuyant sur **Repos d'extensions d'anime/de manga**.

Une fois sur place, vous pouvez ajouter des dépôts en saisissant des URL se terminant par `index.min.json`.

::: danger Attention
Nekoyomi ne fournira aucune ressource pour les dépôts non officiels. Sachez que tout dépôt ou extension tiers aura un accès complet à l'application et peut contenir des logiciels malveillants.
:::

Une fois un dépôt ajouté, allez dans <nav to="extensions"> et actualisez la liste des extensions.

Vous pouvez maintenant appuyer sur le bouton de téléchargement à côté des extensions pour les installer.

> Vous devrez peut-être [autoriser les installations depuis des sources tierces](/docs/faq/browse/extensions#enabling-third-party-installations).

== Extensions manuelles
Les extensions peuvent être installées manuellement à l'aide de fichiers `.apk`.

::: danger Attention
Nekoyomi ne fournira aucune ressource pour les extensions non officielles. Sachez que tout dépôt ou extension tiers aura un accès complet à l'application et peut contenir des logiciels malveillants.
:::
::::

### Ajouter des séries à votre bibliothèque {#adding-series-to-your-library}

Après avoir installé l'extension souhaitée, vous la trouverez dans l'onglet **Sources des mangas**/**Sources d'animés**.

Voici comment ajouter des séries à votre bibliothèque :

1. Sélectionnez la source que vous souhaitez parcourir.
2. Vous pouvez utiliser les listes **Populaire**/**Récents** pour parcourir, ou rechercher le nom de la série.
3. Une fois que vous avez trouvé la série que vous voulez ajouter, appuyez dessus pour plus de détails.
4. Appuyez sur le bouton « **Ajouter à la bibliothèque** », et la série sera ajoutée à votre Bibliothèque, prête à être lue/regardée !

## Configuration supplémentaire {#additional-setup}

### Options de recherche de séries {#series-search-options}

Si vous voulez rechercher des séries dans toutes vos sources, vous pouvez utiliser la fonction Recherche globale.

Suivez ces étapes :

1. Allez dans la section « **Explorer** ».
2. Assurez-vous d'être sur l'onglet « **Sources** » situé en haut à droite.
3. Utilisez l'icône de recherche dans la barre d'outils pour trouver des séries dans toutes les sources disponibles.

### Vous ne trouvez pas une série précise ? {#trouble-finding-a-specific-series}

Si vous avez des difficultés à trouver une série précise, tenez compte des points suivants :

<!-- markdownlint-disable MD004 -->
* Vérifiez l'orthographe et réessayez, car certaines sources peuvent utiliser des titres en **japonais romanisé** plutôt qu'en **anglais**.
  > Exemple : **Boku no Hero Academia** au lieu de **My Hero Academia**.

* Certaines sources peuvent utiliser des orthographes ou des formulations différentes pour les titres.
  > Exemple : **Bungo Stray Dogs** au lieu de **Bungou Stray Dogs**

  > Exemple : **3-gatsu no Lion** au lieu de **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
