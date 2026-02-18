export default function EnFaq() {
  const faqs = [
    {
      q: "What is included in your bookkeeping service?",
      a: "Our service includes monthly reconciliation, transaction categorisation, basic management reports, and ongoing support for your bookkeeping needs.",
    },
    {
      q: "Do I need to use Xero or any accounting software?",
      a: "No. You do not need to buy or learn any accounting software. Just send us your documents and we will handle everything.",
    },
    {
      q: "How much does your service cost?",
      a: "Pricing depends mainly on your monthly transaction volume. We will propose a simple monthly fee after understanding your business.",
    },
    {
      q: "How do I send you my documents?",
      a: "You can send documents via WhatsApp, email, Google Drive, or any format that is convenient for you.",
    },
    {
      q: "How long does it take to complete monthly bookkeeping?",
      a: "Most clients receive their monthly reports within 5 to 7 working days after submitting complete documents.",
    },
    {
      q: "Can you help with overdue or messy accounts?",
      a: "Yes. We provide clean-up and catch-up bookkeeping services to bring your accounts back in order.",
    },
    {
      q: "Do you provide accounting and tax services?",
      a: "Currently, we focus on bookkeeping. Accounting and tax services may be added in the future through our partners.",
    },
  ];

  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Frequently Asked Questions</h1>

        <p className="page-lead">
          Common questions about BukuLedger’s bookkeeping services in Malaysia.
        </p>

        <div style={{ marginTop: 28, display: "grid", gap: 16 }}>
          {faqs.map((item, i) => (
            <div key={i} className="card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>

        <div className="center-note">
          Still have questions?{" "}
          <a className="link" href="/en/contact">
            Contact us here
          </a>
          .
        </div>
      </div>
    </main>
  );
}
