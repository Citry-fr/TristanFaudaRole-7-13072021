//Importation des différents models requis pour les routes
const {Gif, User, Comment} = require('../sequelize');

//Route pour poster un gif
exports.postGif = (req, res, next) => {
    const gif = new Gif({
        ...req.body
    });
    Gif.create({...gif.dataValues})
        .then(gif => res.status(200).json({message: 'Post sauvegardé !'}))
        .catch(error => res.status(400).json({ error }));
};

//Route pour récupérer un gif
exports.getGif = (req, res, next) => {
    Gif.findOne({ where: {id: req.params.gifId}, 
        include: [
            User,
            Comment,
            {
                model: Comment,
                include: [User]
            }
        ]
    })
        .then(gif => res.json(gif))
        .catch(error => res.status(404).json({ error }));
}

//Route pour récupérer tout les gifs
exports.getAllGifs = (req, res, next) => {
    Gif.findAll({ include: [User, Comment] })
        .then(gifs => res.status(200).json(gifs))
        .catch(error => res.status(400).json({ error }));
}

//Route pour supprimer un gif
exports.deleteGif = (req, res, next) => {
    Comment.destroy({where: {gifId: req.params.gifId}})
        .then(() => {
            Gif.destroy({where: {id: req.params.gifId}})
                .then(res.status(200).json({ message: "Gif et commentaires lié supprimé !"}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
}

//Route pour modifier un gif
exports.modifyGif = (req, res, next) => {
    Gif.update(
        {
            ...req.body
        },
        {
            where: {id: req.params.gifId}
        }
    ).then(() => res.status(200).json({ message: "Gif modifié !"}))
     .catch(error => res.status(400).json({ error: error }));
}