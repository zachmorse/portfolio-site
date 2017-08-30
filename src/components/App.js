import React, { Component } from "react";
import "../styles/app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Mainlayout from "./Mainlayout";
import Contact from "./Contact";
import Work from "./Work";
import Skills from "./Skills";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Mainlayout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/work" component={Work} />
                <Route path="/skills" component={Skills} />
              </Switch>
            </Mainlayout>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
