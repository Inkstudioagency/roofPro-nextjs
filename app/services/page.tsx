import type { Metadata } from "next";
import WebflowPage from "@/components/webflow/WebflowPage";
import BreadcrumbSection from "@/components/sections/services/BreadcrumbSection";
import ServiceSection from "@/components/sections/services/ServiceSection";
import CtaTwoSection from "@/components/sections/shared/CtaTwoSection";
import { getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

// Astro: src/pages/services.astro (services in CMS order).
export const metadata: Metadata = pageMetadata({ title: "Service || Roofing Services Website Template" });

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <WebflowPage page="service" />
      <main className="main-wrapper">
        <BreadcrumbSection />
        <ServiceSection services={services} />
        <CtaTwoSection />
      </main>
    </>
  );
}
