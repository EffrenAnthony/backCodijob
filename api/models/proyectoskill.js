"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.proyectoskill_model = (sequelize, type) => {
    return sequelize.define("t_proyectoskill", {
        proskill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_proyectoskill",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
};
