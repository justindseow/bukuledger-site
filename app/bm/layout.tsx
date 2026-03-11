import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MacroByte | Perkhidmatan Perakaunan PKS",
    template: "%s | MacroByte",
  },
  description:
    "Perkhidmatan perakaunan bulanan yang boleh dipercayai untuk PKS di Malaysia. Rekonsiliasi bulanan, rakaman transaksi, dan laporan kewangan yang jelas untuk perniagaan kecil.",
  alternates: {
    canonical: "/bm",
  },
  openGraph: {
    title: "MacroByte | Perkhidmatan Perakaunan PKS",
    description:
      "Perkhidmatan perakaunan bulanan yang boleh dipercayai untuk PKS di Malaysia.",
    url: "/bm",
    locale: "ms_MY",
  },
};

export default function BmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
