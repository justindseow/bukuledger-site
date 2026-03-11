import type { Metadata } from "next";
import ContactPage from "@/app/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Dapatkan Sebut Harga",
  description:
    "Beritahu kami tentang perniagaan anda. Kami akan membalas dengan pelan perakaunan bulanan yang ringkas untuk PKS anda.",
  alternates: { canonical: "/bm/contact" },
  openGraph: { url: "/bm/contact" },
};

export default function BmContact() { return <ContactPage locale="bm" />; }
