const joi = require("@hapi/joi");

module.exports = (data) => {
    const PublicacionSchema = joi.object({
        uid: joi
            .string()
            .min(2)
            .max(50)
            .required(),

        postid: joi
            .string()
            .min(2)
            .max(50)
            .required(),

        ubicacion: joi
            .string()
            .min(3),

        texto: joi
            .string()
            .min(1)
            .max(280)
            .required(),

        foto: joi
            .string()
            .default("no_foto_url"),

        likes: joi
            .integer()
            .min(0)
            .default(0)
    });

    return PublicacionSchema.validate(data);
}
