const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

const auth = require('../middlewares/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/admin/users', auth, userCtrl.getAllUsers);
router.put('/admin/users/:id', auth, userCtrl.disableUser);

module.exports = router;