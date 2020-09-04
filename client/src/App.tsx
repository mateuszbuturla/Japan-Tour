import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './views';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
