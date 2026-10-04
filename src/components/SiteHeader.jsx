import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  ["Cara kerja", "#cara-kerja"],
  ["Produk", "#produk"],
  ["Dampak", "#dampak"],
  ["Tentang kami", "#tentang"],
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="CAFMATÉ, ke halaman utama"
        onClick={closeMenu}
      >
        <span className="brand-mark" aria-hidden="true">
          c.
        </span>
        <span>CAFMATÉ</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-nav"
        aria-label={isMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`nav${isMenuOpen ? " is-open" : ""}`}
        id="primary-nav"
        aria-label="Navigasi utama"
      >
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <Link className="nav-login" to="/marketplace" onClick={closeMenu}>
          Masuk
        </Link>
        <Link
          className="button button-small"
          to="/marketplace"
          onClick={closeMenu}
        >
          Gabung sekarang <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
