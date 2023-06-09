const express = require('express');
const router = express.Router();

const perfis = require('../controllers/Perfis');

router.get('/perfis/read', perfis.read);
router.post('/perfis/create', perfis.criar);

module.exports = router;