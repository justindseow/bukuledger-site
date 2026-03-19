// app/page.tsx

export default function Home() {
  const waRoot =
    "https://wa.me/60134700013?text=Hi.%20I%20would%20like%20to%20enquire%20about%20monthly%20bookkeeping.";

  return (
    <main style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
      <section
        className="hero-root"
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          paddingTop: "110px",
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

            <div style={{ marginTop: 28 }}>
              <a
                className="btn-primary"
                href={waRoot}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "12px 22px", fontSize: 15 }}
              >
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
