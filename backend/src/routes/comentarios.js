const express = require('express');
const router = express.Router();

const comentarios = require('../controllers/Comentarios');

router.get('/comentarios/read', comentarios.read);
router.post('/comentarios/create', comentarios.create);

module.exports = router;