import React from 'react';
import { Redirect, Link, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import AdminMainPlaces from './AdminMainPlaces/AdminMainPlaces';
import AdminAttractions from './AdminAttractions/AdminAttractions';

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
                <section className="admin-panel">
                    <h2>Admin panel</h2>
                    <Link to={`/adminpanel/mainplaces`}>Miejsca</Link><br />
                    <Link to={`/adminpanel/attractions`}>Atrakcje</Link>
                    <p onClick={this.logout.bind(this)}>Wyloguj</p>
                    <Switch>
                        <Route path="/adminpanel/mainplaces" component={() => <AdminMainPlaces user={user} />} exact />
                        <Route path="/adminpanel/attractions" component={() => <AdminAttractions user={user} />} exact />} />
                    </Switch>
                </section>
            </>
        );
    }
}

export default AdminPanel;
