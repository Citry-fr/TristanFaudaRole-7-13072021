//Initialisation de dotenv plus configuration
require('dotenv').config();

//Importation des packages requis
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

//Importation des différents router de l'application
userRoutes = require('./routes/userRte');
gifRoutes = require('./routes/gifRte');
comRoutes = require('./routes/comRte');

//Création de l'application express
const app = express();

//Utilisation de helmet et bodyparser
app.use(helmet());
app.use(bodyParser.json({limit: '5mb'}));
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

//Utilisation des router et definition de leur route
app.use('/api/auth', userRoutes);
app.use('/api/gif', gifRoutes);
app.use('/api/com', comRoutes);

//Export de l'application
module.exports = app;