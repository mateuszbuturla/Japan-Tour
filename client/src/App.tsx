import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Routing from 'components/routing';
import { PageTransitionEffect } from 'components/common';
import { Footer, Nav } from 'components/layout';
import { useDispatch, useSelector } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';
import userActions from 'actions/user/actions';

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
      <PageTransitionEffect />
    </div>
  );
}

export default App;
