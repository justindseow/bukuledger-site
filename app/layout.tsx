import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://example.com"), // TODO: replace with real domain
  title: {
    default: "BukuLedger | Bookkeeping Malaysia",
    template: "%s | BukuLedger",
  },
  description:
    "Bookkeeping for MSMEs and SMEs across Malaysia. Simpan kira untuk SME di Malaysia.",
  alternates: {
    canonical: "/en",
    languages: {
      "en-MY": "/en",
      "ms-MY": "/bm",
      en: "/en",
      ms: "/bm",
    },
  },
  openGraph: {
    title: "BukuLedger | Bookkeeping Malaysia",
    description:
      "Bookkeeping for MSMEs and SMEs across Malaysia. Simpan kira untuk SME di Malaysia.",
    url: "https://example.com/en", // TODO
    siteName: "BukuLedger",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BukuLedger | Bookkeeping Malaysia",
    description:
      "Bookkeeping for MSMEs and SMEs across Malaysia. Simpan kira untuk SME di Malaysia.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <footer className="site-footer">
          <div className="container site-footer-inner">
            <p>© {new Date().getFullYear()} BukuLedger Malaysia</p>
            <p className="muted">Bookkeeping for MSMEs & SMEs across Malaysia</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
