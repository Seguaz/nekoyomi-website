---
title: Začínáme
titleTemplate: Návody
description: Základní informace, které vám pomohou s nastavením Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Začínáme

Základní informace, které vám pomohou s nastavením Nekoyomi.

## Průvodce instalací {#installation-guide}

### Stažení Nekoyomi {#downloading-nekoyomi}

1. Navštivte naši stránku [ke stažení](/download/) a získejte nejnovější verzi **Nekoyomi**.
2. Po dokončení stahování otevřete soubor `.apk`.
3. Pokračujte v instalaci.

### Přidání zdrojů {#adding-sources}

Jakmile máte **Nekoyomi** nainstalované ve svém zařízení, můžete si přidat vlastní obsah z různých zdrojů:

:::: tabs
== Lokální zdroj
Čtěte nebo sledujte obsah uložený přímo ve vašem zařízení.

Pokyny najdete v návodech k lokálním zdrojům:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Externí repozitáře
Externí repozitáře přidávají do **Nekoyomi** další zdroje. Externí repozitář přidáte tak, že přejdete do <nav to="browse"> a klepnete na **Repozitáře rozšíření anime/mangy**.

Tam můžete přidávat repozitáře zadáním adres URL, které končí na `index.min.json`.

::: danger Upozornění
Nekoyomi neposkytuje žádné prostředky pro neoficiální repozitáře. Mějte na paměti, že jakékoli repozitáře nebo rozšíření třetích stran budou mít plný přístup k aplikaci a mohou obsahovat malware.
:::

Po přidání repozitáře přejděte do <nav to="extensions"> a obnovte seznam rozšíření.

Nyní můžete rozšíření nainstalovat klepnutím na tlačítko stažení vedle nich.

> Možná budete muset [povolit instalaci aplikací třetích stran](/docs/faq/browse/extensions#enabling-third-party-installations).

== Ruční instalace rozšíření
Rozšíření lze nainstalovat ručně pomocí souborů `.apk`.

::: danger Upozornění
Nekoyomi neposkytuje žádné prostředky pro neoficiální rozšíření. Mějte na paměti, že jakékoli repozitáře nebo rozšíření třetích stran budou mít plný přístup k aplikaci a mohou obsahovat malware.
:::
::::

### Přidání sérií do knihovny {#adding-series-to-your-library}

Po instalaci požadovaného rozšíření ho najdete na kartě **Zdroje mangy/anime**.

Sérii do knihovny přidáte takto:

1. Vyberte zdroj, který chcete procházet.
2. Můžete procházet seznamy **Populární**/**Nejnovější**, nebo vyhledat název série.
3. Jakmile najdete sérii, kterou chcete přidat, klepněte na ni a zobrazí se podrobnosti.
4. Stiskněte tlačítko „**Přidat do knihovny**“ a série se přidá do vaší knihovny, připravená ke čtení/sledování!

## Další nastavení {#additional-setup}

### Možnosti vyhledávání sérií {#series-search-options}

Pokud chcete hledat série ve všech svých zdrojích najednou, můžete použít globální vyhledávání.

Postupujte takto:

1. Přejděte do sekce „**Procházet**“.
2. Ujistěte se, že jste na kartě „**Zdroje**“ v pravém horním rohu.
3. Pomocí ikony hledání na panelu nástrojů najděte série ve všech dostupných zdrojích.

### Nemůžete najít konkrétní sérii? {#trouble-finding-a-specific-series}

Pokud máte potíže s hledáním konkrétní série, zvažte následující:

<!-- markdownlint-disable MD004 -->
* Zkontrolujte pravopis a zkuste to znovu, protože některé zdroje mohou používat **japonské názvy v latince** místo **anglických**.
  > Příklad: **Boku no Hero Academia** místo **My Hero Academia**.

* Některé zdroje mohou názvy psát nebo formulovat jinak.
  > Příklad: **Bungo Stray Dogs** místo **Bungou Stray Dogs**

  > Příklad: **3-gatsu no Lion** místo **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
