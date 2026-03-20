// app/page.tsx

export default function Home() {
  return (
    <main style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
      <section
        className="hero-root"
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          paddingTop: "76px",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574218732130-6b19257fd9db?auto=format&fit=crop&w=2200&q=90')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            backgroundRepeat: "no-repeat",
            opacity: 0.55,
            filter: "brightness(1.35) saturate(1.2)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Left-side dark gradient - covers left 45%, fades out by 70% */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(10,18,35,0.72) 0%, rgba(10,18,35,0.45) 42%, rgba(10,18,35,0.10) 65%, transparent 80%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Constrain text block to left ~40% of viewport on desktop, full width on mobile */}
          <div style={{ maxWidth: "min(600px, max(48vw, 320px))" }}>
            <h1
              style={{
                fontSize: "clamp(26px, 3.6vw, 52px)",
                fontWeight: 950,
                lineHeight: 1.1,
                margin: 0,
                color: "#ffffff",
              }}
            >
              We handle the details so you can focus on growing your business.
            </h1>

            <p
              style={{
                marginTop: 16,
                fontSize: "clamp(13px, 1.2vw, 17px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
                fontWeight: 500,
              }}
            >
              The finance structure your business needs, without building an internal team.
            </p>

          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="stats-strip">
        <div className="container stats-strip-inner">
          <div className="stat-item">
            <span className="stat-value">20+</span>
            <span className="stat-label">Years in Bookkeeping &amp; Finance</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">10+</span>
            <span className="stat-label">Industries Served</span>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="quote-section">
        <div className="container">
          <blockquote className="quote-card">
            <p className="quote-text">
              &ldquo;MacroByte has helped me outsource the finance tasks that kept me up at night.
              My accounts are always in order and I finally have time to focus on growing my store.&rdquo;
            </p>
            <footer className="quote-author">E-Commerce Operator, Kuala Lumpur</footer>
          </blockquote>
        </div>
      </div>
    </main>
  );
}
