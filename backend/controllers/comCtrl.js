//Imprtation de model Comment après initialisation avec Sequelize
const {Comment, User} = require('../sequelize');

//Route pour poster un commentaire
exports.postComment = (req, res, next) => {
    const com = new Comment({
        ...req.body,
        gifId: req.params.gifId
    })
    Comment.create({...com.dataValues})
        .then(com => res.status(200).json(com))
        .catch(error => res.status(400).json({ error }));
}

//Route pour Modifier un commentaire
exports.modifyComment = (req, res, next) => {    
    Comment.update(
        {
            text: req.body.text,
            status: 0
        },
        {
            where: {id: req.params.comId}
        })
            .then(() => res.status(200).json({ message: "Commentaire modifié !"}))
            .catch(error => res.status(401).json({ error: error }));
}

//Route pour supprimer un commentaire
exports.deleteComment = (req, res, next) => {
    Comment.destroy({ where: { id: req.params.comId }})
        .then(res.status(200).json({ message: "Commentaire Supprimé !"}))
        .catch(error => res.status(500).json({ error }));
}

//Route pour récuperer tout les commentaire en attente de validation par l'admin
exports.getPendingComment = (req, res, next) => {
    Comment.findAll({ where: {status: 0}})
        .then(coms => res.json(coms))
        .catch(error => res.status(400).json({ error }));
}

//Route pour accepter un commentaire, utilisable que par l'admin
exports.acceptComment = (req, res, next) => {    
    Comment.update(
        {
            status: req.body.status
        },
        {
            where: {id: req.params.comId}
        })
            .then(() => res.status(200).json({ message: "Commentaire Accepté !"}))
            .catch(error => res.status(401).json({ error }));
}

exports.getOneCom = (req, res, next) => {
    Comment.findOne({where: {id: req.params.id}, include : [User]})
    .then(com => res.json(com))
    .catch(error => res.status(404).json({ error }));
}