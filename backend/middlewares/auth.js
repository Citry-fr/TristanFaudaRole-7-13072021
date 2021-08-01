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
        const userId = decodedToken.userId;
        const rank = decodedToken.rank;
        const locUser = parseInt(req.headers.authorization.split(' ')[2]);
        if(rank === 0){
            if(locUser && locUser !== userId){
                throw 'Invalid user ID';
            } else {
                next();
            }
        } else {
            next();
        }
        
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};