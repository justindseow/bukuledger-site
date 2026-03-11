import type { Metadata } from "next";
import HomePage from "@/app/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Monthly Bookkeeping for Malaysian SMEs",
  description:
    "Reliable monthly bookkeeping for Malaysian SMEs. Bank reconciliation, financial reports and full records management — no extra software or staff needed.",
  alternates: { canonical: "/en" },
  openGraph: { url: "/en" },
};

export default function EnHome() { return <HomePage locale="en" />; }
