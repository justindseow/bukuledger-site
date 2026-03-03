import "./globals.css";
import Header from "./components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://macrobyte.my"),

  title: {
    default: "MacroByte | SME Bookkeeping",
    template: "%s | MacroByte",
  },

  description:
    "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",

  alternates: {
    canonical: "/en",
    languages: {
      "en-MY": "/en",
      "ms-MY": "/bm",
      en: "/en",
      ms: "/bm",
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "MacroByte | SME Bookkeeping",
    description:
      "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",
    url: "/en",
    siteName: "MacroByte",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MacroByte",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MacroByte | SME Bookkeeping",
    description:
      "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <footer className="site-footer">
          <div className="container site-footer-inner">
            <p>© {new Date().getFullYear()} MacroByte</p>
            <p className="muted">Bookkeeping for SMEs across Malaysia</p>
          </div>
        </footer>
      </body>
    </html>
  );
}