---
title: Primi passi
titleTemplate: Guide
description: Informazioni essenziali per configurare Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Primi passi

Informazioni essenziali per configurare Nekoyomi.

## Guida all'installazione {#installation-guide}

### Scaricare Nekoyomi {#downloading-nekoyomi}

1. Visita la nostra pagina di [download](/download/) per ottenere l'ultima versione di **Nekoyomi**.
2. Al termine del download, apri il file `.apk`.
3. Procedi con l'installazione.

### Aggiungere fonti {#adding-sources}

Una volta installato **Nekoyomi** sul tuo dispositivo, puoi portare i tuoi contenuti da leggere da varie fonti:

:::: tabs
== Fonte locale
Leggi o guarda contenuti salvati localmente sul tuo dispositivo.

Consulta le guide sulle fonti locali per le istruzioni:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Repository esterni
I repository esterni aggiungono altre fonti a **Nekoyomi**. Puoi aggiungere repository esterni andando in <nav to="browse"> e toccando **Repo delle estensioni anime/manga**.

Da lì, puoi aggiungere repository inserendo URL che terminano con `index.min.json`.

::: danger Attenzione
Nekoyomi non fornirà risorse per nessun repository non ufficiale. Tieni presente che qualsiasi repository o estensione di terze parti avrà pieno accesso all'app e potrebbe contenere malware.
:::

Dopo aver aggiunto un repository, vai in <nav to="extensions"> e aggiorna l'elenco delle estensioni.

Ora puoi toccare il pulsante di download accanto alle estensioni per installarle.

> Potrebbe essere necessario [abilitare le installazioni di terze parti](/docs/faq/browse/extensions#enabling-third-party-installations).

== Estensioni manuali
Le estensioni possono essere installate manualmente tramite file `.apk`.

::: danger Attenzione
Nekoyomi non fornirà risorse per nessuna estensione non ufficiale. Tieni presente che qualsiasi repository o estensione di terze parti avrà pieno accesso all'app e potrebbe contenere malware.
:::
::::

### Aggiungere serie alla libreria {#adding-series-to-your-library}

Dopo aver installato l'estensione desiderata, la troverai nella scheda **Fonti Manga/Anime**.

Ecco come aggiungere serie alla tua libreria:

1. Seleziona la fonte che vuoi sfogliare.
2. Puoi usare gli elenchi **Popolare**/**Ultimi** per sfogliare, oppure cercare il nome della serie.
3. Una volta trovata la serie che vuoi aggiungere, toccala per vedere più dettagli.
4. Premi il pulsante "**Aggiungi alla libreria**" e la serie verrà aggiunta alla tua Libreria, pronta per essere letta/guardata!

## Configurazione aggiuntiva {#additional-setup}

### Opzioni di ricerca delle serie {#series-search-options}

Se vuoi cercare serie in tutte le tue fonti, puoi usare la funzione Ricerca globale.

Segui questi passaggi:

1. Vai alla sezione "**Sfoglia**".
2. Assicurati di essere nella scheda "**Fonti**" in alto a destra.
3. Usa l'icona di ricerca nella barra degli strumenti per trovare serie da tutte le fonti disponibili.

### Difficoltà a trovare una serie? {#trouble-finding-a-specific-series}

Se hai difficoltà a trovare una serie specifica, considera i seguenti punti:

<!-- markdownlint-disable MD004 -->
* Controlla l'ortografia e riprova, perché alcune fonti potrebbero usare titoli in **giapponese romanizzato** invece che in **inglese**.
  > Esempio: **Boku no Hero Academia** invece di **My Hero Academia**.

* Alcune fonti potrebbero usare grafie o formulazioni diverse per i titoli.
  > Esempio: **Bungo Stray Dogs** invece di **Bungou Stray Dogs**

  > Esempio: **3-gatsu no Lion** invece di **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
