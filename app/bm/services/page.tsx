import type { Metadata } from "next";
import ServicesPage from "@/app/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Perkhidmatan Perakaunan & Kewangan untuk PKS",
  description:
    "Perkhidmatan perakaunan bulanan, akaun belum terima, akaun belum bayar dan penggajian untuk PKS Malaysia. Pilih satu modul atau gabungkan kesemuanya.",
  alternates: { canonical: "/bm/services" },
  openGraph: { url: "/bm/services" },
};

export default function BmServices() { return <ServicesPage locale="bm" />; }
