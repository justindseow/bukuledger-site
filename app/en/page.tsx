export default function EnHome() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="pill inline-block mb-4">
          Trusted by Malaysian SMEs
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bookkeeping for Malaysian MSMEs & SMEs
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Clean books, clear numbers, and a smoother month-end — without the headache.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/en/contact" className="btn-primary hover:opacity-95">
              Get a Quote
            </a>

            <a href="https://wa.me/60123456789" className="btn-secondary hover:bg-slate-50">
              WhatsApp Us
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Serving businesses across Malaysia
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">How it works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Share documents", desc: "Bank statements, invoices, receipts (digital is fine)." },
              { title: "We reconcile & organise", desc: "Categorisation, matching, clean monthly close." },
              { title: "Receive monthly reports", desc: "P&L, balance sheet, and a clear summary." },
            ].map((x) => (
              <div key={x.title} className="card shadow-sm">
                <p className="font-semibold mb-2">{x.title}</p>
                <p className="text-sm text-gray-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="btn-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to simplify your bookkeeping?</h2>
          <p className="text-white/80 mb-6">
            Tell us your business size and current setup — we’ll recommend a simple monthly plan.
          </p>
          <a href="/en/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg inline-block">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
