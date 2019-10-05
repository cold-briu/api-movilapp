const joi = require("@hapi/joi");

module.exports = (data) => {
    const PublicacionSchema = joi.object({
        uid: joi
            .string()
            .min(2)
            .max(50)
            .required(),
        title: joi
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

    return PublicacionSchema.validate(data);
}
    ;
