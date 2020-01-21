const express = require('express'); // importando o express
const mongoose = require('mongoose'); // importando módulo de conexão ao mongoAtlas
const routes = require('./routes'); // importando módulo que contém as rotas
const cors = require('cors');


const app = express(); // criando o servidor

// string de conexão com o mongo
mongoose.connect('mongodb+srv://FirstMongo:91796337@mapadevs-qhxp9.mongodb.net/mapadevs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json()); // forma para entender estrutura de dados JSON
app.use(routes); // usando routes

app.listen(3333);