"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skills_1 = require("../controllers/skills");
// var controller_skills = require ('../controllers/empresa')
exports.router_skills = express_1.Router();
exports.router_skills.get('/skills/getAll', skills_1.controller_skills.getAll);
exports.router_skills.get('/skills/update', skills_1.controller_skills.updateById);
exports.router_skills.get('/skills/delete', skills_1.controller_skills.deleteById);
exports.router_skills.get('/skills/create', skills_1.controller_skills.create);
