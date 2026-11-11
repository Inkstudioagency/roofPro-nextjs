// 404 page content: converted 1:1 from the Webflow export (Astro: src/_html/404.body.html).
import Link from "next/link";

export default function NotFoundContent() {
  return (
    <div className="utility-page-content top-space side-none">{" "}
      <div className="section-gap-sm">{" "}
        <div className="w-layout-blockcontainer container-main w-container">{" "}
          <div className="not-found-content-block">{" "}
            <div className="not-found-text-block">{" "}
              <h1 className="not-found-text">4<span className="not-found-ht-text">0</span>4</h1>{" "}
              <h2 className="heading-style-2">Page Not Found</h2>{" "}
              <div className="paragraph-small">The page you are looking for doesn&#x27;t exist or has been moved</div>{" "}
            </div>{" "}
            <div className="not-found-button-block">{" "}
              <Link data-wf--primary-button--variant="variant-1" data-w-id="dabc90cc-bf19-6f97-b595-4f6c63032016" href="/" className="primary-button w-inline-block">{" "}
                <div className="button-text-block">{" "}
                  <div className="button-text is-1">Go To Home</div>{" "}
                  <div className="button-text is-2">Go To Home</div>{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
