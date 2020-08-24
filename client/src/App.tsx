import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./view/Home/home";
import AttractionsGroup from "./view/AttractionsGroup/attractionsGroup";
import Attraction from "./view/Attraction/attraction";
import NotFound from "./view/NotFound/notFound";

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
