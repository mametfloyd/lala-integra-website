# Prompt Library for ChatGPT Work

## Prompt pertama yang direkomendasikan

Baca WORK_CONTEXT.md dan semua file di folder docs terlebih dahulu. Setelah itu audit repository ini sebagai website bisnis Lala Integra Teknologi.

Tujuan pertama:
1. pahami struktur source saat ini
2. identifikasi masalah arsitektur, UX, mobile, SEO, dan maintainability
3. jangan mengubah tampilan secara drastis dulu
4. buat rencana refactor bertahap
5. implementasikan P0.1: pecah src/App.jsx menjadi struktur komponen yang lebih mudah dipelihara
6. pertahankan hasil visual sedekat mungkin dengan versi sekarang
7. jalankan lint dan build
8. laporkan semua file yang berubah dan masalah yang masih tersisa

Jangan mengubah branch main secara langsung. Gunakan branch kerja.

---

## Prompt: ubah menjadi multi-page

Lanjutkan project Lala Integra Teknologi berdasarkan WORK_CONTEXT.md.

Kerjakan P0.2. Ubah struktur one-page menjadi website multi-page dengan halaman Home, Services, About, Portfolio, dan Contact.

Ketentuan:
- gunakan stack React/Vite yang sudah ada
- jangan migrasi framework
- pertahankan visual identity saat ini
- buat navigation desktop dan mobile
- perhatikan deployment GitHub Pages di subpath /lala-integra-website/
- hindari broken route ketika refresh
- ekstrak data layanan agar reusable
- jangan membuat portfolio/testimoni fiktif
- jalankan lint dan build setelah selesai

---

## Prompt: service architecture

Audit daftar layanan Lala Integra Teknologi berdasarkan docs/business.md.

Tugas:
- kelompokkan layanan agar mudah dipahami calon pelanggan non-teknis
- buat struktur kategori dan halaman detail yang scalable
- hindari overlap antar kategori
- jangan menambah layanan yang belum masuk konteks bisnis
- implementasikan struktur data services dan halaman Services
- setiap layanan harus memiliki CTA yang jelas

---

## Prompt: SEO audit

Audit website Lala Integra Teknologi dari sisi technical SEO dan on-page SEO.

Prioritas:
- title
- meta description
- heading hierarchy
- canonical/base URL
- Open Graph
- semantic HTML
- internal links
- sitemap/robots bila relevan
- schema hanya jika datanya benar-benar tersedia

Jangan membuat klaim perusahaan, rating, review, alamat, atau data bisnis yang belum dikonfirmasi.

Implementasikan perbaikan yang aman lalu jalankan build.

---

## Prompt: UX review

Audit website ini sebagai calon pelanggan bisnis yang sedang mencari vendor IT.

Cari masalah dalam:
- kejelasan layanan
- trust
- CTA
- navigation
- mobile
- pricing communication
- contact flow

Pisahkan:
- masalah kritis
- masalah menengah
- nice-to-have

Setelah audit, implementasikan hanya perubahan yang berdampak tinggi dan rendah risiko. Jangan membuat redesign total tanpa alasan.

---

## Prompt: release checklist

Persiapkan perubahan saat ini agar aman digabung ke main.

Periksa:
- lint
- production build
- broken imports
- routing
- responsive layout
- links/CTA
- GitHub Pages base path
- accidental secrets
- placeholder content
- fake claims
- form behavior

Jika menemukan masalah, perbaiki sebelum menyatakan siap merge.
