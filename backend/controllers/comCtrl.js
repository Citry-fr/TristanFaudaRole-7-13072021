const {Comment} = require('../sequelize');

exports.postComment = (req, res, next) => {
    const comObject = req.body;
    Comment.create({
        ...comObject,
        gifId: req.params.gifId
    }).then(com => res.json(com));
}

exports.modifyComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.comId }})
        .then(com => {
            const comObject = req.body;
            com.update({
                ...comObject,
                gifId: req.params.gifId
            }).then(com => res.json(com));
        }).catch(error => res.status(400).json({ error }));
}
exports.deleteComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.comId }})
        .then(com => {
            com.destroy()
                .then(res.status(200).json({ message: "Commentaire Supprimé !"}))
                //.catch(error => res.status(500).json({ error }));
        });
}