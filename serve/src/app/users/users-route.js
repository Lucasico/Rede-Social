const userService = require("./users-service");

module.exports = (routes) => {
  const SERVICE = '/api/users';

  routes.post(`${SERVICE}`, userService.register)
}