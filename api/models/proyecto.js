"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.proyecto_model = (sequelize, type) => {
    return sequelize.define("t_proyecto", {
        pro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        pro_nom: {
            type: type.STRING,
            allowNull: false
        },
        pro_desc: {
            type: type.STRING,
            allowNull: false
        },
        pro_fechin: {
            type: type.DATE,
            allowNull: false
        },
        pro_fechfin: {
            type: type.DATE,
            allowNull: false
        },
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_proyecto",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
};
