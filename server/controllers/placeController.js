const placeModel = require('../models/placeModel');
const userModel = require('../models/userModel');
const uuid = require('uuid');
const mongoose = require('mongoose');

exports.getPlaceByPatentPlaceId = async (req, res) => {
    try {
        res.status(200).json(await placeModel.find({ parentPlaceId: req.params.id }))
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.addAttraction = async (req, res) => {
    const { name, description, userid, usertoken, parentPlace } = req.body;

    if (req.files === null && name !== '' && description !== '' && parentPlace !== '') {
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

                placeModel.create({ _id: mongoose.Types.ObjectId(), name: name, description: description, imgsrc: `${fileuuid}.jpg`, parentPlaceId: parentPlace }, (err) => {
                    if (err)
                        return console.log(err)

                    res.status(200).json({ message: 'Atrakcja została dodana' });
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