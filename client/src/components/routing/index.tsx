import actions from 'actions/title/actions';
import bg from 'assets/regions/chugoku.jpg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';
import {
  Admin,
  Home,
  Login,
  NotFound,
  Travel,
  RegionsList,
  CitiesList,
  AttractionsList,
  CulturesList,
  KitchenList,
  Region,
  City,
  Attraction,
  Culture,
  Kitchen,
} from 'views';

function Routing() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: TypesApplicationState) => state.user);

  const setTitle = (value: string) => {
    dispatch(actions.setTitle(value));
  };

  return (
    <Switch>
      <Route path="/" component={(props: any) => <Home {...props} setTitle={setTitle} />} exact />
      <Route
        path="/admin"
        component={(props: any) =>
          user !== null ? <Admin {...props} setTitle={setTitle} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/login"
        component={(props: any) =>
          user === null ? <Login {...props} setTitle={setTitle} /> : <Redirect to="/admin" />
        }
      />
      <Route
        path={`/podroze`}
        component={(props: any) => (
          <Travel {...props} categoryUrl={'podroze'} setTitle={setTitle} />
        )}
        exact
      />
      <Route
        path="/podroze/regiony"
        component={(props: any) => <RegionsList {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/podroze/miasta"
        component={(props: any) => <CitiesList {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/podroze/atrakcje"
        component={(props: any) => <AttractionsList {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/kultura"
        component={(props: any) => <CulturesList {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/kuchnia"
        component={(props: any) => <KitchenList {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/podroze/regiony/:key"
        component={(props: any) => <Region {...props} setTitle={setTitle} />}
        exact
      />

      <Route
        path="/podroze/miasta/:key"
        component={(props: any) => <City {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/podroze/atrakcje/:key"
        component={(props: any) => <Attraction {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path="/kultura/:key"
        component={(props: any) => <Culture {...props} setTitle={setTitle} />}
        exact
      />

      <Route
        path="/kuchnia/:key"
        component={(props: any) => <Kitchen {...props} setTitle={setTitle} />}
        exact
      />
      <Route path="/404" component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
      <Route component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
    </Switch>
  );
}

export default Routing;
