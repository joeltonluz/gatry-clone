const express = require('express');
const promotions = require('./app/controllers/promotions');
const routes = express.Router();

routes.get('/',promotions.index);
routes.get('/adicionar', promotions.create);
routes.post('/adicionar', promotions.post);
routes.get('/termos', promotions.termos);

module.exports = routes;