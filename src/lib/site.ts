// Canonical site URL used for metadata, OG tags, sitemap and robots.
// Priority:
//   1. NEXT_PUBLIC_SITE_URL   — set this to your custom domain in Vercel.
//   2. VERCEL_PROJECT_PRODUCTION_URL — the stable production alias
//      (e.g. kumawat-dev.vercel.app), NOT the per-deployment URL.
//   3. VERCEL_URL             — per-deployment fallback.
//   4. local fallback.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "https://kumawat-dev.vercel.app";
