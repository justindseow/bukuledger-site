import type { Metadata } from "next";
import HomePage from "@/app/components/pages/HomePage";

export const metadata: Metadata = {
  title: "马来西亚中小企业每月记账服务",
  description:
    "为马来西亚中小企业提供可靠的每月记账服务。银行对账、财务报告及全程记录管理, 无需额外软件或员工。",
  alternates: { canonical: "/zh" },
  openGraph: { url: "/zh" },
};

export default function ZhHome() { return <HomePage locale="zh" />; }
