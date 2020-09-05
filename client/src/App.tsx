import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Home, Category, Travel, Region } from './views';
import { PageTransitionEffect } from './components/common';
import { Footer } from './components/layout';

interface Props {
  categories?: any;
  regions?: any;
}

function App({ categories, regions }: Props) {
  const location = useLocation();
  console.log(regions);
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
        {regions.map((item: any) => (
          <Route
            path={`/podroze${item.url}`}
            component={(props: any) => (
              <Region {...props} regionUrl={item.url} />
            )}
            exact
          />
        ))}
      </Switch>
      {location.pathname !== '/' && <Footer />}
      <PageTransitionEffect />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
  regions: state.regions,
});

export default connect(mapStateToProps, null)(App);
