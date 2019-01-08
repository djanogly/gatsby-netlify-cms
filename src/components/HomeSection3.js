import React from "react";

class HomeSection3 extends React.Component {
  render() {
    return (
      <section id="section-230-14" className="ct-section">
        <div className="ct-section-inner-wrap">
          <div id="new_columns-239-14" className="ct-new-columns">
            <div id="div_block-240-14" className="ct-div-block">
              <div id="div_block-54-14" className="ct-div-block">
                <h1 id="headline-36-14" className="ct-headline h2">
                  20+
                </h1>
              </div>
              <div id="div_block-34-14" className="ct-div-block">
                <h1 id="headline-40-14" className="ct-headline h1">
                  Join a community created for you! <br />
                </h1>
              </div>
              <div id="text_block-41-14" className="ct-text-block">
                Nutritank has achieved a growing momentum across the UK, from
                the development of Nutritank societies (
                <a href="/community/">Nutritanksoc.</a>) at over 20 medical
                schools. We also have online communities for
                <a href="/community/">medical doctors</a> and all other
                <a href="/community/">healthcare professionals</a> with free
                networking events in many cities.
                <br />
              </div>
            </div>
            <div id="div_block-245-14" className="ct-div-block">
              <img
                id="image-35-14"
                alt
                src={require('../img/map.png')}
                className="ct-image"
              />
              <div id="div_block-259-14" className="ct-div-block">
                <a
                  id="link_button-258-14"
                  className="ct-link-button Button1"
                  href="/community/"
                  target="_self"
                >
                  Communities
                </a>
                <a
                  id="link_button-45-14"
                  className="ct-link-button Button1"
                  href="https://www.eventbrite.co.uk/o/nutritank-18336640232"
                  target="_blank"
                >
                  Attend An Event
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection3;
