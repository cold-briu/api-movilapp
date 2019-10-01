const express = require('express');
const ComentariosService = require('../services/comentarios.service');

function comentariosApi(app) {

    const router = express.Router();

    app.use('/api/comentarios', router);

    const comentariosService = new ComentariosService();

    router.get('/', async function (req, res, next) { // read all
        try {
            const { tags } = req.query;
            const data = await comentariosService.getAll({ tags });
            // res.send({ data: data, message: 'products listed' })
            res.send(data)
        } catch (err) {
            next(err);
        }

    })

    router.get('/:id', async (req, res, next) => {// read one
        try {
            const data = await comentariosService.getOne(req.params.id);
            res.send(data)
        } catch (err) {
            next(err);

        }
    })

    router.post('/add', async (req, res, next) => {
        try {
            let data = req.body
            await comentariosService.createOne({ data })
            res.status(201).send("melos :3")
        } catch (err) {
            next(err);
        }
    })


    router.post('/addMany', async (req, res, next) => {
        try {
            let data = req.body
            await comentariosService.createMany({ data })
            res.status(201).send(`added ${data.length} entries`).end()
        } catch (err) {
            next(err);
        }
    })


    router.put('/:id', async (req, res, next) => {
        try {
            let data = req.body
            let id = req.params.id

            await comentariosService.updateOne(id, data)
            res.status(201).send("updated :3").end()
        } catch (err) {
            next(err);
        }
    })

    router.delete('/:id', async (req, res, next) => {
        try {
            let id = req.params.id

            await comentariosService.deleteOne(id)
            res.status(201).send("deleted :3").end()
        } catch (err) {
            next(err);
        }
    })




}

module.exports = comentariosApi;