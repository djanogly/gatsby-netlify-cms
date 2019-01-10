import React from "react";
import LoginButton from "../LoginButton";
import Typed from './typed'

class HomeSection1 extends React.Component {
  render() {
    return (
      <section id="section-2-14" className="ct-section">
        <div className="ct-section-inner-wrap">
          <div id="div_block-12-14" className="ct-div-block">
            <div id="text_block-102-14" className="ct-text-block">
              For  
            </div>
            <div id="div_block-106-14" className="ct-div-block">
              <div id="shortcode-101-14" className="ct-shortcode">
                <span
                  className="typed-me"
                  data-string0="Grassroots."
                  data-string1="Youth Empowerment."
                  data-string2="System Change."
                  data-type-speed={30}
                  data-start-delay={900}
                  data-backspeed={40}
                  data-back-delay={900}
                  data-loop={1}
                />
                <Typed />
              </div>
            </div>
          </div>
          <div id="div_block-6-14" className="ct-div-block">
            <div id="text_block-7-14" className="ct-text-block">
              A nutrition and lifestyle medicine community with the very best
              educational resources at your fingertips empowering medical
              students, healthcare professionals and patients alike 💡
            </div>
          </div>
          <LoginButton />
        </div>
      </section>
    );
  }
}

export default HomeSection1;
