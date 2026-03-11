import type { Metadata } from "next";
import PricingPage from "@/app/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Harga Perkhidmatan Perakaunan",
  description:
    "Perakaunan dari RM699/bulan. Perkhidmatan tambahan ABT, ABB dan penggajian dari RM199/bulan. Kadar bulanan yang jelas untuk PKS Malaysia.",
  alternates: { canonical: "/bm/pricing" },
  openGraph: { url: "/bm/pricing" },
};

export default function BmPricing() { return <PricingPage locale="bm" />; }
