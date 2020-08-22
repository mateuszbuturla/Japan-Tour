import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/common/common";

import Home from "./view/Home/home";

import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <div className="App">
      <Header name="Japonia" />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
