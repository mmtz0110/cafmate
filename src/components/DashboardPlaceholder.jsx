import { Link, useParams } from "react-router-dom";
import { MarketplaceSidebar } from "./MarketplaceChrome.jsx";
import "./MarketplaceDashboard.css";

const pages = {
  overview: {
    title: "Ringkasan cafe",
    description:
      "Pantau aktivitas belanja, stok, dan performa cafe-mu di satu tempat.",
    metric: "Ringkasan operasional segera hadir",
  },
  orders: {
    title: "Pesanan saya",
    description:
      "Lihat status pesanan kolektif dan riwayat pembelian Kedai Pagi.",
    metric: "2 pesanan sedang diproses",
  },
  favorites: {
    title: "Produk favorit",
    description:
      "Simpan bahan baku yang sering kamu beli agar mudah ditemukan lagi.",
    metric: "Belum ada produk favorit",
  },
  profile: {
    title: "Profil cafe",
    description:
      "Kelola informasi cafe, alamat pengiriman, dan preferensi akun.",
    metric: "Kedai Pagi · Bandung",
  },
  notifications: {
    title: "Notifikasi",
    description: "Pembaruan sesi, status pesanan, dan kabar terbaru CAFMATÉ.",
    metric: "Kamu sudah melihat semua notifikasi demo",
  },
  cart: {
    title: "Sesi pilihan",
    description:
      "Tinjau sesi group buying yang ingin kamu ikuti sebelum konfirmasi pesanan.",
    metric:
      "Ringkasan pilihan dan konfirmasi pesanan hadir di langkah berikutnya",
  },
  reputation: {
    title: "Reliability score",
    description:
      "Skor ini merangkum konsistensi cafe dalam menyelesaikan pesanan kolektif.",
    metric: "Skor Kedai Pagi: 92 / 100",
  },
  savings: {
    title: "Ringkasan penghematan",
    description:
      "Lihat perbandingan harga belanja kolektif dengan harga eceran supplier.",
    metric: "Penghematan demo bulan ini: Rp 1.245.000",
  },
};

export default function DashboardPlaceholder() {
  const { section } = useParams();
  const page = pages[section] ?? pages.overview;

  return (
    <div className="marketplace-app">
      <MarketplaceSidebar />
      <main className="placeholder-main">
        <header className="placeholder-topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <b>/</b>
            <strong>{page.title}</strong>
          </div>
          <Link className="placeholder-back" to="/marketplace">
            Kembali ke marketplace <span aria-hidden="true">↗</span>
          </Link>
        </header>
        <section className="placeholder-content">
          <p className="market-eyebrow">CAFMATÉ WORKSPACE</p>
          <h1>{page.title}</h1>
          <p className="placeholder-description">{page.description}</p>
          <div className="placeholder-panel">
            <span className="placeholder-symbol" aria-hidden="true">
              ✳
            </span>
            <strong>{page.metric}</strong>
            <p>
              Halaman ini adalah versi demo untuk mencoba navigasi. Fitur
              lengkapnya akan tersedia setelah alur dashboard disambungkan.
            </p>
            <Link className="button" to="/marketplace">
              Jelajahi sesi belanja <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
