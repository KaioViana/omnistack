/*
INTRODUÇÃO  À ROTAS:

    Métodos HTTP:
        GET(buscar informação), POST(criar informação), PUT(atualizar), DELETE(deletar)

    Tipos parâmetros:
        Query params(req.query):
            Muito utilizado nos métodos GET, mas não se restrinem apenas a eles.
            Sintaxe na url:  "<rota>/?<parâmetro>=<filtro>" (filtros, ordenação, paginação, ...)


        Route params(req.params (identificar um recurso na alteração ou remoção)):
            Muito utilizado nos métodos PUT e DELETE.
            Sintaxe na rota: "<rota>/:<nomeParâmetro>"


        Body(req.body (dados para criação ou alteração de um registro)):
            Muito utilizado nos métodos POST e PUT.
            É utilizado o corpo da requisição para enviar as informações.YAML, etc...)
            Sintaxe JSON: {"chave": "valor"}

*/

const { Router } = require('express');
const DevController = require('./controllers/DevController');


const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);// rota para cadastrar

module.exports = routes;
