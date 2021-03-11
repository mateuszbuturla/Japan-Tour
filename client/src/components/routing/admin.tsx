import adminActions from 'actions/admin/actions';
import {
  AddUpdateAttractionForm,
  AddUpdateCityForm,
  AddUpdateCultureForm,
  AddUpdateKitchenForm,
  AddUpdateRegionForm,
  AdminDashboard,
  AdminElementsList,
  AddUpdatePrefectureForm,
} from 'components/layout';
import AddUpdateCategoryForm from 'components/layout/AddUpdateCategoryForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';

function RoutingAdmin() {
  const { attractions, regions, cities, cultures, kitchens, categories, prefectures } = useSelector(
    (state: TypesApplicationState) => state.admin,
  );
  const dispatch = useDispatch();

  return (
    <Switch>
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
            addNewItemFormUrl="/admin/attractions/add"
            updateItemFormUrl="/admin/attractions/update"
          />
        )}
        exact
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
        path="/admin/prefectures"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Prefektury"
            api="prefectures"
            data={
              prefectures &&
              prefectures.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
            addNewItemFormUrl="/admin/prefectures/add"
            updateItemFormUrl="/admin/prefectures/update"
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
            addNewItemFormUrl="/admin/cities/add"
            updateItemFormUrl="/admin/cities/update"
          />
        )}
        exact
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
            addNewItemFormUrl="/admin/culture/add"
            updateItemFormUrl="/admin/culture/update"
          />
        )}
        exact
      />
      <Route
        path="/admin/kitchen"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Kuchnia"
            api="kitchens"
            removeFromAppState={(id: string) => dispatch(adminActions.removeKitchenById(id))}
            data={
              kitchens &&
              kitchens.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
            addNewItemFormUrl="/admin/kitchen/add"
            updateItemFormUrl="/admin/kitchen/update"
          />
        )}
        exact
      />

      <Route
        path="/admin/categories"
        component={(props: any) => (
          <AdminElementsList
            {...props}
            title="Kategorie"
            api="categories"
            removeFromAppState={(id: string) => dispatch(adminActions.removeCategoryById(id))}
            data={
              categories &&
              categories.map((item: any) => ({
                _id: item._id,
                name: item.name,
                author: 'Admin',
                date: '01.01.2020',
                key: item.key,
              }))
            }
            addNewItemFormUrl="/admin/categories/add"
            updateItemFormUrl="/admin/categories/update"
          />
        )}
        exact
      />

      <Route
        path="/admin/regions/add"
        component={(props: any) => (
          <AddUpdateRegionForm {...props} title="Dodaj region" formType="add" buttonLabel="Dodaj" />
        )}
      />
      <Route
        path="/admin/regions/update/:key"
        component={(props: any) => (
          <AddUpdateRegionForm
            {...props}
            title="Edytuj region"
            formType="update"
            buttonLabel="Aktualizuj"
          />
        )}
      />

      <Route
        path="/admin/cities/add"
        component={(props: any) => (
          <AddUpdateCityForm {...props} title="Dodaj Miasto" formType="add" buttonLabel="Dodaj" />
        )}
      />
      <Route
        path="/admin/cities/update/:key"
        component={(props: any) => (
          <AddUpdateCityForm
            {...props}
            title="Edytuj miasto"
            formType="update"
            buttonLabel="Aktualizuj"
          />
        )}
      />

      <Route
        path="/admin/kitchen/add"
        component={(props: any) => (
          <AddUpdateKitchenForm
            {...props}
            title="Dodaj wpis o kuchni"
            formType="add"
            buttonLabel="Dodaj"
          />
        )}
      />
      <Route
        path="/admin/kitchen/update/:key"
        component={(props: any) => (
          <AddUpdateKitchenForm
            {...props}
            title="Edytuj wpis o kuchni"
            formType="update"
            buttonLabel="Aktualizuj"
          />
        )}
      />
      <Route
        path="/admin/culture/add"
        component={(props: any) => (
          <AddUpdateCultureForm
            {...props}
            title="Dodaj wpis o kulturze"
            formType="add"
            buttonLabel="Dodaj"
          />
        )}
      />
      <Route
        path="/admin/culture/update/:key"
        component={(props: any) => (
          <AddUpdateCultureForm
            {...props}
            title="Edytuj wpis o kulturze"
            formType="update"
            buttonLabel="Aktualizuj"
          />
        )}
      />
      <Route
        path="/admin/attractions/add"
        component={(props: any) => (
          <AddUpdateAttractionForm
            {...props}
            title="Dodaj atrakcje"
            formType="add"
            buttonLabel="Dodaj"
          />
        )}
      />
      <Route
        path="/admin/attractions/update/:key"
        component={(props: any) => (
          <AddUpdateAttractionForm
            {...props}
            title="Edytuj atrakcje"
            formType="update"
            buttonLabel="Aktualizuj"
          />
        )}
      />

      <Route
        path="/admin/categories/add"
        component={(props: any) => (
          <AddUpdateCategoryForm
            {...props}
            title="Dodaj kategorię"
            formType="add"
            buttonLabel="Dodaj"
          />
        )}
      />
      <Route
        path="/admin/categories/update/:key"
        component={(props: any) => (
          <AddUpdateCategoryForm
            {...props}
            title="Edytuj kategorię"
            formType="update"
            buttonLabel="Aktualizuj"
          />
        )}
      />

      <Route
        path="/admin/prefectures/add"
        component={(props: any) => (
          <AddUpdatePrefectureForm
            {...props}
            title="Dodaj prefekture"
            formType="add"
            buttonLabel="Dodaj"
          />
        )}
      />
      <Route
        path="/admin/prefectures/update/:key"
        component={(props: any) => (
          <AddUpdatePrefectureForm
            {...props}
            title="Edytuj prefekture"
            formType="update"
            buttonLabel="Aktualizuj"
          />
        )}
      />
    </Switch>
  );
}

export default RoutingAdmin;
