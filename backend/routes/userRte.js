//Importation d'express
const express = require('express');

//Création du router avec express
const router = express.Router();

//Importation du contrôleur user
const userCtrl = require('../controllers/userCtrl');

//Importation du middleware auth
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

//Définition des différentes route user plus admin
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

router.get('/admin/users', auth, admin, userCtrl.getAllUsers);
router.put('/admin/users/:id', auth, admin, userCtrl.disableUser);
router.delete('/admin/users/:id', auth, admin, userCtrl.deleteUser)

//Export du router
module.exports = router;