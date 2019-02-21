var pageController = require('../controllers/page.js');

module.exports = function(app, db) {

	app.get('/', pageController.landing);

}
