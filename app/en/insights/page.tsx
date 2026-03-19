import type { Metadata } from "next";
import InsightsListPage from "@/app/components/pages/InsightsListPage";

export const metadata: Metadata = {
  title: "Insights - Bookkeeping & Finance Guides for Malaysian SMEs",
  description:
    "Practical guides on bookkeeping, payroll, accounts receivable, and financial reporting for small business owners in Malaysia.",
  alternates: { canonical: "/en/insights" },
  openGraph: { url: "/en/insights" },
};

export default function EnInsights() {
  return <InsightsListPage />;
}
