import React, { Component } from "react";
import Header from "./Header";
import "../styles/app.css";

window.scrollTo(0, 0);

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
