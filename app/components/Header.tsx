"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isBM = pathname?.startsWith("/bm");
  const base = isBM ? "/bm" : "/en";

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-bold text-lg"><span className="text-[color:var(--primary)]">Buku</span>Ledger</a>

        <nav className="flex items-center gap-4 text-sm">
          <a href="/en" className="hover:underline">EN</a>
          <a href="/bm" className="hover:underline">BM</a>
          <a href={`${base}/services`} className="hover:underline">
            {isBM ? "Servis" : "Services"}
          </a>
          <a href={`${base}/contact`} className="hover:underline">
            {isBM ? "Hubungi" : "Contact"}
          </a>
        </nav>
      </div>
    </header>
  );
}
