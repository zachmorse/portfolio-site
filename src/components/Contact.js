import React, { Component } from "react";
import "../styles/app.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="portraitContainer">
        <div className="portrait" />
        <div className="informationContainer">
          <p>
            307-630-2489 //{" "}
            <a
              href="mailto:zacharymorse@gmail.com?subject=Hello"
              target="_top"
              className="email"
            >
              zacharymorse@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.google.com/">resume</a> <span>//</span>{" "}
            <a href="https://github.com/zachmorse">github</a> <span>//</span>{" "}
            <a href="https://www.linkedin.com/in/zachmorse/">linkedin</a>
          </p>
        </div>
      </div>
    );
  }
}
