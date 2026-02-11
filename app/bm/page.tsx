export default function BmHome() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="pill inline-block mb-4">
          Dipercayai oleh SME Malaysia
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Perkhidmatan Simpan Kira untuk MSME & SME di Malaysia
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rekod kemas, nombor jelas, dan penutupan bulanan lebih lancar — tanpa pening kepala.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="/bm/contact"
              className="btn-primary hover:opacity-95"
            >
              Dapatkan Sebut Harga
            </a>

            <a
              href="https://wa.me/60123456789?text=Hai%20BukuLedger%2C%20saya%20berminat%20untuk%20simpan%20kira.%20Syarikat%3A%20____%20Industri%3A%20____%20Transaksi%2Fbulan%3A%20____"
              className="btn-secondary hover:bg-slate-50"
            >
              WhatsApp Kami
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Melayani perniagaan di seluruh Malaysia
          </p>
        </div>
      </section>
    </div>
  );
}
