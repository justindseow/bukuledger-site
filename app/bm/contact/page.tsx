export default function BmContact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Dapatkan Sebut Harga</h1>
      <p className="text-gray-600 mb-8">
        Kongsi sedikit tentang perniagaan anda. Kami akan cadangkan pelan bulanan yang ringkas.
      </p>

      <form className="space-y-4">
        <input className="w-full border p-3 rounded-lg" placeholder="Nama" />
        <input className="w-full border p-3 rounded-lg" placeholder="Syarikat" />
        <input className="w-full border p-3 rounded-lg" placeholder="Emel" />
        <select className="w-full border p-3 rounded-lg" defaultValue="">
          <option value="" disabled>Transaksi bulanan (anggaran)</option>
          <option>0–50</option>
          <option>51–200</option>
          <option>201–500</option>
          <option>500+</option>
        </select>
        <textarea className="w-full border p-3 rounded-lg" placeholder="Mesej" rows={5} />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
          Hantar
        </button>
      </form>

      <div className="mt-8 text-center">
        <a
          className="underline"
          href="https://wa.me/60123456789?text=Hai%20BukuLedger%2C%20saya%20berminat%20untuk%20simpan%20kira.%20Syarikat%3A%20____%20Industri%3A%20____%20Transaksi%2Fbulan%3A%20____"
        >
          Nak WhatsApp? Klik sini
        </a>
      </div>
    </div>
  );
}
