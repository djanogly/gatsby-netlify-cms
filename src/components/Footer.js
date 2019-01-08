import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="section-90-4" className="ct-section">
        <div className="ct-section-inner-wrap">
          <div id="div_block-161-11" className="ct-div-block">
            <div id="new_columns-135-11" className="ct-new-columns">
              <div id="div_block-136-11" className="ct-div-block">
                <a
                  id="link-140-11"
                  className="ct-link"
                  href="#page-top"
                  target="_self"
                >
                  <img
                    id="image-139-11"
                    alt
                    src={require('../img/Logo-Nutritank.png')}
                    className="ct-image"
                  />
                </a>
                <div id="_social_icons-142-11" className="oxy-social-icons">
                  <a
                    href="https://www.facebook.com/nutritankuk/"
                    target="_blank"
                    className="oxy-social-icons-facebook"
                  >
                    <svg>
                      <use xlinkHref="#oxy-social-icons-icon-facebook-blank" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/nutritank_official/"
                    target="_blank"
                    className="oxy-social-icons-instagram"
                  >
                    <svg>
                      <use xlinkHref="#oxy-social-icons-icon-instagram-blank" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/nutritank_info?lang=en"
                    target="_blank"
                    className="oxy-social-icons-twitter"
                  >
                    <svg>
                      <use xlinkHref="#oxy-social-icons-icon-twitter-blank" />
                    </svg>
                  </a>
                </div>
              </div>
              <div id="div_block-138-11" className="ct-div-block">
                <nav
                  id="_nav_menu-157-11"
                  className="oxy-nav-menu oxy-nav-menu-dropdown-arrow"
                >
                  <div className="oxy-menu-toggle">
                    <div className="oxy-nav-menu-hamburger-wrap">
                      <div className="oxy-nav-menu-hamburger">
                        <div className="oxy-nav-menu-hamburger-line" />
                        <div className="oxy-nav-menu-hamburger-line" />
                        <div className="oxy-nav-menu-hamburger-line" />
                      </div>
                    </div>
                  </div>
                  <div className="menu-home-container">
                    <ul id="menu-home-1" className="oxy-nav-menu-list">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-163">
                        <a href="/about/" data-ps2id-api="true">
                          About
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-164">
                        <a href="/think-tank/" data-ps2id-api="true">
                          Think Tank
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-165">
                        <a href="/community/" data-ps2id-api="true">
                          Community
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-166">
                        <a href="/toolbox/" data-ps2id-api="true">
                          Toolbox
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div id="div_block-137-11" className="ct-div-block">
                <a
                  id="link_text-168-11"
                  className="ct-link-text"
                  href="/prospective-partners/"
                  target="_self"
                >
                  Prospective Partners
                </a>
                <div id="div_block-149-11" className="ct-div-block">
                  <div id="text_block-146-11" className="ct-text-block">
                    Nutritank 2018. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
