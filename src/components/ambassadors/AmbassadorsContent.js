import React from "react";
import AmbassadorsSection1 from "./AmbassadorsSection1";
import AmbassadorsSection2 from "./AmbassadorsSection2";
import AmbassadorsSection3 from "./AmbassadorsSection3";

class AmbassadorsContent extends React.Component {
  render() {
    return (
      <div id="inner_content-3-13" className="ct-inner-content">
        <AmbassadorsSection1 />
        <AmbassadorsSection2 />
        <AmbassadorsSection3 />
      </div>
    );
  }
}

export default AmbassadorsContent;
