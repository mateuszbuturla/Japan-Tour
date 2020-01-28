import React, { Fragment, useState } from 'react';
import axios from 'axios';

import './adminAddAttraction.sass';

class AdminAddPlace extends React.Component {

    state = {
        file: '',
        name: '',
        description: '',
        message: '',
        mainPlaces: [],
        parentPlace: ''
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('http://localhost:4000/api/getmainposition', { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ mainPlaces: r })
                if (r.length > 0)
                    this.setState({ parentPlace: r[0]._id })
            })
    }

    handleImageChange(e) {
        this.setState({ file: e.target.files[0] })
    };

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    async onSubmit(e) {
        e.preventDefault();
        const { name, description, file, parentPlace } = this.state;
        const { user } = this.props;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('file', file);
        formData.append('userid', user._id);
        formData.append('usertoken', user.token);
        formData.append('parentPlace', parentPlace);

        try {
            const res = await axios.post('http://localhost:4000/api/attraction/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
                .then(r => {
                    this.setState({ message: r.data.message, file: '', name: '', description: '' })
                })

        } catch (err) {
            this.setState({ message: 'Wystąpił nieoczekiwany błąd' })
        }
    };

    render() {
        const { name, description, message, mainPlaces, parentPlace } = this.state;

        const _mainPlaces = mainPlaces.map(mainPlace => <option value={mainPlace._id}>{mainPlace.name}</option>)
        return (
            <div className="admin-panel-add-attraction">
                <div className="admin-panel-add-attraction__container">
                    {message !== '' &&
                        <div>
                            <p>{message}</p>
                        </div>
                    }
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input className="admin-panel-add-attraction__input" type="text" id="name" value={name} placeholder="Nazwa" onChange={this.handleInputChange.bind(this)} /><br />
                        <textarea className="admin-panel-add-attraction__input" id="description" value={description} placeholder="Opis" onChange={this.handleInputChange.bind(this)}></textarea><br />
                        <select className="admin-panel-add-attraction__list-input" value={parentPlace} id="parentPlace" onChange={this.handleInputChange.bind(this)}>
                            {_mainPlaces}
                        </select>
                        <input className="admin-panel-add-attraction__select-image-input" type='file' onChange={this.handleImageChange.bind(this)} /><br />
                        <input className="admin-panel-add-attraction__submit-input" type='submit' value='Upload' />
                    </form>
                </div>
            </div>
        );
    }
}

export default AdminAddPlace;
