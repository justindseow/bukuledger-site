export default function BmHome() {
  return (
    <main className="hero">
      <div className="container hero-grid">
        {/* LEFT */}
        <section>
          <span className="badge">Untuk MSME & SME di Malaysia</span>

          <h1 className="h1">
            Simpan kira yang<br />
            tidak menyusahkan —<br />
            dan pastikan akaun kemas.
          </h1>

          <p className="lead">
            Simpan kira bulanan yang pantas, tepat, dan boleh dipercayai untuk bisnes di Malaysia.
            Rekonsiliasi yang jelas, laporan mudah difahami, dan kurang stres hujung bulan.
          </p>

          <div className="cta-row">
            <a href="/bm/contact" className="btn-primary">Minta sebut harga</a>
            <a href="/bm/services" className="btn-secondary">Lihat servis</a>
          </div>

          <div className="note">Biasanya kami balas dalam 1 hari bekerja.</div>
        </section>

        {/* RIGHT */}
        <aside className="panel">
          <div className="panel-grid">
            <div className="card">
              <h3>Akaun kemas</h3>
              <p>Rekonsiliasi bulanan, pengkategorian transaksi, dan lejar tersusun.</p>
            </div>

            <div className="card">
              <h3>Nombor jelas</h3>
              <p>Ringkasan bulanan dan laporan yang memang akan dibaca.</p>
            </div>

            <div className="card card-wide">
              <h3>Sedia untuk lead-gen</h3>
              <p>WhatsApp + borang — memudahkan prospek hubungi anda dengan cepat.</p>

              <div className="card-actions">
                <a className="btn-primary" href="https://wa.me/60123456789">WhatsApp kami</a>
                <a className="btn-secondary" href="/bm/contact">Hantar mesej</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
