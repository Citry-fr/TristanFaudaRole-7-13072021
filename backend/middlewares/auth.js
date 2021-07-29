//Importation de jsonwebtoken
const jwt = require('jsonwebtoken');

/*
    Création du middleware auth

    Si l'utilisateur possède un rang égale à 1,
    on ne vérifie pas son id et on passe directement au middleware suivant
*/
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'needToChangeThis');
        const userId= decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId){
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch (err){
        console.error(err);
    }
};