//Création du model Comment
module.exports = (sequelize, type) => {
    return sequelize.define('comment', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: type.STRING,
        status: {
            max: 1, //Accepté
            min: 0, //En attente
            type: type.INTEGER
        }
    });
};