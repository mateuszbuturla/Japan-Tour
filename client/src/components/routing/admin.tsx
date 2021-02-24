import React, { useState, useEffect } from 'react';
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
  AdminDashboard,
  AdminElementsList,
} from 'components/layout';
import FormsTemplate from 'formsTemplate';
import AddAttractionForm from 'formsTemplate/AddAttractionForm';
import { useSelector, useDispatch } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';
import adminActions from 'actions/admin/actions';

function RoutingAdmin() {
  const { attractions, regions, cities, cultures, dishes } = useSelector(
    (state: TypesApplicationState) => state.admin,
  );
  const dispatch = useDispatch();
  const [forms, setForms] = useState<any[]>();

  const getForms = async () => {
    const formsRes = await FormsTemplate();
    console.log(formsRes);
    setForms(formsRes);
  };

  useEffect(() => {
    if (!forms) {
      getForms();
    }
  }, []);

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
          />
        )}
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
      {/* <Route
        path="/admin/add-category"
        component={(props: any) => <AddCategory {...props} />}
        exact
      /> */}
      {/* <Route
        path="/admin/add-culture"
        component={(props: any) => <AddCulture {...props} api="cultures" />}
        exact
      /> */}
      {/* <Route
        path="/admin/add-dish"
        component={(props: any) => <AddCulture {...props} api="dishes" />}
        exact
      /> */}
      {/* <Route
        path="/admin/add-region"
        component={(props: any) => <AddRegion {...props} api="regions" />}
        exact
      /> */}
      {/* <Route
        path="/admin/add-city"
        component={(props: any) => <AddCity {...props} api="cities" />}
        exact
      /> */}
      {/* <Route
        path="/admin/add-attraction"
        component={(props: any) => <AddAttraction {...props} api="attractions" />}
        exact
      /> */}
      {/* <Route
        path="/admin/regions/:id"
        component={(props: any) => <UpdateRegion {...props} api="regions" />}
        exact
      /> */}
      {/* ------------------------------------ */}
      {/* <Route
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
      {forms &&
        forms.map((item, index) => (
          <Route
            path={item.url}
            key={index}
            component={(props: any) => (
              <Forms
                {...props}
                api={item.api}
                form={item.fields}
                description={item.description}
                otherData={item.otherData}
                dataFromApi={item.dataFromApi}
                defaultValues={item.defaultValues}
                getElementDefaultValueFunction={item.getElementDefaultValueFunction}
              />
            )}
            exact
          />
        ))} */}
    </Switch>
  );
}

export default RoutingAdmin;
