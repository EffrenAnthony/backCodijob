"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const skills_1 = require("../models/skills");
class SkillsDTO {
    static getAll() {
        let query = "SELECT * FROM t_skill";
        return new Promise((resolve, reject) => {
            // codigo async
            index_1.connection.query(query, (err, result) => {
                // error
                if (err) {
                    reject(err);
                }
                let skills = [];
                if (result.length === 0) {
                    resolve(skills);
                }
                result.forEach((skillDB) => {
                    let skill = new skills_1.Skill();
                    skill.skill_id = skillDB.skill_id;
                    skill.skill_nom = skillDB.skill_nom;
                    skill.skill_desc = skillDB.skill_desc;
                    skill.skill_img = skillDB.skill_img;
                    skills.push(skill);
                });
                // console.log(skills);
                resolve(skills);
            });
        });
    }
}
exports.SkillsDTO = SkillsDTO;
