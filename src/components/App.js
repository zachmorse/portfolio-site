import React, { Component } from "react";
import "../styles/app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Mainlayout from "./Mainlayout";
import Contact from "./Contact";
import Work from "./Work";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Mainlayout>
              <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/work" component={Work} />
              </Switch>
            </Mainlayout>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
