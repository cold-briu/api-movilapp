module.exports = (app) => {
    const publicacion = require('../controllers/publicacion.controller');


    app.post('/publicacion', publicacion.create);

    app.post('/publicacion/addMany', publicacion.addMany);

    app.get('/publicacion', publicacion.read);

    app.get('/publicacion/:id', publicacion.findOne);

    app.get('/publicacion/findByUser/:id', publicacion.findByUser);


    app.put('/publicacion/:id', publicacion.update);


    app.delete('/publicacion/:i', publicacion.delete);
}