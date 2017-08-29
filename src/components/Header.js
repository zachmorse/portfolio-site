import React, { Component } from "react";
import "../styles/app.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="imgContainer">
          <p className="textBlock">
            Hi, my name is Zach Morse. I'm a developer and web designer based in
            Nashville TN.
          </p>
          <p className="textBlock">
            I am interested in modular, efficient,{" "}
            <a
              href="https://github.com/zachmorse"
              style={{ textDecoration: "none", color: "gray" }}
            >
              clean code
            </a>{" "}
            paired with minimalist, eye-catching emotional design. When not
            coding I can be found making music, traveling, and hanging out with
            my {" "}
            <a
              href="http://www.katebowenmusic.com/"
              style={{ textDecoration: "none", color: "gray" }}
            >
              wife
            </a>{" "}
            and dog. If you'd like to get in touch, shoot me an email or visit
            my{" "}
            <a
              href="https://www.linkedin.com/in/zachmorse/"
              style={{ textDecoration: "none", color: "gray" }}
            >
              Linkedin
            </a>. Thank you.
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
