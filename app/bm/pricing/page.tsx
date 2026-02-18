export default function BmPricing() {
  const tiers = [
    {
      name: "Permulaan",
      range: "0–100 transaksi / bulan",
      price: "Dari RM 299 / bulan",
      points: [
        "Rekonsiliasi & pengkategorian bulanan",
        "Ringkasan bulanan (P&L + Kunci Kira-kira)",
        "Sokongan WhatsApp / emel",
        "Urusan dokumen termasuk",
      ],
    },
    {
      name: "Berkembang",
      range: "101–300 transaksi / bulan",
      price: "Dari RM 499 / bulan",
      points: [
        "Semua dalam Permulaan",
        "Proses tutup akaun hujung bulan lebih kemas",
        "Nota & susulan bulanan lebih jelas",
        "Turnaround lebih pantas bila dokumen lengkap",
      ],
    },
    {
      name: "Skala",
      range: "301–700 transaksi / bulan",
      price: "Dari RM 799 / bulan",
      points: [
        "Semua dalam Berkembang",
        "Sokongan jejak A/R dan A/P",
        "Pek laporan bulanan + highlight utama",
        "Slot sokongan keutamaan",
      ],
    },
  ];

  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">Harga</h1>
        <p className="page-lead">
          Pelan bulanan yang ringkas berdasarkan jumlah transaksi — dengan pelarasan adil untuk bisnes mikro (hasil kecil).
        </p>

        <div className="panel panel-light" style={{ marginTop: 22 }}>
          <h2 className="section-title">Kadar bisnes mikro</h2>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
            Jika hasil bulanan anda <b>di bawah RM10,000</b>, kami akan guna kadar bisnes mikro supaya anda tidak terlebih bayar —
            walaupun transaksi anda lebih tinggi.
          </p>
        </div>

        <div className="grid-2" style={{ marginTop: 22 }}>
          {tiers.map((t) => (
            <div key={t.name} className="card">
              <h3 style={{ fontSize: 20 }}>{t.name}</h3>
              <p style={{ marginTop: 6, fontWeight: 800, color: "#0b1220" }}>{t.price}</p>
              <p style={{ marginTop: 8 }}>{t.range}</p>

              <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.75, color: "#334155" }}>
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div style={{ marginTop: 14 }}>
                <a className="btn-primary" href="/bm/contact">
                  Minta sebut harga
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="panel panel-light" style={{ marginTop: 26 }}>
          <h2 className="section-title">Apa yang mempengaruhi sebut harga?</h2>
          <ul className="list">
            <li>Jumlah transaksi bulanan (faktor utama)</li>
            <li>Saiz hasil bulanan (pelarasan bisnes mikro)</li>
            <li>Tahap kemasan dokumen</li>
            <li>Kerja catch-up (jika akaun tertunggak)</li>
          </ul>

          <div className="cta-row" style={{ marginTop: 16 }}>
            <a className="btn-primary" href="/bm/contact">Minta sebut harga</a>
            <a className="btn-secondary" href="https://wa.me/60123456789">WhatsApp kami</a>
          </div>
        </div>
      </div>
    </main>
  );
}
