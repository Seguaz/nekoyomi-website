---
title: Primeiros passos
titleTemplate: Guias
description: Informações essenciais para o ajudar a começar a utilizar o Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Primeiros passos

Informações essenciais para o ajudar a começar a utilizar o Nekoyomi.

## Guia de instalação {#installation-guide}

### Transferir o Nekoyomi {#downloading-nekoyomi}

1. Visite a nossa página de [transferência](/download/) para obter a versão mais recente do **Nekoyomi**.
2. Quando a transferência terminar, abra o ficheiro `.apk`.
3. Prossiga com o processo de instalação.

### Adicionar fontes {#adding-sources}

Depois de instalar o **Nekoyomi** no seu dispositivo, pode trazer o seu próprio conteúdo de várias fontes:

:::: tabs
== Fonte local
Leia ou veja conteúdo guardado localmente no seu dispositivo.

Consulte os guias da fonte local para ver as instruções:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Repositórios externos
Os repositórios externos adicionam mais fontes ao **Nekoyomi**. Pode adicionar repositórios externos indo a <nav to="browse"> e tocando em **Repositórios de extensão de anime/manga**.

Aí, pode adicionar repositórios introduzindo URLs que terminem em `index.min.json`.

::: danger Atenção
O Nekoyomi não fornecerá recursos para quaisquer repositórios não oficiais. Tenha em conta que quaisquer repositórios ou extensões de terceiros terão acesso total à aplicação e podem conter malware.
:::

Depois de adicionar um repositório, vá a <nav to="extensions"> e atualize a lista de extensões.

Agora pode tocar no botão de transferência junto às extensões para as instalar.

> Poderá ter de [ativar as instalações de terceiros](/docs/faq/browse/extensions#enabling-third-party-installations).

== Extensões manuais
As extensões podem ser instaladas manualmente através de ficheiros `.apk`.

::: danger Atenção
O Nekoyomi não fornecerá recursos para quaisquer extensões não oficiais. Tenha em conta que quaisquer repositórios ou extensões de terceiros terão acesso total à aplicação e podem conter malware.
:::
::::

### Adicionar séries à sua biblioteca {#adding-series-to-your-library}

Depois de instalar a extensão pretendida, vai encontrá-la no separador **Fontes de Mangá/Anime**.

Eis como pode adicionar séries à sua biblioteca:

1. Selecione a fonte que pretende explorar.
2. Pode usar as listas **Famoso**/**Mais recente** para explorar, ou procurar pelo nome da série.
3. Quando encontrar a série que quer adicionar, toque nela para ver mais detalhes.
4. Toque no botão "**Adicionar à biblioteca**" e a série será adicionada à sua Biblioteca, pronta a ler/ver!

## Configuração adicional {#additional-setup}

### Opções de procura de séries {#series-search-options}

Se quiser procurar séries em todas as suas fontes, pode usar a funcionalidade Procura geral.

Siga estes passos:

1. Vá à secção "**Navegar**".
2. Certifique-se de que está no separador "**Fontes**", localizado no canto superior direito.
3. Use o ícone de procura na barra de ferramentas para encontrar séries em todas as fontes disponíveis.

### Dificuldade em encontrar uma série específica? {#trouble-finding-a-specific-series}

Se tiver dificuldades ao procurar uma série específica, tenha em conta os seguintes pontos:

<!-- markdownlint-disable MD004 -->
* Verifique a ortografia e tente novamente, pois algumas fontes podem usar títulos em **japonês romanizado** em vez de em **inglês**.
  > Exemplo: **Boku no Hero Academia** em vez de **My Hero Academia**.

* Algumas fontes podem usar grafias ou formulações diferentes para os títulos.
  > Exemplo: **Bungo Stray Dogs** em vez de **Bungou Stray Dogs**

  > Exemplo: **3-gatsu no Lion** em vez de **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
