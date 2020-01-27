import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';

import Home from './view/Home/Home';
import NoMatch from './view/NoMatch/NoMatch';
import Place from './view/Place/Place';
import Footer from './view/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/:name" component={Place} />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
