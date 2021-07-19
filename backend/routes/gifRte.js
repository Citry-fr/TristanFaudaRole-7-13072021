const express = require('express');
const router = express.Router();
const gifCtrl = require('../controllers/gifCtrl');

const auth = require('../middlewares/auth');

router.post('/', auth, gifCtrl.postGif);
router.get('/:userId', auth, gifCtrl.getUserGifs);
router.get('/', auth, gifCtrl.getAllGifs);
router.delete('/:gifId', auth, gifCtrl.deleteGif);
router.put('/:gifId', auth, gifCtrl.modifyGif);

module.exports = router;