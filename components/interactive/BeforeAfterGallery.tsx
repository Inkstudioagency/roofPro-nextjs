"use client";

import { useEffect } from "react";

/**
 * Behaviour of the draggable Before & After cards (Astro: the inline <script>
 * after section_gallery in pages/index.astro), ported line for line: each
 * [data-ba] card's range input clips the "after" layer and moves the handle.
 * Renders nothing; runs after hydration on the server-rendered markup and
 * removes its listeners on unmount.
 */
export default function BeforeAfterGallery() {
  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLElement>("[data-ba]");
    const cleanups: (() => void)[] = [];
    sliders.forEach((slider) => {
      const range = slider.querySelector<HTMLInputElement>("[data-ba-range]");
      const afterBlock = slider.querySelector<HTMLElement>("[data-ba-after]");
      const handle = slider.querySelector<HTMLElement>("[data-ba-handle]");
      if (!range || !afterBlock || !handle) return;
      function update() {
        const val = Number(range!.value);
        afterBlock!.style.clipPath = "inset(0 " + (100 - val) + "% 0 0)";
        handle!.style.left = val + "%";
      }
      range.addEventListener("input", update);
      update();
      cleanups.push(() => range.removeEventListener("input", update));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
