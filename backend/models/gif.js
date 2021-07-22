//Création du model Gif
module.exports = (sequelize, type) => {
    return sequelize.define('gif', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        gifUrl: type.STRING
    });
};