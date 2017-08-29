import React, { Component } from "react";
import "../app.css";

import Header from "./Header";
import Mainlayout from "./Mainlayout";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Mainlayout />
        </div>
      </div>
    );
  }
}

export default App;
