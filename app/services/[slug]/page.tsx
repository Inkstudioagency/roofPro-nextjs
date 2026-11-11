import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import WebflowPage from "@/components/webflow/WebflowPage";
import CtaTwoSection from "@/components/sections/shared/CtaTwoSection";
import { getService, getServices } from "@/lib/content";
import { NOT_FOUND_TITLE, pageMetadata } from "@/lib/site";
import type { Service } from "@/types/service";

// Astro: src/pages/services/[slug].astro — one static page per service.
// Unknown slugs render the 404 page (Astro generated no page for them).
// ensureStatic "navigation": the complete route is static output (as in Astro),
// and an unlisted slug is fully rendered before the response starts, so
// notFound() yields a real HTTP 404 instead of a streamed 200 fallback shell.
export const ensureStatic = "navigation";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = await getService((await params).slug);
  // Unknown slug: the 404 page renders, so use its title (as on the Astro site).
  if (!s) return pageMetadata({ title: NOT_FOUND_TITLE });
  return pageMetadata({ title: `${s.serviceTitle} || Roofing Services Website Template`, description: s.serviceDescription });
}

const field = (s: Service, key: string) => ((s as Record<string, string>)[key] || "").trim();

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const s = await getService((await params).slug);
  if (!s) notFound();

  // Breadcrumb hero background = Service Main Image (CMS). The .breadcrumb-bg-overlay
  // element darkens it for legibility, so only the image is set here.
  const bannerStyle: CSSProperties | undefined = s.serviceMainImage
    ? { backgroundImage: `url('${s.serviceMainImage}')`, backgroundSize: "cover", backgroundPosition: "50%" }
    : undefined;

  const overviewImages = [s.overviewImage1, s.overviewImage2, s.overviewImage3, s.overviewImage4]
    .map((u, i) => ({ url: (u || "").trim(), n: i + 1 }))
    .filter((o) => o.url);

  const offerPoints: { text: string; icon: string; small: boolean }[] = [];
  for (let i = 1; i <= 9; i++) {
    const text = field(s, `whatOfferPoint${i}`);
    if (!text) continue;
    offerPoints.push({ text, icon: field(s, `whatOfferPointIcon${i}`), small: [5, 8, 9].includes(i) });
  }

  const benefits: string[] = [];
  for (let i = 1; i <= 6; i++) {
    const text = field(s, `keyBenefitPoint${i}`);
    if (text) benefits.push(text);
  }

  return (
    <>
      <WebflowPage page="detail_services" />
      <main className="main-wrapper">
        <section className="section_breadcrumb service-details is-2" style={bannerStyle}>
          <div className="section-gap is-relative">
            <div className="w-layout-blockcontainer container-main w-container">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-link-block">
                  <Link href="/services" className="link-button text-color-white w-inline-block">
                    <div className="link-button-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                    <div className="button-text">Back to Services</div>
                  </Link>
                </div>
                <div className="breadcrumb-content-block is-3">
                  <div className="breadcrumb-heading-block">
                    <div className="breadcrumb-subtitle-block">
                      <div className="breadcrumb-subtitle">Service Details</div>
                    </div>
                    <div className="breadcrumb-title-block">
                      <h1 className="heading-style-2 text-color-white">{s.serviceTitle}</h1>
                    </div>
                  </div>
                  <div className="breadcrumb-summary-block max-width-640">
                    <p className="paragraph-small text-color-white">{s.serviceDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breadcrumb-bg-overlay"></div>
        </section>
        <section className="section_overview">
          <div className="section-gap">
            <div className="w-layout-blockcontainer container-main w-container">
              <div className="overview-wrapper">
                <div className="overview-content-block">
                  <div className="section-title-block">
                    <h2 className="heading-style-2">Overview</h2>
                  </div>
                  <div className="section-summary-block top-space-lg">
                    <p className="paragraph-small">{s.serviceOverview}</p>
                  </div>
                </div>
                <div className="overview-image-block is-2">
                  {overviewImages.map((img) => (
                    <div key={img.n} className={`overview-image-single-block is-${img.n}`}><img src={img.url} loading="lazy" alt="service-overview-image" className="service-overview-image" /></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_what-offer">
          <div className="section-gap">
            <div className="w-layout-blockcontainer container-main w-container">
              <div className="what-offer-wrapper">
                <div className="section-heading-block bottom-space-between mobile-vflex">
                  <div className="section-title-block max-width-210 mobile-fluid">
                    <h2 className="heading-style-2">What <span className="heading-style-2-ht">We Offer</span></h2>
                  </div>
                  <div className="section-summary-block max-width-500 tab-top-space">
                    <p className="paragraph-small">{s.whatOfferSectionSummary}</p>
                  </div>
                </div>
                <div className="what-offer-content-block">
                  <div className="what-offer-content-inner">
                    {offerPoints.map((p, i) => (
                      <div key={i} className="what-offer-point-block">
                        <div className="what-offer-point-icon-block"><img src={p.icon} loading="lazy" alt="what-offer-point-icon" className="what-offer-point-icon" /></div>
                        <div className={p.small ? "what-offer-point-text-block small" : "what-offer-point-text-block"}>
                          <div className="label-medium">{p.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_key-benefit">
          <div className="section-gap">
            <div className="w-layout-blockcontainer container-main w-container">
              <div className="key-benefit-wrapper">
                <div className="section-heading-block bottom-space-between bottom-space">
                  <div className="section-title-block max-width-210">
                    <h2 className="heading-style-2 text-color-white">Key <span className="heading-style-2-wht">Benefits</span></h2>
                  </div>
                  <div className="section-summary-block max-width-400">
                    <p className="paragraph-small text-color-white _80">{s.keyBenefitSummary}</p>
                  </div>
                </div>
                <div className="key-benefit-content-block">
                  {benefits.map((text, i) => (
                    <div key={i} className="key-benefit-point-block">
                      <div className="key-benefit-icon-block"><img src="/images/Key-Benefit-Icon.svg" loading="lazy" alt="key-benefit-icon" className="key-benefit-icon" /></div>
                      <div className="key-benefit-text-block">
                        <div className="paragraph-small text-color-white">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section_process" className="section_process">
          <div className="section-gap">
            <div className="w-layout-blockcontainer container-main w-container">
              <div className="process-wrapper">
                <div className="section-heading-block bottom-space-between">
                  <div className="section-title-block max-width-430">
                    <h2 className="heading-style-2">Our Roofing <span className="heading-style-2-ht">Process</span></h2>
                  </div>
                  <div className="section-summary-block max-width-300">
                    <p className="paragraph-small">A streamlined, transparent process designed for your peace of mind</p>
                  </div>
                </div>
                <div className="process-content-block is-desktop">
                  <div className="process-card-block image">
                    <div className="process-card-image-block"><img loading="lazy" src="/images/process-card-image.jpg" alt="process-card-image" className="process-card-image" /></div>
                  </div>
                  {[
                        ["/images/Icon.svg", "Step 1", "Initial Consultation"],
                        ["/images/Icon-1.svg", "Step 2", "Free Inspection"],
                        ["/images/Icon-2.svg", "Step 3", "Detailed Quote"],
                        ["/images/Icon-3.svg", "Step 4", "Professional Installation"],
                        ["/images/Icon-4.svg", "Step 5", "Quality Assurance"],
                      ].map(([icon, step, title]) => (
                    <div key={step} className="process-card-block is-1">
                      <div className="process-card-content-block is-1">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block"><img loading="lazy" src={icon} alt="process-card-icon" className="process-card-icon" /></div>
                          <div className="label-medium">{step}</div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">{title}</div>
                          <p className="paragraph-small">Contact us for a free consultation. We discuss your needs, timeline, and budget.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <CtaTwoSection />
      </main>
    </>
  );
}
