"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
class SkillDTO {
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
                    let skill = new Skill();
                    skill.skill_Id = skillDB.skill_id;
                    skill.skill_Nom = skillDB.skill_nom;
                    skill.skill_Desc = skillDB.skill_desc;
                    skill.skill_Img = skillDB.skill_img;
                    skills.push(skill);
                });
                // console.log(skills);
                resolve(skills);
            });
        });
    }
    // debe ser static para que se ponga SkillDTO.getAll ya que la funcion se ejecuta una vez y ya no es necesario mas
    static create(skill) {
        let query = "call codijob.t_skill_crud_ps(0,'" + skill.skill_Nom + "','" + skill.skill_Desc + "','" + skill.skill_Img + "','create')";
        return new Promise((resolve, reject) => {
            index_1.connection.query(query, (error, result) => {
                if (error) {
                    reject(error);
                }
                //result.insertId => tiene el id del objeto creado
                skill.skill_Id = result[0][0].skill_id;
                resolve(skill);
                // console.log("OBJETO CREADO");
                // console.log(skill);
            });
        });
    }
    static update(skill) {
        let query = "UPDATE `codijob`.`t_skill` SET `skill_nom` = '" + skill.skill_Nom + "', `skill_desc` = '" + skill.skill_Desc + "', `skill_img` = '" + skill.skill_Img + "' WHERE (`skill_id` = '" + skill.skill_Id + "')";
        return new Promise((resolve, reject) => {
            index_1.connection.query(query, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }
}
exports.SkillDTO = SkillDTO;
