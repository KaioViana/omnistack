const express = require('express'); // importando o express
const mongoose = require('mongoose'); // importando módulo de conexão ao mongoAtlas
const routes = require('./routes'); // importando módulo que contém as rotas
const http = require('http'); // importando módulo http para a utilização do webSocket
const cors = require('cors'); // importando o cors para setar quais ips podem utilizar o serviço
const { setupWebsocket } = require('./websocket');


const app = express(); // criando o servidor
const server = http.Server(app); // extraindo servidor http
setupWebsocket(server); // função do websocket.js

// string de conexão com o mongo
mongoose.connect('mongodb+srv://FirstMongo:91796337@mapadevs-qhxp9.mongodb.net/mapadevs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json()); // forma para entender estrutura de dados JSON
app.use(routes); // usando routes

server.listen(3333);