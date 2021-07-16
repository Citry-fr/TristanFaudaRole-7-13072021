const express = require('express');
const router = express.Router();
const comCtrl = require('../controllers/comCtrl');

const auth = require('../middlewares/auth');

router.post('/:gifId', auth, comCtrl.postComment);

module.exports = router;