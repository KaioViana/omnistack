const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileControlle');
const SessionController = require('./controllers/SessionController');

routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create); // cadastrar ong
routes.get('/ongs', OngController.index); // listar ongs
routes.post('/incidents', IncidentController.create); // cadastrar um caso
routes.get('/incidents', IncidentController.index); // listar casos
routes.delete('/incidents/:id', IncidentController.delete); // deletar um caso
routes.get('/profile', ProfileController.index); // listar casos de uma ong específica




module.exports = routes;