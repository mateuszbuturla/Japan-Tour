import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddCategory, AddCulture, AddRegion } from 'components/layout';

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
    </Switch>
  );
}

export default RoutingAdmin;
