export default function BmServices() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Perkhidmatan Simpan Kira</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Simpan kira bulanan yang kemas dan konsisten untuk MSME dan SME di seluruh Malaysia.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Simpan kira & padanan bulanan", "Padanan bank, pengelasan transaksi, penutupan bulanan."],
          ["Rekod pendapatan & perbelanjaan", "Rekod yang jelas untuk faham prestasi."],
          ["Penghutang & pemiutang", "Jejak apa yang perlu diterima dan dibayar."],
          ["Laporan pengurusan", "Pakej bulanan: P&L + Kunci Kira-kira."],
          ["Kemas kini akaun tertunggak", "Betulkan akaun lama yang belum siap."],
          ["Semakan kesihatan akaun", "Kesan isu awal dan kemaskan asas."],
        ].map(([t, d]) => (
          <div key={t} className="card shadow-sm">
            <p className="font-semibold mb-2">{t}</p>
            <p className="text-sm text-gray-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border rounded-2xl p-8 bg-slate-50">
        <h2 className="text-2xl font-bold mb-3">Apa yang anda terima setiap bulan</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Penyata Untung Rugi</li>
          <li>Kunci Kira-kira</li>
          <li>Ringkasan transaksi</li>
          <li>Paparan aliran tunai (asas)</li>
          <li>Susulan soalan / nota</li>
        </ul>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/bm/contact" className="btn-primary">
            Dapatkan Sebut Harga
          </a>
          <a
            href="https://wa.me/60123456789"
            className="btn-secondary"
          >
            WhatsApp Kami
          </a>
        </div>
      </div>
    </div>
  );
}
