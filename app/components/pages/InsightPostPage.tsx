import { Insight, formatInsightDate } from "@/app/lib/insights";


export default function InsightPostPage({ insight }: { insight: Insight }) {
  return (
    <main id="main-content" className="page">
      <div className="container">
        <div className="insight-post-wrap narrow">
          <a href="/en/insights" className="insight-back">← Back to Insights</a>

          <div className="insight-post-meta">
            <span className="insight-date">{formatInsightDate(insight.date)}</span>
            <span className="insight-read-time">{insight.readTime}</span>
          </div>

          <h1 className="insight-post-title">{insight.title}</h1>
          <p className="insight-post-intro">{insight.intro}</p>

          <div className="insight-post-body">
            {insight.sections.map((section, i) => (
              <div key={i} className="insight-section">
                {section.heading && (
                  <h2 className="insight-section-heading">{section.heading}</h2>
                )}
                {section.body.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
                {section.list && (
                  <ul className="insight-list">
                    {section.list.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {insight.relatedLinks && insight.relatedLinks.length > 0 && (
            <div className="insight-related">
              <p className="insight-related-heading">Explore further</p>
              <ul className="insight-related-list">
                {insight.relatedLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="insight-post-cta">
            <p>Want your books handled so you can focus on the business?</p>
            <div className="insight-cta-actions">
              <a
                href={`https://wa.me/60134700013?text=${encodeURIComponent("Hi MacroByte, I read one of your articles and would like to find out more about your bookkeeping services.")}`}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk on WhatsApp
              </a>
              <a href="/en/contact" className="btn-outline-dark">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
