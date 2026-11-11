import type { Metadata } from "next";
import WebflowPage from "@/components/webflow/WebflowPage";
import CtaSection from "@/components/sections/contact/CtaSection";
import { pageMetadata } from "@/lib/site";

// Astro: src/pages/contact.astro (raw Webflow body; the form is kept exactly as
// exported — non-functional, as on the Astro site).
export const metadata: Metadata = pageMetadata({ title: "Contact || Roofing Services Website Template" });

export default function ContactPage() {
  return (
    <>
      <WebflowPage page="contact" />
      <main className="main-wrapper">{" "}
        <CtaSection />{" "}
      </main>
    </>
  );
}
