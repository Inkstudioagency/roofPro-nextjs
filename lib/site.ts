import type { Metadata } from "next";

// Values from the Astro source (astro.config.mjs `site`, Layout.astro defaults).
export const SITE_URL = "https://roofpro-astro-theme-v2.vercel.app";

export const DEFAULT_TITLE = "RoofPro - Roofing Services Website Template";

export const DEFAULT_DESCRIPTION =
  "RoofPro Services is a modern and professional roofing service template designed for roofing companies, contractors, and construction businesses. This premium template helps you showcase your roofing services and grow your business with a clean and trustworthy design.";

export const DEFAULT_OG_IMAGE = "/images/og-image-1200x630.jpg";

/** Title of the Astro 404 page (src/pages/404.astro). */
export const NOT_FOUND_TITLE = "Not Found || Roofing Services Website Template";

/**
 * Per-page metadata that reproduces the Astro <head>: title, description,
 * og:title/description/image/type and twitter:card/title/description/image.
 * (Next merges openGraph/twitter shallowly, so each page gets the full set.)
 */
export function pageMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
}: { title?: string; description?: string; ogImage?: string } = {}): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, images: [ogImage], type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
