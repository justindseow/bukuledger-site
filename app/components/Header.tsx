"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/en";
  const [menuOpen, setMenuOpen] = useState(false);

  const isBM = pathname.startsWith("/bm");
  const isZH = pathname.startsWith("/zh");

  const base = isBM ? "/bm" : isZH ? "/zh" : "/en";

  const t = {
    packages: isBM ? "Pakej" : isZH ? "套餐" : "Packages",
    faq: isBM ? "Soalan Lazim" : isZH ? "常见问题" : "FAQ",
    contact: isBM ? "Hubungi" : isZH ? "联系" : "Contact",
    insights: isBM ? "Panduan" : isZH ? "指南" : "Insights",
    healthCheck: isBM ? "Semak Kewangan" : isZH ? "财务检查" : "Health Check",
  };

  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="brand" href={base}>
          Macro<span className="accent">Byte</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav nav-desktop">
          <a href={`${base}/packages`} className={pathname.includes("/packages") ? "nav-active" : ""}>{t.packages}</a>
          <a href={`${base}/faq`} className={pathname.includes("/faq") ? "nav-active" : ""}>{t.faq}</a>
          <a href="/en/insights" className={pathname.includes("/insights") ? "nav-active" : ""}>{t.insights}</a>
          <a href={`${base}/health-check`} className={pathname.includes("/health-check") ? "nav-active" : ""}>{t.healthCheck}</a>
          <a href={`${base}/contact`} className={pathname.includes("/contact") ? "nav-active" : ""}>{t.contact}</a>

          <div className="lang-switcher">
            <a href="/en" className={!isBM && !isZH ? "lang-active" : ""} aria-label="English">EN</a>
            <a href="/bm" className={isBM ? "lang-active" : ""} aria-label="Bahasa Melayu">BM</a>
            <a href="/zh" className={isZH ? "lang-active" : ""} aria-label="中文">ZH</a>
          </div>
        </nav>

        {/* Mobile: lang switcher + hamburger */}
        <div className="nav-mobile-controls">
          <div className="lang-switcher">
            <a href="/en" className={!isBM && !isZH ? "lang-active" : ""} aria-label="English">EN</a>
            <a href="/bm" className={isBM ? "lang-active" : ""} aria-label="Bahasa Melayu">BM</a>
            <a href="/zh" className={isZH ? "lang-active" : ""} aria-label="中文">ZH</a>
          </div>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="nav-mobile-menu">
          <a href={`${base}/packages`} className={pathname.includes("/packages") ? "nav-active" : ""} onClick={close}>{t.packages}</a>
          <a href={`${base}/faq`} className={pathname.includes("/faq") ? "nav-active" : ""} onClick={close}>{t.faq}</a>
          <a href="/en/insights" className={pathname.includes("/insights") ? "nav-active" : ""} onClick={close}>{t.insights}</a>
          <a href={`${base}/health-check`} className={pathname.includes("/health-check") ? "nav-active" : ""} onClick={close}>{t.healthCheck}</a>
          <a href={`${base}/contact`} className={pathname.includes("/contact") ? "nav-active" : ""} onClick={close}>{t.contact}</a>
        </nav>
      )}
    </header>
  );
}
