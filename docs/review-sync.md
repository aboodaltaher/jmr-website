# Automatic Google review count

The rating and review count on the site follow the Google Business Profile.

- `src/data/google-reviews.json`: the last known values. `src/data/business.ts` reads it, and every page reads `business.ts`.
- `scripts/sync-google-reviews.mjs`: runs before every build (`prebuild`). Calls the Places API (New), checks the answer is plausible, and rewrites the JSON. With no key, or on any error, the stored values stay and the build still passes.
- `src/app/api/cron/review-sync/route.ts`: runs daily at 03:00 UTC (`vercel.json`). If Google's count differs from the one in the current build, it calls a Vercel deploy hook, and the rebuild picks up the new figures. If nothing changed, it does nothing.
- The Place ID is read from the "write a review" link in `business.ts`. No schema.org aggregateRating is emitted (by design).

## Set-up (one time, in Vercel: Project, Settings, Environment Variables)

| Variable | Value |
|---|---|
| `GOOGLE_PLACES_API_KEY` | A Google Cloud API key with **Places API (New)** enabled. Restrict it to that API. Needed at build time and by the cron. |
| `VERCEL_DEPLOY_HOOK_URL` | Settings, Git, Deploy Hooks: create one for the `main` branch and paste its URL. |
| `CRON_SECRET` | Any long random string. Vercel sends it to the cron route as `Authorization: Bearer ...`. |

Production only is enough. Until the key is set, nothing changes. To check, open Vercel, Project, Cron Jobs, and run `/api/cron/review-sync`: the answer says `not configured`, `up to date` or `rebuild triggered`.
