const express = require('express')
const router = express.Router();

const VolunteerNgoController = require('../controllers/VolunteerNgo')

router.get('/',VolunteerNgoController.index);
router.post('/store', VolunteerNgoController.store);
//router.post('/googlelogin', IndividualController.googlelogin);

module.exports = router