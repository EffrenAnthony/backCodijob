"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { controller_home } from '../controllers/home';
var controller_home = require('../controllers/home');
// Hacemos el enrutador exportable para que el index.ts pueda importarlo
exports.router_home = express_1.Router();
// get es el verbo http que va a escuchar nuestro server
// '/' hace referencia a localhost, es decir que tambien puede ser '/direccion', y en el navegador se pondria 'localhost:3700/direccion'
// request => son los datos que el servidor recive de quien lo invoca
// response => objeto de respuesta a quien invoca la ruta
exports.router_home.get('/', controller_home.home);
// esta es otra ruta, pero sigue siendo router_home porque el apilará todas las rutas
exports.router_home.get('/otraRuta', controller_home.otraruta);
// tambien es posible hacer que una variable sea exportable en NODE
// module.exports = router_home;
