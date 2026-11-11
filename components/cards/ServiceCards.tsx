// Renders the position-styled service cards (the children of
// .service-content-block) from CMS data. Used on both the home page and the
// /services listing. Markup matches the RoofPro Webflow export exactly; the
// first card (is-1) carries the image overlays. (Astro: components/ServiceCards.astro)
import Link from "next/link";
import type { Service } from "@/types/service";

// TITLE_WID are the original Webflow interaction ids (data-w-id) that bind the
// click animation on each service-item-title-block; they must be preserved for
// the interactions runtime (/js/site.js) to wire the click interaction.
// Only 4 exist in the export: a 5th+ service renders without one (as in Astro).
const TITLE_WID = [
  "40031a16-0ef6-ea08-1a16-c5b8c6ec1c2b",
  "40031a16-0ef6-ea08-1a16-c5b8c6ec1c43",
  "40031a16-0ef6-ea08-1a16-c5b8c6ec1c5b",
  "40031a16-0ef6-ea08-1a16-c5b8c6ec1c73",
];

export default function ServiceCards({ services = [] }: { services?: Service[] }) {
  return services.map((s, idx) => {
    const n = idx + 1;
    const overlay = n === 1;
    const href = `/services/${s.slug}`;
    return (
      <div key={s.slug} className="service-collection-block w-dyn-list">
        <div role="list" className="service-collection-list w-dyn-items">
          <div role="listitem" className="service-collection-item w-dyn-item">
            <div className="service-item-block">
              <div data-w-id={TITLE_WID[idx]} className={`service-item-title-block is-${n}`}>
                <div className="service-title-text-block">
                  <div className="service-item-icon-block"><img src={s.serviceItemIcon} loading="lazy" alt="" className={`service-item-icon is-${n}`} /><img src={s.serviceHoverIcon} loading="lazy" alt="" className={`service-hover-icon is-${n}`} /></div>
                  <h3 className={`label-medium is-${n}`}>{s.serviceTitle}</h3>
                </div>
                <Link href={href} className="service-title-icon-block w-inline-block">
                  <div className={`service-title-icon is-${n} w-embed`}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_152_190)"><path d="M22.6663 9.33398L9.33301 22.6673" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.667 9.33398H22.667V21.334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_152_190"><rect width="32" height="32" fill="currentColor"></rect></clipPath></defs></svg></div>
                </Link>
              </div>
              <div className={`service-item-content-block is-${n}`}>
                <div className="service-item-image-block">
                  <div className="service-item-single-image-block is-1"><img loading="lazy" src={s.serviceThumbnail1} alt="service-item-single-image" className="service-item-single-image" />{overlay && <div className="image-overlay"></div>}</div>
                  <div className="service-item-single-image-block is-2"><img loading="lazy" src={s.serviceThumbnail2} alt="service-item-single-image" className="service-item-single-image" />{overlay && <div className="image-overlay"></div>}</div>
                </div>
                <div className="service-item-text-block">
                  <h3 className="heading-style-5">{s.serviceTitle}</h3>
                  <p className="paragraph-small">{s.serviceDescription}</p>
                  <Link href={href} className="service-link-button">View Service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
