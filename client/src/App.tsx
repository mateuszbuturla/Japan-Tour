import userActions from 'actions/user/actions';
import { Footer, Nav } from 'components/layout';
import { LoadingScreen } from 'components/common';
import Routing from 'components/routing';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';

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
      <LoadingScreen />
    </div>
  );
}

export default App;
