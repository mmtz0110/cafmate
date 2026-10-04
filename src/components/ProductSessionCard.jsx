import { formatRupiah } from "../data/marketplaceSessions.js";

export default function ProductSessionCard({ session, joined, onJoin }) {
  const quantityReached = Math.round((session.progress / 100) * session.target);
  const savedAmount = session.originalPrice - session.price;

  return (
    <article className="market-product-card">
      <div className={`market-product-art ${session.tone}`} aria-hidden="true">
        <span className="market-product-badge">{session.badge}</span>
        <span className="market-product-icon">{session.icon}</span>
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
        <span className="art-caption">CAFMATÉ SELECT</span>
      </div>
      <div className="market-product-body">
        <div className="market-product-meta">
          <span>{session.category}</span>
          <span className="supplier-dot">·</span>
          <span>{session.supplier}</span>
        </div>
        <h3>{session.name}</h3>
        <div className="market-price-line">
          <strong>{formatRupiah(session.price)}</strong>
          <del>{formatRupiah(session.originalPrice)}</del>
        </div>
        <div className="discount-line">
          <span>
            Hemat {formatRupiah(savedAmount)} / {session.unit}
          </span>
          <strong>
            {Math.round((savedAmount / session.originalPrice) * 100)}% lebih
            hemat
          </strong>
        </div>
        <div className="moq-heading">
          <span>Progres minimum pesanan</span>
          <strong>{session.progress}%</strong>
        </div>
        <div
          className="moq-track"
          role="progressbar"
          aria-label={`Progres minimum pesanan ${session.name}`}
          aria-valuenow={session.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span style={{ width: `${session.progress}%` }} />
        </div>
        <div className="moq-foot">
          <span>
            {quantityReached} / {session.target} {session.unit}
          </span>
          <span>Berakhir {session.daysLeft} hari lagi</span>
        </div>
        <button
          className={joined ? "join-session joined" : "join-session"}
          type="button"
          onClick={onJoin}
          disabled={joined}
        >
          {joined ? (
            <>
              <span aria-hidden="true">✓</span> Ditambahkan ke pilihan
            </>
          ) : (
            <>
              Ikut sesi ini <span aria-hidden="true">↗</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
