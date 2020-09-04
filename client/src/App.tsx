import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Home, Category } from './views';
import { PageTransitionEffect } from './components/common';
import { Footer } from './components/layout';

interface Props {
  categories?: any;
}

function App({ categories }: Props) {
  const location = useLocation();

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        {categories.map((item: any) => (
          <Route
            path={`/${item.url}`}
            component={(props: any) => (
              <Category {...props} categoryUrl={item.url} />
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
});

export default connect(mapStateToProps, null)(App);
