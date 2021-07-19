const express = require('express');
const router = express.Router();
const comCtrl = require('../controllers/comCtrl');

const auth = require('../middlewares/auth');

router.post('/:gifId', comCtrl.postComment);
router.put('/:gifId/:comId', comCtrl.modifyComment);
router.delete('/:comId', comCtrl.deleteComment);

module.exports = router;