"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skills_1 = require("../dto/skills");
exports.controller_skills = {
    getAll: (req, res) => {
        skills_1.SkillsDTO.getAll().then((skills) => {
            console.log(skills);
            res.send(skills);
        }).catch((error) => {
            console.log(error);
        });
    },
    updateById: (req, res) => {
        res.send("Actualziando un skill dado su ID");
    },
    deleteById: (req, res) => {
        res.send("Eliminando un skill dado su ID");
    },
    create: (req, res) => {
        res.send("Creando un nuevo skill");
    }
};
// module.exports = controller_skills;
