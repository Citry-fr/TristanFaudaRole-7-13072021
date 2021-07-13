const bcrypt = require('bcrypt');

const {User} = require('../sequelize');

exports.signup = (req, res, next) => {    
    const userObject = req.body;
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create({
                ...userObject,
                password: hash
            }).then(user => res.json(user));
        })   

}