"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/en";

  const isBM = pathname.startsWith("/bm");
  const isZH = pathname.startsWith("/zh");

  const base = isBM ? "/bm" : isZH ? "/zh" : "/en";

  const t = {
    services: isBM ? "Servis" : isZH ? "服务" : "Services",
    pricing: isBM ? "Harga" : isZH ? "价格" : "Pricing",
    faq: isBM ? "Soalan Lazim" : isZH ? "常见问题" : "FAQ",
    contact: isBM ? "Hubungi" : isZH ? "联系" : "Contact",
    insights: isBM ? "Panduan" : isZH ? "指南" : "Insights",
  };

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="brand" href={base}>
          Macro<span className="accent">Byte</span>
        </a>

        <nav className="nav">
          <a href={`${base}/services`} className={pathname.includes("/services") ? "nav-active" : ""}>{t.services}</a>
          <a href={`${base}/pricing`} className={pathname.includes("/pricing") ? "nav-active" : ""}>{t.pricing}</a>
          <a href={`${base}/faq`} className={pathname.includes("/faq") ? "nav-active" : ""}>{t.faq}</a>
          <a href="/en/insights" className={pathname.includes("/insights") ? "nav-active" : ""}>{t.insights}</a>
          <a href={`${base}/contact`} className={pathname.includes("/contact") ? "nav-active" : ""}>{t.contact}</a>

          <div className="lang-switcher">
            <a href="/en" className={!isBM && !isZH ? "lang-active" : ""} aria-label="English">EN</a>
            <a href="/bm" className={isBM ? "lang-active" : ""} aria-label="Bahasa Melayu">BM</a>
            <a href="/zh" className={isZH ? "lang-active" : ""} aria-label="中文">ZH</a>
          </div>
        </nav>
      </div>
    </header>
  );
}