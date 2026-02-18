export default function EnHome() {
  return (
    <main className="hero">
      <div className="container hero-grid">
        <section>
          <span className="badge">Built for Malaysian MSMEs</span>

          <h1 className="h1">
            Bookkeeping handled properly.Without the hassle.<br />
          </h1>

          <p className="lead">
            Reliable monthly bookkeeping for Malaysian MSMEs. We manage your records, reconciliations and reports so you do not need extra software, systems or staff.
          </p>

          <div className="cta-row">
            <a href="/en/contact" className="btn-primary">Get a quote</a>
            <a href="/en/services" className="btn-secondary">See services</a>
          </div>

          <div className="note">Typical response within 1 business day.</div>
        </section>

        <aside className="panel">
          <div className="panel-grid">
            <div className="card">
              <h3>Clean Books</h3>
              <p>Monthly reconciliation, proper categorisation, and well-maintained ledgers that stay up to date.</p>
            </div>

            <div className="card">
              <h3>Clear Numbers</h3>
              <p>Simple monthly reports that show where your money is going. No accounting jargon. No confusion.</p>
            </div>

            <div className="card card-wide">
              <h3>Fully Managed</h3>
              <p>Just send us your documents. No additional software to learn, subscribe or manage.</p>

              <div className="card-actions">
                <a className="btn-primary" href="https://wa.me/60123456789">Talk on WhatsApp</a>
                <a className="btn-secondary" href="/en/contact">Send a message</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
