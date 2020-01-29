const mainPositionController = require('../controllers/mainPositionController');
const attractionController = require('../controllers/attractionController.js');
const userController = require('../controllers/userController');

module.exports = (app) => {

    app.post('/api/getmainposition', mainPositionController.getMainPosition);

    app.post('/api/mainplace/remove/:mainplaceid/:userid/:usertoken', mainPositionController.removePlace);

    app.post('/api/mainplace/add', mainPositionController.addPlace);

    app.post('/api/getmainplacebyname/:name', mainPositionController.getMainPlaceByName);

    app.post('/api/attraction/remove/:attractionid/:userid/:usertoken', attractionController.removeAttraction);

    app.post('/api/attraction/add', attractionController.addAttraction);

    app.post('/api/getattractions', attractionController.getAttractions);

    app.post('/api/getattractionbymainplaceid/:id', attractionController.getAttractionByMainPlaceId);

    app.post('/api/login/:login/:password', userController.login);

}