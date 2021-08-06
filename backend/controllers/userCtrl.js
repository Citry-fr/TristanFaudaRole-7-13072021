//Importation de bcrypt et jsonwebtoken et de filesystem
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

//Importation du model User
const {User, Gif, Comment} = require('../sequelize');

//Route création d'un utilisateur
exports.signup = (req, res, next) => {    
    const userObject = req.body;
    console.log(userObject);
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create({
                ...userObject,
                password: hash,
                isDisabled: false
            }).then(user => res.status(201).json({ message: 'Utilisateur créé !'}))
              .catch(error => res.status(400).json({ error: 'Email déjà utilisée !' }));
        })
        .catch(error => res.status(500).json({ error }));
};


//Route connection d'un utilisateur
exports.login = (req, res, next) => {
    User.findOne({ where: {email: req.body.email}})
        .then(user => {
            if(!user || user.isDisabled){
                return res.status(401).json({ error: 'Utilisateur inconnu ou compte désactivé.'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({error: 'Mot de passe incorrect'});
                    }
                    res.status(200).json({
                        rank: user.rank,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        userId: user.id,
                        token: jwt.sign(
                            {
                                userId: user.id,
                                rank: user.rank
                            },
                            process.env.TK,
                            {expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


//Route pour récupérer tout les utilisateur, utilisable par l'admin
exports.getAllUsers = (req, res, next) => {
    User.findAll({ where: {rank: 0}})
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json({ error }));
};

//Route pour désactivé le compte d'un utilisateur, utilisable par l'admin
exports.disableUser = (req, res, next) => {
    User.update(
        {
            ...req.body
        },
        {
            where: { id: req.params.id }
        }
    )
    .then(() => {
        if(req.body.isDisabled == true){
            res.status(200).json({ message: 'Utilisateur désactivé !'})
        } else {
            res.status(200).json({ message: 'Utilisateur activé !'})
        }
    })
    .catch(err => res.status(404).json({ error: 'Utilisateur inexistant !'}));
};

exports.deleteUser = (req, res, next) => {
    Comment.destroy({
        where: {
            userId: req.params.id
        }
    })
    .then(() => res.status(200).json({ message: "Commentaires supprimé !"}))
    .catch(error => res.status(404).json({ error }));
    Gif.findAll({
        where: {userId: req.params.id}
    })
        .then(gifs => {
            for (const gif in gifs) {
                console.log(gifs[gif].dataValues);
                Comment.destroy({where: {gifId: gifs[gif].dataValues.id}})
                const filename = gifs[gif].dataValues.gifUrl.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () => {
                        Gif.destroy({where: {userId: req.params.id}})
                            .then(() => {
                                User.destroy({
                                    where: {
                                        id: req.params.id,
                                        isDisabled: true
                                    }
                                })
                                .then(() => res.status(200).json({ message: "Utilisateur supprimé !"}))
                                .catch(error => res.status(404).json({ error }));
                            })
                            .catch(error => res.status(500).json({ error }));
                    });
            }
            
        })
        .catch(error => res.status(500).json({ error }));
}