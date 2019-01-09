import React from "react";
import ThinktankSection1 from "./ThinktankSection1";
import ThinktankSection2 from "./ThinktankSection2";
import ThinktankSection3 from "./ThinktankSection3";
import ThinktankSection4 from "./ThinktankSection4";
import ThinktankSection5 from "./ThinktankSection5";
import ThinktankSection6 from "./ThinktankSection6";
import ThinktankSection7 from "./ThinktankSection7";
import ThinktankSection8 from "./ThinktankSection8";

class ThinktankContent extends React.Component {
  render() {
    return (
      <div id="inner_content-3-13" className="ct-inner-content">
        <ThinktankSection1 />
        <ThinktankSection2 />
        <ThinktankSection3 />
        <ThinktankSection4 />
        <ThinktankSection5 />
        <ThinktankSection6 />
        <ThinktankSection7 />
        <ThinktankSection8 />
      </div>
    );
  }
}

export default ThinktankContent;
