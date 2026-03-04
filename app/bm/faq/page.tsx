export default function BmFaq() {
  const faqs = [
    {
      q: "Apa yang termasuk dalam perkhidmatan anda?",
      a: "Perkhidmatan kami merangkumi rekonsiliasi bulanan, pengkategorian transaksi, laporan pengurusan dan sokongan berterusan untuk keperluan perakaunan anda.",
    },
    {
      q: "Adakah saya perlu menggunakan Xero atau perisian perakaunan?",
      a: "Tidak. Anda tidak perlu membeli atau belajar mana-mana perisian perakaunan. Hanya hantarkan dokumen anda kepada kami dan kami akan uruskan semuanya.",
    },
    {
      q: "Berapakah kos perkhidmatan anda?",
      a: "Yuran standard kami bermula dari RM699 sebulan. Ia meliputi perakaunan bulanan yang kemas, rekonsiliasi, dan sokongan berterusan. Harga meningkat secara berperingkat mengikut volum, jadi tiada lonjakan mendadak apabila perniagaan anda berkembang.",
    },
    {
      q: "Bagaimana saya menghantar dokumen kepada anda?",
      a: "Anda akan diberikan folder selamat khusus untuk akaun anda. Hanya muat naik dokumen anda di situ dan kami akan uruskan selebihnya.",
    },
    {
      q: "Berapa lama masa diperlukan untuk menyiapkan perakaunan bulanan?",
      a: "Kebanyakan klien menerima laporan bulanan dalam tempoh 7 hari bekerja selepas dokumen lengkap dihantar.",
    },
    {
      q: "Bolehkah anda bantu akaun yang tertunggak atau berselerak?",
      a: "Ya. Kami menyediakan perkhidmatan ‘clean-up’ dan ‘catch-up’ untuk menyusun semula akaun anda supaya kembali teratur.",
    },
  ];

  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Soalan Lazim</h1>

        <p className="page-lead">
          Soalan lazim mengenai perkhidmatan perakaunan MacroByte di Malaysia.
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