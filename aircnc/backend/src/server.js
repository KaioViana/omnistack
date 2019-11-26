const express = require('express'); // servidor
const mongoose = require('mongoose'); // banco de dados
const cors = require('cors'); // liberação do uso da api para outros ip's
const http = require('http'); // HTTP
const routes = require('./routes'); // rotas da aplicação

const app = express();
const server = http.Server(app);

// conexão banco
mongoose.connect('mongodb+srv://FirstMongo:91796337@aircnc-qhxp9.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json()); // entedendo estrutura json
app.use(cors());
app.use(routes);

                    
server.listen(3333, function() {
    console.log('listening on *:3333');
});
