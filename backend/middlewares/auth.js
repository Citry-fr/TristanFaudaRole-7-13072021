const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'needToChangeThis');
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId){
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {

    }
};

/*  TODO

Modification middleware auth pour prendre en compte le rang du l'utilisateur

Remplir le fichier .env

Finir toutes les fonction avec un .catch, modifier la fonction modifyComments, CreateComment.

Modifier le model et ajouter une donnée status

Crée la route admin pour les commentaire.

*/