import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import {
  HowItWorks,
  ProductSessions,
  Impact,
  CommunityQuote,
  JoinCallout,
} from "./components/Sections.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import MarketplaceDashboard from "./components/MarketplaceDashboard.jsx";
import DashboardPlaceholder from "./components/DashboardPlaceholder.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div className="ticker" aria-label="Keuntungan CAFMATÉ">
          <div className="ticker-track">
            {[
              "HARGA GROSIR",
              "ORDER KOLEKTIF",
              "ONGKIR LEBIH EFISIEN",
              "HARGA GROSIR",
              "ORDER KOLEKTIF",
              "ONGKIR LEBIH EFISIEN",
            ].map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>
                {item}
                <b aria-hidden="true">✳</b>
              </span>
            ))}
          </div>
        </div>
        <HowItWorks />
        <ProductSessions />
        <Impact />
        <CommunityQuote />
        <JoinCallout />
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<MarketplaceDashboard />} />
        <Route path="/dashboard/:section" element={<DashboardPlaceholder />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
