const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');


const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/session', SessionController.store); // Criar novo usuário
routes.post('/spots', upload.single('thumbnail'), SpotController.store); // Criar novo spot
routes.post('/spots/:spot_id/bookings', BookingController.store); // Fazer reserva em um spot

routes.get('/spots', SpotController.index); // Listar spots
routes.get('/dashboard', DashboardController.show); // Listar spots cadastrados do user


module.exports = routes;
