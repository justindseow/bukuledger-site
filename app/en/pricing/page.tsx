export default function EnPricing() {
  const tiers = [
    {
      name: "Starter",
      range: "0–100 transactions / month",
      price: "From RM 299 / month",
      points: [
        "Monthly reconciliation & categorisation",
        "Monthly summary (P&L + Balance Sheet)",
        "WhatsApp / email support",
        "Document handling included",
      ],
    },
    {
      name: "Growth",
      range: "101–300 transactions / month",
      price: "From RM 499 / month",
      points: [
        "Everything in Starter",
        "Cleaner month-end close process",
        "More detailed monthly notes & follow-ups",
        "Faster turnaround when documents are complete",
      ],
    },
    {
      name: "Scale",
      range: "301–700 transactions / month",
      price: "From RM 799 / month",
      points: [
        "Everything in Growth",
        "A/R and A/P tracking support",
        "Monthly reporting pack + key highlights",
        "Priority support window",
      ],
    },
  ];

  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">Pricing</h1>
        <p className="page-lead">
          Simple monthly plans based mainly on transaction volume — with a fair adjustment for micro-revenue businesses.
        </p>

        <div className="panel panel-light" style={{ marginTop: 22 }}>
          <h2 className="section-title">Micro-business rate</h2>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
            If your monthly revenue is <b>below RM10,000</b>, we apply a micro-business rate so you don’t overpay —
            even if your transactions are higher.
          </p>
        </div>

        <div className="grid-2" style={{ marginTop: 22 }}>
          {tiers.map((t) => (
            <div key={t.name} className="card">
              <h3 style={{ fontSize: 20 }}>{t.name}</h3>
              <p style={{ marginTop: 6, fontWeight: 700, color: "#0b1220" }}>{t.price}</p>
              <p style={{ marginTop: 8 }}>{t.range}</p>

              <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.75, color: "#334155" }}>
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div style={{ marginTop: 14 }}>
                <a className="btn-primary" href="/en/contact">
                  Get a quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="panel panel-light" style={{ marginTop: 26 }}>
          <h2 className="section-title">What affects your final quote?</h2>
          <ul className="list">
            <li>Monthly transaction volume (main driver)</li>
            <li>Monthly revenue size (micro-business adjustment)</li>
            <li>How organised your documents are</li>
            <li>Catch-up work (if accounts are overdue)</li>
          </ul>

          <div className="cta-row" style={{ marginTop: 16 }}>
            <a className="btn-primary" href="/en/contact">Request a quote</a>
            <a className="btn-secondary" href="https://wa.me/60123456789">WhatsApp us</a>
          </div>
        </div>
      </div>
    </main>
  );
}
