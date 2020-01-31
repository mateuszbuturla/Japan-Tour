const attractionModel = require('../models/attractionModel.js');
const userModel = require('../models/userModel');
const uuid = require('uuid');
const mongoose = require('mongoose');
const config = require('../config');

exports.getAttractionByMainPlaceId = async (req, res) => {
    try {
        res.status(200).json(await attractionModel.find({ parentPlaceId: req.params.id }))
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.addAttraction = async (req, res) => {
    const { name, description, userid, usertoken, parentPlace } = req.body;

    if (config.allowEditData) {
        if (req.files === null && name !== '' && description !== '' && parentPlace !== '')
            return res.status(400).json({ message: 'Brak zdjęcia lub nie uzupełniowo wszystkich pól' });

        try {
            const user = await userModel.find({ _id: userid, token: usertoken })
            if (user.length > 0) {
                const file = req.files.file;
                const fileuuid = uuid();
                file.mv(`${__dirname}/../../client/build/upload/${fileuuid}.jpg`, err => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send(err);
                    }
                    file.mv(`${__dirname}/../../client/public/upload/${fileuuid}.jpg`, err => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send(err);
                        }

                        attractionModel.create({ _id: mongoose.Types.ObjectId(), name: name, description: description, imgsrc: `${fileuuid}.jpg`, parentPlaceId: parentPlace }, (err) => {
                            if (err)
                                return console.log(err)

                            res.status(200).json({ message: 'Atrakcja została dodana' });
                        })
                    });
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
}

exports.getAttractions = async (req, res) => {
    try {
        res.status(200).json(await attractionModel.find())
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.removeAttraction = async (req, res) => {
    if (config.allowEditData) {
        const { attractionid, userid, usertoken } = req.params;
        try {
            const user = await userModel.find({ _id: userid, token: usertoken })
            if (user.length > 0) {
                attractionModel.deleteOne({ _id: attractionid }, (err, eqw) => {
                    if (err)
                        return console.log(err)

                    res.status(200).json({ message: 'Atrakcja zostało usunięte' });
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

exports.getAttractionsById = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await attractionModel.find({ _id: id }))
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.editAttraction = async (req, res) => {
    const { id, name, description, userid, usertoken } = req.body;

    if (config.allowEditData) {
        if (!Boolean(name) || !Boolean(description))
            return res.status(200).json({ message: 'Nie uzupełniowo wszystkich pól' });

        try {
            const user = await userModel.find({ _id: userid, token: usertoken })
            if (user.length > 0) {
                const files = req.files;
                if (files !== null) {
                    const fileuuid = uuid();
                    const file = req.files.file;
                    file.mv(`${__dirname}/../../client/public/upload/${fileuuid}.jpg`, err => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send(err);
                        }
                        file.mv(`${__dirname}/../../client/public/upload/${fileuuid}.jpg`, err => {
                            if (err) {
                                console.error(err);
                                return res.status(500).send(err);
                            }

                            attractionModel.updateOne({ _id: id }, { name: name, description: description, imgsrc: `${fileuuid}.jpg` }, (err) => {
                                if (err)
                                    return console.log(err)

                                res.status(200).json({ message: 'Atrakcja została zaktualizowana' });
                            })
                        })
                    })
                }
                else {
                    attractionModel.updateOne({ _id: id }, { name: name, description: description }, (err) => {
                        if (err)
                            return console.log(err)

                        res.status(200).json({ message: 'Atrakcja została zaktualizowana' });
                    })
                }
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