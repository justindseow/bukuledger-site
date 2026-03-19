import type { Metadata } from "next";
import HomePage from "@/app/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Perakaunan Bulanan untuk PKS Malaysia",
  description:
    "Perkhidmatan perakaunan bulanan yang boleh dipercayai untuk PKS Malaysia. Rekonsiliasi bank, laporan kewangan dan pengurusan rekod - tanpa perisian atau kakitangan tambahan.",
  alternates: { canonical: "/bm" },
  openGraph: { url: "/bm" },
};

export default function BmHome() { return <HomePage locale="bm" />; }
