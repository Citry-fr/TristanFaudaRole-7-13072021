const {Comment} = require('../sequelize');

exports.postComment = (req, res, next) => {
    const com = new Comment({
        ...req.body,
        gifId: req.params.gifId
    })
    Comment.create({...com.dataValues})
        .then(com => res.json(com));
}

exports.modifyComment = (req, res, next) => {    
    Comment.update(
        {
            ...req.body,
            gifId: req.params.gifId
        },
        {
            where: {id: req.params.comId}
        })
            .then(() => res.status(200).json({ message: "Commentaire modifié !"}))
            .catch(error => res.status(401).json({ error: error }));
}
exports.deleteComment = (req, res, next) => {
    Comment.destroy({ where: { id: req.params.comId }})
        .then(res.status(200).json({ message: "Commentaire Supprimé !"}))
        .catch(error => res.status(500).json({ error }));
}

exports.getPendingComment = (req, res, next) => {
    Comment.findAll({ where: {status: 0}})
        .then(coms => res.json(coms));
}

exports.acceptComment = (req, res, next) => {    
    Comment.update(
        {
            status: req.body.status
        },
        {
            where: {id: req.params.comId}
        })
            .then(() => res.status(200).json({ message: "Commentaire Accepté !"}))
            .catch(error => res.status(401).json({ error: error }));
}