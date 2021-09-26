const authService = require("./auth-service");

module.exports = (routes) => {
  const SERVICE = '/api/auth';

  routes.post(`${SERVICE}/login`,authService.login)
}