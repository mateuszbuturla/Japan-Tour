import React from 'react';
import axios from 'axios';

import './adminEditAttractions.sass';

class AdminAttractions extends React.Component {

    state = {
        attraction: undefined,
        description: '',
        name: '',
        message: ''
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    componentDidMount() {
        this.getData(this.props.match.params.id);
    }

    getData(id) {
        fetch(`${this.props.config.api}/api/getattractionsbyid/${id}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => this.setState({ name: r[0].name, description: r[0].description }))
    }

    async editAttraction(e) {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { name, description } = this.state;
        const { user } = this.props;
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('userid', user._id);
        formData.append('usertoken', user.token);

        try {
            const res = await axios.post(`${this.props.config.api}/api/attraction/edit`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
                .then(r => {
                    this.setState({ message: r.data.message, name: '', description: '' })
                })

        } catch (err) {
            this.setState({ message: 'Wystąpił nieoczekiwany błąd' })
        }
    }

    render() {
        const { message, name, description } = this.state;
        return (
            <div className="admin-panel-edit-place__container">
                {message !== '' &&
                    <div className="admin-panel-edit-attractions__message">
                        <p>{message}</p>
                    </div>
                }
                <div className="admin-panel-edit-place">
                    <form onSubmit={this.editAttraction.bind(this)} className="admin-panel-edit-place__container">
                        <input className="admin-panel-edit-place__input" type="text" id="name" value={name} placeholder="Nazwa" onChange={this.handleInputChange.bind(this)} /><br />
                        <textarea className="admin-panel-edit-place__input" id="description" value={description} placeholder="Opis" onChange={this.handleInputChange.bind(this)}></textarea><br />
                        <input className="admin-panel-edit-place__submit-input" type='submit' value='Zapisz' />
                    </form>
                </div>
            </div>
        );
    }
}

export default AdminAttractions;
