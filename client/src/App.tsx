import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./view/Home/home";
import NoMatch from "./view/NoMatch/noMatch";

import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
