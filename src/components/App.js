import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import BaseLayout from "./Baselayout";
import Home from "./Home";
import Lander from "./Lander";

class App extends Component {
  render() {
    return (
      <div>
        <Lander />
      </div>
    );
  }
}

export default App;

// <BrowserRouter>
//   <BaseLayout>
//     <Switch>
//       <Route path="/" component={Lander} />
//     </Switch>
//   </BaseLayout>
// </BrowserRouter>
