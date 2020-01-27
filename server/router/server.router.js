const mainPositionController = require('../controllers/mainPositionController');

module.exports = (app) => {

    app.post('/api/getmainposition', mainPositionController.getMainPosition);

    app.post('/api/getmainplacebyname/:name', mainPositionController.getMainPlaceByName);

}