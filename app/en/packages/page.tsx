import type { Metadata } from "next";
import PackagesPage from "@/app/components/pages/PackagesPage";

export const metadata: Metadata = {
  title: "Bookkeeping & Finance Packages for Malaysian SMEs",
  description:
    "Monthly bookkeeping from RM699/month. Add-on accounts receivable, accounts payable and payroll from RM199/month each. Everything included, clearly priced.",
  alternates: { canonical: "/en/packages" },
  openGraph: { url: "/en/packages" },
};

export default function EnPackages() { return <PackagesPage locale="en" />; }
