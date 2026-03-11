import type { Metadata } from "next";
import FaqPage from "@/app/components/pages/FaqPage";

export const metadata: Metadata = {
  title: "Soalan Lazim",
  description:
    "Jawapan kepada soalan lazim tentang perkhidmatan perakaunan MacroByte untuk PKS di Malaysia — harga, proses, perisian dan lain-lain.",
  alternates: { canonical: "/bm/faq" },
  openGraph: { url: "/bm/faq" },
};

export default function BmFaq() { return <FaqPage locale="bm" />; }
