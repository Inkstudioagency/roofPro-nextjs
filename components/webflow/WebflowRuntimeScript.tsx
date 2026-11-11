"use client";

import Script from "next/script";
import { notifyIx2 } from "@/lib/webflow";

/**
 * Loads the vendored Webflow runtime (/js/site.js: navbar, sliders, tabs,
 * dropdowns, forms, IX2 animations) after hydration, so it never mutates the
 * DOM before React has attached to it. jQuery is loaded first by the root
 * layout (beforeInteractive). Once the runtime has started, IX2 is asked to run
 * its first scroll-trigger check (see notifyIx2).
 */
export default function WebflowRuntimeScript() {
  return <Script src="/js/site.js" strategy="afterInteractive" onLoad={notifyIx2} />;
}
