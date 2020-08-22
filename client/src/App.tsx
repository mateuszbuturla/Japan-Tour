import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./view/Home/home";
import NotFound from "./view/NotFound/notFound";

import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
