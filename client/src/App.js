import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './reset.css';
import './main.sass';

import Home from './view/Home/Home';
import NoMatch from './view/NoMatch/NoMatch';
import Place from './view/Place/Place';
import Footer from './view/Footer/Footer';
import AdminLogin from './view/AdminLogin/AdminLogin';
import AdminPanel from './view/AdminPanel/AdminPanel';
import ScrollToTop from './view/components/ScrollToTop';

class App extends React.Component {

  render() {
    const cookies = new Cookies();
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route path="/admin" component={AdminLogin} exact />
            <Route path="/AdminPanel" component={() => <AdminPanel user={cookies.get('user')} />} />
            <Route path="/:name" component={Place} exact />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
