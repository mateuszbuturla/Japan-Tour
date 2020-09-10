import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import actions from './actions/title/actions';

import {
  Home,
  Category,
  Travel,
  Region,
  City,
  Attraction,
  Food,
  NotFound,
} from './views';
import { PageTransitionEffect } from './components/common';
import { Footer } from './components/layout';

interface Props {
  setTitle?: Function;
}

function App({ setTitle }: Props) {
  const location = useLocation();

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          component={(props: any) => <Home {...props} setTitle={setTitle} />}
          exact
        />
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
            <Travel {...props} categoryUrl={'podroze'} setTitle={setTitle} />
          )}
          exact
        />
        <Route
          path={`/podroze/:regionurl`}
          component={(props: any) => <Region {...props} setTitle={setTitle} />}
          exact
        />
        <Route
          path={`/podroze/:region/:cityurl`}
          component={(props: any) => <City {...props} setTitle={setTitle} />}
          exact
        />
        <Route
          path={`/podroze/:region/:city/:attractionurl`}
          component={(props: any) => (
            <Attraction {...props} setTitle={setTitle} />
          )}
          exact
        />
        <Route
          path={`/kuchnia`}
          component={(props: any) => (
            <Food {...props} categoryUrl={'kuchnia'} setTitle={setTitle} />
          )}
          exact
        />
        <Route
          path="/404"
          component={(props: any) => (
            <NotFound {...props} setTitle={setTitle} />
          )}
        />
        <Route
          component={(props: any) => (
            <NotFound {...props} setTitle={setTitle} />
          )}
        />
      </Switch>
      {location.pathname !== '/' && <Footer />}
      <PageTransitionEffect />
    </div>
  );
}

const mapDispatchDoProps = (dispatch: any) => ({
  setTitle: (value: string) => dispatch(actions.setTitle(value)),
});

export default connect(null, mapDispatchDoProps)(App);
