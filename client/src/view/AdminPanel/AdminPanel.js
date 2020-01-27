import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

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
                    <p onClick={this.logout.bind(this)}>Wyloguj</p>
                </section>
            </>
        );
    }
}

export default AdminPanel;
