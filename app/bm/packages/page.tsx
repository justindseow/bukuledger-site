import type { Metadata } from "next";
import PackagesPage from "@/app/components/pages/PackagesPage";

export const metadata: Metadata = {
  title: "Pakej Perakaunan & Kewangan untuk PKS Malaysia",
  description:
    "Perakaunan dari RM699/bulan. Perkhidmatan tambahan ABT, ABB dan penggajian dari RM199/bulan. Semua termasuk, harga yang jelas.",
  alternates: { canonical: "/bm/packages" },
  openGraph: { url: "/bm/packages" },
};

export default function BmPackages() { return <PackagesPage locale="bm" />; }
