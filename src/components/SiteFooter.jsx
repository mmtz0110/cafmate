export default function SiteFooter() {
  return (
    <footer className="footer page-shell">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark" aria-hidden="true">
          c.
        </span>
        <span>CAFMATÉ</span>
      </a>
      <p>Rekan seperjuangan bisnis cafe.</p>
      <nav className="footer-links" aria-label="Navigasi footer">
        <a href="#cara-kerja">Cara kerja</a>
        <a href="#produk">Produk</a>
        <a href="mailto:halo@cafmate.id">Hubungi kami</a>
        <a href="#gabung">Instagram ↗</a>
      </nav>
      <small>
        © {new Date().getFullYear()} CAFMATÉ. Dibuat untuk cafe independen.
      </small>
    </footer>
  );
}
