const {User} = require('../sequelize');

exports.signup = (req, res, next) => {
    const userObject = req.body.user;
    User.create({
        ...userObject
    }).then(user => res.json(user));
}