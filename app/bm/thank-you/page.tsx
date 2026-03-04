import Link from "next/link";

export default function BmThankYou() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Terima kasih. Kami telah menerima permintaan anda</h1>
        <p className="page-lead">
          Kami akan membalas degan pelan bulanan yang ringkas.
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