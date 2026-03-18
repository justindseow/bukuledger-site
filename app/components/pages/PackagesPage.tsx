import {
  content,
  Locale,
  PRICE_BASE,
  TX_INCLUDED,
  TX_EXTRA_RATE,
  AR_AP_BASE,
  AR_AP_INV_INCLUDED,
  AR_AP_EXTRA_RATE,
  PAYROLL_BASE,
  PAYROLL_EMP_INCLUDED,
  PAYROLL_EXTRA_RATE,
} from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80')";

const priceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "AccountingService", name: "MacroByte", url: "https://macrobyte.my" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "MacroByte Service Pricing",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Bookkeeping",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: PRICE_BASE,
          priceCurrency: "MYR",
          unitText: "month",
          description: `Includes up to ${TX_INCLUDED} transactions. RM${TX_EXTRA_RATE} per additional transaction.`,
        },
      },
      {
        "@type": "Offer",
        name: "Accounts Receivable",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: AR_AP_BASE,
          priceCurrency: "MYR",
          unitText: "month",
          description: `Includes up to ${AR_AP_INV_INCLUDED} invoices. RM${AR_AP_EXTRA_RATE} per additional invoice.`,
        },
      },
      {
        "@type": "Offer",
        name: "Accounts Payable",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: AR_AP_BASE,
          priceCurrency: "MYR",
          unitText: "month",
          description: `Includes up to ${AR_AP_INV_INCLUDED} invoices. RM${AR_AP_EXTRA_RATE} per additional invoice.`,
        },
      },
      {
        "@type": "Offer",
        name: "Payroll",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: PAYROLL_BASE,
          priceCurrency: "MYR",
          unitText: "month",
          description: `Includes up to ${PAYROLL_EMP_INCLUDED} employees. RM${PAYROLL_EXTRA_RATE} per additional employee.`,
        },
      },
    ],
  },
};

export default function PackagesPage({ locale }: { locale: Locale }) {
  const t = content[locale].pricing;
  const s = content[locale].services;

  const addons = [
    {
      title: t.arTitle,
      amount: AR_AP_BASE,
      lines: [
        t.arInvLine(AR_AP_INV_INCLUDED),
        t.arExtraLine(AR_AP_EXTRA_RATE, AR_AP_INV_INCLUDED),
      ],
      items: s.ar.items,
      cta: t.arCta,
      wa: t.waAr,
    },
    {
      title: t.apTitle,
      amount: AR_AP_BASE,
      lines: [
        t.apInvLine(AR_AP_INV_INCLUDED),
        t.apExtraLine(AR_AP_EXTRA_RATE, AR_AP_INV_INCLUDED),
      ],
      items: s.ap.items,
      cta: t.apCta,
      wa: t.waAp,
    },
    {
      title: t.payrollTitle,
      amount: PAYROLL_BASE,
      lines: [
        t.payrollEmpLine(PAYROLL_EMP_INCLUDED),
        t.payrollExtraLine(PAYROLL_EXTRA_RATE),
      ],
      items: s.payroll.items,
      cta: t.payrollCta,
      wa: t.waPayroll,
    },
  ];

  return (
    <main id="main-content" className="page pricing-page" style={{ position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: BG,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.22,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="page-title">{t.title}</h1>
        <p className="page-lead">{t.lead}</p>

        {/* ── Bookkeeping — featured main card ── */}
        <div className="pricing-bk-main" style={{ marginTop: 28 }}>
          <div className="pricing-bk-top">
            <div>
              <span className="pricing-recommended-badge">Bookkeeping</span>
              <div className="pricing-bk-amount">
                <span className="pricing-svc-currency">RM</span>
                <span className="pricing-bk-number">{PRICE_BASE}</span>
                <span className="pricing-svc-per">{t.per}</span>
              </div>
            </div>
            <ul className="pricing-bk-points">
              <li>{t.txLine(TX_INCLUDED)}</li>
              <li>{t.extraLine(TX_EXTRA_RATE, TX_INCLUDED)}</li>
            </ul>
          </div>

          <ul className="svc-list svc-list-2col" style={{ marginTop: 16 }}>
            {s.bookkeeping.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div style={{ marginTop: 20 }}>
            <a
              className="btn-primary"
              href={t.waOnboard}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 24px", fontSize: "15px" }}
            >
              {t.bkCta}
            </a>
          </div>
          <p
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "#94a3b8",
              textAlign: "center",
            }}
          >
            {t.footnote}
          </p>
        </div>

        {/* ── Volume + Starter secondary tiers ── */}
        <div className="pricing-bk-grid" style={{ marginTop: 12 }}>
          <div className="pricing-tier-card pricing-volume-card">
            <h3 className="pricing-tier-title">{t.volumeTitle}</h3>
            <p className="pricing-tier-body">{t.volumeBody}</p>
            <a
              className="pricing-tier-link"
              href={t.waVolume}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.volumeCta} →
            </a>
          </div>
          <div className="pricing-tier-card pricing-light-card">
            <h3 className="pricing-tier-title">{t.lightTitle}</h3>
            <p className="pricing-tier-body">{t.lightBody}</p>
            <a
              className="pricing-tier-link"
              href={t.waLight}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.lightCta} →
            </a>
          </div>
        </div>

        {/* ── Add-on services ── */}
        <div style={{ marginTop: 44 }}>
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
            {addons.map((svc) => (
              <div key={svc.title} className="pricing-addon-card">
                <span className="addon-badge" style={{ marginBottom: 10, display: "inline-block" }}>
                  ADD-ON
                </span>
                <h2 className="pricing-svc-title">{svc.title}</h2>
                <div style={{ marginTop: 8 }}>
                  <div className="pricing-svc-from">{t.from}</div>
                  <div className="pricing-svc-amount">
                    <span className="pricing-svc-currency">RM</span>
                    <span className="pricing-svc-number">{svc.amount}</span>
                  </div>
                  <div className="pricing-svc-per" style={{ marginTop: 2 }}>{t.per}</div>
                </div>
                <ul className="pricing-svc-points" style={{ marginTop: 12 }}>
                  {svc.lines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <ul className="svc-list" style={{ fontSize: "13px", marginTop: 10 }}>
                  {svc.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="btn-outline-dark"
                  href={svc.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "auto",
                    padding: "9px 14px",
                    fontSize: "13px",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {svc.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Complete package banner ── */}
        <div className="bundle-banner" style={{ marginTop: 20 }}>
          <div className="bundle-banner-text">
            <h2>{t.bundleTitle}</h2>
            <p>{t.bundleBody}</p>
          </div>
          <div className="bundle-banner-actions">
            <a
              href={t.waBundle}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              {t.bundleCta}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
