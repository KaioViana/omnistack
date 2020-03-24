/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no backend
*/

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?"(filtros, paginação) -- req.query
 * Route Params: Parâmetros utilizados para identificar recursos -- req.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
  * Bancos de dados:
  * 
  * SQL: MySQL, SQLite,  PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Formas de comunicação:
 * 
 * Driver: SELECT * FROM users;
 * Query Builder: table('users).select('*').where()(KNEX.js)
 * 
*/
const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());




app.listen(3333);