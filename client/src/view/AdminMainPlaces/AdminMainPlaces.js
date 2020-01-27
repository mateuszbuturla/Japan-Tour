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
        fetch('http://localhost:4000/api/getmainposition', { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ mainPlaces: r }))
    }

    removeMainPlace(e) {
        const { user } = this.props;
        fetch(`http://localhost:4000/api/mainplace/remove/${e.target.id}/${user._id}/${user.token}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ message: r.message })
                this.getData();
            })
    }

    render() {
        const { mainPlaces, message } = this.state;
        const _mainPlaces = mainPlaces.map(mainPlace => <tr key={mainPlace._id}>
            <td>{mainPlace._id}</td>
            <td>{mainPlace.name}</td>
            <td>{mainPlace.description}</td>
            <td><button id={mainPlace._id} onClick={this.removeMainPlace.bind(this)} className="admin-panel__remove-button">Usuń</button></td>
        </tr>)
        return (
            <div className="admin-panel-places-list">
                <p className="admin-panel__header">Lista miejsc:</p>
                {message !== '' &&
                    <div>
                        <p>{message}</p>
                    </div>
                }
                <table className="admin-panel-places-list__table">
                    <tr className="admin-panel-places-list__row">
                        <td className="admin-panel-places-list__collumn">ID</td>
                        <td className="admin-panel-places-list__collumn">Nazwa</td>
                        <td className="admin-panel-places-list__collumn">Opis</td>
                    </tr>
                    {_mainPlaces}
                </table>
            </div>
        );
    }
}

export default AdminMainPlaces;
