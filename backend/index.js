const express = require('express');
const cors = require('cors');

const app = express();

const usuarios = require('./src/routes/usuarios')
const perfis = require('./src/routes/perfis')
const equipamentos = require('./src/routes/equipamentos')
const comentarios = require('./src/routes/comentarios')

app.use(cors());
app.use(express.json());
app.use(usuarios);
app.use(perfis);
app.use(equipamentos);
app.use(comentarios);

app.listen(5000, () => {
    console.log("Rodando na porta 5000");
})