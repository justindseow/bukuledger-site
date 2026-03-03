export default function BmContact() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Dapatkan Sebut Harga</h1>
        <p className="page-lead">
          Beritahu kami tentang perniagaan anda. Kami akan balas dengan pelan bulanan yang ringkas.
        </p>

        <form
          className="form"
          action="https://formsubmit.co/accounts@macrobyte.my"
          method="POST"
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value="New MacroByte Quote Request (BM)" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://macrobyte.my/bm/thank-you" />

          <input className="input" name="nama" placeholder="Nama" required />
          <input className="input" name="syarikat" placeholder="Syarikat" required />
          <input className="input" name="emel" placeholder="Emel" type="email" required />

          <select className="input" name="anggaran_transaksi_bulanan" defaultValue="" required>
            <option value="" disabled>
              Anggaran transaksi bulanan
            </option>
            <option value="0-50">0–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>

          <textarea className="input" name="mesej" placeholder="Mesej" rows={5} />

          <button type="submit" className="btn-primary">
            Hantar
          </button>
        </form>

        <div className="center-note">
          <a
            className="link"
            href="https://wa.me/60134700013?text=Hi%20MacroByte,%20Saya%20berminat%20dengan%20perkhidmatan%20akaun%20bulanan.%20Anggaran%20transaksi%20bulanan%20saya%20adalah%20____."
            target="_blank"
            rel="noopener noreferrer"
          >
            Lebih suka WhatsApp? Klik di sini
          </a>
        </div>
      </div>
    </main>
  );
}