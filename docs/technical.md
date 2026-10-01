# Technical Context

## Current stack
```
React 19
Vite 8
Tailwind CSS 4
Framer Motion
Lucide React
GitHub Actions
GitHub Pages
```

## Current deployment
Vite menggunakan:
```js
base: '/lala-integra-website/'
```

Build dilakukan oleh GitHub Actions dan folder `dist` dipublikasikan ke GitHub Pages.

## Current entry points
- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`

Saat ini mayoritas UI masih berada di `src/App.jsx`.

## Arsitektur target jangka dekat
Tanpa overengineering, pecah aplikasi menjadi:

```
src/
  components/
    layout/
    ui/
    sections/
  pages/
    Home.jsx
    Services.jsx
    ServiceDetail.jsx
    Portfolio.jsx
    About.jsx
    Contact.jsx
  data/
    services.js
    navigation.js
  App.jsx
  main.jsx
  index.css
```

## Routing
Untuk tahap multi-page, gunakan React Router bila dibutuhkan.

Karena deployment berada di GitHub Pages subpath, routing harus diuji terhadap:
- direct navigation
- refresh halaman
- base path
- fallback behavior GitHub Pages

Jika routing browser history menimbulkan masalah di GitHub Pages, pertimbangkan HashRouter atau solusi 404 fallback. Pilih berdasarkan kebutuhan UX dan deployment aktual.

## Engineering rules
- jangan pindah framework hanya untuk terlihat lebih modern
- pertahankan React/Vite selama kebutuhan masih cocok
- jangan menambahkan backend tanpa requirement
- jangan menambahkan database untuk konten statis
- ekstrak data layanan dari JSX agar mudah dikelola
- prioritaskan semantic HTML dan accessibility
- pastikan CTA dan navigation dapat digunakan di mobile
- kurangi animasi jika mengganggu performa
- hindari dependency baru bila manfaatnya kecil

## Verifikasi minimum
Setelah perubahan kode:
```
npm ci
npm run lint
npm run build
```

Bila perubahan UI signifikan:
- cek desktop
- cek mobile
- cek overflow horizontal
- cek link dan CTA
- cek GitHub Pages base path

## Security
Jangan commit:
- API keys
- passwords
- secrets
- private client data
- credential email/hosting

Secrets harus menggunakan secret manager/environment variable yang sesuai.
