import React from 'react';
import { Link } from 'react-router-dom';

class AdminAttractionsMenu extends React.Component {

    state = {
        mainPlaces: [],
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(`${this.props.config.api}/api/getmainposition`, { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ mainPlaces: r }))
    }

    render() {
        const { mainPlaces } = this.state;
        const mainPlacesSelectors = mainPlaces.map(mainPlace => <Link className="admin-panel-attractions-list__menu-link-a" key={mainPlace._id} to={`/adminpanel/attractions/${mainPlace._id}`}>
            <li className="admin-panel-attractions-list__menu-link">
                <a>{mainPlace.name}</a>
            </li>
        </Link>)
        return (
            <div>
                {mainPlacesSelectors}
            </div>
        );
    }
}

export default AdminAttractionsMenu;
