const joi = require("@hapi/joi");

function validateUser(data) {
  const Schema = joi.object({
    name: joi
      .string()
      .min(2)
      .max(50)
      .required(),
    lastname: joi
      .string()
      .min(3)
      .max(60)
      .required(),
    email: joi
      .string()
      .min(6)
      .max(60)
      .email()
      .required(),
    password: joi
      .string()
      .min(5)
      .max(255)
      .required()
  });

  return Schema.validate(data);
}

function validateLogin(data) {
  const Schema = joi.object({
    email: joi
      .string()
      .min(6)
      .max(60)
      .email()
      .required(),
    password: joi
      .string()
      .min(5)
      .max(255)
      .required()
  });

  return Schema.validate(data);
}

module.exports = { validateLogin, validateUser };
