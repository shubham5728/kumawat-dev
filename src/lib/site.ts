// Canonical site URL used for metadata, OG tags, sitemap and robots.
// Priority: explicit NEXT_PUBLIC_SITE_URL (set this to your custom domain in
// Vercel) → Vercel's auto-provided deployment URL → local fallback.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "https://kumawat-dev.vercel.app";
