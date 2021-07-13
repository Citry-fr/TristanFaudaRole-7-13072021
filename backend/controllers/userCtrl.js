const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {User} = require('../sequelize');

exports.signup = (req, res, next) => {    
    const userObject = req.body;
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create({
                ...userObject,
                password: hash
            }).then(user => res.json(user));
        }); 

};

exports.login = (req, res, next) => {
    User.findOne({ where: {email: req.body.email}})
        .then(user => {
            if(!user){
                return res.status(401).json({ error: 'Utilisateur inconnu.'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({error: 'Mot de passe incorrect'});
                    }
                    res.status(200).json({
                        userId: user.id,
                        email: user.email,
                        token: jwt.sign(
                            {userId: user.id},
                            'needToChangeThis',
                            {expiresIn: '24h'}
                        )
                    });
                })
        });
};

exports.getAllUsers = (req, res, next) => {
    User.findAll().then(users => res.status(200).json(users)).catch(error => res.status(500).json({ error }));
}