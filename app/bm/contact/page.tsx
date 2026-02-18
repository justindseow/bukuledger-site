export default function BmContact() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Minta Sebut Harga</h1>
        <p className="page-lead">
          Kongsi sedikit tentang bisnes anda. Kami akan balas dengan pelan bulanan yang ringkas.
        </p>

        <form className="form">
          <input className="input" placeholder="Nama" />
          <input className="input" placeholder="Syarikat" />
          <input className="input" placeholder="Emel" />

          <select className="input" defaultValue="">
            <option value="" disabled>Anggaran transaksi bulanan</option>
            <option>0–50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>

          <textarea className="input" placeholder="Mesej" rows={5} />

          <button type="button" className="btn-primary">Hantar</button>
        </form>

        <div className="center-note">
          <a
            className="link"
            href="https://wa.me/60123456789?text=Hi%20BukuLedger%2C%20saya%20berminat%20dengan%20servis%20simpan%20kira.%20Syarikat%3A%20____%20Industri%3A%20____%20Transaksi%2Fbulan%3A%20____"
          >
            Prefer WhatsApp? Klik sini
          </a>
        </div>
      </div>
    </main>
  );
}
