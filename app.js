const express = require('express');
const bodyParser = require('body-parser');
const empRoutes = require('./api/v1/employee');
const postRoutes = require('./api/v1/post');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', require('./api/employee'));
app.use('/api', require('./api/employee'));

app.set('/api/auth', empRoutes);
app.set('/api/posts', postRoutes);

module.exports = app;
