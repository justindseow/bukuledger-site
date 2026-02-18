"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isBM = pathname?.startsWith("/bm");
  const base = isBM ? "/bm" : "/en";

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        {/* not clickable */}
        <div className="brand">
          Buku<span className="accent">Ledger</span>
        </div>

        <nav className="nav">
          <a href="/en">EN</a>
          <a href="/bm">BM</a>

          <a href={`${base}/services`}>
            {isBM ? "Servis" : "Services"}
          </a>

          <a href={`${base}/pricing`}>
            {isBM ? "Harga" : "Pricing"}
          </a>

          <a href={`${base}/faq`}>
            {isBM ? "Soalan Lazim" : "FAQ"}
          </a>

          <a href={`${base}/contact`}>
            {isBM ? "Hubungi" : "Contact"}
          </a>
        </nav>
      </div>
    </header>
  );
}
