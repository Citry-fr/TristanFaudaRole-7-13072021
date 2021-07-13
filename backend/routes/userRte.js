const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

const auth = require('../middlewares/auth');
const admin = require('../middlewares/rankAdmin');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', auth, admin, userCtrl.getAllUsers);

module.exports = router;