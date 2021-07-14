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
                        rank: user.rank,
                        token: jwt.sign(
                            {
                                userId: user.id,
                                rank: user.rank
                            },
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

exports.deleteUser = (req, res, next) => {
    User.findOne({where: {id: req.params.id}})
        .then(user => {
            User.destroy(user)
                .then(res.status(200).json({message: 'Utilisateur Supprimé'}))
                .then(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
}

exports.modifyUser = (req, res, next) => {
    User.findOne({where: {id: req.params.id}})
        .then( user => {
            const userObject = req.body;
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    user.update({
                        ...userObject,
                        password: hash
                    }).then(user => res.json(user));
                }); 
        })
    .catch(error => res.status(400).json({ error }));
}