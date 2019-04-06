"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.usuarioEmpresa_model = (sequelize, type) => {
    return sequelize.define("t_usuarioEmpresa", {
        usuemp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usuemp_cargo: {
            type: type.STRING,
            allowNull: false
        },
        usuemp_fechin: {
            type: type.DATE,
            allowNull: false
        },
        usuemp_fechfin: {
            type: type.DATE,
            allowNull: false
        },
        usuemp_desc: {
            type: type.STRING,
            allowNull: false
        },
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_usuarioEmpresa",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
};
