import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import actions from 'actions/title/actions';
import {
  Home,
  Travel,
  Region,
  City,
  Attraction,
  OtherSection,
  OtherElement,
  NotFound,
} from 'views';

function Routing() {
  const dispatch = useDispatch();

  const setTitle = (value: string) => {
    dispatch(actions.setTitle(value));
  };

  return (
    <Switch>
      <Route path="/" component={(props: any) => <Home {...props} setTitle={setTitle} />} exact />
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
            api="food"
          />
        )}
        exact
      />
      <Route
        path={`/kuchnia/:type/:elementSlug`}
        component={(props: any) => (
          <OtherElement {...props} setTitle={setTitle} categoryUrl="kuchnia" api="food" />
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
            api="culture"
          />
        )}
        exact
      />
      <Route
        path={`/kultura/:type/:elementSlug`}
        component={(props: any) => (
          <OtherElement {...props} setTitle={setTitle} categoryUrl="kultura" api="culture" />
        )}
        exact
      />
      <Route path="/404" component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
      <Route component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
    </Switch>
  );
}

export default Routing;
