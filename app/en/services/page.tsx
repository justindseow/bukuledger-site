export default function EnServices() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Bookkeeping Services</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Reliable monthly bookkeeping for MSMEs and SMEs across Malaysia — designed for clarity,
        consistency, and smoother month-end.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Monthly bookkeeping & reconciliation", "Bank matching, categorisation, month-end close."],
          ["Income & expense tracking", "Clear tracking so your numbers make sense."],
          ["Accounts receivable & payable", "Track what’s due and what you owe."],
          ["Management reports", "Monthly pack: P&L + Balance Sheet."],
          ["Catch-up / clean-up bookkeeping", "Get your books back in order."],
          ["Bookkeeping health check", "Spot issues early and fix the basics."],
        ].map(([t, d]) => (
          <div key={t} className="card shadow-sm">
            <p className="font-semibold mb-2">{t}</p>
            <p className="text-sm text-gray-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border rounded-2xl p-8 bg-slate-50">
        <h2 className="text-2xl font-bold mb-3">What you receive each month</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Profit &amp; Loss Statement</li>
          <li>Balance Sheet</li>
          <li>Transaction summary</li>
          <li>Basic cashflow view</li>
          <li>Questions / notes follow-up</li>
        </ul>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/en/contact" className="btn-primary">
            Get a Quote
          </a>
          <a href="https://wa.me/60123456789" className="btn-secondary">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
