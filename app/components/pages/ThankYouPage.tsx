import Link from "next/link";
import { content, Locale } from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80')";

export default function ThankYouPage({ locale }: { locale: Locale }) {
  const t = content[locale].thankYou;
  const base = `/${locale}`;

  return (
    <main id="main-content" className="page" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: BG,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container narrow" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="page-title">{t.title}</h1>
        <p className="page-lead">{t.lead}</p>

        <div className="center-note">
          <Link className="link" href={base}>
            {t.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
