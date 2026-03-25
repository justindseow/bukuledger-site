import "./globals.css";
import Header from "./components/Header";
import type { Metadata } from "next";
import { headers } from "next/headers";

const SITE_URL = "https://macrobyte.my";
const BRAND = "MacroByte";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BRAND} | SME Bookkeeping`,
    template: `%s | ${BRAND}`,
  },

  description:
    "Bookkeeping services for SMEs in Malaysia. Monthly bookkeeping, transaction recording, and financial reports for small businesses.",

  alternates: {
    canonical: "/", // ✅ root canonical at site level
    languages: {
      "x-default": "/en", // ✅ fallback
      "en-MY": "/en",
      "ms-MY": "/bm",
      "zh-Hans-MY": "/zh",

      // optional generic fallbacks
      en: "/en",
      ms: "/bm",
      zh: "/zh",
    },
  },

  openGraph: {
    title: `${BRAND} | SME Bookkeeping`,
    description:
      "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",
    url: "/", // relative is fine because metadataBase is set
    siteName: BRAND,
    locale: "en_MY",
    type: "website",
    // OG image auto-injected from app/opengraph-image.tsx
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | SME Bookkeeping`,
    description:
      "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",
    // OG image auto-injected from app/opengraph-image.tsx
  },
};

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "en";

  // ✅ Nationwide accounting/bookkeeping schema
  const accountingServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: BRAND,
    url: SITE_URL,
    telephone: "+60134700013",
    description:
      "Bookkeeping service for Malaysian SMEs. Monthly reconciliation, categorisation, and clear reports.",
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    serviceArea: {
      "@type": "Country",
      name: "Malaysia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+60134700013",
      contactType: "customer service",
      availableLanguage: ["English", "Malay", "Chinese"],
    },
    sameAs: [`https://wa.me/60134700013`],
  };

  return (
    <html lang={locale}>
      <head>
        <JsonLd data={accountingServiceJsonLd} />
      </head>

      <body>
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <Header />
        {children}

        <footer className="site-footer">
          <div className="container site-footer-inner">
            <p>© {new Date().getFullYear()} {BRAND}</p>
            <p className="muted">{
              locale === "bm" ? "Perakaunan untuk PKS di seluruh Malaysia"
              : locale === "zh" ? "为马来西亚各地中小微企业提供记账服务"
              : "Bookkeeping for SMEs across Malaysia"
            }</p>
          </div>
        </footer>
      </body>
    </html>
  );
}