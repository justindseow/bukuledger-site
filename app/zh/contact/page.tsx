import type { Metadata } from "next";
import ContactPage from "@/app/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "获取报价",
  description:
    "告诉我们您的业务情况，我们将为您的马来西亚中小企业提供简洁的每月记账方案。",
  alternates: { canonical: "/zh/contact" },
  openGraph: { url: "/zh/contact" },
};

export default function ZhContact() { return <ContactPage locale="zh" />; }
