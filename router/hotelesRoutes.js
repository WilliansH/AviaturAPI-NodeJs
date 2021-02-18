//modulo express
const express = require('express');
const hotelesRoutes = express.Router();

//cargar controlador hoteles
const hotelesController = require('../controller/hotelesController.js');

//rutas de Controller
hotelesRoutes.get('/getHotel', hotelesController.getAll);
hotelesRoutes.post('/createHotel', hotelesController.createHotel);
hotelesRoutes.get('/:hotelId', hotelesController.getById);
hotelesRoutes.put('', hotelesController.updateHotel);
hotelesRoutes.delete('/:hotelId', hotelesController.deleteById);

module.exports = hotelesRoutes;
