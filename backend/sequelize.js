const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize('groupomania', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: true})
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = {
    User
};