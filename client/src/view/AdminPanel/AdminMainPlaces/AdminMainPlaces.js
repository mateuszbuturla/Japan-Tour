import React from 'react';



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
            })
    }

    render() {
        const { mainPlaces, message } = this.state;
        const _mainPlaces = mainPlaces.map(mainPlace => <tr key={mainPlace._id}>
            <td>{mainPlace._id}</td>
            <td>{mainPlace.name}</td>
            <td>{mainPlace.description}</td>
            <td><button id={mainPlace._id} onClick={this.removeMainPlace.bind(this)}>Usuń</button></td>
        </tr>)
        return (
            <div>
                <p>Admin main places</p>
                {message !== '' &&
                    <div>
                        <p>{message}</p>
                    </div>
                }
                <table border="1">
                    <tr>
                        <td>ID</td>
                        <td>Nazwa</td>
                        <td>Opis</td>
                    </tr>
                    {_mainPlaces}
                </table>
            </div>
        );
    }
}

export default AdminMainPlaces;
