const {Gif, User} = require('../sequelize');

exports.postGif = (req, res, next) => {
    const gifObject = req.body;
    Gif.create(        
        {
            ...gifObject
        },
        /*{
            include: [{
                association: User,
                include: [User.id]
            }]
        }*/
    ).then(gif => res.json(gif));
};