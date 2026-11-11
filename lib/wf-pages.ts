// Webflow page ids (from the Astro source `src/_html/wf.json`).
// The IX2 interaction engine in /js/site.js only binds an interaction when its
// page id matches <html data-wf-page="…">, so every route must set the right id.
//
// NOTE: the Astro layout never sets <html data-wf-site>, which is why the
// Webflow forms cannot submit there. This is kept as-is on purpose (approved
// decision A) — do not add data-wf-site.

export const WF_PAGES = {
  "404": "6a5717b9f45479999f4fa9e1",
  index: "6a5717b9f45479999f4fa9d7",
  about: "6a5717b9f45479999f4fa9da",
  contact: "6a5717b9f45479999f4fa9db",
  service: "6a5717b9f45479999f4fa9d9",
  "our-work": "6a5717b9f45479999f4fa9e2",
  detail_services: "6a5717b9f45479999f4fa9df",
  "detail_our-works": "6a5717b9f45479999f4fa9de",
} as const;

export type WfPageKey = keyof typeof WF_PAGES;

/**
 * Inline script (runs in <head> during the initial HTML parse, before the
 * Webflow runtime loads) that sets data-wf-page from the URL on a full page
 * load. Client-side navigations are handled by <WebflowPage />.
 * Mirrors the Astro routes: unknown paths fall back to the 404 page id.
 */
export const WF_PAGE_BOOT_SCRIPT = `(function(){var m=${JSON.stringify(WF_PAGES)},p=location.pathname.replace(/\\/+$/,"")||"/",k=p==="/"?"index":p==="/about"?"about":p==="/contact"?"contact":p==="/services"?"service":p==="/our-work"?"our-work":/^\\/services\\/[^/]+$/.test(p)?"detail_services":/^\\/our-works\\/[^/]+$/.test(p)?"detail_our-works":"404";document.documentElement.setAttribute("data-wf-page",m[k]);})();`;

/** Webflow's own `w-mod-js` / `w-mod-touch` boot snippet, verbatim from the Astro <head>. */
export const WF_MOD_SCRIPT = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;
