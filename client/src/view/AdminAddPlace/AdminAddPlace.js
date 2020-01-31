import React, { Fragment, useState } from 'react';
import axios from 'axios';

import './adminAddPlace.sass';

class AdminAddPlace extends React.Component {

    state = {
        file: '',
        name: '',
        description: '',
        message: '',
    }

    handleImageChange(e) {
        this.setState({ file: e.target.files[0] })
    };

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    async onSubmit(e) {
        e.preventDefault();
        const { name, description, file } = this.state;
        const { user } = this.props;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('file', file);
        formData.append('userid', user._id);
        formData.append('usertoken', user.token);

        if (name.length > 0 && description.length > 0) {
            if (file !== '') {
                try {
                    fetch(`${this.props.config.api}/api/getmainplacebyname/${name}`, { method: 'POST' })
                        .then(r => r.json())
                        .then(r => {
                            if (r.length === 0) {
                                try {
                                    axios.post(`${this.props.config.api}/api/mainplace/add`, formData, {
                                        headers: {
                                            'Content-Type': 'multipart/form-data'
                                        },
                                    })
                                        .then(r => {
                                            if (r.status === 200)
                                                this.setState({ message: r.data.message, file: '', name: '', description: '' })
                                            else
                                                this.setState({ message: r.message })
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
                this.setState({ message: 'Wybierz zdjęcie' })
            }
        }
        else {
            this.setState({ message: 'Uzupełnij wszystkie pola' })
        }
    };

    render() {
        const { name, description, message } = this.state;
        return (
            <div className="admin-panel-add-place">
                <div className="admin-panel-add-place__container">
                    {message !== '' &&
                        <div>
                            <p>{message}</p>
                        </div>
                    }
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input
                            className="admin-panel-add-place__input"
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Nazwa"
                            onChange={this.handleInputChange.bind(this)}
                        /><br />

                        <textarea
                            className="admin-panel-add-place__input"
                            id="description"
                            value={description}
                            placeholder="Opis"
                            onChange={this.handleInputChange.bind(this)}
                        ></textarea><br />

                        <input
                            className="admin-panel-add-place__select-image-input"
                            type='file'
                            onChange={this.handleImageChange.bind(this)}
                        /><br />

                        <input
                            className="admin-panel-add-place__submit-input"
                            type='submit'
                            value='Upload'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AdminAddPlace;
