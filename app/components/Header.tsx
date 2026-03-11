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
  };

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        {/* clickable brand */}
        <a className="brand" href={base}>
          Macro<span className="accent">Byte</span>
        </a>

        <nav className="nav">
          <a href="/en" className={!isBM && !isZH ? "active" : ""} aria-label="English">EN</a>
          <a href="/bm" className={isBM ? "active" : ""} aria-label="Bahasa Melayu">BM</a>
          <a href="/zh" className={isZH ? "active" : ""} aria-label="中文">ZH</a>

          <a href={`${base}/services`}>{t.services}</a>
          <a href={`${base}/pricing`}>{t.pricing}</a>
          <a href={`${base}/faq`}>{t.faq}</a>
          <a href={`${base}/contact`}>{t.contact}</a>
        </nav>
      </div>
    </header>
  );
}