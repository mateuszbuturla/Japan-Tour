import React from 'react';
import { useLocation } from 'react-router-dom';

import Routing from 'components/routing';
import { PageTransitionEffect } from 'components/common';
import { Footer, Nav } from 'components/layout';

function App() {
  const location = useLocation();
  const pathName: String[] = location.pathname.split('/');

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
