"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectoskill_1 = require("../controllers/proyectoskill");
exports.router_proyectoSkill = express_1.Router();
// router_proyectoSkill.get('/proyectoSkill/getAll',controller_proyectoSkill.getAll);
exports.router_proyectoSkill.post('/proyectoskill/create', proyectoskill_1.controller_proyectoskill.create);
exports.router_proyectoSkill.get('/proyectoskill/proyecto/:pro_id/skills', proyectoskill_1.controller_proyectoskill.getSkillsByProyectoId);
// router_proyectoSkill.post('/proyectoSkill/update',controller_proyectoSkill.update)
