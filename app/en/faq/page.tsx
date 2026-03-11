import type { Metadata } from "next";
import FaqPage from "@/app/components/pages/FaqPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about MacroByte bookkeeping and finance services for SMEs in Malaysia — pricing, process, software, and more.",
  alternates: { canonical: "/en/faq" },
  openGraph: { url: "/en/faq" },
};

export default function EnFaq() { return <FaqPage locale="en" />; }
