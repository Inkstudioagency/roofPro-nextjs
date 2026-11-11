// A single portfolio card (our-work-item-block), extracted from the RoofPro
// Webflow export (Astro: components/WorkCard.astro). Links to /our-works/[slug].
import Link from "next/link";
import type { Work } from "@/types/work";

export default function WorkCard({ work: w }: { work: Work }) {
  const href = `/our-works/${w.slug}`;
  return (
    <div className="our-work-item-block">
      <Link href={href} className="our-work-item-image-block w-inline-block"><img src={w.workCardThumbnail} loading="lazy" alt="our-work-item-thumbnail" className="our-work-item-thumbnail" /></Link>
      <div className="our-work-item-content-block">
        <div className="our-work-item-text-block">
          <div className="our-work-item-tag">{w.projectTag}</div>
          <Link aria-label="our-work-item-title-block" href={href} className="our-work-item-title-block w-inline-block">
            <h3 className="label-xlarge hover">{w.workCardTitle}</h3>
          </Link>
          <p>{w.workCardDescription}</p>
        </div>
        <div className="our-work-item-button-block">
          <Link href={href} className="link-button w-inline-block">
            <div className="button-text lg">Read More</div>
            <div className="link-button-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
