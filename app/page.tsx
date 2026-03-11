// app/page.tsx

export default function Home() {
  const waRoot =
    "https://wa.me/60134700013?text=Hi.%20I%20would%20like%20to%20enquire%20about%20monthly%20bookkeeping.";

  return (
    <main style={{ position: "relative" }}>
      <section
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "clamp(56px, 10vh, 160px)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580192500099-8cd2c8cb9720?auto=format&fit=crop&w=2200&q=90')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            backgroundRepeat: "no-repeat",
            opacity: 0.55,
            filter: "brightness(1.35) saturate(1.2)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "clamp(48px, 6vh, 110px)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(30px, 4.8vw, 60px)",
              fontWeight: 950,
              lineHeight: 1.08,
              maxWidth: 900,
              margin: 0,
              color: "#0f172a",
            }}
          >
            We handle the details so you can focus on growing your business.
          </h1>

          <p
            style={{
              marginTop: 18,
              maxWidth: 700,
              fontSize: "clamp(14px, 1.4vw, 18px)",
              lineHeight: 1.7,
              color: "#334155",
              fontWeight: 600,
            }}
          >
            The finance structure your business needs, without building an internal team.
          </p>

          <div style={{ marginTop: 26 }}>
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
      </section>
    </main>
  );
}