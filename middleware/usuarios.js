const { validateUser, validateLogin } = require("../utils/validations/user");

function validUser(req, res, next) {
  const { error } = validateUser(req.body);
  if (error) return next(error);

  next();
}

function validLogin(req, res, next) {
  const { error } = validateLogin(req.body);
  if (error) return next(error);

  next();
}

module.exports = { validUser, validLogin };
