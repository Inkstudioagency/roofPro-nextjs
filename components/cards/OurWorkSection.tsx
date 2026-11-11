// The section_our-work portfolio block, shared by the Home page and the
// Our Work page so both render identically. Desktop layout: row 1 = 2 columns
// (.our-work-collection-list), row 2 = 3 columns (.our-work-collection-list.is-2);
// mobile = a Webflow slider. Markup matches the RoofPro export exactly.
// (Astro: components/OurWorkSection.astro — desktop shows works 1–5 only.)
import WorkCard from "./WorkCard";
import type { Work } from "@/types/work";

export default function OurWorkSection({ works = [] }: { works?: Work[] }) {
  const row1 = works.slice(0, 2); // 2 columns
  const row2 = works.slice(2, 5); // 3 columns
  return (
    <section className="section_our-work">
      <div className="section-gap">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="our-work-wrapper">
            <div className="section-heading-block bottom-space-between">
              <div className="section-title-block max-width-300">
                <h2 className="heading-style-2">Our Work <span className="heading-style-2-ht">Showcase</span></h2>
              </div>
              <div className="section-summary-block max-width-400">
                <p className="paragraph-small">Browse our portfolio of completed roofing projects across Brisbane</p>
              </div>
            </div>
            <div className="our-work-content-block is-desktop">
              {row1.length > 0 && (
                <div className="our-work-collection-block w-dyn-list">
                  <div role="list" className="our-work-collection-list w-dyn-items">
                    {row1.map((w) => (
                      <div key={w.slug} role="listitem" className="our-work-collection-item w-dyn-item">
                        <WorkCard work={w} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {row2.length > 0 && (
                <div className="our-work-collection-block top-gap w-dyn-list">
                  <div role="list" className="our-work-collection-list is-2 w-dyn-items">
                    {row2.map((w) => (
                      <div key={w.slug} role="listitem" className="our-work-collection-item w-dyn-item">
                        <WorkCard work={w} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="our-work-content-block is-mobile">
              <div data-delay="4000" data-animation="slide" className="our-work-slider-block w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                <div className="our-work-slider-mask w-slider-mask">
                  {works.map((w) => (
                    <div key={w.slug} className="our-work-slide-block w-slide">
                      <div className="our-work-collection-block w-dyn-list">
                        <div role="list" className="our-work-collection-list w-dyn-items">
                          <div role="listitem" className="our-work-collection-item w-dyn-item">
                            <WorkCard work={w} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="our-work-slider-arrow left w-slider-arrow-left">
                  <div className="w-icon-slider-left"></div>
                </div>
                <div className="our-work-slider-arrow right w-slider-arrow-right">
                  <div className="w-icon-slider-right"></div>
                </div>
                <div className="display-none w-slider-nav w-round w-num"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
