const mainPositionController = require('../controllers/mainPositionController');
const placeController = require('../controllers/placeController');
const userController = require('../controllers/userController');

module.exports = (app) => {

    app.post('/api/getmainposition', mainPositionController.getMainPosition);

    app.post('/api/mainplace/remove/:mainplaceid/:userid/:usertoken', mainPositionController.removePlace);

    app.post('/api/mainplace/add', mainPositionController.addPlace);

    app.post('/api/getmainplacebyname/:name', mainPositionController.getMainPlaceByName);

    app.post('/api/getplacebyparentplaceid/:id', placeController.getPlaceByPatentPlaceId);

    app.post('/api/login/:login/:password', userController.login);

}