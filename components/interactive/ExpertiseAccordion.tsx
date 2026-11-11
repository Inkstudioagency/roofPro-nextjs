"use client";

import { useEffect } from "react";

/**
 * Behaviour of the expertise accordion (Astro: the inline <script> after the
 * about…why-choose block in pages/index.astro), ported line for line: the
 * first card starts open, clicking a closed card opens it and closes the
 * others (height animates from 0 to its measured scrollHeight), and open cards
 * are re-measured on resize. Renders nothing; runs after hydration on the
 * server-rendered markup and removes its listeners on unmount.
 */
export default function ExpertiseAccordion() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".section_expertise .expertise-card-block");
    if (!cards.length) return;

    function setOpen(card: HTMLElement, open: boolean, immediate?: boolean) {
      const summary = card.querySelector<HTMLElement>(".expertise-card-summary-block");
      const image = card.querySelector<HTMLElement>(".expertise-card-image-block");
      const icon = card.querySelector<HTMLElement>(".expertise-card-icon-block");
      card.classList.toggle("is-open", open);
      if (icon) icon.style.opacity = open ? "0" : "1";
      [summary, image].forEach((el) => {
        if (!el) return;
        if (open) {
          // On first paint the card's image may not have loaded yet, so
          // scrollHeight would measure 0 and clip the image permanently.
          // Use "auto" for the initial open state instead of a measured
          // px value; later toggles (after images are loaded) animate
          // from a measured scrollHeight as normal.
          el.style.height = immediate ? "auto" : el.scrollHeight + "px";
        } else {
          el.style.height = "0px";
        }
      });
    }

    const handlers = new Map<HTMLElement, () => void>();
    cards.forEach((card, i) => {
      setOpen(card, i === 0, true);
      const onClick = () => {
        if (card.classList.contains("is-open")) return;
        cards.forEach((c) => setOpen(c, c === card, false));
      };
      card.addEventListener("click", onClick);
      handlers.set(card, onClick);
    });

    const onResize = () => {
      cards.forEach((card) => {
        if (card.classList.contains("is-open")) setOpen(card, true);
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      handlers.forEach((fn, card) => card.removeEventListener("click", fn));
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
