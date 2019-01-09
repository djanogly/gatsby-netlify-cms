import React from "react";

class FeedbackSection1 extends React.Component {
  render() {
    return (
      <section id="section-2-205" className="ct-section">
        <div className="ct-section-inner-wrap">
          <div id="new_columns-3-205" className="ct-new-columns">
            <div id="div_block-4-205" className="ct-div-block">
              <h1 id="headline-5-205" className="ct-headline">
                We value your feedback
              </h1>
              <div id="div_block-6-205" className="ct-div-block">
                <div id="text_block-7-205" className="ct-text-block">
                  Thank you for helping us improve!
                  <br />
                </div>
              </div>
            </div>
            <div id="div_block-9-205" className="ct-div-block">
              <div id="code_block-10-205" className="ct-code-block">
                <div className="container">
                  <form
                    id="contact"
                    action="https://formspree.io/info@nutritank.com"
                    method="post"
                  >
                    <h3>Submit Feedback</h3>
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
                      <textarea
                        placeholder="Feedback message"
                        tabIndex={3}
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

export default FeedbackSection1;
