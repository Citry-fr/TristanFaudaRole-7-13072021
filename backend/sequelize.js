//Importation de Sequelize
const Sequelize = require('sequelize');

//Importation des différent models
const UserModel = require('./models/user');
const GifModel = require('./models/gif');
const CommentModel = require('./models/comment');

//Initialisation de Sequelize plus connection à la DB
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//Utilisation des models avec Sequelize
const User = UserModel(sequelize, Sequelize);
const Gif = GifModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);

//Création des différentes association de table
User.hasMany(Gif);
Gif.belongsTo(User);

User.hasMany(Comment);
Gif.hasMany(Comment);

Comment.belongsTo(User);
Comment.belongsTo(Gif);

//Synchronisation de Sequelize avec la DB
sequelize.sync({force: true})
    .then(() => {
        console.log('Database & tables created!');
    });

//Export des models
module.exports = {
    User,
    Gif,
    Comment
};