const mainPositionModel = require('../models/mainPositionModel');
const userModel = require('../models/userModel');
const uuid = require('uuid');
const mongoose = require('mongoose');
const config = require('../config');

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
    if (config.allowEditData) {
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
    else
        res.status(200).json({ message: 'Administrator zablokował możliwość edytowania strony' });
}

exports.addPlace = async (req, res) => {
    if (config.allowEditData) {
        const { name, description, userid, usertoken } = req.body;

        if (req.files === null && name !== '' && description !== '') {
            return res.status(400).json({ message: 'Brak zdjęcia lub nie uzupełniowo wszystkich pól' });
        }

        try {
            const user = await userModel.find({ _id: userid, token: usertoken })
            if (user.length > 0) {
                const file = req.files.file;
                const fileuuid = uuid();

                file.mv(`${__dirname}/../../client/public/upload/${fileuuid}.jpg`, err => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send(err);
                    }

                    mainPositionModel.create({ _id: mongoose.Types.ObjectId(), name: name, description: description, imgsrc: `${fileuuid}.jpg` }, (err) => {
                        if (err)
                            return console.log(err)

                        res.status(200).json({ message: 'Miejsce zostało dodane' });
                    })
                });
            }
            else {
                res.status(200).json({ message: 'Nie poprawny token użytkownika' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else
        res.status(200).json({ message: 'Administrator zablokował możliwość edytowania strony' });
};