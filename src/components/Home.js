import React, { Component } from "react";

import Header from "./Header";
import sailImage from "../images/SpaceSail.svg";
import "../styles/app.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <div
          style={{ paddingTop: "10vw", position: "fixed" }}
          className="imgCenter"
        >
          <img src={sailImage} alt="" className="homepageGraphic" />
        </div> */}

        <Header />
      </div>
    );
  }
}
