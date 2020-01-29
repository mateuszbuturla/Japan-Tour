import React from 'react';
import { Link } from 'react-router-dom';

import './adminMainPlaces.sass';

class AdminMainPlaces extends React.Component {

    state = {
        mainPlaces: [],
        message: ''
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(`${this.props.config.api}/api/getmainposition`, { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ mainPlaces: r }))
    }

    removeMainPlace(e) {
        const { user } = this.props;
        fetch(`${this.props.config.api}/api/mainplace/remove/${e.target.id}/${user._id}/${user.token}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ message: r.message })
                this.getData();
            })
    }

    render() {
        const { mainPlaces, message } = this.state;
        const _mainPlaces = mainPlaces.map(mainPlace => <div key={mainPlace._id} className="main-place-data">
            <p className="main-place-data__p">{mainPlace.name}</p>
            <p className="main-place-data__p">{mainPlace.description}</p>
            <button id={mainPlace._id} onClick={this.removeMainPlace.bind(this)} className="main-place-data__remove-button">Usuń</button>
        </div>)
        return (
            <div className="admin-panel-places-list">
                {message !== '' &&
                    <div className="admin-panel-places-list__message">
                        <p>{message}</p>
                    </div>
                }
                <table className="admin-panel-places-list__container">
                    {_mainPlaces}
                </table>
            </div>
        );
    }
}

export default AdminMainPlaces;
