import { categories } from "../data/marketplaceSessions.js";
import ProductSessionCard from "./ProductSessionCard.jsx";

export default function MarketplaceCatalog({
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
  sessions,
  joinedSessions,
  onJoinSession,
  notice,
  onDismissNotice,
  onClearFilters,
}) {
  return (
    <section className="catalog-section" aria-labelledby="catalog-title">
      <div className="catalog-heading">
        <div>
          <p className="market-eyebrow">PASOKAN PILIHAN UNTUK CAFE</p>
          <h2 id="catalog-title">
            Sesi belanja aktif <span>{sessions.length}</span>
          </h2>
        </div>
        <label className="sort-control">
          <span>Urutkan:</span>
          <select
            aria-label="Urutkan sesi belanja"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
          >
            <option value="relevant">Paling relevan</option>
            <option value="price">Harga terendah</option>
            <option value="ending">Segera berakhir</option>
          </select>
        </label>
      </div>
      <div className="catalog-toolbar">
        <div
          className="category-filters"
          role="group"
          aria-label="Filter kategori produk"
        >
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={
                category === item ? "filter-chip selected" : "filter-chip"
              }
              aria-pressed={category === item}
              onClick={() => onCategoryChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="filter-button"
          type="button"
          onClick={() => onCategoryChange("Semua")}
        >
          <span aria-hidden="true">☷</span>Filter
        </button>
      </div>
      {sessions.length > 0 ? (
        <div className="market-product-grid">
          {sessions.map((session) => (
            <ProductSessionCard
              key={session.id}
              session={session}
              joined={joinedSessions.includes(session.id)}
              onJoin={() => onJoinSession(session)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-catalog" role="status">
          <span aria-hidden="true">⌕</span>
          <strong>Belum ada produk yang cocok</strong>
          <p>Coba kata kunci lain atau pilih kategori berbeda.</p>
          <button type="button" onClick={onClearFilters}>
            Hapus pencarian dan filter
          </button>
        </div>
      )}
      {notice && (
        <div className="market-toast" role="status">
          <span aria-hidden="true">✓</span>
          {notice}
          <button
            type="button"
            aria-label="Tutup notifikasi"
            onClick={onDismissNotice}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
