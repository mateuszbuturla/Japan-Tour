import React from 'react';
import { useLocation } from 'react-router-dom';

import Routing from './components/routing';
import { PageTransitionEffect } from './components/common';
import { Footer } from './components/layout';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routing />
      {location.pathname !== '/' && <Footer />}
      <PageTransitionEffect />
    </div>
  );
}

export default App;
