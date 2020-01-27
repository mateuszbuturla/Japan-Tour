const mainPositionModel = require('../models/mainPositionModel');
const userModel = require('../models/userModel');

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

exports.removePlace = async (req, res) => {
    const { mainplaceid, userid, usertoken } = req.params;
    try {
        const user = await userModel.find({ _id: userid, token: usertoken })
        if (user.length > 0) {
            mainPositionModel.deleteOne({ _id: mainplaceid }, (err) => {
                if (err)
                    return console.log(err)

                res.status(200).json({ message: 'Miejsce zostało usunięte' });
            })
        }
        else {
            res.status(200).json({ message: 'Nie poprawny token użytkownika' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}