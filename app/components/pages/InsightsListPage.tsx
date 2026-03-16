import { insights, formatInsightDate } from "@/app/lib/insights";

export default function InsightsListPage() {
  return (
    <main id="main-content" className="page">
      <div className="container">
        <h1 className="page-title">Insights</h1>
        <p className="page-lead">
          Practical guides on bookkeeping, payroll, and finance for Malaysian SMEs.
        </p>

        <div className="insights-grid">
          {insights.map((insight) => (
            <a
              key={insight.slug}
              href={`/en/insights/${insight.slug}`}
              className="insight-card"
            >
              <div className="insight-card-meta">
                <span className="insight-date">{formatInsightDate(insight.date)}</span>
                <span className="insight-read-time">{insight.readTime}</span>
              </div>
              <h2 className="insight-card-title">{insight.title}</h2>
              <p className="insight-card-desc">{insight.description}</p>
              <span className="insight-read-more">Read article →</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
