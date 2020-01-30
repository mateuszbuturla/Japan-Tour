import React from 'react';
import { Link } from 'react-router-dom';

import AdminViewAttractionsMenu from './Menu/AdminAttractionsMenu';
import './adminAttractions.sass';

class AdminAttractions extends React.Component {

    state = {
        mainPlaces: undefined,
        attractions: [],
        message: '',
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        try {
            const mainPlaceId = this.props.match.params.mainPlaceId;
            fetch(`${this.props.config.api}/api/getmainplacebyid/${mainPlaceId}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    if (r.length > 0)
                        this.setState({ mainPlaces: r[0] })
                })
            fetch(`${this.props.config.api}/api/getattractionbymainplaceid/${mainPlaceId}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    this.setState({ attractions: r })
                })
        }
        catch {
            this.setState({ mainPlaces: undefined })
        }
    }

    removeAttraction(e) {
        const { user } = this.props;
        fetch(`${this.props.config.api}/api/attraction/remove/${e.target.id}/${user._id}/${user.token}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ message: r.message })
                this.getData();
            })
    }

    render() {
        const { attractions, message, mainPlaces } = this.state;
        const _attractions = attractions.map(attraction => <div key={attraction._id} className="attraction-data">
            <p className="attraction-data__p">{attraction.name}</p>
            <p className="attraction-data__p">{attraction.description}</p>
            <div className="attraction-data__button-container">
                <Link className="attraction-data__button" to={`/adminpanel/attractions/edit/${attraction._id}`}>Edytuj</Link>
                <button id={attraction._id} onClick={this.removeAttraction.bind(this)} className="attraction-data__button">Usuń</button>
            </div>
        </div>);
        return (
            <div className="admin-panel-attractions-list">
                <ul className="admin-panel-attractions-list__menu-list">
                    <AdminViewAttractionsMenu config={this.props.config} />
                </ul>
                {message !== '' &&
                    <div className="admin-panel-attractions-list__message">
                        <p>{message}</p>
                    </div>
                }
                {mainPlaces !== undefined &&
                    <>
                        <h2 className="admin-panel-attractions-list__header">Atrakcje w {mainPlaces.name}</h2>
                        <div className="admin-panel-attractions-list__container">
                            {_attractions}
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default AdminAttractions;
