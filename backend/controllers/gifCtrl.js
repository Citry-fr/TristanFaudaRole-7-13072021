const {Gif, User, Comment} = require('../sequelize');

exports.postGif = (req, res, next) => {
    const gifObject = req.body;
    Gif.create(        
        {
            ...gifObject
        }
    ).then(gif => res.json(gif));
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