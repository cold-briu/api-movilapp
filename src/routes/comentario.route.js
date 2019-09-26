module.exports = (app) => {
    const comentario = require('../controllers/comentario.controller');

    app.post('/comentario', comentario.create);

    // app.post('/comentario/addMany', comentario.addMany);

    app.get('/comentario', comentario.read);

    // app.get('/comentario/:id', comentario.findOne);

    // app.get('/comentario/findByUser/:id', comentario.findByUser);

    app.put('/comentario/:id', comentario.update)

    app.delete('/comentario/:i', comentario.delete);
}