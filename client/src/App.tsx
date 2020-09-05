import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Home, Category, Travel, Region, City, Attraction } from './views';
import { PageTransitionEffect } from './components/common';
import { Footer } from './components/layout';

interface Props {
  categories?: any;
  regions?: any;
  cities?: any;
  attractions?: any;
}

function App({ categories, regions, cities, attractions }: Props) {
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
        {cities.map((item: any) => (
          <Route
            path={`/podroze/${item.region.toLowerCase()}${item.url}`}
            component={(props: any) => <City {...props} cityUrl={item.url} />}
            exact
          />
        ))}
        {attractions.map((item: any) => (
          <Route
            path={`/podroze/${item.region.toLowerCase()}/${item.city.toLowerCase()}${
              item.url
            }`}
            component={(props: any) => (
              <Attraction {...props} attractionUrl={item.url} />
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
  cities: state.cities,
  attractions: state.attractions,
});

export default connect(mapStateToProps, null)(App);
