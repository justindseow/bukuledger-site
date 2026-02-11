export default function EnContact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Get a Quote</h1>
      <p className="text-gray-600 mb-8">
        Tell us about your business. We’ll reply with a simple monthly plan.
      </p>

      <form className="space-y-4">
        <input className="w-full border p-3 rounded-lg" placeholder="Name" />
        <input className="w-full border p-3 rounded-lg" placeholder="Company" />
        <input className="w-full border p-3 rounded-lg" placeholder="Email" />
        <select className="w-full border p-3 rounded-lg" defaultValue="">
          <option value="" disabled>Monthly transactions (estimate)</option>
          <option>0–50</option>
          <option>51–200</option>
          <option>201–500</option>
          <option>500+</option>
        </select>
        <textarea className="w-full border p-3 rounded-lg" placeholder="Message" rows={5} />
        <button className="btn-primary">
          Submit
        </button>
      </form>

      <div className="mt-8 text-center">
        <a
          className="underline"
          href="https://wa.me/60123456789?text=Hi%20BukuLedger%2C%20I%27m%20interested%20in%20bookkeeping.%20Company%3A%20____%20Industry%3A%20____%20Transactions%2Fmonth%3A%20____"
        >
          Prefer WhatsApp? Click here
        </a>
      </div>
    </div>
  );
}
