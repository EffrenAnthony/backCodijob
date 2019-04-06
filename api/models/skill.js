"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.skill_model = (sequelize, type) => {
    return sequelize.define("t_skill", {
        skill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
        },
        skill_nom: {
            type: type.STRING,
            allowNull: true
        },
        skill_desc: {
            type: type.STRING,
            allowNull: true
        },
        skill_img: {
            type: type.STRING,
            allowNull: true
        },
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_skill",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
    return exports.skill_model;
};
