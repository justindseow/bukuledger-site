import { content, Locale, WHATSAPP } from "@/app/lib/content";

// Original background image
const BG =
  "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80')";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale].home;
  const base = `/${locale}`;
  const waHome = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.waText)}`;

  return (
    <main id="main-content" className="hero" style={{ position: "relative" }}>
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: BG,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.30,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Subtle bottom-edge fade so the hero blends cleanly into the page */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 55%, rgb(245,247,250) 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container hero-grid" style={{ position: "relative", zIndex: 1 }}>
        <section className="hero-left">
          <span className="badge" style={{ alignSelf: "flex-start", width: "fit-content" }}>
            {t.badge}
          </span>
          <h1 className="h1">{t.h1}</h1>
          <p className="lead">{t.lead}</p>
        </section>

        <aside className="panel hero-panel">
          <div className="panel-grid">
            <div className="card">
              <h3>{t.card1.title}</h3>
              <p>{t.card1.body}</p>
            </div>
            <div className="card">
              <h3>{t.card2.title}</h3>
              <p>{t.card2.body}</p>
            </div>
            <div className="card card-wide card-wide-fill">
              <div>
                <h3>{t.card3.title}</h3>
                <p>{t.card3.body}</p>
              </div>
              <div className="card-actions card-actions-duo">
                <a className="btn-primary" href={waHome} target="_blank" rel="noopener noreferrer">
                  {t.ctaWhatsApp}
                </a>
                <a className="btn-outline-dark" href={`${base}/contact`}>
                  {t.ctaContact}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
