import type { Metadata } from "next";
import ServicesPage from "@/app/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "记账与财务服务",
  description:
    "为马来西亚中小企业提供每月记账、应收账款、应付账款及薪资服务。可单选一项或自由组合全部四项。",
  alternates: { canonical: "/zh/services" },
  openGraph: { url: "/zh/services" },
};

export default function ZhServices() { return <ServicesPage locale="zh" />; }
