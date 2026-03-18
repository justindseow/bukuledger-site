import type { Metadata } from "next";
import PackagesPage from "@/app/components/pages/PackagesPage";

export const metadata: Metadata = {
  title: "记账与财务服务套餐",
  description:
    "记账服务每月起价 RM699。应收账款、应付账款及薪资附加服务各自起价 RM199/月。服务内容清晰，定价透明。",
  alternates: { canonical: "/zh/packages" },
  openGraph: { url: "/zh/packages" },
};

export default function ZhPackages() { return <PackagesPage locale="zh" />; }
