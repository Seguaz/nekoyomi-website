---
title: Başlarken
titleTemplate: Kılavuzlar
description: Nekoyomi'yi kurmanıza yardımcı olacak temel bilgiler.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Başlarken

Nekoyomi'yi kurmanıza yardımcı olacak temel bilgiler.

## Kurulum kılavuzu {#installation-guide}

### Nekoyomi'yi indirme {#downloading-nekoyomi}

1. **Nekoyomi**'nin en son sürümünü edinmek için [indirme](/download/) sayfamızı ziyaret edin.
2. İndirme tamamlandıktan sonra `.apk` dosyasını açın.
3. Kurulum işlemine devam edin.

### Kaynak ekleme {#adding-sources}

**Nekoyomi** cihazınıza yüklendikten sonra, okumak için çeşitli kaynaklardan kendi içeriğinizi ekleyebilirsiniz:

:::: tabs
== Yerel kaynak
Cihazınızda yerel olarak depolanan içeriği okuyun veya izleyin.

Talimatlar için yerel kaynak kılavuzlarına bakın:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Harici depolar
Harici depolar **Nekoyomi**'ye ek kaynaklar ekler. Harici depoları <nav to="browse"> bölümüne gidip **Anime/Manga uzantı depoları** seçeneğine dokunarak ekleyebilirsiniz.

Orada, `index.min.json` ile biten URL'ler girerek depo ekleyebilirsiniz.

::: danger Dikkat
Nekoyomi, resmi olmayan hiçbir depo için destek kaynağı sağlamaz. Üçüncü taraf depoların ve uzantıların uygulamaya tam erişimi olacağını ve kötü amaçlı yazılım içerebileceğini unutmayın.
:::

Bir depo ekledikten sonra <nav to="extensions"> bölümüne gidin ve uzantı listesini yenileyin.

Artık uzantıları yüklemek için yanlarındaki indirme düğmesine dokunabilirsiniz.

> [Üçüncü taraf yüklemelerini etkinleştirmeniz](/docs/faq/browse/extensions#enabling-third-party-installations) gerekebilir.

== Manuel uzantılar
Uzantılar `.apk` dosyaları aracılığıyla manuel olarak yüklenebilir.

::: danger Dikkat
Nekoyomi, resmi olmayan hiçbir uzantı için destek kaynağı sağlamaz. Üçüncü taraf depoların ve uzantıların uygulamaya tam erişimi olacağını ve kötü amaçlı yazılım içerebileceğini unutmayın.
:::
::::

### Kitaplığınıza seri ekleme {#adding-series-to-your-library}

İstediğiniz uzantıyı yükledikten sonra onu **Manga/Anime Kaynakları** sekmesinde bulacaksınız.

Kitaplığınıza şu şekilde seri ekleyebilirsiniz:

1. Göz atmak istediğiniz kaynağı seçin.
2. Göz atmak için **Popüler**/**En son** listelerini kullanabilir veya seri adını arayabilirsiniz.
3. Eklemek istediğiniz seriyi bulduğunuzda, daha fazla ayrıntı için üzerine dokunun.
4. "**Kitaplığa ekle**" düğmesine basın; seri Kitaplığınıza eklenecek ve okunmaya/izlenmeye hazır olacak!

## Ek ayarlar {#additional-setup}

### Seri arama seçenekleri {#series-search-options}

Tüm kaynaklarınızda seri aramak istiyorsanız Genel arama özelliğini kullanabilirsiniz.

Şu adımları izleyin:

1. "**Göz At**" bölümüne gidin.
2. Sağ üst köşede bulunan "**Kaynaklar**" sekmesinde olduğunuzdan emin olun.
3. Mevcut tüm kaynaklarda seri bulmak için araç çubuğundaki Arama simgesini kullanın.

### Belirli bir seriyi bulmakta zorlanıyor musunuz? {#trouble-finding-a-specific-series}

Belirli bir seriyi ararken zorluk yaşarsanız şu noktaları göz önünde bulundurun:

<!-- markdownlint-disable MD004 -->
* Yazımınızı tekrar kontrol edip yeniden deneyin; bazı kaynaklar **İngilizce** başlıklar yerine **Japonca romanize** başlıklar kullanabilir.
  > Örnek: **My Hero Academia** yerine **Boku no Hero Academia**.

* Bazı kaynaklar başlıklar için farklı yazımlar veya ifadeler kullanabilir.
  > Örnek: **Bungou Stray Dogs** yerine **Bungo Stray Dogs**

  > Örnek: **Sangatsu no Lion** yerine **3-gatsu no Lion**.
<!-- markdownlint-enable MD004 -->
