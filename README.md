# CAFMATÉ

CAFMATÉ adalah prototipe marketplace B2B untuk cafe independen. Platform ini membantu cafe bergabung dalam pembelian bahan baku agar dapat mengakses harga grosir, menggabungkan pengiriman, dan mengurangi stok berlebih.

## Fitur saat ini

- **Landing page** yang memperkenalkan konsep, cara kerja group buying, sesi produk, dan manfaat CAFMATÉ.
- **Dashboard marketplace** dengan ringkasan cafe, reliability score, penghematan, serta katalog sesi pembelian.
- **Pencarian dan filter produk** berdasarkan nama, supplier, dan kategori.
- **Pengurutan sesi** berdasarkan relevansi, harga terendah, atau waktu berakhir.
- **Indikator progres MOQ**, harga grosir, estimasi penghematan, dan sisa waktu sesi.
- **Interaksi demo** untuk memilih sesi group buying, dengan notifikasi pada halaman.
- **Halaman dummy** agar tautan dashboard bisa diuji sebelum fitur lengkap dibuat.
- Layout responsif untuk desktop dan perangkat mobile.

## Teknologi

- React
- Vite
- React Router
- Prettier

## Menjalankan proyek

Gunakan Node.js 20.19 atau lebih baru.

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite, lalu gunakan rute berikut:

| Rute                       | Halaman                       |
| -------------------------- | ----------------------------- |
| `/`                        | Landing page CAFMATÉ          |
| `/marketplace`             | Dashboard marketplace cafe    |
| `/dashboard/overview`      | Ringkasan cafe (dummy)        |
| `/dashboard/orders`        | Pesanan saya (dummy)          |
| `/dashboard/favorites`     | Produk favorit (dummy)        |
| `/dashboard/profile`       | Profil cafe (dummy)           |
| `/dashboard/notifications` | Notifikasi (dummy)            |
| `/dashboard/cart`          | Sesi pilihan (dummy)          |
| `/dashboard/reputation`    | Reliability score (dummy)     |
| `/dashboard/savings`       | Ringkasan penghematan (dummy) |

## Perintah

| Perintah               | Kegunaan                              |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Menjalankan server development        |
| `npm run build`        | Membuat production build di `dist/`   |
| `npm run preview`      | Menjalankan preview production build  |
| `npm run format`       | Memformat file proyek dengan Prettier |
| `npm run format:check` | Memeriksa format tanpa mengubah file  |

## Struktur proyek

```text
src/
├── App.jsx
├── main.jsx
├── styles.css
├── components/
│   ├── DashboardPlaceholder.jsx
│   ├── Hero.jsx
│   ├── MarketplaceCatalog.jsx
│   ├── MarketplaceChrome.jsx
│   ├── MarketplaceDashboard.css
│   ├── MarketplaceDashboard.jsx
│   ├── ProductSessionCard.jsx
│   ├── Sections.jsx
│   ├── SiteFooter.jsx
│   └── SiteHeader.jsx
└── data/
    └── marketplaceSessions.js
```

## Batasan prototipe

Data produk, supplier, cafe, nilai penghematan, reliability score, dan statistik masih berupa contoh lokal. Pemilihan sesi hanya disimpan selama dashboard aktif. Autentikasi, API/backend, pembayaran DP, pemrosesan pesanan, dan penyimpanan permanen belum diimplementasikan. Halaman dummy hanya membantu menguji navigasi dan belum mewakili alur operasional penuh.
