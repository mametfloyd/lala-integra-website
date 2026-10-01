# LALA Integra Teknologi — Work Context

## Tujuan workspace
Workspace ini menjadi pusat kerja untuk pengembangan bisnis dan website Lala Integra Teknologi (LIT).

Gunakan repository ini sebagai source of truth untuk website publik:
- Repository: mametfloyd/lala-integra-website
- Branch produksi: main
- Branch kerja awal untuk dokumentasi/migrasi: work-migration
- Deployment: GitHub Pages
- Public site: https://mametfloyd.github.io/lala-integra-website/

## Profil bisnis
Lala Integra Teknologi adalah bisnis jasa teknologi informasi yang melayani kebutuhan seperti:
- pembuatan website perusahaan
- aplikasi/software custom
- maintenance sistem
- technical support
- perbaikan laptop/PC
- maintenance OS dan keamanan dasar
- setup email bisnis, domain, hosting, backup
- layanan IT lain yang relevan dengan kebutuhan UMKM/perusahaan

Fokus bisnis adalah solusi yang praktis, profesional, bertahap, dan realistis untuk kebutuhan klien.

## Prinsip kerja
1. Jangan mengubah branch main secara langsung untuk pekerjaan besar.
2. Audit kondisi repo terlebih dahulu sebelum mengubah kode.
3. Untuk fitur besar, buat branch terpisah.
4. Pertahankan mobile responsiveness, performa, dan kompatibilitas GitHub Pages.
5. Jangan mengarang harga, spesifikasi, portfolio, testimoni, alamat, legalitas, atau klaim bisnis.
6. Jika informasi bisnis belum dikonfirmasi, tandai sebagai TODO.
7. Hindari menambahkan backend, login, atau database bila belum benar-benar dibutuhkan.
8. Website saat ini adalah website pemasaran jasa, bukan aplikasi SaaS.

## Stack saat ini
- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React
- GitHub Actions
- GitHub Pages

## Kondisi awal website
Saat migrasi dimulai, website masih berupa satu halaman panjang dengan section:
- hero
- layanan
- proses
- alasan memilih LIT
- paket
- use case
- kontak

Prioritas jangka dekat adalah mengubahnya menjadi website multi-page yang lebih mudah dikembangkan untuk banyak layanan dan produk.

## Gaya komunikasi website
- Bahasa utama: Indonesia
- Profesional namun tidak terlalu korporat
- Fokus pada masalah bisnis yang diselesaikan
- Hindari jargon teknis yang tidak perlu
- CTA utama: konsultasi / WhatsApp / request penawaran

## Instruksi untuk ChatGPT Work
Sebelum memulai task:
1. baca WORK_CONTEXT.md
2. baca docs/business.md
3. baca docs/technical.md
4. baca docs/backlog.md
5. inspect file yang relevan
6. jelaskan perubahan secara singkat
7. implementasikan
8. jalankan build/lint jika lingkungan mendukung
9. laporkan file yang berubah, hasil verifikasi, dan risiko yang tersisa

Jangan memperlakukan ide di backlog sebagai requirement final. Backlog adalah arah kerja dan dapat direvisi.
