import React from 'react';

import './adminAttractions.sass';

class AdminAttractions extends React.Component {

    state = {
        attractions: [],
        message: ''
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(`${this.props.config.api}/api/getattractions`, { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ attractions: r }))
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
        const { attractions, message } = this.state;
        const _attractions = attractions.map(attraction => <div key={attraction._id} className="attraction-data">
            <p className="attraction-data__p">{attraction.name}</p>
            <p className="attraction-data__p">{attraction.description}</p>
            <button id={attraction._id} onClick={this.removeAttraction.bind(this)} className="attraction-data__remove-button">Usuń</button>
        </div>)
        return (
            <div className="admin-panel-attractions-list">
                {message !== '' &&
                    <div className="admin-panel-attractions-list__message">
                        <p>{message}</p>
                    </div>
                }
                <div className="admin-panel-attractions-list__container">
                    {_attractions}
                </div>
            </div>
        );
    }
}

export default AdminAttractions;
