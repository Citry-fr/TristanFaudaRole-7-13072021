//Importation d'express
const express = require('express');

//Création du router avec express
const router = express.Router();

//Importation du contrôleur user
const userCtrl = require('../controllers/userCtrl');

//Importation du middleware auth
const auth = require('../middlewares/auth');

//Définition des différentes route user plus admin
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/admin/users', auth, userCtrl.getAllUsers);
router.put('/admin/users/:id', auth, userCtrl.disableUser);

//Export du router
module.exports = router;