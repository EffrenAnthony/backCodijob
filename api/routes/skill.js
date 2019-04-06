"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skill_1 = require("../controllers/skill");
// var controller_skill = require ('../controllers/empresa')
var multipart = require('connect-multiparty');
// middleware agarra el rq y le añade una propiedad file, por ultimo lo añade a una carpeta designada
// leugo recien ese rq lo envia al controlador controller_skill.create
var multipartMiddleware = multipart({ uploadDir: './imagenes' });
exports.router_skill = express_1.Router();
exports.router_skill.get('/skill/getAll', skill_1.controller_skill.getAll);
exports.router_skill.post('/skill/create', multipartMiddleware, skill_1.controller_skill.create);
exports.router_skill.post('/skill/update', skill_1.controller_skill.update);
// router_skill.get('/skill/update',controller_skill.updateById);
// router_skill.get('/skill/delete',controller_skill.deleteById);
// router_skill.get('/skill/create',controller_skill.create);
