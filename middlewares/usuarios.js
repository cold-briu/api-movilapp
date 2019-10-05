const { validateUserData, validateLoginData } = require("../utils/validations/user.validations");

function checkValidUserData(req, res, next) {
  const { error } = validateUserData(req.body.data);
  if (error) return next(error);

  next();
}

function validLogin(req, res, next) {
  const { error } = validateLoginData(req.body);
  if (error) return next(error);

  next();
}

module.exports = { checkValidUserData, validLogin };
