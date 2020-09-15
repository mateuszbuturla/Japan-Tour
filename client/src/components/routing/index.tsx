import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import actions from '../../actions/title/actions';
import {
  Home,
  Category,
  Travel,
  Region,
  City,
  Attraction,
  Food,
  Dish,
  NotFound,
} from '../../views';

interface Props {
  setTitle?: Function;
}

function Routing({ setTitle }: Props) {
  return (
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
        path={`/kuchnia/:type/:dishSlug`}
        component={(props: any) => <Dish {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/404"
        component={(props: any) => <NotFound {...props} setTitle={setTitle} />}
      />
      <Route
        component={(props: any) => <NotFound {...props} setTitle={setTitle} />}
      />
    </Switch>
  );
}

const mapDispatchDoProps = (dispatch: any) => ({
  setTitle: (value: string) => dispatch(actions.setTitle(value)),
});

export default connect(null, mapDispatchDoProps)(Routing);
