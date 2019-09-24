const express = require('express');
const router = express.Router();
// const mysql = require('../database_sql')
const publicaciones = require('../controllers').publicaciones;


router.get('/', (req, res) => res.send('esta es la api de MovilApp'))

router.get('/api/publicaciones', publicaciones.list);
// router.get('/api/classroom/:id', publicaciones.getById
router.post('/api/publicaciones', publicaciones.add);
// router.put('/api/classroom/:id', publicaciones.update);
// router.delete('/api/classroom/:id', publicaciones.delete);

module.exports = router;