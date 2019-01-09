import React from "react";

class ProspectivepartnersSection1 extends React.Component {
  render() {
    return (
      <section id="section-23-202" className="ct-section">
        <div className="ct-section-inner-wrap">
          <div id="new_columns-24-202" className="ct-new-columns">
            <div id="div_block-25-202" className="ct-div-block">
              <h1 id="headline-5-202" className="ct-headline">
                Prospective Partners
              </h1>
              <div id="div_block-10-202" className="ct-div-block">
                <div id="text_block-8-202" className="ct-text-block">
                  If your organisation delivers educational resources relating
                  to food, nutrition and lifestyle medicine and would like to
                  partner with us, please get in contact.
                  <br />
                  <br />
                  What we are looking for:
                  <br />
                </div>
                <div id="_rich_text-13-202" className="oxy-rich-text">
                  <ul>
                    <li>
                      <p>Courses with accreditation</p>
                    </li>
                    <li>
                      <p>Courses with robust quality assurance</p>
                    </li>
                    <li>
                      <p>
                        Courses for students, medical students or healthcare
                        professionals
                      </p>
                    </li>
                    <li>
                      <p>
                        Courses for individuals with a special interest in this
                        field but do not hold a healthcare qualification
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="div_block-26-202" className="ct-div-block">
              <div id="code_block-3-202" className="ct-code-block">
                <div className="container">
                  <form
                    id="contact"
                    action="https://formspree.io/info@nutritank.com"
                    method="post"
                  >
                    <h3 className="text-left">
                      Nutritank Perspective Partners
                    </h3>
                    <h4>
                      If you would like to partner with us, please get in
                      contact.
                    </h4>
                    <fieldset>
                      <input
                        placeholder="Your name"
                        type="text"
                        tabIndex={1}
                        required
                        autofocus
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        placeholder="Your Email Address"
                        type="email"
                        tabIndex={2}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        placeholder="Organisation"
                        type="text"
                        tabIndex={3}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        placeholder="Link to Course (optional)"
                        type="url"
                        tabIndex={4}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        placeholder="Link to Web Site / Social Media"
                        type="url"
                        tabIndex={5}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <textarea
                        placeholder="Type your message here...."
                        tabIndex={6}
                        required
                        defaultValue={""}
                      />
                    </fieldset>
                    <fieldset>
                      <button
                        name="submit"
                        type="submit"
                        id="contact-submit"
                        data-submit="...Sending"
                      >
                        Submit
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProspectivepartnersSection1;
