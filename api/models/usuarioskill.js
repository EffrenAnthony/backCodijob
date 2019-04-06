"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.usuarioSkill_model = (sequelize, type) => {
    return sequelize.define("t_usuarioSkill", {
        uskill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        uskill_lvl: {
            type: type.STRING,
            allowNull: false
        },
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_usuarioSkill",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
};
