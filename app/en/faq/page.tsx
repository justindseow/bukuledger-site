export default function EnFaq() {
  const faqs = [
    {
      q: "What is included in your service?",
      a: "Our service includes monthly reconciliation, transaction categorisation, management reports and ongoing support for your bookkeeping needs.",
    },
    {
      q: "Do I need to use Xero or any accounting software?",
      a: "No. You do not need to buy or learn any accounting software. Just send us your documents and we will handle everything.",
    },
    {
      q: "How much does your service cost?",
      a: "Our standard fee starts from RM699 per month. That covers proper monthly bookkeeping, reconciliation, and ongoing support. It scales gradually based on volume, so there are no sudden jumps as you grow.",
    },
    {
      q: "How do I send you my documents?",
      a: "You will be provided with a secure folder dedicated to your account. Simply upload your documents there and we’ll take care of the rest.",
    },
    {
      q: "How long does it take to complete monthly bookkeeping?",
      a: "Most clients receive their monthly reports within 7 business days after submitting complete documents.",
    },
    {
      q: "Can you help with overdue or messy accounts?",
      a: "Yes. We provide clean-up and catch-up services to bring your accounts back in order.",
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
