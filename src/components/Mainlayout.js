import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.css";

import Header from "./Header";

export default class MainLayout extends Component {
  render() {
    return (
      <div className="imgContainer">
        <Header />
        <div className="imgContainer">
          <div className="navBox">
            <div className="navBoundary">
              <NavLink to="/" className="navElement" />
              <NavLink
                to="/work"
                className="navElement"
                activeStyle={{
                  backgroundColor: "black",
                  color: "#e8e9ed"
                }}
              >
                <span className="elementText">W</span>
              </NavLink>

              <NavLink
                to="/skills"
                className="navElement"
                activeStyle={{ backgroundColor: "black", color: "#e8e9ed" }}
              >
                <span className="elementText">S</span>
              </NavLink>

              <NavLink
                to="/contact"
                className="navElement"
                activeStyle={{ backgroundColor: "black", color: "#e8e9ed" }}
              >
                <span className="elementText">C</span>
              </NavLink>
            </div>
          </div>
          <div className="contentArea">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
