---
title: Erste Schritte
titleTemplate: Anleitungen
description: Grundlegende Informationen, die dir bei der Einrichtung von Nekoyomi helfen.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Erste Schritte

Grundlegende Informationen, die dir bei der Einrichtung von Nekoyomi helfen.

## Installationsanleitung {#installation-guide}

### Nekoyomi herunterladen {#downloading-nekoyomi}

1. Besuche unsere [Downloadseite](/download/), um die neueste Version von **Nekoyomi** zu erhalten.
2. Öffne nach Abschluss des Downloads die `.apk`-Datei.
3. Fahre mit der Installation fort.

### Quellen hinzufügen {#adding-sources}

Sobald **Nekoyomi** auf deinem Gerät installiert ist, kannst du deine eigenen Inhalte aus verschiedenen Quellen einbinden:

:::: tabs
== Lokale Quelle
Lies oder schau dir Inhalte an, die lokal auf deinem Gerät gespeichert sind.

Anleitungen findest du in den Guides zu lokalen Quellen:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Externe Repositorys
Externe Repositorys fügen **Nekoyomi** zusätzliche Quellen hinzu. Du kannst externe Repositorys hinzufügen, indem du zu <nav to="browse"> gehst und auf **Anime-/Manga-Erweiterungs-Bibliotheken** tippst.

Dort kannst du Repositorys hinzufügen, indem du URLs eingibst, die auf `index.min.json` enden.

::: danger Vorsicht
Nekoyomi stellt keine Ressourcen für inoffizielle Repositorys bereit. Beachte, dass Repositorys oder Erweiterungen von Drittanbietern vollen Zugriff auf die App haben und Malware enthalten können.
:::

Nachdem du ein Repository hinzugefügt hast, gehe zu <nav to="extensions"> und aktualisiere die Liste der Erweiterungen.

Jetzt kannst du auf die Download-Schaltfläche neben den Erweiterungen tippen, um sie zu installieren.

> Möglicherweise musst du [Installationen aus Drittquellen erlauben](/docs/faq/browse/extensions#enabling-third-party-installations).

== Manuelle Erweiterungen
Erweiterungen können manuell über `.apk`-Dateien installiert werden.

::: danger Vorsicht
Nekoyomi stellt keine Ressourcen für inoffizielle Erweiterungen bereit. Beachte, dass Repositorys oder Erweiterungen von Drittanbietern vollen Zugriff auf die App haben und Malware enthalten können.
:::
::::

### Serien zur Bibliothek hinzufügen {#adding-series-to-your-library}

Nachdem du die gewünschte Erweiterung installiert hast, findest du sie im Tab **Manga-/Anime-Quellen**.

So fügst du Serien zu deiner Bibliothek hinzu:

1. Wähle die Quelle aus, in der du stöbern möchtest.
2. Du kannst die Listen **Beliebt**/**Neueste** zum Stöbern nutzen oder nach dem Namen der Serie suchen.
3. Sobald du die Serie gefunden hast, die du hinzufügen möchtest, tippe darauf, um weitere Details zu sehen.
4. Tippe auf die Schaltfläche „**Zur Bibliothek hinzufügen**“, und die Serie wird deiner Bibliothek hinzugefügt – bereit zum Lesen/Anschauen!

## Weitere Einrichtung {#additional-setup}

### Suchoptionen für Serien {#series-search-options}

Wenn du in all deinen Quellen nach Serien suchen möchtest, kannst du die Funktion „Globale Suche“ verwenden.

Folge diesen Schritten:

1. Gehe zum Bereich „**Stöbern**“.
2. Stelle sicher, dass du dich im Tab „**Quellen**“ oben rechts befindest.
3. Nutze das Suchsymbol in der Symbolleiste, um Serien in allen verfügbaren Quellen zu finden.

### Probleme, eine bestimmte Serie zu finden? {#trouble-finding-a-specific-series}

Wenn du Schwierigkeiten hast, eine bestimmte Serie zu finden, beachte folgende Punkte:

<!-- markdownlint-disable MD004 -->
* Überprüfe deine Schreibweise und versuche es erneut, da manche Quellen **japanische romanisierte** Titel statt **englischer** verwenden.
  > Beispiel: **Boku no Hero Academia** statt **My Hero Academia**.

* Manche Quellen verwenden unterschiedliche Schreibweisen oder Formulierungen für Titel.
  > Beispiel: **Bungo Stray Dogs** statt **Bungou Stray Dogs**

  > Beispiel: **3-gatsu no Lion** statt **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
