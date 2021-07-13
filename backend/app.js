const express = require('express');
const bodyParser = require('body-parser');

userRoutes = require('./routes/userRte');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);

module.exports = app;