import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddCategory } from 'components/layout';

function RoutingAdmin() {
  return (
    <Switch>
      <Route
        path="/admin/add-category"
        component={(props: any) => <AddCategory {...props} />}
        exact
      />
    </Switch>
  );
}

export default RoutingAdmin;
