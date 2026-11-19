---
title: Primeiros passos
titleTemplate: Guias
description: Informações essenciais para ajudar você a começar a usar o Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Primeiros passos

Informações essenciais para ajudar você a começar a usar o Nekoyomi.

## Guia de instalação {#installation-guide}

### Baixando o Nekoyomi {#downloading-nekoyomi}

1. Acesse nossa página de [download](/download/) para obter a versão mais recente do **Nekoyomi**.
2. Quando o download terminar, abra o arquivo `.apk`.
3. Siga com o processo de instalação.

### Adicionando fontes {#adding-sources}

Depois de instalar o **Nekoyomi** no seu dispositivo, você pode trazer seu próprio conteúdo de várias fontes:

:::: tabs
== Fonte local
Leia ou assista a conteúdos armazenados localmente no seu dispositivo.

Confira os guias de fonte local para ver as instruções:
- [Mangá](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Repositórios externos
Repositórios externos adicionam mais fontes ao **Nekoyomi**. Você pode adicionar repositórios externos acessando <nav to="browse"> e tocando em **Repositório de extensões de anime/mangás**.

Lá, você pode adicionar repositórios inserindo URLs que terminem em `index.min.json`.

::: danger Cuidado
O Nekoyomi não fornecerá recursos para nenhum repositório não oficial. Saiba que qualquer repositório ou extensão de terceiros terá acesso total ao app e pode conter malware.
:::

Depois de adicionar um repositório, vá para <nav to="extensions"> e atualize a lista de extensões.

Agora você pode tocar no botão de download ao lado das extensões para instalá-las.

> Talvez seja necessário [permitir instalações de terceiros](/docs/faq/browse/extensions#enabling-third-party-installations).

== Extensões manuais
As extensões podem ser instaladas manualmente por meio de arquivos `.apk`.

::: danger Cuidado
O Nekoyomi não fornecerá recursos para nenhuma extensão não oficial. Saiba que qualquer repositório ou extensão de terceiros terá acesso total ao app e pode conter malware.
:::
::::

### Adicionando séries à sua biblioteca {#adding-series-to-your-library}

Depois de instalar a extensão desejada, você a encontrará na aba **Fontes de Mangá/Anime**.

Veja como adicionar séries à sua biblioteca:

1. Selecione a fonte que você quer explorar.
2. Você pode usar as listas **Popular**/**Recentes** para navegar ou pesquisar pelo nome da série.
3. Quando encontrar a série que quer adicionar, toque nela para ver mais detalhes.
4. Toque no botão "**Adicionar à biblioteca**" e a série será adicionada à sua Biblioteca, pronta para ler/assistir!

## Configuração adicional {#additional-setup}

### Opções de pesquisa de séries {#series-search-options}

Se quiser pesquisar séries em todas as suas fontes, você pode usar o recurso de Pesquisa global.

Siga estes passos:

1. Vá até a seção "**Navegar**".
2. Certifique-se de que está na aba "**Fontes**", localizada no canto superior direito.
3. Use o ícone de pesquisa na barra de ferramentas para encontrar séries em todas as fontes disponíveis.

### Dificuldade para encontrar uma série específica? {#trouble-finding-a-specific-series}

Se você tiver dificuldades ao pesquisar uma série específica, considere os seguintes pontos:

<!-- markdownlint-disable MD004 -->
* Confira a ortografia e tente novamente, pois algumas fontes podem usar títulos em **japonês romanizado** em vez de em **inglês**.
  > Exemplo: **Boku no Hero Academia** em vez de **My Hero Academia**.

* Algumas fontes podem usar grafias ou formas diferentes para os títulos.
  > Exemplo: **Bungo Stray Dogs** em vez de **Bungou Stray Dogs**

  > Exemplo: **3-gatsu no Lion** em vez de **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
