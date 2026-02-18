export default function BmFaq() {
  const faqs = [
    {
      q: "Apa yang termasuk dalam servis simpan kira?",
      a: "Servis kami termasuk rekonsiliasi bulanan, pengkategorian transaksi, laporan asas, dan sokongan berterusan.",
    },
    {
      q: "Perlu guna Xero atau perisian perakaunan?",
      a: "Tidak perlu. Anda tidak perlu membeli atau belajar sebarang perisian. Hanya hantar dokumen kepada kami dan kami akan uruskan.",
    },
    {
      q: "Berapa kos servis simpan kira?",
      a: "Harga bergantung kepada jumlah transaksi bulanan. Kami akan cadangkan bayaran tetap selepas memahami bisnes anda.",
    },
    {
      q: "Bagaimana cara hantar dokumen?",
      a: "Anda boleh hantar melalui WhatsApp, emel, Google Drive, atau format yang paling mudah untuk anda.",
    },
    {
      q: "Berapa lama proses simpan kira bulanan?",
      a: "Kebanyakan klien menerima laporan dalam 5 hingga 7 hari bekerja selepas dokumen lengkap diterima.",
    },
    {
      q: "Boleh bantu akaun yang bersepah atau tertunggak?",
      a: "Ya. Kami menyediakan servis kemas kini dan pembersihan akaun lama.",
    },
    {
      q: "Ada servis perakaunan dan cukai?",
      a: "Buat masa ini, kami fokus kepada simpan kira. Servis perakaunan dan cukai mungkin ditambah melalui rakan kongsi.",
    },
  ];

  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Soalan Lazim</h1>

        <p className="page-lead">
          Soalan biasa tentang servis simpan kira BukuLedger di Malaysia.
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
          Masih ada soalan?{" "}
          <a className="link" href="/bm/contact">
            Hubungi kami di sini
          </a>
          .
        </div>
      </div>
    </main>
  );
}
