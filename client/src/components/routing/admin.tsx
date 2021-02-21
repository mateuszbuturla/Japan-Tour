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
} from 'components/layout';
import FormsTemplate from 'formsTemplate';
import AddAttractionForm from 'formsTemplate/AddAttractionForm';

function RoutingAdmin() {
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
        ))}
    </Switch>
  );
}

export default RoutingAdmin;
