const { Router } = require('express');
const routes = new Router();

routes.get('/health', (req, res) => {
  res.status(200).json({status: 'Server UP'})
})
require("./app/auth/auth-route")(routes);
require('./app/users/users-route')(routes);

module.exports = routes;
//