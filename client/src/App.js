import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './reset.css';
import './main.sass';

import Nav from './view/Nav/Nav';
import Home from './view/Home/Home';
import NoMatch from './view/NoMatch/NoMatch';
import Attractions from './view/Attractions/Attractions';
import Footer from './view/Footer/Footer';
import AdminLogin from './view/AdminLogin/AdminLogin';
import AdminPanel from './view/AdminPanel/AdminPanel';
import ScrollToTop from './ScrollToTop';

import config from './config';

class App extends React.Component {

  render() {
    const cookies = new Cookies();
    return (
      <div className="App">
        <BrowserRouter>

          <ScrollToTop />
          <Switch>
            <Route path="/admin" component={() => <AdminLogin config={config} />} exact />
            <Route path="/AdminPanel" component={() => <AdminPanel user={cookies.get('user')} config={config} />} />
            <Route path="/:name" component={Attractions} config={config} exact />
            <Route path="/" exact>
              <Home config={config} />
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
