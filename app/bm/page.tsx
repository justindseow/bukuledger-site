// app/bm/page.tsx
export default function BmHome() {
  const waHome =
    "https://wa.me/60134700013?text=Hi%20MacroByte,%20Saya%20berminat%20dengan%20perkhidmatan%20akaun%20bulanan.%20Anggaran%20transaksi%20bulanan%20saya%20adalah%20____.";

  return (
    <main className="hero">
      <div className="container hero-grid">
        {/* LEFT */}
        <section className="hero-left">
          <span
            className="badge"
            style={{ alignSelf: "flex-start", width: "fit-content" }}
          >
            Dibina untuk SME
          </span>

          <h1 className="h1">
            Perakaunan diurus dengan betul. Tanpa kerumitan.
          </h1>

          <p className="lead">
            Perkhidmatan perakaunan bulanan yang boleh dipercayai untuk PKS Malaysia.
            Kami mengurus rekod, rekonsiliasi dan laporan supaya anda tidak memerlukan
            perisian tambahan atau kakitangan tambahan.
          </p>
        </section>

        {/* RIGHT */}
        <aside className="panel hero-panel">
          <div className="panel-grid">
            <div className="card">
              <h3>Buku Kemas</h3>
              <p>
                Rekonsiliasi bulanan, pengkategorian tepat, dan lejar yang sentiasa
                dikemas kini.
              </p>
            </div>

            <div className="card">
              <h3>Nombor Jelas</h3>
              <p>
                Laporan bulanan ringkas yang menunjukkan aliran wang anda.
                Tanpa istilah perakaunan yang mengelirukan.
              </p>
            </div>

            <div className="card card-wide card-wide-fill">
              <div>
                <h3>Diurus Sepenuhnya</h3>
                <p>Hantar dokumen anda. Kami uruskan selebihnya. Tiada perisian tambahan diperlukan.</p>
              </div>

              <div className="card-actions card-actions-duo">
                <a
                  className="btn-primary"
                  href={waHome}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi melalui WhatsApp
                </a>

                <a className="btn-outline-dark" href="/bm/contact">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}