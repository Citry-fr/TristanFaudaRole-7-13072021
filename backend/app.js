const express = require('express');
const bodyParser = require('body-parser');

userRoutes = require('./routes/userRte');
gifRoutes = require('./routes/gifRte');
comRoutes = require('./routes/comRte');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/gif', gifRoutes);
app.use('/api/com', comRoutes);


module.exports = app;