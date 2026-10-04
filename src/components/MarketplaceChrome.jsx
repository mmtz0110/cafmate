import { Link } from "react-router-dom";

export function MarketplaceSidebar() {
  return (
    <aside className="market-sidebar">
      <Link
        className="brand market-brand"
        to="/"
        aria-label="CAFMATÉ, kembali ke beranda"
      >
        <span className="brand-mark" aria-hidden="true">
          c.
        </span>
        <span>CAFMATÉ</span>
      </Link>
      <div className="workspace-label">WORKSPACE</div>
      <nav className="sidebar-nav" aria-label="Menu dashboard">
        <a className="sidebar-link" href="#ringkasan">
          <span aria-hidden="true">⌂</span>Ringkasan
        </a>
        <a
          className="sidebar-link active"
          href="#marketplace"
          aria-current="page"
        >
          <span aria-hidden="true">▦</span>Marketplace
        </a>
        <a className="sidebar-link" href="#pesanan">
          <span aria-hidden="true">▤</span>Pesanan saya
          <span className="nav-count">2</span>
        </a>
        <a className="sidebar-link" href="#favorit">
          <span aria-hidden="true">♡</span>Favorit
        </a>
      </nav>
      <div className="sidebar-help">
        <span className="help-icon" aria-hidden="true">
          ?
        </span>
        <strong>Butuh bantuan?</strong>
        <p>Tim CAFMATÉ siap bantu urusan pasokanmu.</p>
        <a href="mailto:halo@cafmate.id">
          Hubungi tim <span>↗</span>
        </a>
      </div>
      <button className="workspace-user" type="button">
        <span className="user-avatar" aria-hidden="true">
          KP
        </span>
        <span>
          <strong>Kedai Pagi</strong>
          <small>Member reguler</small>
        </span>
        <span className="user-menu" aria-hidden="true">
          ···
        </span>
      </button>
    </aside>
  );
}

export function MarketplaceTopbar({ search, onSearch, joinedCount }) {
  return (
    <header className="market-topbar">
      <div className="breadcrumb">
        <span>Workspace</span>
        <b>/</b>
        <strong>Marketplace</strong>
      </div>
      <div className="topbar-actions">
        <label className="global-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Cari bahan baku..."
            aria-label="Cari bahan baku"
          />
          <kbd>⌘ K</kbd>
        </label>
        <button
          className="notification-button"
          type="button"
          aria-label="Notifikasi, 2 belum dibaca"
        >
          <span aria-hidden="true">♧</span>
          <i />
        </button>
        <button
          className="basket-button"
          type="button"
          aria-label={`Sesi pilihan, ${joinedCount} item`}
        >
          <span aria-hidden="true">▱</span>
          {joinedCount > 0 && <b>{joinedCount}</b>}
        </button>
      </div>
    </header>
  );
}
