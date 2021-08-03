//Importation de jsonwebtoken
const jwt = require('jsonwebtoken');

/*
    Création du middleware admin

    Vérifie si l'utilisateur a bien le rang Admin
*/
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TK);
        const rank = decodedToken.rank;
        if(rank === 0){
            throw 'Invalid rank'
        } else {
            next();
        }
        
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};