import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminDashboard, AdminElementsList, AddUpdateRegionForm } from 'components/layout';
import { useSelector, useDispatch } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';
import adminActions from 'actions/admin/actions';

function RoutingAdmin() {
  const { attractions, regions, cities, cultures, dishes } = useSelector(
    (state: TypesApplicationState) => state.admin,
  );
  const dispatch = useDispatch();

  return (
    <Switch>
      {/* <Route path="/admin" component={(props: any) => <AdminDashboard {...props} exact />} /> */}
      <Route path="/admin/dashboard" component={(props: any) => <AdminDashboard {...props} />} />
      <Route
        path="/admin/attractions"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Atrakcje"
            api="attractions"
            removeFromAppState={(id: string) => dispatch(adminActions.removedAttractionById(id))}
            data={
              attractions &&
              attractions.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
          />
        )}
      />
      <Route
        path="/admin/regions"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Regiony"
            api="regions"
            data={
              regions &&
              regions.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
            addNewItemFormUrl="/admin/regions/add"
            updateItemFormUrl="/admin/regions/update"
          />
        )}
        exact
      />
      <Route
        path="/admin/cities"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Miasta"
            api="cities"
            removeFromAppState={(id: string) => dispatch(adminActions.removedCityById(id))}
            data={
              cities &&
              cities.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
          />
        )}
      />
      <Route
        path="/admin/culture"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Kultura"
            api="cultures"
            removeFromAppState={(id: string) => dispatch(adminActions.removeCultureById(id))}
            data={
              cultures &&
              cultures.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
          />
        )}
      />
      <Route
        path="/admin/kitchen"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Kuchnia"
            api="dishes"
            removeFromAppState={(id: string) => dispatch(adminActions.removeDishById(id))}
            data={
              dishes &&
              dishes.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
          />
        )}
      />

      <Route
        path="/admin/regions/add"
        component={(props: any) => (
          <AddUpdateRegionForm {...props} title="Dodaj region" formType="add" />
        )}
      />
      <Route
        path="/admin/regions/update/:key"
        component={(props: any) => (
          <AddUpdateRegionForm {...props} title="Edytuj region" formType="update" />
        )}
      />
    </Switch>
  );
}

export default RoutingAdmin;
