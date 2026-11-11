// Client helpers for the vendored Webflow runtime (/js/site.js).
// This export registers its runtime on `window.__wfx` (not `window.Webflow`).

type WebflowModule = { init?: (data?: unknown) => void; destroy?: () => void };

export type WebflowRuntime = {
  destroy: () => void;
  ready: () => void;
  require: (name: string) => WebflowModule | undefined;
};

declare global {
  interface Window {
    __wfx?: WebflowRuntime;
  }
}

/**
 * Ask IX2 to evaluate its scroll-based triggers (SCROLL_INTO_VIEW, …) now.
 *
 * IX2 only checks those triggers on window resize/orientationchange and on
 * document scroll/wheel/readystatechange/IX2_PAGE_UPDATE. On the Astro site
 * site.js runs during HTML parsing, so the browser's own `readystatechange`
 * events (interactive, complete) perform the first check — that is what slides
 * the fixed header in and reveals above-the-fold content. Here site.js runs
 * after hydration (document already complete), so we dispatch IX2's own
 * IX2_PAGE_UPDATE event at the equivalent moments instead.
 */
export function notifyIx2(): void {
  const fire = () => document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  requestAnimationFrame(fire);
  // Mirror the second checkpoint (readyState "complete", i.e. after images load).
  if (document.readyState !== "complete") window.addEventListener("load", fire, { once: true });
}

let runtimeRequested = false;

function appendScript(src: string, onload?: () => void): void {
  const script = document.createElement("script");
  script.src = src;
  // Dynamically inserted scripts with async=false execute in insertion order,
  // so jQuery always runs before site.js (same order as the Astro layout).
  script.async = false;
  if (onload) script.onload = onload;
  document.body.appendChild(script);
}

/**
 * Inject jQuery + the Webflow runtime (/js/site.js) once. Called from
 * <WebflowPage>'s effect, i.e. only after React has finished hydrating the
 * page: site.js mutates the DOM immediately (slider dots, tabs roles, IX2
 * styles), and doing that mid-hydration makes React discard the server HTML
 * and re-render it, losing every Webflow binding. Nothing needs jQuery before
 * that point, so both are loaded here (this also covers 404 responses, where
 * Next does not emit `beforeInteractive` scripts).
 */
export function loadWebflowRuntime(): void {
  if (runtimeRequested || window.__wfx) return;
  runtimeRequested = true;
  if (!("jQuery" in window)) appendScript("/js/jquery.min.js");
  appendScript("/js/site.js", notifyIx2);
}

/**
 * Re-bind every Webflow module (navbar, dropdown, slider, tabs, forms, links,
 * scroll, touch) and restart the IX2 interaction engine against the current
 * DOM. `ix2.init()` with no argument reuses the interaction data that was
 * loaded on the first page load. Safe to call before site.js has loaded:
 * it is a no-op then and the runtime boots itself with the current DOM.
 */
export function reinitWebflow(): void {
  const wf = window.__wfx;
  if (!wf) return;
  wf.destroy();
  wf.ready();
  wf.require("ix2")?.init?.();
  notifyIx2();
}
