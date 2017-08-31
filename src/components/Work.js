import React, { Component } from "react";

import projectData from "../assets/projectData";

export default class Work extends Component {
  render() {
    let projects = projectData.map((details, index) => {
      return (
        <div className="projectContainer">
          <div className="projectCard" key={index}>
            <div classname="imageCard">
              <img className="projectImage" src={details.image} alt="" />
            </div>

            <p className="projectName">
              {details.name}
            </p>

            <p className="projectDetails">
              {details.description}
            </p>

            <p className="projectTools">
              {details.tools}
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
