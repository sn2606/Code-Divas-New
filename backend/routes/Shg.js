const express = require('express')
const router = express.Router();

const ShgController = require('../controllers/Shg')

router.get('/',ShgController.index);
router.post('/show', ShgController.show);
router.post('/store', ShgController.store);
router.post('/update', ShgController.update);

module.exports = router