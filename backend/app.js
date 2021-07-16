const express = require('express');
const bodyParser = require('body-parser');

userRoutes = require('./routes/userRte');
gifRoutes = require('./routes/gifRte');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/gif', gifRoutes);


module.exports = app;