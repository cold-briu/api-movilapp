const Publicaciones = require('../models').Publicaciones;

module.exports = {
    list(req, res) {
        return Publicaciones.findAll({
            include: [{
                model: Publicaciones,
                as: "Publicacioneses"
            }]
        }).then((Publicacioneses) => res.status(200).send(Publicacioneses))
            .catch((error) => { res.status(400).send(error) });
    },
    add(req, res) {
        const { uid, categorias, entidades, ubicacion, texto, foto, video } = req.body
        return Publicaciones
            .create({
                uid, categorias, entidades, ubicacion, texto, foto, video, created_at: Date.now()
            })
            .then((publicacion) => res.status(201).send(publicacion))
            .catch((error) => res.status(400).send(error));
    },
    // addMany(req, res) {
    //     return Publicaciones
    // }

}

