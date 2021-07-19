const express = require('express');
const router = express.Router();
const comCtrl = require('../controllers/comCtrl');

const auth = require('../middlewares/auth');

router.post('/:gifId', auth, comCtrl.postComment);
router.put('/:gifId/:comId', auth, comCtrl.modifyComment);
router.delete('/:comId', auth, comCtrl.deleteComment);

router.get('/admin/comment', auth, comCtrl.getPendingComment);
router.put('/admin/comment/:comId', auth, comCtrl.acceptComment);

module.exports = router;