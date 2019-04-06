"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = require("../dto/empresa");
exports.controller_empresa = {
    getAll: (req, res) => {
        empresa_1.EmpresaDTO.getAll();
        res.send("Entregando todas las empresas");
    },
    updateById: (req, res) => {
        res.send("Actualziando una empresa dado su ID");
    },
    deleteById: (req, res) => {
        res.send("Eliminando una empresa dado su ID");
    },
    create: (req, res) => {
        res.send("Creando una nueva empresa");
    }
};
// module.exports = controller_empresa;
