import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, AttractionsGroup, Attraction, NotFound } from "./view/view";

import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:name" component={AttractionsGroup} />
        <Route exact path="/attraction/:name" component={Attraction} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
