const {Gif, User, Comment} = require('../sequelize');

exports.postGif = (req, res, next) => {
    const gif = new Gif({
        ...req.body
    });
    Gif.create({...gif.dataValues})
        .then(gif => res.json(gif));
};

exports.getUserGifs = (req, res, next) => {
    User.findAll({
        where: { id: req.params.userId},
        include: [Gif, Comment]
        }).then(gifs => res.json(gifs));
}

exports.getAllGifs = (req, res, next) => {
    Gif.findAll({
        include: [User, Comment]
    }).then(gifs => res.json(gifs));
}

exports.deleteGif = (req, res, next) => {
    Comment.destroy({where: {gifId: req.params.gifId}})
        .then(() => {
            Gif.destroy({where: {id: req.params.gifId}})
                .then(res.status(200).json({ message: "Gif et commentaires lié supprimé !"}));
        });
}
exports.modifyGif = (req, res, next) => {
    Gif.update(
        {
            ...req.body
        },
        {
            where: {id: req.params.gifId}
        }
    ).then(gif => res.status(200).json({ message: "Gif modifié !"}))
     .catch(error => res.status(401).json({ error: error }));
}