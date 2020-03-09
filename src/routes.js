const express = require('express');
const promotions = require('./app/controllers/promotions');
const routes = express.Router();

routes.get('/',promotions.index);
routes.get('/adicionar', promotions.create);
routes.post('/adicionar', promotions.post);
routes.get('/termos', promotions.termos);

routes.use((req, res, next) => {
  res.status(404).render('not-found');
});


module.exports = routes;