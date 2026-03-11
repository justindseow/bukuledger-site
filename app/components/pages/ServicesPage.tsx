import Link from "next/link";
import {
  content,
  Locale,
  WHATSAPP,
  PRICE_BASE,
  AR_AP_BASE,
  PAYROLL_BASE,
} from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80')";

export default function ServicesPage({ locale }: { locale: Locale }) {
  const t = content[locale].services;
  const p = content[locale].pricing;
  const base = `/${locale}`;
  const waBundleLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    t.bundle.waText
  )}`;

  const addons = [
    { mod: t.ar, price: AR_AP_BASE, waKey: p.waAr },
    { mod: t.ap, price: AR_AP_BASE, waKey: p.waAp },
    { mod: t.payroll, price: PAYROLL_BASE, waKey: p.waPayroll },
  ];

  return (
    <main id="main-content" className="page" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: BG,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="page-title">{t.title}</h1>
        <p className="page-lead">{t.lead}</p>

        {/* ── Bookkeeping — core anchor service ── */}
        <div className="svc-card-main" style={{ marginTop: 28 }}>
          <div className="svc-card-main-top">
            <div style={{ flex: 1 }}>
              <span className="svc-core-badge">Core Service</span>
              <h2
                className="svc-card-title"
                style={{ fontSize: "1.4rem", marginTop: 10 }}
              >
                {t.bookkeeping.title}
              </h2>
              <p className="svc-tagline">{t.bookkeeping.tagline}</p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                {p.from}
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: "#1e40af",
                  lineHeight: 1,
                }}
              >
                RM{PRICE_BASE}
              </div>
              <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                {p.per}
              </div>
            </div>
          </div>

          <ul className="svc-list svc-list-2col" style={{ marginTop: 4 }}>
            {t.bookkeeping.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href={p.waOnboard}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: "11px 22px", fontSize: "14px" }}
            >
              {t.ctaWhatsApp}
            </a>
            <Link href={`${base}/contact`} className="btn-outline-dark" style={{ padding: "11px 18px", fontSize: "14px" }}>
              {t.ctaContact}
            </Link>
          </div>
        </div>

        {/* ── Add-on services ── */}
        <div style={{ marginTop: 40 }}>
          <p className="section-label" style={{ marginBottom: 6 }}>
            {t.addonSectionTitle}
          </p>
          <p
            style={{
              fontSize: 14,
              color: "#475569",
              marginTop: 4,
              marginBottom: 16,
            }}
          >
            {t.addonSectionSubtitle}
          </p>

          <div className="grid-3">
            {addons.map(({ mod, price, waKey }) => (
              <div key={mod.title} className="svc-card-addon">
                <div>
                  <span className="addon-badge">ADD-ON</span>
                  <h2
                    className="svc-card-title"
                    style={{ marginTop: 10, fontSize: "1rem" }}
                  >
                    {mod.title}
                  </h2>
                  <p className="svc-tagline" style={{ fontSize: "13px" }}>
                    {mod.tagline}
                  </p>
                </div>

                <div
                  style={{
                    margin: "10px 0 12px",
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#334155",
                  }}
                >
                  RM{price}
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#64748b",
                      marginLeft: 4,
                    }}
                  >
                    {p.per}
                  </span>
                </div>

                <ul className="svc-list" style={{ fontSize: "13px", flexGrow: 1 }}>
                  {mod.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div style={{ paddingTop: 14 }}>
                  <a
                    href={waKey}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-dark"
                    style={{
                      padding: "8px 14px",
                      fontSize: "13px",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {t.ctaWhatsApp}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Complete package banner ── */}
        <div className="bundle-banner">
          <div className="bundle-banner-text">
            <h2>{t.bundle.title}</h2>
            <p>{t.bundle.body}</p>
          </div>
          <div className="bundle-banner-actions">
            <a
              href={waBundleLink}
              target="_blank"
              rel="noreferrer"
              className="btn-white"
            >
              {t.bundle.cta}
            </a>
            <Link href={`${base}/contact`} className="btn-white-outline">
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
