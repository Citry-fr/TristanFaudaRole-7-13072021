const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'needToChangeThis');
        const {userId, rank} = decodedToken;
        console.log('Rang :' + rank);
        switch (rank) {
            case 0:
                if(req.body.userId && req.body.userId !== userId){
                    throw 'Invalid user ID';
                } else {
                    next();
                }
                break;
            case 1:
                next();
                break;
            default:
                console.error('Rang inconnus');
                break;
        }
        
    } catch {

    }
};