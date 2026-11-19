---
title: Primeros pasos
titleTemplate: Guías
description: Información esencial para ayudarte a empezar a usar Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Primeros pasos

Información esencial para ayudarte a empezar a usar Nekoyomi.

## Guía de instalación {#installation-guide}

### Descargar Nekoyomi {#downloading-nekoyomi}

1. Visita nuestra página de [descarga](/download/) para obtener la última versión de **Nekoyomi**.
2. Cuando termine la descarga, abre el archivo `.apk`.
3. Sigue el proceso de instalación.

### Añadir fuentes {#adding-sources}

Una vez instalado **Nekoyomi** en tu dispositivo, puedes añadir tu propio contenido desde varias fuentes:

:::: tabs
== Fuente local
Lee o mira contenido guardado localmente en tu dispositivo.

Consulta las guías de fuente local para ver las instrucciones:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Repositorios externos
Los repositorios externos añaden fuentes adicionales a **Nekoyomi**. Puedes añadir repositorios externos yendo a <nav to="browse"> y tocando **Repositorios de extensiones de anime/manga**.

Una vez ahí, puedes añadir repositorios introduciendo URL que terminen en `index.min.json`.

::: danger Precaución
Nekoyomi no proporcionará recursos para ningún repositorio no oficial. Ten en cuenta que cualquier repositorio o extensión de terceros tendrá acceso total a la app y puede contener malware.
:::

Cuando hayas añadido un repositorio, ve a <nav to="extensions"> y actualiza la lista de extensiones.

Ahora puedes tocar el botón de descarga que hay junto a las extensiones para instalarlas.

> Puede que tengas que [permitir la instalación de apps de terceros](/docs/faq/browse/extensions#enabling-third-party-installations).

== Extensiones manuales
Las extensiones se pueden instalar manualmente mediante archivos `.apk`.

::: danger Precaución
Nekoyomi no proporcionará recursos para ninguna extensión no oficial. Ten en cuenta que cualquier repositorio o extensión de terceros tendrá acceso total a la app y puede contener malware.
:::
::::

### Añadir series a tu biblioteca {#adding-series-to-your-library}

Después de instalar la extensión que quieras, la encontrarás en la pestaña **Fuentes de Manga/Anime**.

Así puedes añadir series a tu biblioteca:

1. Selecciona la fuente que quieras explorar.
2. Puedes usar las listas **Populares**/**Recientes** para explorar, o buscar por el nombre de la serie.
3. Cuando encuentres la serie que quieres añadir, tócala para ver más detalles.
4. Pulsa el botón "**Añadir a la biblioteca**" y la serie se añadirá a tu Biblioteca, ¡lista para leer o ver!

## Configuración adicional {#additional-setup}

### Opciones de búsqueda de series {#series-search-options}

Si quieres buscar series en todas tus fuentes, puedes usar la función de Búsqueda global.

Sigue estos pasos:

1. Ve a la sección "**Explorar**".
2. Asegúrate de estar en la pestaña "**Fuentes**", situada en la esquina superior derecha.
3. Usa el icono de búsqueda de la barra de herramientas para encontrar series en todas las fuentes disponibles.

### ¿Te cuesta encontrar una serie concreta? {#trouble-finding-a-specific-series}

Si tienes problemas al buscar una serie concreta, ten en cuenta lo siguiente:

<!-- markdownlint-disable MD004 -->
* Revisa la ortografía y vuelve a intentarlo, ya que algunas fuentes pueden usar títulos en **japonés romanizado** en lugar de en **inglés**.
  > Ejemplo: **Boku no Hero Academia** en lugar de **My Hero Academia**.

* Algunas fuentes pueden escribir o formular los títulos de otra manera.
  > Ejemplo: **Bungo Stray Dogs** en lugar de **Bungou Stray Dogs**

  > Ejemplo: **3-gatsu no Lion** en lugar de **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
