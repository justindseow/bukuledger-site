export default function BmServices() {
  const items: Array<[string, string]> = [
    ["Simpan kira bulanan & rekonsiliasi", "Padanan bank, pengkategorian, tutup akaun hujung bulan."],
    ["Jejak jualan & perbelanjaan", "Nombor lebih jelas dan mudah difahami."],
    ["Akaun belum terima & belum bayar", "Jejak apa yang perlu diterima dan dibayar."],
    ["Laporan pengurusan", "Pek bulanan: P&amp;L + Kunci Kira-kira."],
    ["Kemas kini / bersihkan akaun lama", "Susun semula akaun yang tertunggak."],
    ["Semakan kesihatan simpan kira", "Kesan isu awal dan betulkan asas."],
  ];

  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">Servis Simpan Kira</h1>
        <p className="page-lead">
          Simpan kira bulanan untuk MSME & SME di Malaysia — lebih kemas, konsisten, dan mudah untuk hujung bulan.
        </p>

        <div className="grid-2">
          {items.map(([t, d]) => (
            <div key={t} className="card">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>

        <div className="panel panel-light">
          <h2 className="section-title">Apa yang anda terima setiap bulan</h2>
          <ul className="list">
            <li>Penyata Untung Rugi</li>
            <li>Kunci Kira-kira</li>
            <li>Ringkasan transaksi</li>
            <li>Pandangan asas aliran tunai</li>
            <li>Soalan / nota susulan</li>
          </ul>

          <div className="cta-row">
            <a href="/bm/contact" className="btn-primary">Minta sebut harga</a>
            <a href="https://wa.me/60123456789" className="btn-secondary">WhatsApp kami</a>
          </div>
        </div>
      </div>
    </main>
  );
}
