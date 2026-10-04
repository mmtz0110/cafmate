import { Link } from "react-router-dom";

const sessions = [
  {
    name: "Susu segar full cream",
    detail: "Supplier lokal · per liter",
    price: "Rp 16.500",
    unit: "/ liter",
    saving: "Hemat 18%",
    progress: 78,
    quantity: "78 / 100 liter",
    art: "art-milk",
    tag: "PALING DICARI",
    kind: "milk",
  },
  {
    name: "Biji kopi house blend",
    detail: "Roastery pilihan · per kg",
    price: "Rp 118.000",
    unit: "/ kg",
    saving: "Hemat 12%",
    progress: 54,
    quantity: "27 / 50 kg",
    art: "art-coffee",
    tag: "SESI TERBATAS",
    kind: "coffee",
  },
  {
    name: "Gelas paper cup 12 oz",
    detail: "Kemasan ramah lingkungan · 1.000 pcs",
    price: "Rp 690.000",
    unit: "/ 1.000 pcs",
    saving: "Hemat 15%",
    progress: 32,
    quantity: "320 / 1.000 pcs",
    art: "art-cup",
    tag: "BARU DIBUKA",
    kind: "cup",
  },
];

function ProductArtwork({ session }) {
  return (
    <div className={`product-art ${session.art}`} aria-hidden="true">
      <span className="product-tag">{session.tag}</span>
      {session.kind === "milk" && (
        <>
          <div className="bottle">
            <span>
              FRESH
              <br />
              MILK
            </span>
            <small>1 L</small>
          </div>
          <span className="art-leaf" />
        </>
      )}
      {session.kind === "coffee" && (
        <>
          <div className="coffee-sack">
            <span>
              HOUSE
              <br />
              BLEND
            </span>
            <small>1 KG</small>
          </div>
          <span className="art-bean bean-a" />
          <span className="art-bean bean-b" />
        </>
      )}
      {session.kind === "cup" && (
        <>
          <div className="cup-stack">
            <span>
              your
              <br />
              brand
            </span>
            <span>
              your
              <br />
              brand
            </span>
            <span>
              your
              <br />
              brand
            </span>
          </div>
          <span className="art-sun" />
        </>
      )}
    </div>
  );
}

function ProductCard({ session }) {
  return (
    <article className="product-card">
      <ProductArtwork session={session} />
      <div className="product-info">
        <div className="product-title">
          <div>
            <h3>{session.name}</h3>
            <p>{session.detail}</p>
          </div>
          <span className="product-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <div className="price-row">
          <strong>
            {session.price} <small>{session.unit}</small>
          </strong>
          <span className="saving">{session.saving}</span>
        </div>
        <div className="mini-progress">
          <div
            role="progressbar"
            aria-label={`Target ${session.name}`}
            aria-valuenow={session.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span style={{ width: `${session.progress}%` }} />
          </div>
          <small>{session.quantity}</small>
        </div>
      </div>
    </article>
  );
}

export function HowItWorks() {
  const steps = [
    [
      "01",
      "Pilih kebutuhan",
      "Temukan bahan baku harian dari supplier terverifikasi, lalu tentukan jumlah yang kamu perlukan.",
      "⌑",
    ],
    [
      "02",
      "Gabung pesanan",
      "Pesananmu dihimpun bersama cafe lain di area yang sama sampai target minimum tercapai.",
      "⌘",
    ],
    [
      "03",
      "Terima lebih hemat",
      "Konfirmasi pesanan saat target tercapai. Produk dikirim dengan biaya yang dibagi bersama.",
      "□",
    ],
  ];
  return (
    <section className="section page-shell" id="cara-kerja">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SEDERHANA, DARI AWAL</p>
          <h2>
            Semudah pesan.
            <br />
            <em>Lebih hemat.</em>
          </h2>
        </div>
        <p className="section-intro">
          CAFMATÉ menghubungkan kebutuhan cafe dengan kekuatan pesanan bersama.
          Kamu tetap memilih sendiri, kami bantu kumpulkan volumenya.
        </p>
      </div>
      <div className="steps-grid">
        {steps.map(([number, title, body, icon]) => (
          <article className="step" key={number}>
            <span className="step-number">{number}</span>
            <span className="step-icon" aria-hidden="true">
              {icon}
            </span>
            <h3>{title}</h3>
            <p>{body}</p>
            <span className="step-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductSessions() {
  return (
    <section className="product-section" id="produk">
      <div className="page-shell product-inner">
        <div className="section-heading product-heading">
          <div>
            <p className="eyebrow">SESI YANG SEDANG DIBUKA</p>
            <h2>
              Isi stok cafe,
              <br />
              <em>bukan biaya.</em>
            </h2>
          </div>
          <a className="text-link" href="#gabung">
            Jelajahi semua produk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="product-grid">
          {sessions.map((session) => (
            <ProductCard key={session.name} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section className="impact page-shell" id="dampak">
      <div className="impact-copy">
        <p className="eyebrow">DAMPAK YANG TERASA DI TOKO</p>
        <h2>
          Bisnis kecil,
          <br />
          daya beli <em>besar.</em>
        </h2>
        <p>
          Saat cafe saling terhubung, semua pihak mendapat bagian yang lebih
          baik: cafe mendapat harga bersahabat, supplier mendapat pesanan yang
          pasti, dan lebih sedikit bahan berakhir terbuang.
        </p>
        <a className="text-link" href="#tentang">
          Kenali misi CAFMATÉ <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="impact-stats">
        <div className="stat stat-main">
          <span className="stat-symbol" aria-hidden="true">
            ↘
          </span>
          <strong>
            15–25<span>%</span>
          </strong>
          <p>
            potensi penghematan
            <br />
            biaya bahan baku*
          </p>
        </div>
        <div className="stat">
          <span className="stat-symbol" aria-hidden="true">
            ↗
          </span>
          <strong>1 tujuan</strong>
          <p>
            pesanan terkonsolidasi,
            <br />
            pengiriman lebih efisien
          </p>
        </div>
        <div className="stat">
          <span className="stat-symbol" aria-hidden="true">
            ↻
          </span>
          <strong>Lebih sedikit</strong>
          <p>
            stok berlebih dan
            <br />
            bahan terbuang
          </p>
        </div>
        <small className="stat-note">
          *Estimasi berdasarkan selisih harga grosir. Penghematan aktual
          bergantung pada produk dan sesi.
        </small>
      </div>
    </section>
  );
}

export function CommunityQuote() {
  return (
    <section className="quote-band" id="tentang">
      <div className="quote-inner page-shell">
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote>
          Harga bahan baku yang lebih adil bikin kami bisa fokus menyajikan kopi
          yang lebih baik.
        </blockquote>
        <div className="quote-person">
          <span className="person-avatar" aria-hidden="true">
            M
          </span>
          <span>
            <strong>Maya Pradana</strong>
            <small>Pemilik, Kedai Pagi</small>
          </span>
        </div>
        <span className="quote-count">
          CERITA DARI KOMUNITAS &nbsp; 01 / 04
        </span>
      </div>
    </section>
  );
}

export function JoinCallout() {
  return (
    <section className="cta-section page-shell" id="gabung">
      <div className="cta-box">
        <div className="cta-decoration" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">UNTUK CAFE YANG INGIN TUMBUH</p>
        <h2>
          Yuk, belanja
          <br />
          bareng <em>CAFMATÉ.</em>
        </h2>
        <p>Daftarkan cafe-mu dan temukan sesi belanja kolektif di sekitarmu.</p>
        <Link className="button button-light" to="/marketplace">
          Daftarkan cafe <span aria-hidden="true">↗</span>
        </Link>
        <small>Gratis untuk mulai. Tanpa komitmen berlangganan.</small>
      </div>
    </section>
  );
}
