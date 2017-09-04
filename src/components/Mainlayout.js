import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.css";

import Header from "./Header";

export default class MainLayout extends Component {
  render() {
    const MediaQuery = require("react-responsive");
    const style = {
      linkStyle: {
        color: "black",
        backgroundColor: "black"
      }
    };

    return (
      <div>
        {/* <div className="imgContainer">
          <Header />
        </div> */}
        <div className="imgContainer">
          <div className="navBox">
            <MediaQuery maxDeviceWidth={666}>
              <div className="navBoundary">
                <NavLink
                  to="/home"
                  className="navElement"
                  activeStyle={{ backgroundColor: "black", color: "#e8e9ed" }}
                >
                  <span className="elementText">home</span>
                </NavLink>

                <NavLink
                  to="/work"
                  className="navElement"
                  activeStyle={{ backgroundColor: "black", color: "#e8e9ed" }}
                >
                  <span className="elementText">work</span>
                </NavLink>

                <NavLink
                  to="/skills"
                  className="navElement"
                  activeStyle={{ backgroundColor: "black", color: "#e8e9ed" }}
                >
                  <span className="elementText">skills</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className="navElement"
                  activeStyle={{ backgroundColor: "black", color: "#e8e9ed" }}
                >
                  <span className="elementText">contact</span>
                </NavLink>
              </div>
            </MediaQuery>

            <MediaQuery minDeviceWidth={667}>
              <div className="navBoundary">
                <NavLink
                  to="/home"
                  className="navElement"
                  activeStyle={{ color: "gray" }}
                >
                  <span className="elementText">home</span>
                </NavLink>

                <NavLink
                  to="/work"
                  className="navElement"
                  activeStyle={{ color: "gray" }}
                >
                  <span className="elementText">work</span>
                </NavLink>

                <NavLink
                  to="/skills"
                  className="navElement"
                  activeStyle={{ color: "gray" }}
                >
                  <span className="elementText">skills</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className="navElement"
                  activeStyle={{ color: "gray" }}
                >
                  <span className="elementText">contact</span>
                </NavLink>
              </div>
            </MediaQuery>
          </div>
          <div className="contentArea">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
