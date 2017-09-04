import React, { Component } from "react";
import "../styles/app.css";

class Header extends Component {
  render() {
    return (
      <div>
        <p className="textBlock">
          Hi, my name is Zach Morse. I'm a developer and web designer based in
          Nashville TN.
        </p>
        {/* <p className="textBlock2">
          I am interested in modular, efficient,{" "}
          <a
            href="https://github.com/zachmorse"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "gray" }}
          >
            clean code
          </a>{" "}
          paired with minimalist, functional & eye-catching design. When not
          coding I can be found making music, traveling, and hanging out with my{" "}
          {" "}
          <a
            href="http://www.katebowenmusic.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "gray" }}
          >
            wife
          </a>{" "}
          and dog. If you'd like to get in touch, shoot me an email or visit my{" "}
          <a
            href="https://www.linkedin.com/in/zachmorse/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "gray" }}
          >
            Linkedin
          </a>. Thank you.
        </p> */}
      </div>
    );
  }
}

export default Header;
