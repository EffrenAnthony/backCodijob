"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importando la ruta de skill
const skill_1 = require("./api/routes/skill");
const proyecto_1 = require("./api/routes/proyecto");
const proyectoskill_1 = require("./api/routes/proyectoskill");
const persona_1 = require("./api/routes/persona");
const usuario_1 = require("./api/routes/usuario");
const auth_1 = require("./api/routes/auth");
const home_1 = require("./api/routes/home");
//Importamos la libreria desde node modules (require para importar la libreria en node_modules)
var express = require('express');
// app es una instancia directa de express
var app = express();
// <---------------POST------------------>
// ESTA CONFIGURACION DEBE IR ANTES DE CUALQUIER CONFIGURACION app
// body-parser hace que se pueda ejecutar el metodo get y se guarde dentro de un arreglo llamado body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// <--------------- / POST------------------>
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// process.env.PORT es el valor que se le va a signar una vez encuetre el puerto de un servidor remoto
const PUERTO = process.env.PORT || 3700;
//importando las rutas
app.use('/api', skill_1.router_skill);
app.use('/', home_1.router_home);
app.use('/api', proyecto_1.router_proyecto);
app.use('/api', proyectoskill_1.router_proyectoSkill);
app.use('/api', persona_1.router_persona);
app.use('/api', usuario_1.router_usuario);
app.use('/api', auth_1.router_auth);
// listen es para levantar el servidor web (lanza o ejecuta el servidor web)
app.listen(PUERTO, () => {
    console.log("Servidor corriendo perfectamente => localhost:3700");
});
