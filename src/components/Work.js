import React, { Component } from "react";
import Slider from "react-slick";

import projectData from "../assets/projectData";
import "../styles/app.css";

export default class Work extends Component {
  render() {
    let sliderSettings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      swipe: true,
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 666,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            dots: true,
            arrows: true
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            dots: true,
            arrows: true
          }
        }
      ]
    };

    let projects = projectData.map((details, index) => {
      return (
        <div className="projectContainer">
          <div className="projectCard" key={details.id}>
            <img src={details.imageLink} alt="" className="imageCard" />

            <h3 className="projectName">{details.name}</h3>

            <span className="projectLinks">
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

            <p className="projectDescription">{details.description}</p>
            <p className="projectLinks">Built with: {details.tools}</p>
          </div>
        </div>
      );
    });
    return (
      <div style={{ textAlign: "center" }}>
        <Slider {...sliderSettings}>{projects}</Slider>
      </div>
    );
  }
}
