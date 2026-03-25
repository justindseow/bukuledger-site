import type { Metadata } from "next";
import HealthCheckPage from "@/app/components/pages/HealthCheckPage";

export const metadata: Metadata = {
  title: "SME Health Check",
  description:
    "7 soalan. Bawah 60 saat. Ketahui di mana kewangan perniagaan anda mungkin terdedah - dan lihat bagaimana MacroByte boleh membantu.",
  alternates: { canonical: "/bm/health-check" },
  openGraph: { url: "/bm/health-check" },
};

export default function BmHealthCheck() {
  return <HealthCheckPage locale="bm" />;
}
