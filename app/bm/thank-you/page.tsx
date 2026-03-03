import Link from "next/link";

export default function BmThankYou() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Terima kasih</h1>
        <p className="page-lead">
          Kami telah terima permintaan anda. Kami akan balas melalui emel dengan pelan bulanan yang ringkas.
        </p>

        <div className="center-note">
          <Link className="link" href="/bm">
            Kembali ke laman utama
          </Link>
        </div>
      </div>
    </main>
  );
}