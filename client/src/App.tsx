import userActions from 'actions/user/actions';
import { Footer, Nav } from 'components/layout';
import { LoadingScreen } from 'components/common';
import Routing from 'components/routing';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';
import {
  RegionsFetcher,
  RegionsCitiesFetcher,
  KitchenSimpleFetcher,
  KitchenCategoriesFetcher,
  CultureSimpleFetcher,
  CulturesCategoriesFetcher,
  CityAttractionsFetcher,
  AttractionSimpleFetcher,
  AttractionsCategoriesFetcher,
} from 'fetchers';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: TypesApplicationState) => state.user);
  const location = useLocation();
  const pathName: String[] = location.pathname.split('/');

  const getUser = async () => {
    if (user === null) {
      try {
        const res = await Api.get('/auth/getUser');
        dispatch(userActions.setUser(res.data));
      } catch (e) {}
    }
    const tt = await RegionsFetcher();
    console.log(tt);
    const tt1 = await RegionsCitiesFetcher();
    console.log(tt1);
    const tt2 = await KitchenSimpleFetcher('ewqrewqr');
    console.log(tt2);
    const tt3 = await KitchenCategoriesFetcher();
    console.log(tt3);
    const tt4 = await CultureSimpleFetcher('ewqrqwrqre');
    console.log(tt4);
    const tt5 = await CulturesCategoriesFetcher();
    console.log(tt5);
    const tt6 = await CityAttractionsFetcher('tokyo');
    console.log(tt6);
    const tt8 = await AttractionSimpleFetcher('rqerqwreq');
    console.log(tt8);
    const tt9 = await AttractionsCategoriesFetcher();
    console.log(tt9);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <Routing />
      {pathName[1] !== 'admin' && pathName[1] !== 'login' && <Nav />}
      {pathName[1] !== '/' &&
        pathName[1] !== '' &&
        pathName[1] !== 'admin' &&
        pathName[1] !== 'login' && <Footer />}
      <LoadingScreen />
    </div>
  );
}

export default App;
