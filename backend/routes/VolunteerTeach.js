const express = require('express')
const router = express.Router();

const VolunteerTeachController = require('../controllers/VolunteerTeach')

router.get('/',VolunteerTeachController.index);
router.post('/store', VolunteerTeachController.store);
//router.post('/googlelogin', IndividualController.googlelogin);

module.exports = router