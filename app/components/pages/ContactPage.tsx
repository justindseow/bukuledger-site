import { content, Locale, WHATSAPP } from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=2200&q=80')";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale].contact;
  const f = t.fields;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.waText)}`;
  const nextUrl = `https://macrobyte.my/${locale}/thank-you`;
  const idPrefix = locale;

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
          opacity: 0.30,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container narrow" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="page-title">{t.title}</h1>
        <p className="page-lead">{t.lead}</p>

        <form
          className="form"
          action="https://formsubmit.co/accounts@macrobyte.my"
          method="POST"
        >
          <input type="hidden" name="_subject" value={t.subject} />
          <input type="hidden" name="_next" value={nextUrl} />

          <label htmlFor={`${idPrefix}-name`} className="sr-only">{f.name}</label>
          <input id={`${idPrefix}-name`} className="input" name={f.name} placeholder={f.name} required />

          <label htmlFor={`${idPrefix}-company`} className="sr-only">{f.company}</label>
          <input id={`${idPrefix}-company`} className="input" name={f.company} placeholder={f.company} required />

          <label htmlFor={`${idPrefix}-email`} className="sr-only">{f.email}</label>
          <input id={`${idPrefix}-email`} className="input" name={f.email} placeholder={f.email} type="email" required />

          <label htmlFor={`${idPrefix}-tx`} className="sr-only">{t.txPlaceholder}</label>
          <select id={`${idPrefix}-tx`} className="input" name={f.tx} defaultValue="" required>
            <option value="" disabled>{t.txPlaceholder}</option>
            <option value="0-50">0–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>

          <label htmlFor={`${idPrefix}-message`} className="sr-only">{f.message}</label>
          <textarea id={`${idPrefix}-message`} className="input" name={f.message} placeholder={f.message} rows={5} />

          <button type="submit" className="btn-primary">{t.submit}</button>
        </form>

        <div className="center-note">
          <a className="link" href={waHref} target="_blank" rel="noopener noreferrer">
            {t.waLinkText}
          </a>
        </div>
      </div>
    </main>
  );
}
