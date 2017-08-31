import React, { Component } from "react";

import projectData from "../assets/projectData";
import "../styles/app.css";

export default class Work extends Component {
  render() {
    let projects = projectData.map((details, index) => {
      return (
        <div className="projectContainer">
          <div className="projectCard" key={details.id}>
            <img src={details.imageLink} alt="" className="imageCard" />

            <p className="projectName">
              {details.name}
            </p>

            <p className="projectDetails">
              {details.description}
            </p>

            <p className="projectTools">
              Built with: {details.tools}
            </p>
          </div>
        </div>
      );
    });
    return (
      <div>
        {projects}
      </div>
    );
  }
}
