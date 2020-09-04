import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { Home, Category } from './views';

interface Props {
  categories?: any;
}

function App({ categories }: Props) {
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
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(App);
