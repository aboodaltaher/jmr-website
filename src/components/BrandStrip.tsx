// Brands list for the homepage and /services/hvac-installation-dubai, taken from the VRF
// maintenance page. Text only (no logos). Never "authorised", "dealer" or "service centre".
const BRANDS = ["Daikin", "Trane", "O General", "Midea", "LG"];

export function BrandStrip() {
  return (
    <section className="border-y border-border bg-bg-soft py-10" aria-labelledby="brand-strip-heading">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 id="brand-strip-heading" className="font-heading text-xl font-bold md:text-2xl">
          Brands we install and repair
        </h2>
        <ul className="mt-5 flex flex-wrap justify-center gap-3">
          {BRANDS.map((b) => (
            <li key={b} className="rounded-full border border-border bg-white px-5 py-2 font-semibold text-text">
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-muted">
          Brand names are trademarks of their owners, listed to show the equipment we work on.
        </p>
      </div>
    </section>
  );
}
