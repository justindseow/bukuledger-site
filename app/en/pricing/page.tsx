import type { Metadata } from "next";
import PricingPage from "@/app/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Monthly Bookkeeping Pricing for Malaysian SMEs",
  description:
    "Bookkeeping from RM699/month. Add-on accounts receivable, accounts payable and payroll services from RM199/month each. Clear rates for Malaysian SMEs.",
  alternates: { canonical: "/en/pricing" },
  openGraph: { url: "/en/pricing" },
};

export default function EnPricing() { return <PricingPage locale="en" />; }
