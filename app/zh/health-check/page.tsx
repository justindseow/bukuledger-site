import type { Metadata } from "next";
import HealthCheckPage from "@/app/components/pages/HealthCheckPage";

export const metadata: Metadata = {
  title: "SME 财务检查",
  description:
    "7个问题，不到60秒。了解您的企业财务可能存在哪些风险，看看 MacroByte 如何帮助您。",
  alternates: { canonical: "/zh/health-check" },
  openGraph: { url: "/zh/health-check" },
};

export default function ZhHealthCheck() {
  return <HealthCheckPage locale="zh" />;
}
