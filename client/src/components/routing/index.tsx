import actions from 'actions/title/actions';
import bg from 'assets/regions/chugoku.jpg';
import {
  AttractionsHighlightedItemsFromThisSameCategory,
  CityHighlightedItems,
  RegionHighlightedItems,
} from 'components/layout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';
import {
  Admin,
  Home,
  Item,
  ItemsList,
  Login,
  NotFound,
  Travel,
  RegionsList,
  CitiesList,
  AttractionsList,
  CulturesList,
  KitchenList,
} from 'views';

function Routing() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: TypesApplicationState) => state.user);

  const setTitle = (value: string) => {
    dispatch(actions.setTitle(value));
  };

  return (
    <Switch>
      <Route path="/" component={(props: any) => <Home {...props} setTitle={setTitle} />} exact />
      <Route
        path="/admin"
        component={(props: any) =>
          user !== null ? <Admin {...props} setTitle={setTitle} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/login"
        component={(props: any) =>
          user === null ? <Login {...props} setTitle={setTitle} /> : <Redirect to="/admin" />
        }
      />
      <Route
        path={`/podroze`}
        component={(props: any) => (
          <Travel {...props} categoryUrl={'podroze'} setTitle={setTitle} />
        )}
        exact
      />
      <Route
        path="/podroze/regiony"
        component={(props: any) => <RegionsList {...props} setTitle={setTitle} />}
        exact
      />
      {/* <Route
        path="/podroze/regiony"
        component={(props: any) => (
          <ItemsList {...props} api="regions" url="/podroze/regions" img={bg} title="Regiony" />
        )}
        exact
      /> */}
      <Route
        path="/podroze/regiony/:key/miasta"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="cities/region"
            url="/podroze/miasta"
            img={bg}
            title=""
            header="Miasta"
          />
        )}
        exact
      />
      <Route
        path="/podroze/regiony/:key/atrakcje"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="attractions/region"
            url="/podroze/atrakcje"
            img={bg}
            title=""
            header="Atrakcje"
          />
        )}
        exact
      />
      <Route
        path="/podroze/miasta"
        component={(props: any) => <CitiesList {...props} setTitle={setTitle} />}
        exact
      />
      {/* <Route
        path="/podroze/miasta"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="cities/highlighted"
            url="/podroze/miasta"
            img={bg}
            title="Miasta"
          />
        )}
        exact
      /> */}
      <Route
        path="/podroze/atrakcje"
        component={(props: any) => <AttractionsList {...props} setTitle={setTitle} />}
        exact
      />
      {/* <Route
        path="/podroze/atrakcje"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="attractions/highlighted"
            url="/podroze/atrakcje"
            img={bg}
            title="Atrakcje"
          />
        )}
        exact
      /> */}
      <Route
        path="/kultura"
        component={(props: any) => <CulturesList {...props} setTitle={setTitle} />}
        exact
      />
      {/* <Route
        path="/kultura"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="cultures"
            url="/kultura"
            img={bg}
            title="Kultura Japonii"
            curstomLocationPathFromProps={[
              { text: 'Strona główna', url: '/' },
              { text: 'Kultura Japonii' },
            ]}
          />
        )}
        exact
      /> */}
      <Route
        path="/kuchnia"
        component={(props: any) => <KitchenList {...props} setTitle={setTitle} />}
        exact
      />
      {/* <Route
        path="/kuchnia"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="dishes"
            url="/kuchnia"
            img={bg}
            title="Kuchnia Japonii"
            curstomLocationPathFromProps={[
              { text: 'Strona główna', url: '/' },
              { text: 'Kuchnia Japonii' },
            ]}
          />
        )}
        exact
      /> */}
      <Route
        path="/podroze/kategorie/:key"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="attractions/allFromCategory"
            url="/podroze/atrakcje"
            img={bg}
            title=""
          />
        )}
        exact
      />
      <Route
        path="/podroze/regiony/:key"
        component={(props: any) => (
          <Item
            {...props}
            api="regions"
            setTitle={setTitle}
            locationPathElements={[
              { text: 'Strona główna', url: '/' },
              { text: 'Podróże', url: `/podroze` },
              { text: 'Regiony', url: `/podroze/regiony` },
            ]}
            additionalElements={[RegionHighlightedItems]}
          />
        )}
        exact
      />
      <Route
        path="/podroze/miasta/:key"
        component={(props: any) => (
          <Item
            {...props}
            api="cities"
            setTitle={setTitle}
            locationPathElements={[
              { text: 'Strona główna', url: '/' },
              { text: 'Podróże', url: `/podroze` },
              { text: 'Miasta', url: `/podroze/miasta` },
            ]}
            additionalElements={[CityHighlightedItems]}
          />
        )}
        exact
      />
      <Route
        path="/podroze/miasta/:key/atrakcje"
        component={(props: any) => (
          <ItemsList
            {...props}
            api="attractions/city"
            url="/podroze/atrakcje"
            img={bg}
            title=""
            header="Atrakcje"
          />
        )}
        exact
      />
      <Route
        path="/podroze/atrakcje/:key"
        component={(props: any) => (
          <Item
            {...props}
            api="attractions"
            setTitle={setTitle}
            locationPathElements={[
              { text: 'Strona główna', url: '/' },
              { text: 'Podróże', url: `/podroze` },
              { text: 'Atrakcje', url: `/podroze/atrakcje` },
            ]}
            additionalElements={[AttractionsHighlightedItemsFromThisSameCategory]}
          />
        )}
        exact
      />
      <Route
        path="/kultura/:key"
        component={(props: any) => (
          <Item
            {...props}
            api="cultures"
            setTitle={setTitle}
            locationPathElements={[
              { text: 'Strona główna', url: '/' },
              { text: 'Kultura Japonii', url: `/kultura` },
            ]}
          />
        )}
        exact
      />
      <Route
        path="/kuchnia/:key"
        component={(props: any) => (
          <Item
            {...props}
            api="dishes"
            setTitle={setTitle}
            locationPathElements={[
              { text: 'Strona główna', url: '/' },
              { text: 'Kuchnia Japonii', url: `/kuchnia` },
            ]}
          />
        )}
        exact
      />
      <Route path="/404" component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
      <Route component={(props: any) => <NotFound {...props} setTitle={setTitle} />} />
    </Switch>
  );
}

export default Routing;
