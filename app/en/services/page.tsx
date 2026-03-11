import type { Metadata } from "next";
import ServicesPage from "@/app/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Bookkeeping & Finance Services for Malaysian SMEs",
  description:
    "Monthly bookkeeping, accounts receivable, accounts payable and payroll services for Malaysian SMEs. Choose one module or combine all four.",
  alternates: { canonical: "/en/services" },
  openGraph: { url: "/en/services" },
};

export default function EnServices() { return <ServicesPage locale="en" />; }
