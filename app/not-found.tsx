import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">404 - Page not found</h1>
        <p className="page-lead">
          The page you are looking for does not exist or has been moved.
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
