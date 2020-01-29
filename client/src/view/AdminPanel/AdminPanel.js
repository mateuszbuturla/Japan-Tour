import React from 'react';
import { Redirect, Link, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import AdminMainPlaces from '../AdminMainPlaces/AdminMainPlaces';
import AdminAttractions from '../AdminAttractions/AdminAttractions';
import AdminAddPlace from '../AdminAddPlace/AdminAddPlace';
import AdminAddAttractions from '../AdminAddAttraction/AdminAddAttraction';

import './adminPanel.sass';

class AdminPanel extends React.Component {

    state = {
        logout: false,
    }

    logout() {
        const cookies = new Cookies();
        cookies.remove('user');
        this.setState({ logout: true })
    }

    render() {
        const { user } = this.props;
        const { logout } = this.state;

        return (
            <>
                {user === undefined && <Redirect to="/admin" />}
                {logout === true && <Redirect to="/admin" />}
                <nav className="admin-panel-nav">
                    <ul className="admin-panel-nav__list">
                        <li><Link className="admin-panel-nav__link" to={`/adminpanel/mainplaces`}>Miejsca</Link></li>
                        <li><Link className="admin-panel-nav__link" to={`/adminpanel/attractions`}>Atrakcje</Link></li>
                        <li><Link className="admin-panel-nav__link" to={`/adminpanel/mainplaces/add`}>Dodaj miejsce</Link></li>
                        <li><Link className="admin-panel-nav__link" to={`/adminpanel/attractions/add`}>Dodaj Atrakcje</Link></li>
                        <li><p className="admin-panel-nav__link" onClick={this.logout.bind(this)}>Wyloguj</p></li>
                    </ul>
                </nav>
                <section className="admin-panel">
                    <Switch>
                        <Route path="/adminpanel/attractions/add" component={() => <AdminAddAttractions user={user} config={this.props.config} />} exact />
                        <Route path="/adminpanel/mainplaces/add" component={() => <AdminAddPlace user={user} config={this.props.config} />} exact />
                        <Route path="/adminpanel/mainplaces" component={() => <AdminMainPlaces user={user} config={this.props.config} />} exact />
                        <Route path="/adminpanel/attractions" component={() => <AdminAttractions user={user} config={this.props.config} />} exact />} />
                    </Switch>
                </section>
            </>
        );
    }
}

export default AdminPanel;
