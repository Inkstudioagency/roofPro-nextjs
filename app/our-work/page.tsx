import type { Metadata } from "next";
import WebflowPage from "@/components/webflow/WebflowPage";
import OurWorkSection from "@/components/cards/OurWorkSection";
import { getWorks } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

// Astro: src/pages/our-work.astro (works in CSV order).
export const metadata: Metadata = pageMetadata({ title: "Our Work || Roofing Services Website Template" });

export default async function OurWorkPage() {
  const works = await getWorks();
  return (
    <>
      <WebflowPage page="our-work" />
      <main className="main-wrapper">
        <OurWorkSection works={works} />
      </main>
    </>
  );
}
