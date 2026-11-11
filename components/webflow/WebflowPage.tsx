"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { WF_PAGES, type WfPageKey } from "@/lib/wf-pages";
import { loadWebflowRuntime, reinitWebflow } from "@/lib/webflow";

// Pathname the Webflow runtime was last (re)initialised for. Module-level so it
// survives remounts and makes React Strict Mode's double effect a no-op.
let initialisedFor: string | null = null;

/**
 * Rendered once by every page. Sets <html data-wf-page> for the route and:
 * - on the first page load, injects the Webflow runtime (site.js) — effects run
 *   after hydration, so the runtime never mutates the DOM while React hydrates;
 * - after a client-side navigation (next/link), re-initialises the runtime so
 *   IX2 animations, sliders, tabs, dropdowns and the navbar bind to the newly
 *   rendered DOM.
 */
export default function WebflowPage({ page }: { page: WfPageKey }) {
  const pathname = usePathname();
  const pageId = WF_PAGES[page];

  useEffect(() => {
    document.documentElement.setAttribute("data-wf-page", pageId);
    if (initialisedFor === pathname) return;
    const firstLoad = initialisedFor === null;
    initialisedFor = pathname;

    // First load (or a navigation while site.js is still downloading): the
    // runtime boots itself against the current DOM once it has loaded.
    if (firstLoad || !window.__wfx) {
      loadWebflowRuntime();
      return;
    }

    const frame = requestAnimationFrame(reinitWebflow);
    return () => cancelAnimationFrame(frame);
  }, [pageId, pathname]);

  return null;
}
