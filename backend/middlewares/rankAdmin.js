const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'needToChangeThis');
        const rank = decodedToken.rank;
        if(rank !== 1){
            throw 'Invalid user Rank';
        } else {
            next();
        }
    } catch {

    }
};