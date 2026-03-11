"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">Something went wrong</h1>
        <p className="page-lead">
          An unexpected error occurred. Please try again.
        </p>
        <div className="card-actions" style={{ marginTop: 16, gap: 12 }}>
          <button className="btn-primary" onClick={() => reset()}>
            Try again
          </button>
          <Link className="btn-secondary" href="/en">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
