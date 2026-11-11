"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { WF_PAGES, type WfPageKey } from "@/lib/wf-pages";
import { reinitWebflow } from "@/lib/webflow";

// Pathname the Webflow runtime was last (re)initialised for. Module-level so it
// survives remounts and makes React Strict Mode's double effect a no-op.
let initialisedFor: string | null = null;

/**
 * Rendered once by every page. Sets <html data-wf-page> for the route and,
 * after a client-side navigation (next/link), re-initialises the Webflow
 * runtime so IX2 animations, sliders, tabs, dropdowns and the navbar bind to
 * the newly rendered DOM.
 */
export default function WebflowPage({ page }: { page: WfPageKey }) {
  const pathname = usePathname();
  const pageId = WF_PAGES[page];

  useEffect(() => {
    const html = document.documentElement;
    const idChanged = html.getAttribute("data-wf-page") !== pageId;
    html.setAttribute("data-wf-page", pageId);

    if (initialisedFor === pathname) return;
    const firstLoad = initialisedFor === null;
    initialisedFor = pathname;

    // Full page load: the boot script already set the right id and site.js
    // initialises itself. Only re-init if the id had to be corrected (e.g. the
    // 404 page rendered for an unknown /services/<slug>).
    if (firstLoad && !idChanged) return;

    const frame = requestAnimationFrame(reinitWebflow);
    return () => cancelAnimationFrame(frame);
  }, [pageId, pathname]);

  return null;
}
