const userModel = require('../models/userModel');
const uuid = require('uuid');

exports.login = async (req, res) => {
    const { login, password } = req.params;
    try {
        const findUser = await userModel.find({ login: login, password: password });

        if (findUser.length > 0) {
            const token = uuid();
            const user = {
                _id: findUser[0]._id,
                login: findUser[0].login,
                token: token,
            }
            updateUserToken(token, findUser[0]._id);
            res.status(200).json({ user: user, status: 'correct' });
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateUserToken = (token, _id) => {
    userModel.update({ _id: _id }, { token: token }, { multi: false }, err => {
        if (err)
            return console.log(err)
    })
}