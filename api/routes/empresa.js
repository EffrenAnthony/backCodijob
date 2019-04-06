"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresa_1 = require("../controllers/empresa");
// var controller_empresa = require ('../controllers/empresa')
exports.router_empresa = express_1.Router();
exports.router_empresa.get('/empresa/getAll', empresa_1.controller_empresa.getAll);
exports.router_empresa.get('/empresa/update', empresa_1.controller_empresa.updateById);
exports.router_empresa.get('/empresa/delete', empresa_1.controller_empresa.deleteById);
exports.router_empresa.get('/empresa/create', empresa_1.controller_empresa.create);
