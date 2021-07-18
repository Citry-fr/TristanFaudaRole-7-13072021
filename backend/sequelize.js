const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const GifModel = require('./models/gif');
const CommentModel = require('./models/comment');
const gif = require('./models/gif');

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
const Gif = GifModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);

User.hasMany(Gif);
Gif.belongsTo(User);

User.hasMany(Comment);
Gif.hasMany(Comment);

Comment.belongsTo(User);
Comment.belongsTo(Gif);


sequelize.sync({force: true})
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = {
    User,
    Gif,
    Comment
};