import type { Metadata } from "next";
import WebflowPage from "@/components/webflow/WebflowPage";
import NotFoundContent from "@/components/sections/not-found/NotFoundContent";
import { NOT_FOUND_TITLE, pageMetadata } from "@/lib/site";

// Astro: src/pages/404.astro (Header current="" — no active nav link).
// Rendered for /404, any unmatched URL and unknown service/work slugs.
export const metadata: Metadata = pageMetadata({ title: NOT_FOUND_TITLE });

export default function NotFound() {
  return (
    <>
      <WebflowPage page="404" />
      <NotFoundContent />
    </>
  );
}
