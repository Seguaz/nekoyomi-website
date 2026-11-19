---
title: Memulai
titleTemplate: Panduan
description: Informasi penting untuk membantu Anda menyiapkan Nekoyomi.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Memulai

Informasi penting untuk membantu Anda menyiapkan Nekoyomi.

## Panduan instalasi {#installation-guide}

### Mengunduh Nekoyomi {#downloading-nekoyomi}

1. Kunjungi halaman [unduhan](/download/) kami untuk mendapatkan versi terbaru **Nekoyomi**.
2. Setelah unduhan selesai, buka file `.apk`.
3. Lanjutkan proses instalasi.

### Menambahkan sumber {#adding-sources}

Setelah **Nekoyomi** terpasang di perangkat Anda, Anda dapat menghadirkan konten Anda sendiri untuk dibaca dari berbagai sumber:

:::: tabs
== Sumber lokal
Baca atau tonton konten yang tersimpan secara lokal di perangkat Anda.

Lihat panduan sumber lokal untuk petunjuknya:
- [Manga](/docs/guides/local-manga-source/)
- [Anime](/docs/guides/local-anime-source/)

== Repositori eksternal
Repositori eksternal menambahkan sumber tambahan ke **Nekoyomi**. Anda dapat menambahkan repositori eksternal dengan membuka <nav to="browse"> lalu mengetuk **Repo ekstensi anime/manga**.

Di sana, Anda dapat menambahkan repositori dengan memasukkan URL yang berakhiran `index.min.json`.

::: danger Perhatian
Nekoyomi tidak akan menyediakan sumber daya untuk repositori tidak resmi apa pun. Perlu diingat bahwa repositori atau ekstensi pihak ketiga mana pun akan memiliki akses penuh ke aplikasi dan dapat berisi malware.
:::

Setelah menambahkan repositori, buka <nav to="extensions"> dan segarkan daftar ekstensi.

Sekarang Anda dapat mengetuk tombol unduh di samping ekstensi untuk memasangnya.

> Anda mungkin perlu [mengaktifkan instalasi pihak ketiga](/docs/faq/browse/extensions#enabling-third-party-installations).

== Ekstensi manual
Ekstensi dapat dipasang secara manual melalui file `.apk`.

::: danger Perhatian
Nekoyomi tidak akan menyediakan sumber daya untuk ekstensi tidak resmi apa pun. Perlu diingat bahwa repositori atau ekstensi pihak ketiga mana pun akan memiliki akses penuh ke aplikasi dan dapat berisi malware.
:::
::::

### Menambahkan serial ke pustaka Anda {#adding-series-to-your-library}

Setelah memasang ekstensi yang diinginkan, Anda akan menemukannya di tab **Sumber Manga/Anime**.

Berikut cara menambahkan serial ke pustaka Anda:

1. Pilih sumber yang ingin Anda jelajahi.
2. Anda dapat menggunakan daftar **Populer**/**Terbaru** untuk menjelajah, atau mencari nama serialnya.
3. Setelah menemukan serial yang ingin ditambahkan, ketuk serial tersebut untuk melihat detail lebih lanjut.
4. Tekan tombol "**Tambahkan ke pustaka**", dan serial akan ditambahkan ke Pustaka Anda, siap dibaca/ditonton!

## Pengaturan tambahan {#additional-setup}

### Opsi pencarian serial {#series-search-options}

Jika ingin mencari serial di semua sumber Anda, Anda dapat menggunakan fitur Pencarian Global.

Ikuti langkah-langkah berikut:

1. Buka bagian "**Jelajahi**".
2. Pastikan Anda berada di tab "**Sumber**" yang terletak di pojok kanan atas.
3. Gunakan ikon Cari di bilah alat untuk menemukan serial dari semua sumber yang tersedia.

### Kesulitan menemukan serial tertentu? {#trouble-finding-a-specific-series}

Jika Anda mengalami kesulitan saat mencari serial tertentu, perhatikan hal-hal berikut:

<!-- markdownlint-disable MD004 -->
* Periksa kembali ejaan Anda lalu coba lagi, karena beberapa sumber mungkin menggunakan judul **romanisasi Jepang** alih-alih judul **Inggris**.
  > Contoh: **Boku no Hero Academia** alih-alih **My Hero Academia**.

* Beberapa sumber mungkin menggunakan ejaan atau susunan kata yang berbeda untuk judul.
  > Contoh: **Bungo Stray Dogs** alih-alih **Bungou Stray Dogs**

  > Contoh: **3-gatsu no Lion** alih-alih **Sangatsu no Lion**.
<!-- markdownlint-enable MD004 -->
