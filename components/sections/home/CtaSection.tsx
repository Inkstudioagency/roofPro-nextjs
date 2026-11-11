// CtaSection: converted 1:1 from the Webflow export (Astro: src/_html/index.body.html).
// Classes, data-w-id / data-wf-* attributes, inline IX2 initial styles and
// whitespace are preserved exactly so the Webflow CSS and runtime behave as before.
export default function CtaSection() {
  return (
    <section data-wf--section-cta--variant="varient-1" className="section_cta">{" "}
      <div className="section-gap">{" "}
        <div className="w-layout-blockcontainer container-main w-container">{" "}
          <div className="cta-wrapper">{" "}
            <div className="get-in-touch-block">{" "}
              <div className="get-in-touch-heding-block">{" "}
                <h2 data-w-id="3f48da68-b942-c2ea-7828-868613b776a6" className="heading-style-2 text-color-white">Get in Touch</h2>{" "}
                <p data-w-id="3f48da68-b942-c2ea-7828-868613b776a8" className="paragraph-small text-color-white">Ready to start your roofing project? Contact us today for a free consultation and quote.</p>{" "}
              </div>{" "}
              <div data-w-id="3f48da68-b942-c2ea-7828-868613b776aa" className="get-in-touch-content-block">{" "}
                <div className="get-in-touch-single-block">{" "}
                  <div className="get-in-touch-icon-block"><img loading="lazy" src="/images/Call-Icon.svg" alt="get-in-touch-icon" className="get-in-touch-icon" /></div>{" "}
                  <div className="get-in-touch-text-block">{" "}
                    <div className="label-medium text-color-white">Phone</div>{" "}
                    <a href="#" className="get-in-touch-link hover">+1 (555) 123-4567</a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="get-in-touch-single-block">{" "}
                  <div className="get-in-touch-icon-block"><img loading="lazy" src="/images/Mail-Icon.svg" alt="get-in-touch-icon" className="get-in-touch-icon" /></div>{" "}
                  <div className="get-in-touch-text-block">{" "}
                    <div className="label-medium text-color-white">Email</div>{" "}
                    <a href="mailto:info@example.com" className="get-in-touch-link hover">info@example.com</a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="get-in-touch-single-block">{" "}
                  <div className="get-in-touch-icon-block"><img loading="lazy" src="/images/watch-Icon.svg" alt="get-in-touch-icon" className="get-in-touch-icon" /></div>{" "}
                  <div className="get-in-touch-text-block">{" "}
                    <div className="label-medium text-color-white">Business Hours</div>{" "}
                    <div className="get-in-touch-link">Mon - Fri: 7:00 AM - 5:00 PM<br />Emergency available 24/7</div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="get-in-touch-single-block">{" "}
                  <div className="get-in-touch-icon-block"><img loading="lazy" src="/images/Location-Icon.svg" alt="get-in-touch-icon" className="get-in-touch-icon" /></div>{" "}
                  <div className="get-in-touch-text-block">{" "}
                    <div className="label-medium text-color-white">Location</div>{" "}
                    <div className="get-in-touch-link">123 Example Street, Example City</div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div data-w-id="3f48da68-b942-c2ea-7828-868613b776cb" className="contact-form-block w-form">{" "}
              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="contact-form" data-wf-page-id="6a5717b9f45479999f4fa9d7" data-wf-element-id="3f48da68-b942-c2ea-7828-868613b776cc">{" "}
                <div className="contact-form-content">{" "}
                  <div className="contact-form-title-block">{" "}
                    <h3 className="heading-style-3 text-weight-semi-bold">Contact Details</h3>{" "}
                  </div>{" "}
                  <div className="contact-form-row">{" "}
                    <div className="form-field-block"><label htmlFor="Name" className="label-regular">Your Full Name</label><input className="form-text-field w-input" maxLength={256} name="Name" data-name="Name" placeholder="Enter your name" type="text" id="Name" required /></div>{" "}
                    <div className="form-field-block"><label htmlFor="email" className="label-regular">Your Email Address</label><input className="form-text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter Email Address" type="email" id="email" required /></div>{" "}
                  </div>{" "}
                  <div className="contact-form-row">{" "}
                    <div className="form-field-block"><label htmlFor="Phone" className="label-regular">Your Phone Number</label><input className="form-text-field w-input" maxLength={256} name="Phone" data-name="Phone" placeholder="Enter Phone Number" type="tel" id="Phone" required /></div>{" "}
                    <div className="form-field-block"><label htmlFor="field-2" className="label-regular">Service Required</label><select id="field-2" name="field-2" data-name="Field 2" className="form-text-field select w-select">
                        <option value="">None</option>
                        <option value="First">Residential Roofing</option>
                        <option value="Second">Commercial Roofing</option>
                        <option value="Third">Industrial Roofing</option>
                        <option value="Another option">Retail Roofing</option>
                      </select></div>{" "}
                  </div>{" "}
                  <div className="form-field-block"><label htmlFor="field" className="label-regular">Message</label><textarea id="field" name="field" maxLength={5000} data-name="Field" placeholder="Write Messsage" className="form-text-field lg w-input"></textarea></div>{" "}
                  <div className="contact-form-button-block"><input type="submit" data-wait="Please wait..." className="primary-button form w-button" defaultValue="Submit" /></div>{" "}
                </div>{" "}
              </form>{" "}
              <div className="success-message w-form-done">{" "}
                <div>Thank you! Your submission has been received!</div>{" "}
              </div>{" "}
              <div className="error-message w-form-fail">{" "}
                <div>Oops! Something went wrong while submitting the form.</div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
