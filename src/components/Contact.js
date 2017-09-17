import React, { Component } from "react";
import "../styles/app.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="portraitContainer">
        <div className="portrait" />
        <div>
          <p>
            <a href="tel:307-630-2489">307.630.2489</a> //{" "}
            <a
              href="mailto:zacharymorse@gmail.com?subject=Hello"
              target="_top"
              className="email"
            >
              zacharymorse@gmail.com
            </a>
          </p>
          <p style={{ textAlign: "center" }}>
            <a
              href="https://drive.google.com/open?id=0B9Huqe5aB9FvckJIRkZ0c0tRejg"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>{" "}
            <span>//</span>{" "}
            <a
              href="https://github.com/zachmorse"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            <span>//</span>{" "}
            <a
              href="https://www.linkedin.com/in/zachmorse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </p>
        </div>
      </div>
    );
  }
}
