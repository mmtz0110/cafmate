import { Link, NavLink } from "react-router-dom";

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
        <NavLink
          className={({ isActive }) =>
            `sidebar-link${isActive ? " active" : ""}`
          }
          to="/dashboard/overview"
        >
          <span aria-hidden="true">⌂</span>Ringkasan
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `sidebar-link${isActive ? " active" : ""}`
          }
          to="/marketplace"
        >
          <span aria-hidden="true">▦</span>Marketplace
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `sidebar-link${isActive ? " active" : ""}`
          }
          to="/dashboard/orders"
        >
          <span aria-hidden="true">▤</span>Pesanan saya
          <span className="nav-count">2</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `sidebar-link${isActive ? " active" : ""}`
          }
          to="/dashboard/favorites"
        >
          <span aria-hidden="true">♡</span>Favorit
        </NavLink>
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
      <Link className="workspace-user" to="/dashboard/profile">
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
      </Link>
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
        <Link
          className="notification-button"
          to="/dashboard/notifications"
          aria-label="Notifikasi, 2 belum dibaca"
        >
          <span aria-hidden="true">♧</span>
          <i />
        </Link>
        <Link
          className="basket-button"
          to="/dashboard/cart"
          aria-label={`Sesi pilihan, ${joinedCount} item`}
        >
          <span aria-hidden="true">▱</span>
          {joinedCount > 0 && <b>{joinedCount}</b>}
        </Link>
      </div>
    </header>
  );
}
