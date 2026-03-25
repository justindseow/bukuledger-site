import type { Metadata } from "next";
import HealthCheckPage from "@/app/components/pages/HealthCheckPage";

export const metadata: Metadata = {
  title: "SME Health Check",
  description:
    "7 questions. Under 60 seconds. Find out where your business finances might be exposed - then see how MacroByte can help.",
  alternates: { canonical: "/en/health-check" },
  openGraph: { url: "/en/health-check" },
};

export default function EnHealthCheck() {
  return <HealthCheckPage />;
}
