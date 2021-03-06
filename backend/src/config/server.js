const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('../routes/routes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

module.exports = app;
