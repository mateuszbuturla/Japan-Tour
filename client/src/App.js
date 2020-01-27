import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';

import Home from './view/Home';
import NoMatch from './view/NoMatch';
import Place from './view/Place';

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
    </div>
  );
}

export default App;
