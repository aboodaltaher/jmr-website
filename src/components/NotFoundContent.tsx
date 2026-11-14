/** 404 body for app/global-not-found.tsx: the same wording Next.js shows by default, inside the site chrome. */
export function NotFoundContent() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-heading text-5xl font-bold">404</h1>
      <p className="mt-4 text-text-muted">This page could not be found.</p>
    </div>
  );
}
