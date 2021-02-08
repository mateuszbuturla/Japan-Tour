import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  AddCategory,
  AddCulture,
  AddRegion,
  AddCity,
  AddAttraction,
  UpdateRegion,
} from 'components/layout';

function RoutingAdmin() {
  return (
    <Switch>
      <Route
        path="/admin/add-category"
        component={(props: any) => <AddCategory {...props} />}
        exact
      />
      <Route
        path="/admin/add-culture"
        component={(props: any) => <AddCulture {...props} api="cultures" />}
        exact
      />
      <Route
        path="/admin/add-dish"
        component={(props: any) => <AddCulture {...props} api="dishes" />}
        exact
      />
      <Route
        path="/admin/add-region"
        component={(props: any) => <AddRegion {...props} api="regions" />}
        exact
      />
      <Route
        path="/admin/add-city"
        component={(props: any) => <AddCity {...props} api="cities" />}
        exact
      />
      <Route
        path="/admin/add-attraction"
        component={(props: any) => <AddAttraction {...props} api="attractions" />}
        exact
      />
      <Route
        path="/admin/regions/:id"
        component={(props: any) => <UpdateRegion {...props} api="regions" />}
        exact
      />
    </Switch>
  );
}

export default RoutingAdmin;
