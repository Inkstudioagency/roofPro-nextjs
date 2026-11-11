import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";

// Original stylesheet order from the Astro layout: normalize → Webflow base →
// site (app.css) → Astro additions (site.css). Copied verbatim (only the
// `../images/` url() paths were rewritten to `/images/`).
import "@/styles/normalize.css";
import "@/styles/base.css";
import "@/styles/app.css";
import "@/styles/site.css";
// Approved deviations from the original design (kept separate from the verbatim CSS).
import "@/styles/overrides.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WebflowRuntimeScript from "@/components/webflow/WebflowRuntimeScript";
import { getServices, getWorks } from "@/lib/content";
import { DEFAULT_TITLE, SITE_URL, pageMetadata } from "@/lib/site";
import { WF_MOD_SCRIPT, WF_PAGE_BOOT_SCRIPT } from "@/lib/wf-pages";

// Self-hosted Manrope (replaces the Astro build's Google WebFont loader). Next
// registers the @font-face under the family name "Manrope", so the Webflow
// token `--font-family--main-font: Manrope, sans-serif` resolves to it as-is.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({ title: DEFAULT_TITLE }),
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: light)" },
      { url: "/images/favicon-dark.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/images/webclip.png",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [services, works] = await Promise.all([getServices(), getWorks()]);

  return (
    // suppressHydrationWarning: the boot scripts below add `w-mod-*` classes and
    // `data-wf-page` to <html> before React hydrates (same as the Astro site).
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: WF_MOD_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: WF_PAGE_BOOT_SCRIPT }} />
      </head>
      <body>
        {/* Same structure as the Astro pages: .page-wrapper > header, page body, footer.
            Header/Footer live in the layout so they persist across next/link navigations. */}
        <div className="page-wrapper">
          <Header serviceSlugs={services.map((s) => s.slug)} workSlugs={works.map((w) => w.slug)} />
          {children}
          <Footer />
        </div>
        {/* Webflow runtime: jQuery first, then site.js (nav, sliders, tabs,
            dropdowns, forms, IX2 animations), which runs after hydration. */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <WebflowRuntimeScript />
      </body>
    </html>
  );
}
