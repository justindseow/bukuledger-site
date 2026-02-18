export default function EnContact() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Get a Quote</h1>
        <p className="page-lead">
          Tell us about your business. We’ll reply with a simple monthly plan.
        </p>

        <form className="form">
          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Company" />
          <input className="input" placeholder="Email" />

          <select className="input" defaultValue="">
            <option value="" disabled>Monthly transactions (estimate)</option>
            <option>0–50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>

          <textarea className="input" placeholder="Message" rows={5} />

          <button type="button" className="btn-primary">Submit</button>
        </form>

        <div className="center-note">
          <a
            className="link"
            href="https://wa.me/60123456789?text=Hi%20BukuLedger%2C%20I%27m%20interested%20in%20bookkeeping.%20Company%3A%20____%20Industry%3A%20____%20Transactions%2Fmonth%3A%20____"
          >
            Prefer WhatsApp? Click here
          </a>
        </div>
      </div>
    </main>
  );
}
