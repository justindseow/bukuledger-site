import Link from "next/link";

export default function EnThankYou() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Thanks — received.</h1>
        <p className="page-lead">
          We’ll reply by email with a simple monthly plan.
        </p>

        <div className="center-note">
          <Link className="link" href="/en">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}