import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { sessions as allSessions } from "../data/marketplaceSessions.js";
import MarketplaceCatalog from "./MarketplaceCatalog.jsx";
import { MarketplaceSidebar, MarketplaceTopbar } from "./MarketplaceChrome.jsx";
import "./MarketplaceDashboard.css";

function WelcomeSummary() {
  const today = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <>
      <section className="welcome-row" id="ringkasan">
        <div>
          <p className="market-eyebrow">
            {today.toLocaleUpperCase("id-ID")} <span>·</span> BANDUNG, JAWA
            BARAT
          </p>
          <h1>
            Pagi, Kedai Pagi <span aria-hidden="true">☀</span>
          </h1>
          <p className="welcome-copy">
            Ada sesi belanja baru untuk bantu stok cafe-mu tetap aman.
          </p>
        </div>
        <div className="reliability">
          <span className="reliability-icon" aria-hidden="true">
            ✳
          </span>
          <span>
            <small>RELIABILITY SCORE</small>
            <strong>
              92 <em>/ 100</em>
            </strong>
          </span>
          <Link
            to="/dashboard/reputation"
            aria-label="Lihat detail reliability score"
          >
            ↗
          </Link>
        </div>
      </section>
      <section
        className="savings-banner"
        aria-label="Ringkasan penghematan bulan ini"
      >
        <div className="savings-icon" aria-hidden="true">
          ↘
        </div>
        <div className="savings-message">
          <small>HEMAT BELANJA BULAN INI</small>
          <strong>Rp 1.245.000</strong>
          <span>dibandingkan harga eceran supplier</span>
        </div>
        <div className="savings-divider" />
        <div className="savings-note">
          <span className="savings-spark" aria-hidden="true">
            ✳
          </span>
          <p>
            Belanja bareng 4 cafe lain di
            <br />
            <strong>wilayah Bandung</strong>
          </p>
        </div>
        <Link to="/dashboard/savings" className="banner-link">
          Lihat ringkasan <span>↗</span>
        </Link>
      </section>
      <section className="session-overview" aria-label="Ringkasan sesi belanja">
        <div>
          <span className="overview-dot dot-open" />
          <span>Sesi terbuka</span>
          <strong>12</strong>
        </div>
        <div>
          <span className="overview-dot dot-near" />
          <span>Hampir mencapai MOQ</span>
          <strong>4</strong>
        </div>
        <div>
          <span className="overview-dot dot-new" />
          <span>Produk baru minggu ini</span>
          <strong>3</strong>
        </div>
      </section>
    </>
  );
}

export default function MarketplaceDashboard() {
  const [category, setCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState("relevant");
  const [search, setSearch] = useState("");
  const [joinedSessions, setJoinedSessions] = useState([]);
  const [notice, setNotice] = useState("");

  const visibleSessions = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("id-ID");
    const filteredSessions = allSessions.filter((session) => {
      const matchesCategory =
        category === "Semua" || session.category === category;
      const searchableText =
        `${session.name} ${session.supplier} ${session.category}`.toLocaleLowerCase(
          "id-ID",
        );
      return matchesCategory && (!query || searchableText.includes(query));
    });

    return filteredSessions.sort((first, second) => {
      if (sortBy === "price") return first.price - second.price;
      if (sortBy === "ending") return first.daysLeft - second.daysLeft;
      return second.progress - first.progress;
    });
  }, [category, search, sortBy]);

  function joinSession(session) {
    if (joinedSessions.includes(session.id)) return;
    setJoinedSessions((current) => [...current, session.id]);
    setNotice(`${session.name} ditambahkan ke sesi pilihanmu.`);
    window.setTimeout(() => setNotice(""), 3200);
  }

  function clearFilters() {
    setSearch("");
    setCategory("Semua");
  }

  return (
    <div className="marketplace-app">
      <MarketplaceSidebar />
      <div className="market-main">
        <MarketplaceTopbar
          search={search}
          onSearch={setSearch}
          joinedCount={joinedSessions.length}
        />
        <main className="market-content" id="marketplace">
          <WelcomeSummary />
          <MarketplaceCatalog
            category={category}
            onCategoryChange={setCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            sessions={visibleSessions}
            joinedSessions={joinedSessions}
            onJoinSession={joinSession}
            notice={notice}
            onDismissNotice={() => setNotice("")}
            onClearFilters={clearFilters}
          />
          <footer className="market-footer">
            <span>
              Harga dan ketersediaan dapat berubah hingga sesi mencapai target.
            </span>
            <a href="mailto:halo@cafmate.id">
              Perlu bantuan? Hubungi CAFMATÉ <span>↗</span>
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
