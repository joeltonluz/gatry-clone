const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure('src/app/views', {
  express: server,
  noCache: true,
  autoescape: false
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Running on port ${port}`);
});