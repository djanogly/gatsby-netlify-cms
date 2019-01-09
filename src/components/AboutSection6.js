import React from "react";

class AboutSection6 extends React.Component {
  render() {
    return (
      <section id="section-118-149" className="ct-section">
        <div
          className="ct-section-inner-wrap"
          style={{
            overflowX: "hidden"
          }}
        >
          <div id="code_block-121-149" className="ct-code-block">
            {}
          </div>
          <div id="widget-322-149" className="ct-widget">
            <a id="work" data-ps2id-target="#work" />
          </div>
          <div
            className="container"
            style={{
              alignContent: "center",
              overflowX: "hidden"
            }}
          >
            <h1
              id="headline-193-149"
              className="ct-headline atomic-primary-heading"
            >
              Some of our Work
            </h1>
            <div
              className="col-md-offset-2 col-md-12"
              style={{
                alignSelf: "center",
                width: "100%"
              }}
            >
              <div
                className="carousel slide"
                data-ride="carousel"
                id="quote-carousel"
              >
                {}
                <ol className="carousel-indicators">
                  <li
                    data-target="#quote-carousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#quote-carousel" data-slide-to={1} />
                  <li data-target="#quote-carousel" data-slide-to={2} />
                </ol>
                {}
                <div className="carousel-inner">
                  {}
                  <div className="item active">
                    <blockquote
                      style={{
                        background: "#fff"
                      }}
                    >
                      <div className="row">
                        <div className="col-sm-9">
                          <p>
                            Through networking and campaigning in the public
                            eye, we have secured a place within the Association
                            for Nutrition’s (AFN) inter-professional working
                            group. The AFN have been tasked by the General
                            Medical Council (GMC) to ensure more nutrition
                            education is integrated within UK undergraduate
                            medical school curricula. This guarantees that all
                            future generations of medical students and doctors
                            will receive nutrition education
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {}
                  <div className="item">
                    <blockquote
                      style={{
                        background: "#fff"
                      }}
                    >
                      <div className="row">
                        <div className="col-sm-9">
                          <p>
                            At Bristol medical school, even before the
                            introduction of Nutritank, the co-founders Iain and
                            Ally had been involved in the MB21 curriculum
                            review. This is an ongoing process which the
                            co-founders are heavily involved in and which has
                            resulted in greater nutrition education being
                            integrated into the curriculum, a fantastic step
                            reflecting Bristol’s proactive ethos.
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {}
                  <div className="item">
                    <blockquote
                      style={{
                        background: "#fff"
                      }}
                    >
                      <div className="row">
                        <div className="col-sm-9">
                          <p>
                            Nutritanksoc@Bristol has, for the past 2 years, been
                            integrated Bristol medical schools Preventative
                            Medicine Teaching Day programme for 3rd year medical
                            students. The day has been running for a few years
                            and was set up by two GPs who are very interested in
                            interested in nutrition and lifestyle medicine, Dr
                            John Sykes and Professor Trevor Thompson, both of
                            whom are big supporters of Nutritank. The day
                            included teaching around the principles of
                            nutrition, and how to apply this to patients through
                            motivational interviewing. Bristol were fortunate
                            enough to be joined by Dr Rupy Aujla, curator of The
                            Doctor’s Kitchen, who discussed nutrition and
                            culinary medicine.{" "}
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {}
                </div>
                {}
                <a
                  data-slide="prev"
                  href="#quote-carousel"
                  className="left carousel-control"
                >
                  <i
                    className="fa fa-chevron-left"
                    style={{
                      background: "#fff"
                    }}
                  />
                </a>
                <a
                  data-slide="next"
                  href="#quote-carousel"
                  className="right carousel-control"
                >
                  <i
                    className="fa fa-chevron-right"
                    style={{
                      background: "#fff"
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <link
            rel="stylesheet"
            id="oxygen-unslider-css"
            href="/wp-content/plugins/oxygen/component-framework/vendor/unslider/unslider.css"
            type="text/css"
            media="all"
          />
        </div>
      </section>
    );
  }
}

export default AboutSection6;
