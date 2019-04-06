"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definiendo un modelo
// sequelize => la conexion a la base de datos
exports.persona_model = (sequelize, type) => {
    let personaModel = sequelize.define("t_persona", {
        per_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        per_nom: {
            type: type.STRING(50),
            allowNull: false,
            defaultValue: "sin nombre"
        },
        per_ape: {
            type: type.STRING,
            allowNull: false,
            defaultValue: "sin apellido"
        },
        per_email: {
            type: type.STRING,
            allowNull: false,
            defaultValue: "sin email",
            // esto hará que cada vez que se quiera crear un usuario con el mismo email no lo permita
            unique: true
        },
        per_tel: {
            type: type.STRING,
            allowNull: false,
            defaultValue: "000000"
        },
        per_dni: {
            type: type.STRING,
            allowNull: false,
            defaultValue: "00000000"
        },
        per_fech: {
            type: type.DATE,
            allowNull: false,
            defaultValue: new Date
        },
    }, {
        // para que no se cree createAt y updateAt
        timestamps: true,
        tableName: "t_persona",
        createAt: true,
        updateAt: 'updateTimestamp',
        deleteAt: 'destroyTime',
        paranoid: true
    });
    // prototype es la manera como javascript crea clases
    personaModel.prototype.saludar = function () {
        console.log("---------------------------------\n" + this.per_nom + " te saluda");
    };
    return personaModel;
};
