"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
exports.controller_auth = {
    create: (req, res) => {
        var objPersona = sequelize_1.Persona.build(req.body);
        var objUsuario = sequelize_1.Usuario.build();
        objUsuario.setPassword(req.body.usu_pass);
        objPersona.save().then((personaCreada) => {
            if (personaCreada) {
                objUsuario.per_id = personaCreada.per_id;
                return objUsuario.save();
            }
            else {
                let response = {
                    message: "error",
                    content: "Error al crear la persona"
                };
                res.status(500).send(response);
            }
        }).then((usuarioCreado) => {
            if (usuarioCreado) {
                return usuarioCreado.generateJWT();
            }
            else {
                let response = {
                    message: "error",
                    content: "Se creo a la persona, pero no al usuario"
                };
                res.status(201).send(response);
            }
        }).then((token) => {
            let response = {
                message: "created",
                content: objUsuario,
                token
            };
            res.status(201).send(response);
        });
    },
    login: (req, res) => {
        let objPersona = sequelize_1.Persona.build();
        let objUsuario = sequelize_1.Usuario.build();
        sequelize_1.Persona.findOne({
            where: {
                per_email: req.body.per_email
            }
        }).then((personaEncontrada) => {
            if (personaEncontrada) {
                objPersona = personaEncontrada;
                return sequelize_1.Usuario.findOne({
                    where: {
                        per_id: objPersona.per_id
                    }
                });
            }
            else {
                let response = {
                    message: 'error',
                    content: 'El email no esta registrado'
                };
                res.status(500).send(response);
                throw ('El email no esta registrado');
            }
        }).then((usuarioEncontrado) => {
            if (usuarioEncontrado) {
                objUsuario = usuarioEncontrado;
                if (objUsuario.validPassword(req.body.usu_pass) == true) {
                    // usuario con password autentico
                    return objUsuario.generateJWT();
                }
                else {
                    let response = {
                        message: 'error',
                        content: 'contraseña incorrecta'
                    };
                    res.status(500).send(response);
                }
            }
            else {
                let response = {
                    message: 'error',
                    content: 'No existe un usuario par esa persona'
                };
                res.status(500).send(response);
                throw ('No existe un usuario par esa persona');
            }
        }).then((token) => {
            let response = {
                message: 'Success',
                token: token
            };
            res.status(200).send(response);
        }).catch((error) => {
            console.log("error");
            console.log(error);
        });
    }
};
