const mainPositionController = require('../controllers/mainPositionController');

module.exports = (app) => {

    app.get('/api/getmainposition', mainPositionController.getMainPosition);

}