"use client";

// Shared site header (RoofPro navbar), converted 1:1 from the Webflow export
// (Astro: src/_html/header.html + components/Header.astro).
// Active-nav state reproduces Header.astro: every aria-current / w--current from
// the export is removed, then re-applied to the desktop nav-link and the mobile
// dropdown link whose href matches the current section. The Webflow "links"
// module additionally toggles w--current at runtime, exactly as on the Astro site.
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  /** Valid service / work slugs, so an unknown /services/<slug> (404) highlights nothing, as in Astro. */
  serviceSlugs: string[];
  workSlugs: string[];
};

// Astro `current` prop -> href (Header.astro routeFor).
function currentHref(pathname: string, serviceSlugs: string[], workSlugs: string[]): string | null {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/" || p === "/about" || p === "/services" || p === "/our-work" || p === "/contact") return p;
  const svc = p.match(/^\/services\/([^/]+)$/);
  if (svc && serviceSlugs.includes(decodeURIComponent(svc[1]))) return "/services";
  const work = p.match(/^\/our-works\/([^/]+)$/);
  if (work && workSlugs.includes(decodeURIComponent(work[1]))) return "/our-work";
  return null; // 404 page: current=""
}

export default function Header({ serviceSlugs, workSlugs }: Props) {
  const current = currentHref(usePathname(), serviceSlugs, workSlugs);
  // `active` is the exact class string Header.astro produced: it inserts
  // " w--current" after `nav-link w-nav-link` and right after `nav-dropdown-link`.
  const navAttrs = (href: string, base: string, active: string) =>
    href === current ? ({ "aria-current": "page", className: active } as const) : { className: base };

  return (
    <header data-w-id="7229a661-a870-f861-0c71-bcce44af235c" className="section_header">{" "}
          <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">{" "}
            <div className="nav-inner-block">{" "}
              <div className="nav-top-block">{" "}
                <div className="nav-top-content-block is-1">{" "}
                  <div className="nav-top-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_171_3781)">
                        <path d="M7.5 9.16667L10 11.6667L16.6667 5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16.6673 10.0007V15.0006C16.6673 15.4427 16.4917 15.8666 16.1792 16.1792C15.8666 16.4917 15.4427 16.6673 15.0006 16.6673H5.00065C4.55862 16.6673 4.1347 16.4917 3.82214 16.1792C3.50958 15.8666 3.33398 15.4427 3.33398 15.0006V5.00065C3.33398 4.55862 3.50958 4.1347 3.82214 3.82214C4.1347 3.50958 4.55862 3.33398 5.00065 3.33398H12.5007" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_171_3781">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>{" "}
                  <div className="paragraph-xsmall text-color-white">Most Trusted Metal Roofing</div>{" "}
                  <div className="nav-top-icon w-embed"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0L7.18794 4.81206L12 6L7.18794 7.18794L6 12L4.81206 7.18794L0 6L4.81206 4.81206L6 0Z" fill="white"></path>
                    </svg></div>{" "}
                  <div className="paragraph-xsmall text-color-white">Most Trusted Metal Roofing</div>{" "}
                  <div className="nav-top-icon w-embed"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0L7.18794 4.81206L12 6L7.18794 7.18794L6 12L4.81206 7.18794L0 6L4.81206 4.81206L6 0Z" fill="white"></path>
                    </svg></div>{" "}
                  <div className="paragraph-xsmall text-color-white">Most Trusted Metal Roofing</div>{" "}
                </div>{" "}
                <div className="nav-top-content-block is-2">{" "}
                  <div data-delay="4000" data-animation="slide" className="nav-top-slider-block w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">{" "}
                    <div className="nav-top-slider-mask w-slider-mask">{" "}
                      <div className="nav-top-slide w-slide">{" "}
                        <div className="nav-slide-content">{" "}
                          <div className="nav-top-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_171_3781)">
                                <path d="M7.5 9.16667L10 11.6667L16.6667 5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M16.6673 10.0007V15.0006C16.6673 15.4427 16.4917 15.8666 16.1792 16.1792C15.8666 16.4917 15.4427 16.6673 15.0006 16.6673H5.00065C4.55862 16.6673 4.1347 16.4917 3.82214 16.1792C3.50958 15.8666 3.33398 15.4427 3.33398 15.0006V5.00065C3.33398 4.55862 3.50958 4.1347 3.82214 3.82214C4.1347 3.50958 4.55862 3.33398 5.00065 3.33398H12.5007" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_171_3781">
                                  <rect width="20" height="20" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg></div>{" "}
                          <div className="paragraph-xsmall text-color-white">Most Trusted Metal Roofing</div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="nav-top-slide w-slide">{" "}
                        <div className="nav-slide-content">{" "}
                          <div className="nav-top-icon w-embed"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 0L7.18794 4.81206L12 6L7.18794 7.18794L6 12L4.81206 7.18794L0 6L4.81206 4.81206L6 0Z" fill="white"></path>
                            </svg></div>{" "}
                          <div className="paragraph-xsmall text-color-white">Most Trusted Metal Roofing</div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="nav-top-slide w-slide">{" "}
                        <div className="nav-slide-content">{" "}
                          <div className="nav-top-icon w-embed"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 0L7.18794 4.81206L12 6L7.18794 7.18794L6 12L4.81206 7.18794L0 6L4.81206 4.81206L6 0Z" fill="white"></path>
                            </svg></div>{" "}
                          <div className="paragraph-xsmall text-color-white">Most Trusted Metal Roofing</div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="nav-top-slider-arrow w-slider-arrow-left">{" "}
                      <div className="nav-top-slider-arrow-icon w-icon-slider-left"></div>{" "}
                    </div>{" "}
                    <div className="nav-top-slider-arrow w-slider-arrow-right">{" "}
                      <div className="nav-top-slider-arrow-icon w-icon-slider-right"></div>{" "}
                    </div>{" "}
                    <div className="display-none w-slider-nav w-round w-num"></div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="container-main w-container">{" "}
                <div className="nav-content-block">{" "}
                  <Link href="/" className="brand-logo-block w-nav-brand"><img loading="lazy" src="/images/Nav-logo.svg" alt="" className="brand-logo" /></Link>{" "}
                  <nav role="navigation" className="nav-menu-content w-nav-menu">{" "}
                    <div className="nav-link-block">{" "}
                      <Link href="/" {...navAttrs("/", "nav-link w-nav-link", "nav-link w-nav-link w--current")}>Home</Link>{" "}
                      <Link href="/about" {...navAttrs("/about", "nav-link w-nav-link", "nav-link w-nav-link w--current")}>About</Link>{" "}
                      <Link href="/services" {...navAttrs("/services", "nav-link w-nav-link", "nav-link w-nav-link w--current")}>Services</Link>{" "}
                      <Link href="/our-work" {...navAttrs("/our-work", "nav-link w-nav-link", "nav-link w-nav-link w--current")}>Our work</Link>{" "}
                      <div data-hover="false" data-delay="600" data-w-id="d6bb2887-8314-a94c-dc61-0ff741b1cf16" className="nav-link w-dropdown">{" "}
                        <div className="nav-dropdown-toggle w-dropdown-toggle">{" "}
                          <div className="nav-dropdown-toggle-content">{" "}
                            <div>Pages</div>{" "}
                            <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <nav className="nav-dropdown-content w-dropdown-list">{" "}
                          <div className="nav-dropdown-inner">{" "}
                            <div className="nav-dropdown-link-block">{" "}
                              <div className="nav-dropdown-column">{" "}
                                <div className="nav-dropdown-title">Main Pages</div>{" "}
                                <Link href="/" {...navAttrs("/", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>Home</Link>{" "}
                                <Link href="/about" {...navAttrs("/about", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>About</Link>{" "}
                                <Link href="/our-work" {...navAttrs("/our-work", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>Our Works</Link>{" "}
                                <Link href="/services" {...navAttrs("/services", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>Services</Link>{" "}
                              </div>{" "}
                              <div className="nav-dropdown-column">{" "}
                                <div className="nav-dropdown-title">Others Pages</div>{" "}
                                <Link href="/contact" {...navAttrs("/contact", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>Contact</Link>{" "}
                                <Link href="/404" {...navAttrs("/404", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>NOt Found</Link>{" "}
                                <Link href="/services/residential-roofing" {...navAttrs("/services/residential-roofing", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>Service Details</Link>{" "}
                                <Link href="/our-works/families-and-individuals-who-want-secure-long-lasting-roofs" {...navAttrs("/our-works/families-and-individuals-who-want-secure-long-lasting-roofs", "nav-dropdown-link w-dropdown-link", "nav-dropdown-link w--current w-dropdown-link")}>Work Details</Link>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </nav>{" "}
                      </div>{" "}
                      <Link href="/contact" {...navAttrs("/contact", "nav-link w-nav-link", "nav-link w-nav-link w--current")}>Contact</Link>{" "}
                      <div className="general-button-block is-1">{" "}
                        <a data-wf--primary-button--variant="variant-2" data-w-id="dabc90cc-bf19-6f97-b595-4f6c63032016" href="#" className="primary-button w-variant-31a4406c-d7df-fddb-f13e-d0c119ad0940 w-inline-block">{" "}
                          <div className="button-text-block">{" "}
                            <div className="button-text is-1">Get a Quote</div>{" "}
                            <div className="button-text is-2">Get a Quote</div>{" "}
                          </div>{" "}
                        </a>{" "}
                      </div>{" "}
                    </div>{" "}
                  </nav>{" "}
                  <div className="nav-button-block">{" "}
                    <div className="general-button-block is-2">{" "}
                      <Link data-wf--primary-button--variant="variant-2" data-w-id="dabc90cc-bf19-6f97-b595-4f6c63032016" href="/contact" className="primary-button w-variant-31a4406c-d7df-fddb-f13e-d0c119ad0940 w-inline-block">{" "}
                        <div className="button-text-block">{" "}
                          <div className="button-text is-1">Get a Quote</div>{" "}
                          <div className="button-text is-2">Get a Quote</div>{" "}
                        </div>{" "}
                      </Link>{" "}
                    </div>{" "}
                    <div className="menu-button-block">{" "}
                      <div className="menu-button w-nav-button">{" "}
                        <div className="menu-button-icon w-icon-nav-menu"></div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </header>
  );
}
