import React from "react";
import Login from "./Login"

class NavMenu extends React.Component {
  render() {
    return (
      <nav
        id="_nav_menu-15-4"
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
          <ul id="menu-home" className="oxy-nav-menu-list">
            <li
              id="menu-item-163"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-163"
            >
              <a href="/about/" data-ps2id-api="true">
                About
              </a>
            </li>
            <li
              id="menu-item-164"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-164"
            >
              <a href="/think-tank/" data-ps2id-api="true">
                Think Tank
              </a>
            </li>
            <li
              id="menu-item-165"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-165"
            >
              <a href="/community/" data-ps2id-api="true">
                Community
              </a>
            </li>
            <li
              id="menu-item-166"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"
            >
              <a href="/toolbox/" data-ps2id-api="true">
                Toolbox
              </a>
            </li>
            <Login />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavMenu;
