const express = require('express');
const router = express.Router();
const mysql = require('../database_sql')

router.get('/', (req, res) => res.send('esta es la api de MovilApp'))

module.exports = router;