import React, { Component } from "react";
import Header from "./Header";
import "../styles/app.css";

// import sailImage from "../images/SpaceSail.svg";

window.scrollTo(0, 0);

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
