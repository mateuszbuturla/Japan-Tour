import React from 'react';
import axios from 'axios';

import './adminEditMainPlaces.sass';

class AdminAttractions extends React.Component {

    state = {
        file: '',
        attraction: undefined,
        description: '',
        name: '',
        message: ''
    }

    handleImageChange(e) {
        this.setState({ file: e.target.files[0] })
    };

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    componentDidMount() {
        this.getData(this.props.match.params.id);
    }

    getData(id) {
        try {
            fetch(`${this.props.config.api}/api/getmainplacebyid/${id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => this.setState({ name: r[0].name, description: r[0].description }))
        }
        catch{
            this.setState({ message: 'Wystąpił problem spróbuj ponownie później' })
        }
    }

    async editMainPlace(e) {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { name, description, file } = this.state;
        const { user } = this.props;
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('file', file);
        formData.append('description', description);
        formData.append('userid', user._id);
        formData.append('usertoken', user.token);

        if (name.length > 0 && description.length > 0) {
            try {
                fetch(`${this.props.config.api}/api/getmainplacebyname/${name}`, { method: 'POST' })
                    .then(r => r.json())
                    .then(r => {
                        if (r.length === 0 || (r.length !== 0 && r[0]._id === id)) {
                            try {
                                axios.post(`${this.props.config.api}/api/mainplace/edit`, formData, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    },
                                })
                                    .then(r => {
                                        this.setState({ message: r.data.message })
                                    })

                            } catch (err) {
                                this.setState({ message: 'Wystąpił nieoczekiwany błąd' })
                            }
                        }
                        else
                            this.setState({ message: 'Podana nazwa jest już zajęta' })
                    })
            }
            catch
            {
                this.setState({ message: 'Wystąpił nieoczekiwany błąd' })
            }
        }
        else {
            this.setState({ message: 'Uzupełnij wszystkie pola' })
        }
    }

    render() {
        const { message, name, description } = this.state;
        return (
            <div className="admin-panel-edit-main-place">
                {message !== '' &&
                    <div className="admin-panel-edit-main-place__message">
                        <p>{message}</p>
                    </div>
                }
                <div className="admin-panel-edit-main-place">
                    <form onSubmit={this.editMainPlace.bind(this)} className="admin-panel-edit-main-place__container">
                        <input
                            className="admin-panel-edit-main-place__input"
                            type="text" id="name"
                            value={name}
                            placeholder="Nazwa"
                            onChange={this.handleInputChange.bind(this)}
                        /><br />

                        <textarea
                            className="admin-panel-edit-main-place__input"
                            id="description"
                            value={description}
                            placeholder="Opis"
                            onChange={this.handleInputChange.bind(this)}
                        ></textarea><br />

                        <input
                            className="admin-panel-edit-main-place__select-image-input"
                            type='file'
                            onChange={this.handleImageChange.bind(this)}
                        /><br />

                        <input
                            className="admin-panel-edit-main-place__submit-input"
                            type='submit'
                            value='Zapisz'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AdminAttractions;
