const router = require('express').Router();
const controller = require('../controllers/photoCtrl');

router.get('/getAllAlbums', controller.getAllAlbums);
//router.post('/createNewCloudinaryFolder', controller.createNewCloudinaryFolder);

module.exports = router;