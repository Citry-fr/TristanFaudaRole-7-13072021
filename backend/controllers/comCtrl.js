const {Comment} = require('../sequelize');

exports.postComment = (req, res, next) => {
    const comObject = req.body;
    Comment.create({
        ...comObject,
        gifId: req.params.gifId
    }).then(com => res.json(com));
}