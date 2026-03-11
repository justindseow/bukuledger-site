import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MacroByte | SME Bookkeeping",
    template: "%s | MacroByte",
  },
  description:
    "Reliable monthly bookkeeping for SMEs in Malaysia. Monthly reconciliation, transaction recording, and clear financial reports for small businesses.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "MacroByte | SME Bookkeeping",
    description:
      "Reliable monthly bookkeeping for SMEs in Malaysia. Monthly reconciliation, transaction recording, and clear financial reports.",
    url: "/en",
    locale: "en_MY",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
