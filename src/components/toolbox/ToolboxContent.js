import React from "react";
import ToolboxSection1 from "./ToolboxSection1";
import ToolboxSection2 from "./ToolboxSection2";
import ToolboxSection3 from "./ToolboxSection3";
import ToolboxSection4 from "./ToolboxSection4";
import ToolboxSection5 from "./ToolboxSection5";

class ToolboxContent extends React.Component {
  render() {
    return (
      <div id="inner_content-3-13" className="ct-inner-content">
        <ToolboxSection1 />
        <ToolboxSection2 />
        <ToolboxSection3 />
        <ToolboxSection4 />
        <ToolboxSection5 />
      </div>
    );
  }
}

export default ToolboxContent;
