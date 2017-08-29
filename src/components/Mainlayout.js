import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
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
              <div className="navElement">
                <NavLink to="/skills" className="elementText">
                  Skills
                </NavLink>
              </div>

              <NavLink to="/work">
                <div className="navElement">
                  <Link to="/work" className="elementText">
                    Work
                  </Link>
                </div>
              </NavLink>

              <div className="navElement">
                <NavLink to="/contact" className="elementText">
                  Contact
                </NavLink>
              </div>

              <div className="navElement">
                <p className="elementText">Filler</p>
              </div>
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
