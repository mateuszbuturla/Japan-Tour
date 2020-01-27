import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';

import Home from './view/Home';
import NoMatch from './view/NoMatch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
