import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MacroByte | 中小微企业记账服务",
    template: "%s | MacroByte",
  },
  description:
    "为马来西亚中小微企业提供可靠的每月记账服务。每月对账、交易记录，以及清晰的财务报告。",
  alternates: {
    canonical: "/zh",
  },
  openGraph: {
    title: "MacroByte | 中小微企业记账服务",
    description:
      "为马来西亚中小微企业提供可靠的每月记账服务。每月对账、交易记录，以及清晰的财务报告。",
    url: "/zh",
    locale: "zh_MY",
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
