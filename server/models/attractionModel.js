const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const attractionModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    name: { type: String, required: true },
    imgsrc: { type: String, required: true },
    description: { type: String, required: true },
    parentPlaceId: { type: String, required: true },
})

module.exports = mongoose.model('attraction', attractionModel);