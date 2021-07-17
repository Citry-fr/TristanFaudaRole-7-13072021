const express = require('express');
const router = express.Router();
const gifCtrl = require('../controllers/gifCtrl');

const auth = require('../middlewares/auth');

router.post('/', gifCtrl.postGif);
router.get('/:userId', gifCtrl.getUserGifs);
router.get('/', gifCtrl.getAllGifs);
router.delete('/:gifId', gifCtrl.deleteGif);
router.put('/:gifId', gifCtrl.modifyGif);

module.exports = router;