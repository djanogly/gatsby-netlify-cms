import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";

class Header extends React.Component {
  render() {
    return (
      <header
        id="_header-79-4"
        className="oxy-header-wrapper oxy-sticky-header  oxy-header"
      >
        <div id="widget-163-11" className="ct-widget">
          <a id="page-top" data-ps2id-target="#page-top" />
        </div>
        <div id="_header_row-80-4" className="oxy-header-row">
          <div className="oxy-header-container">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
