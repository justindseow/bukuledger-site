import type { Metadata } from "next";
import FaqPage from "@/app/components/pages/FaqPage";

export const metadata: Metadata = {
  title: "常见问题解答",
  description:
    "关于 MacroByte 在马来西亚提供记账与财务服务的常见问题, 价格、流程、软件需求等。",
  alternates: { canonical: "/zh/faq" },
  openGraph: { url: "/zh/faq" },
};

export default function ZhFaq() { return <FaqPage locale="zh" />; }
