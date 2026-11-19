---
title: Prvi koraci
titleTemplate: Vodiči
description: Osnovne informacije koje će vam pomoći da postavite Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Prvi koraci

Osnovne informacije koje će vam pomoći da postavite Nekoyomi.

## Vodič za instalaciju {#installation-guide}

### Preuzimanje aplikacije Nekoyomi {#downloading-nekoyomi}

1. Posjetite našu stranicu za [preuzimanje](/download/) kako biste nabavili najnoviju verziju aplikacije **Nekoyomi**.
2. Kada preuzimanje završi, otvorite datoteku `.apk`.
3. Nastavite s postupkom instalacije.

### Dodavanje izvora {#adding-sources}

Nakon što instalirate **Nekoyomi** na uređaj, možete dodati vlastiti sadržaj za čitanje iz raznih izvora:

:::: tabs
== Lokalni izvor
Čitajte ili gledajte sadržaj pohranjen lokalno na uređaju.

Upute potražite u vodičima za lokalni izvor:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Vanjski repozitoriji
Vanjski repozitoriji dodaju nove izvore u **Nekoyomi**. Vanjske repozitorije možete dodati tako da odete na <nav to="browse"> i dodirnete **Repozitoriji Anime/Manga proširenja**.

Ondje možete dodati repozitorije unosom URL-ova koji završavaju s `index.min.json`.

::: danger Oprez
Nekoyomi neće pružati resurse ni za kakve neslužbene repozitorije. Imajte na umu da će svi repozitoriji ili proširenja trećih strana imati potpuni pristup aplikaciji i mogu sadržavati zlonamjerni softver.
:::

Nakon što dodate repozitorij, idite na <nav to="extensions"> i osvježite popis proširenja.

Sada možete dodirnuti gumb za preuzimanje pokraj proširenja kako biste ih instalirali.

> Možda ćete morati [omogućiti instalacije iz trećih izvora](/docs/faq/browse/extensions#enabling-third-party-installations).

== Ručna proširenja
Proširenja se mogu ručno instalirati putem `.apk` datoteka.

::: danger Oprez
Nekoyomi neće pružati resurse ni za kakva neslužbena proširenja. Imajte na umu da će svi repozitoriji ili proširenja trećih strana imati potpuni pristup aplikaciji i mogu sadržavati zlonamjerni softver.
:::
::::

### Dodavanje serija u biblioteku {#adding-series-to-your-library}

Nakon što instalirate željeno proširenje, pronaći ćete ga na kartici **Manga/Anime izvori**.

Evo kako možete dodati serije u biblioteku:

1. Odaberite izvor koji želite pregledavati.
2. Za pregledavanje možete koristiti popise **Popularni**/**Najnoviji** ili potražiti naziv serije.
3. Kada pronađete seriju koju želite dodati, dodirnite je za više pojedinosti.
4. Pritisnite gumb "**Dodaj u biblioteku**" i serija će biti dodana u vašu Biblioteku, spremna za čitanje/gledanje!

## Dodatno postavljanje {#additional-setup}

### Mogućnosti pretraživanja serija {#series-search-options}

Ako želite pretraživati serije u svim svojim izvorima, možete koristiti značajku Globalna pretraga.

Slijedite ove korake:

1. Idite na odjeljak "**Pretraži**".
2. Provjerite jeste li na kartici "**Izvori**" koja se nalazi u gornjem desnom kutu.
3. Pomoću ikone za pretraživanje na alatnoj traci pronađite serije u svim dostupnim izvorima.

### Ne možete pronaći određenu seriju? {#trouble-finding-a-specific-series}

Ako imate poteškoća pri traženju određene serije, uzmite u obzir sljedeće:

<!-- markdownlint-disable MD004 -->
* Još jednom provjerite kako ste napisali naslov i pokušajte ponovno jer neki izvori umjesto **engleskih** naslova možda koriste **japanske romanizirane** naslove.
  > Primjer: **Boku no Hero Academia** umjesto **My Hero Academia**.

* Neki izvori mogu koristiti drukčiji pravopis ili formulaciju naslova.
  > Primjer: **Bungo Stray Dogs** umjesto **Bungou Stray Dogs**

  > Primjer: **3-gatsu no Lion** umjesto **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
