import { content, Locale } from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80')";

// FAQPage schema → Google shows accordion rich snippets in search results
function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqPage({ locale }: { locale: Locale }) {
  const t = content[locale].faq;
  const base = `/${locale}`;

  return (
    <main id="main-content" className="page" style={{ position: "relative" }}>
      <FaqJsonLd items={t.items} />
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

      <div className="container narrow" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="page-title">{t.title}</h1>
        <p className="page-lead">{t.lead}</p>

        <div style={{ marginTop: 28, display: "grid", gap: 16 }}>
          {t.items.map((item) => (
            <div key={item.q} className="card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>

        <div className="center-note">
          {t.stillQuestion}{" "}
          <a className="link" href={`${base}/contact`}>
            {t.contactLinkText}
          </a>
          {locale === "zh" ? "。" : "."}
        </div>
      </div>
    </main>
  );
}
