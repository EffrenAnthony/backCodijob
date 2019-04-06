"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.usuarioProyecto_model = (sequelize, type) => {
    return sequelize.define("t_usuarioProyecto", {
        usupro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usupro_rol: {
            type: type.STRING,
            allowNull: false
        },
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_usuarioProyecto",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
};
