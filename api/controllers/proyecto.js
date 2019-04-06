"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
exports.controller_proyecto = {
    getAll: (req, res) => {
        sequelize_1.Proyecto.findAll().then((proyectos) => {
            let response = {
                message: "ok",
                content: proyectos
            };
            res.status(200).send(response);
        });
    },
    create: (req, res) => {
        // req body son todos los campos que se envian, ya sea por postman o por el front
        sequelize_1.Proyecto.create(req.body).then((proyectoCreado) => {
            let response = {
                message: "created",
                content: proyectoCreado
            };
            res.status(201).send(response);
        }).catch(() => {
        });
    },
    update: (req, res) => {
        sequelize_1.Proyecto.update({
            pro_desc: req.body.pro_desc,
            pro_nom: req.body.pro_nom,
            pro_img: req.body.pro_img
        }, { where: {
                pro_id: req.body.pro_id
            }
        }).then((respuesta) => {
            // respuesta[0] es 1 cuando se ha actualizado el registro correctamente
            // respuesta[0] es 0 cuando hubo un error
            if (respuesta[0] === 1) {
                sequelize_1.Proyecto.findById(req.body.pro_id).then((proyecto) => {
                    let response = {
                        message: "update",
                        content: proyecto
                    };
                    res.status(200).send(response);
                });
            }
            else {
                let response = {
                    message: "error",
                    content: "error"
                };
                res.status(500).send(response);
            }
        });
    },
    delete: (req, res) => {
        sequelize_1.Proyecto.destroy();
    }
};
