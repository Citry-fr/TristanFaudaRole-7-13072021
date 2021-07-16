const express = require('express');
const router = express.Router();
const gifCtrl = require('../controllers/gifCtrl');

const auth = require('../middlewares/auth');

router.post('/', auth, gifCtrl.postGif);
router.get('/:userId', auth, gifCtrl.getUserGifs);

module.exports = router;