const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res, next) => await res.json({ status: true }));

module.exports = routes;
