export default function EnServices() {
  const items: Array<[string, string]> = [
    ["Monthly bookkeeping & reconciliation", "Bank matching, categorisation, month-end close."],
    ["Income & expense tracking", "Clear tracking so your numbers make sense."],
    ["Accounts receivable & payable", "Track what’s due and what you owe."],
    ["Management reports", "Monthly pack: P&L + Balance Sheet."],
    ["Catch-up / clean-up bookkeeping", "Get your books back in order."],
    ["Bookkeeping health check", "Spot issues early and fix the basics."],
  ];

  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">Bookkeeping Services</h1>
        <p className="page-lead">
          Reliable monthly bookkeeping for MSMEs and SMEs across Malaysia — designed for clarity,
          consistency, and smoother month-end.
        </p>

        <div className="grid-2">
          {items.map(([t, d]) => (
            <div key={t} className="card">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>

        <div className="panel panel-light">
          <h2 className="section-title">What you receive each month</h2>
          <ul className="list">
            <li>Profit &amp; Loss Statement</li>
            <li>Balance Sheet</li>
            <li>Transaction summary</li>
            <li>Basic cashflow view</li>
            <li>Questions / notes follow-up</li>
          </ul>

          <div className="cta-row">
            <a href="/en/contact" className="btn-primary">Get a quote</a>
            <a href="https://wa.me/60123456789" className="btn-secondary">WhatsApp us</a>
          </div>
        </div>
      </div>
    </main>
  );
}
