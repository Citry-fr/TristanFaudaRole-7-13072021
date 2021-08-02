//Importation d'express
const express = require('express');

//Création du router avec express
const router = express.Router();

//Importation du contrôleur commentaire
const comCtrl = require('../controllers/comCtrl');

//Importation du middleware auth
const auth = require('../middlewares/auth');

//Définition des différente routes comment
router.post('/:gifId', auth, comCtrl.postComment);
router.put('/:gifId/:comId', auth, comCtrl.modifyComment);
router.delete('/:comId', auth, comCtrl.deleteComment);
router.get('/:id', auth, comCtrl.getOneCom);

//Définition des différente routes comment utilisable par l'admin
router.get('/admin/comment', auth, comCtrl.getPendingComment);
router.put('/admin/comment/:comId', auth, comCtrl.acceptComment);

//Export du router
module.exports = router;