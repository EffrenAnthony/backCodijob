"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.empresa_model = (sequelize, type) => {
    return sequelize.define("t_empresa", {
        emp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        emp_nom: {
            type: type.STRING,
            allowNull: false
        },
        emp_img: {
            type: type.STRING,
            allowNull: false
        }
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_empresa",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
};
