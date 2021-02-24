import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import actions from 'actions/title/actions';
import {
  Home,
  Travel,
  Region,
  City,
  Attraction,
  OtherSection,
  OtherElement,
  Admin,
  NotFound,
  Login,
} from 'views';
import TypesApplicationState from 'types/TypesApplicationState';

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
        path={`/podroze/:regionKey`}
        component={(props: any) => <Region {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path={`/podroze/:region/:cityKey`}
        component={(props: any) => <City {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path={`/podroze/:region/:city/:attractionKey`}
        component={(props: any) => <Attraction {...props} setTitle={setTitle} />}
        exact
      />
      <Route
        path={`/kuchnia`}
        component={(props: any) => (
          <OtherSection
            {...props}
            header="Kuchnia Japonii"
            categoryUrl="kuchnia"
            setTitle={setTitle}
            api="dishes"
          />
        )}
        exact
      />
      <Route
        path={`/kuchnia/:type/:elementKey`}
        component={(props: any) => (
          <OtherElement
            {...props}
            setTitle={setTitle}
            categoryUrl="kuchnia"
            categoryName="Kuchnia"
            api="dishes"
          />
        )}
        exact
      />
      <Route
        path={`/kultura`}
        component={(props: any) => (
          <OtherSection
            {...props}
            header="Kultura Japonii"
            categoryUrl="kultura"
            setTitle={setTitle}
            api="cultures"
          />
        )}
        exact
      />
      <Route
        path={`/kultura/:type/:elementKey`}
        component={(props: any) => (
          <OtherElement
            {...props}
            setTitle={setTitle}
            categoryUrl="kultura"
            categoryName="Kultura"
            api="cultures"
          />
        )}
        exact
      />
      <Route path="/404" component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
      <Route component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
    </Switch>
  );
}

export default Routing;
