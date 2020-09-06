import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Home, Category, Travel, Region, City, Attraction } from './views';
import { PageTransitionEffect } from './components/common';
import { Footer } from './components/layout';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        {/* {categories.map((item: any) => (
          <Route
            path={`/${item.url}`}
            component={(props: any) => (
              <Category {...props} categoryUrl={item.url} />
            )}
            exact
          />
        ))} */}
        <Route
          path={`/podroze`}
          component={(props: any) => (
            <Travel {...props} categoryUrl={'podroze'} />
          )}
          exact
        />
        <Route
          path={`/podroze/:regionurl`}
          component={(props: any) => <Region {...props} />}
          exact
        />
        <Route
          path={`/podroze/:region/:cityurl`}
          component={(props: any) => <City {...props} />}
          exact
        />
        <Route
          path={`/podroze/:region/:city/:attractionurl`}
          component={(props: any) => <Attraction {...props} />}
          exact
        />
      </Switch>
      {location.pathname !== '/' && <Footer />}
      <PageTransitionEffect />
    </div>
  );
}

export default App;
