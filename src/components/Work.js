import React, { Component } from "react";
import Slider from "react-slick";

import projectData from "../assets/projectData";
import "../styles/app.css";

export default class Work extends Component {
  render() {
    let style = {
      projectContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      projectCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      },
      image: {
        width: "80vw",
        boxShadow: "1px 1px 10px 1px grey",
        transition: "all 0.2s ease"
      },
      projectName: {
        marginBottom: 0
      },
      description: {
        padding: "0 12vw",
        margin: 0,
        fontSize: "0.8em"
      },
      tools: {
        fontSize: "0.9em"
      },
      projectLinks: {
        fontSize: "0.8em",
        margin: "1vw 0vw 2vw 0vw"
      }
    };

    let projects = projectData.map((details, index) => {
      return (
        <div style={style.projectContainer}>
          <div
            className="projectCard"
            key={details.id}
            style={style.projectCard}
          >
            <img
              src={details.imageLink}
              alt=""
              className="imageCard"
              style={style.image}
            />

            <h3 className="projectName" style={style.projectName}>
              {details.name}
            </h3>

            <span style={style.projectLinks}>
              <a
                href={details.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              <span>//</span>{" "}
              <a
                href={details.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
            </span>

            <p className="projectDetails" style={style.description}>
              {details.description}
            </p>
            <p className="projectTools" style={style.projectLinks}>
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
