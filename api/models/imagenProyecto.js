"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.imagenProyecto_model = (sequelize, type) => {
    return sequelize.define("t_imagenProyecto", {
        imgpro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        imgpro_url: {
            type: type.STRING,
            allowNull: false
        }
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_imagenProyecto",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
};
