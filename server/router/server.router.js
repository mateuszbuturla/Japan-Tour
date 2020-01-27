const mainPositionController = require('../controllers/mainPositionController');
const placeController = require('../controllers/placeController');

module.exports = (app) => {

    app.post('/api/getmainposition', mainPositionController.getMainPosition);

    app.post('/api/getmainplacebyname/:name', mainPositionController.getMainPlaceByName);

    app.post('/api/getplacebyparentplaceid/:id', placeController.getPlaceByPatentPlaceId);

}