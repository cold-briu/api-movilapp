const express = require('express');
const PublicacionesService = require('../services/publicaciones.service');

function publicacionesApi(app) {

    const router = express.Router();

    app.use('/api/publicaciones', router);

    const publicacionesService = new PublicacionesService();

    router.get('/', async function (req, res, next) { // read all
        try {
            const { tags } = req.query;
            const data = await publicacionesService.getAll({ tags });
            // res.send({ data: data, message: 'products listed' })
            res.send(data)
        } catch (err) {
            next(err);
        }

    })

    router.get('/:id', async (req, res, next) => {// read one
        try {
            const data = await publicacionesService.getOne(req.params.id);
            res.send(data)
        } catch (err) {
            next(err);

        }
    })








}

module.exports = publicacionesApi;