// app/en/contact/page.tsx (or wherever your EN contact page lives)

export default function EnContact() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Get a Quote</h1>
        <p className="page-lead">
          Tell us about your business. We’ll reply with a simple monthly plan.
        </p>

        <form
          className="form"
          action="https://formsubmit.co/accounts@macrobyte.my"
          method="POST"
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value="New MacroByte Quote Request (EN)" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://macrobyte.my/en/thank-you" />

          <input className="input" name="name" placeholder="Name" required />
          <input className="input" name="company" placeholder="Company" required />
          <input className="input" name="email" placeholder="Email" type="email" required />

          <select className="input" name="monthly_transactions" defaultValue="" required>
            <option value="" disabled>
              Monthly transactions (estimate)
            </option>
            <option value="0-50">0–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>

          <textarea
            className="input"
            name="message"
            placeholder="Message"
            rows={5}
          />

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>

        <div className="center-note">
          <a
            className="link"
            href="https://wa.me/60134700013?text=Hi%20MacroByte,%20I%27m%20interested%20in%20monthly%20bookkeeping.%20My%20estimated%20monthly%20transactions%20are%20____."
            target="_blank"
            rel="noopener noreferrer"
          >
            Prefer WhatsApp? Click here
          </a>
        </div>
      </div>
    </main>
  );
}