const express = require('express')
const router = express.Router();

const IndividualController = require('../controllers/Individual.js')

router.get('/',IndividualController.index);
router.post('/show', IndividualController.show);
router.post('/store', IndividualController.store);
router.post('/update', IndividualController.update);
//router.post('/googlelogin', IndividualController.googlelogin);

module.exports = router