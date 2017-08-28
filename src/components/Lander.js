import React, { Component } from "react";

export default class Lander extends Component {
  render() {
    let style = {
      lander: {
        backgroundColor: "#211e29",
        color: "white",
        height: "100vh",
        margin: "-1rem 0rem 0rem 0rem",
        textAlign: "center"
      },
      topline: {
        margin: "1rem 0rem 0rem 0rem",
        fontSize: "22vw",
        color: "#0192c1",
        lineHeight: "16vh"
      },
      midline: {
        color: "#be6815"
      },
      bottomline: {
        color: "#bc8d25"
      }
    };

    return (
      <div style={style.lander}>
        <h1 style={style.topline}>
          ZACH MORSE <span style={style.midline}>wants to help you</span>
          <span style={style.bottomline}> make beautiful things </span>
        </h1>

        {/* <h3 style={style.midline}>wants to help you</h3>
        <h1 style={style.bottomline}>make beautiful things</h1> */}
      </div>
    );
  }
}