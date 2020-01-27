const placeModel = require('../models/placeModel');

exports.getPlaceByPatentPlaceId = async (req, res) => {
    try {
        res.status(200).json(await placeModel.find({ parentPlaceId: req.params.id }))
    } catch (err) {
        res.status(500).json(err);
    }
}