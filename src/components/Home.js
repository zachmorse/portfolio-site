import React, { Component } from "react";

import sailImage from "../images/SpaceSail.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="informationContainer">
          Click links above to navigate.
        </div>
        <div style={{ paddingTop: "10vw" }}>
          <img src={sailImage} />
        </div>
      </div>
    );
  }
}
