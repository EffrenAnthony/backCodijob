"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skill {
    constructor() {
        this._skill_id = 0;
        this._skill_nom = "";
        this._skill_desc = "";
        this._skill_img = "";
    }
    get skill_id() {
        return this._skill_id;
    }
    set skill_id(_skill_id) {
        this._skill_id = _skill_id;
    }
    get skill_nom() {
        return this._skill_nom;
    }
    set skill_nom(_skill_nom) {
        this._skill_nom = _skill_nom;
    }
    get skill_desc() {
        return this._skill_desc;
    }
    set skill_desc(_skill_desc) {
        this._skill_desc = _skill_desc;
    }
    get skill_img() {
        return this._skill_img;
    }
    set skill_img(_skill_img) {
        this._skill_img = _skill_img;
    }
}
exports.Skill = Skill;
