const express = require('express')
const router = express.Router();

const NgoController = require('../controllers/Ngo')

router.get('/',NgoController.index);
router.post('/show', NgoController.show);
router.post('/store', NgoController.store);
router.post('/update', NgoController.update);

module.exports = router