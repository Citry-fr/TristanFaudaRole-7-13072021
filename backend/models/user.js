module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: type.STRING,
            unique: true
        },
        password: type.STRING,
        firstName: type.STRING,
        lastName: type.STRING,
        rank: {
            max: 1, //Admin
            min: 0, //Membre
            type: type.INTEGER
        },
        isDisabled: type.BOOLEAN
    });
};