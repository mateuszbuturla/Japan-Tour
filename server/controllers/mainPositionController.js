const mainPositionModel = require('../models/mainPositionModel');

exports.getMainPosition = async (req, res) => {
    try {
        res.status(200).json(await mainPositionModel.find())
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getMainPlaceByName = async (req, res) => {
    try {
        res.status(200).json(await mainPositionModel.find({ name: req.params.name }))
    } catch (err) {
        res.status(500).json(err);
    }
}