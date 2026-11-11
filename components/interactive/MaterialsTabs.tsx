"use client";

import { useEffect } from "react";

/**
 * Behaviour of the "Roofing Materials" tabs (Astro: the inline <script> after
 * section_materials in pages/index.astro), ported line for line. Renders
 * nothing; runs after hydration on the server-rendered markup and removes its
 * listeners on unmount (client-side navigation).
 */
export default function MaterialsTabs() {
  useEffect(() => {
    const root = document.querySelector(".section_materials");
    if (!root) return;
    const tabs = root.querySelectorAll<HTMLElement>(".materials-tab");
    const panels = root.querySelectorAll<HTMLElement>(".materials-panel");
    if (!tabs.length) return;

    const handlers = new Map<HTMLElement, () => void>();
    tabs.forEach((tab) => {
      const onClick = () => {
        const target = tab.getAttribute("data-material");
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        const panel = root.querySelector(`.materials-panel[data-panel="${target}"]`);
        if (panel) panel.classList.add("is-active");
      };
      tab.addEventListener("click", onClick);
      handlers.set(tab, onClick);
    });

    return () => handlers.forEach((fn, tab) => tab.removeEventListener("click", fn));
  }, []);

  return null;
}
