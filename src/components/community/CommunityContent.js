import React from "react";
import CommunitySection1 from "./CommunitySection1";
import CommunitySection2 from "./CommunitySection2";
import CommunitySection3 from "./CommunitySection3";

class CommunityContent extends React.Component {
  render() {
    return (
      <div id="inner_content-3-13" className="ct-inner-content">
        <CommunitySection1 />
        <CommunitySection2 />
        <CommunitySection3 />
      </div>
    );
  }
}

export default CommunityContent;
