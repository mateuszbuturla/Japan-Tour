import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  AddCategory,
  AddCulture,
  AddRegion,
  AddCity,
  AddAttraction,
  UpdateRegion,
  UpdateCity,
  UpdateAttraction,
  UpdateCultureDish,
  Forms,
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
      <Route
        path="/admin/cities/:id"
        component={(props: any) => <UpdateCity {...props} api="cities" />}
        exact
      />
      <Route
        path="/admin/attractions/:id"
        component={(props: any) => <UpdateAttraction {...props} api="attractions" />}
        exact
      />
      <Route
        path="/admin/cultures/:id"
        component={(props: any) => <UpdateCultureDish {...props} api="cultures" />}
        exact
      />
      <Route
        path="/admin/dishes/:id"
        component={(props: any) => <UpdateCultureDish {...props} api="dishes" />}
        exact
      />
      <Route
        path="/admin/forms"
        component={(props: any) => (
          <Forms
            {...props}
            form={[
              {
                type: 'text',
                label: 'Pole teksowe 1',
                name: 'nazwa',
                defaultValue: 'default value',
                required: true,
              },
              {
                type: 'text',
                label: 'Pole teksowe 2',
                name: 'nazwa2',
                defaultValue: 'default value2',
                required: false,
              },
              {
                type: 'file',
                label: 'Pole pliku',
                name: 'nazwa3',
                required: true,
              },
              {
                type: 'select',
                label: 'Pole pliku',
                name: 'nazwa3',
                required: true,
                selectInputValues: ['test1', 'test2', 'test3'],
              },
            ]}
          />
        )}
        exact
      />
    </Switch>
  );
}

export default RoutingAdmin;
