import type { Metadata } from "next";
import PricingPage from "@/app/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "服务价格透明清晰",
  description:
    "记账服务每月起价 RM699。应收账款、应付账款及薪资附加服务各自起价 RM199/月。为马来西亚中小企业提供清晰月费方案。",
  alternates: { canonical: "/zh/pricing" },
  openGraph: { url: "/zh/pricing" },
};

export default function ZhPricing() { return <PricingPage locale="zh" />; }
