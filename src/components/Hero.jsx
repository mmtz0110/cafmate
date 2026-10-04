export default function Hero() {
  return (
    <section className="hero page-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          RANTAI PASOK YANG LEBIH BERSAHABAT
        </p>
        <h1>
          Belanja bareng.
          <br />
          <em>Untung</em> bareng.
        </h1>
        <p className="hero-text">
          Harga grosir bukan cuma untuk bisnis besar. Gabungkan pesanan bahan
          baku dengan cafe lain dan dapatkan harga yang lebih ringan untuk
          usahamu.
        </p>
        <div className="hero-actions">
          <a className="button" href="#produk">
            Lihat produk <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#cara-kerja">
            Kenali cara kerjanya <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="trust-row">
          <div className="avatar-stack" aria-hidden="true">
            <span>R</span>
            <span>A</span>
            <span>D</span>
            <span>+</span>
          </div>
          <p>
            <strong>120+ cafe</strong>
            <br />
            sudah belanja bareng
          </p>
        </div>
      </div>
      <div
        className="hero-visual"
        role="img"
        aria-label="Ilustrasi pasokan susu dan kopi untuk sesi belanja bersama"
      >
        <div className="visual-topline">
          <span>SESI BELANJA MINGGU INI</span>
          <span className="live">
            <i />
            BERJALAN
          </span>
        </div>
        <div className="bag-scene" aria-hidden="true">
          <div className="sun-disc" />
          <div className="bean bean-one" />
          <div className="bean bean-two" />
          <div className="bean bean-three" />
          <div className="milk-pack">
            <span>
              FRESH
              <br />
              MILK
            </span>
            <small>100% SEGAR</small>
          </div>
          <div className="coffee-pack">
            <div className="pack-label">
              <span>ORIGIN</span>
              <strong>
                JAVA
                <br />
                BLEND
              </strong>
              <small>MEDIUM ROAST</small>
            </div>
          </div>
          <div className="leaf leaf-one" />
          <div className="leaf leaf-two" />
        </div>
        <div className="session-card">
          <div className="session-heading">
            <div>
              <span className="tiny-label">KONSOLIDASI PESANAN</span>
              <strong>Susu segar 1L</strong>
            </div>
            <span className="product-icon" aria-hidden="true">
              ◒
            </span>
          </div>
          <div className="progress-label">
            <span>Target 100 liter</span>
            <strong>78%</strong>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Target pesanan susu segar"
            aria-valuenow="78"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span />
          </div>
          <div className="session-foot">
            <span>78 liter terkumpul</span>
            <span>Berakhir 2 hari lagi</span>
          </div>
        </div>
        <span className="sparkle sparkle-one" aria-hidden="true">
          ✳
        </span>
        <span className="sparkle sparkle-two" aria-hidden="true">
          ✳
        </span>
      </div>
      <div className="hero-caption">
        <span>01 / 03</span>
        <span>Pasokan lebih cerdas untuk cafe independen</span>
        <span className="caption-line" />
      </div>
    </section>
  );
}
