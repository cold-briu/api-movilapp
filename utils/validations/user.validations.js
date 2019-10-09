const joi = require("@hapi/joi");

function usersSchemaValidator(data) {
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
      .required(),
    move: joi.object({
      caminando: joi.boolean().required(),
      bicicleta: joi.boolean().required(),
      metro: joi.boolean().required(),
      taxi: joi.boolean().required(),
      plataformas: joi.boolean().required(),
      bus: joi.boolean().required(),
      moto: joi.boolean().required(),
      carro: joi.boolean().required(),
      otro: joi.boolean().required(),
      descripcion: joi
        .string()
        .optional()
        .max(200)
    })
  });

  return Schema.validate(data);
}

function validateLoginData(data) {
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

module.exports = { usersSchemaValidator, validateLoginData };
