const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const placeModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: true },
})

module.exports = mongoose.model('users', placeModel);