//Importation d'express
const express = require('express');

//Création du router avec express
const router = express.Router();

//Importation du contrôleur gif
const gifCtrl = require('../controllers/gifCtrl');

//Importation du middleware auth
const auth = require('../middlewares/auth');

//Définition des différentes route gif
router.post('/', auth, gifCtrl.postGif);
router.get('/:gifId', auth, gifCtrl.getGif);
router.get('/', auth, gifCtrl.getAllGifs);
router.delete('/:gifId', auth, gifCtrl.deleteGif);
router.put('/:gifId', auth, gifCtrl.modifyGif);

//Export du router
module.exports = router;