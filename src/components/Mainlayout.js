import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.css";

import Header from "./Header";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="imgContainer2">
          <div className="navBox">
            <div className="navBoundary">
              <NavLink to="/skills" className="navElement">
                <span className="elementText">Skills</span>
              </NavLink>

              <NavLink to="/work" className="navElement">
                <span className="elementText">Work</span>
              </NavLink>

              <NavLink to="/contact" className="navElement">
                <span className="elementText">Contact</span>
              </NavLink>

              <NavLink to="/" className="navElement" />
            </div>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
