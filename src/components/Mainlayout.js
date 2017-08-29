import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
import "../app.css";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <div className="imgContainer2">
          <div className="navBox">
            <div className="navBoundary">
              <div className="navElement">
                <p className="elementText">Skills</p>
              </div>
              <div className="navElement">
                <p className="elementText">Work</p>
              </div>
              <div className="navElement">
                <p className="elementText">Contact</p>
              </div>
              <div className="navElement">
                <p className="elementText">Filler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
