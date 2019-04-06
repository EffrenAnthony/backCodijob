"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
// fs => libreria nativa de node para administrar los archivos
// del sistema
// path => libreria nativa de node para manejar rutas a nivel
// de directorios
var fs = require('fs');
var path = require('path');
exports.controller_skill = {
    getAll: (req, res) => {
        sequelize_1.Skill.findAll().then((skills) => {
            let response = {
                message: "ok",
                content: skills
            };
            res.status(200).send(response);
        });
    },
    create: (req, res) => {
        if (req.files) {
            // path => la ruta en la que se guardó
            // la imagen
            let path = req.files.skill_img.path;
            console.log(path);
            let pathSplit = path.split("/");
            console.log(pathSplit);
            let nombreArchivo = pathSplit[1];
            console.log(nombreArchivo);
            let extensionSplit = nombreArchivo.split(".");
            console.log(extensionSplit);
            let extension = extensionSplit[extensionSplit.length - 1];
            console.log(extension);
            if (extension.toLowerCase() == "png" ||
                extension.toLowerCase() == "jpg" ||
                extension.toLowerCase() == "jpeg") {
                let objSkill = {
                    skill_nom: req.body.skill_nom,
                    skill_desc: req.body.skill_desc,
                    skill_img: path
                };
                sequelize_1.Skill.create(objSkill).then((skillCreado) => {
                    let response = {
                        message: "created",
                        content: skillCreado
                    };
                    res.status(200).send(response);
                });
            }
            else {
                //unlink([ruta_del_archivo],(err)=>{})
                //borra un archivo del sistema 
                fs.unlink(path, (err) => {
                    if (err) {
                        console.log("Error al borrar el archivo");
                    }
                    else {
                        let response = {
                            message: "error",
                            content: "El archivo no es una imagen"
                        };
                        res.status(500).send(response);
                    }
                });
            }
        }
        else {
            console.log("no tiene archivos");
            res.send("no tiene archivos");
        }
    },
    update: (req, res) => {
        sequelize_1.Skill.update({
            skill_desc: req.body.skill_desc,
            skill_nom: req.body.skill_nom,
            skill_img: req.body.skill_img,
        }, {
            where: {
                skill_id: req.body.skill_id
            }
        }).then((respuesta) => {
            // respuesta[0] es 1 cuando se actualizado el registro correctamente
            // respuesta[0] es 0 cuando hubo un error
            if (respuesta[0] === 1) {
                sequelize_1.Skill.findById(req.body.skill_id).then((skill) => {
                    let response = {
                        message: "updated",
                        content: skill
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
    }
};
// import { Request, Response } from 'express';
// import { Skill } from '../config/sequelize';
// // fs => libreria nativa de node para administrar los archivos del sistema
// // path => libreria nativa de node para manejar rutas
// var fs = require('fs');
// var path = require('path');
// export var controller_skill = {
//     getAll: (req:Request,res:Response)=>{       
//        Skill.findAll().then((skills:any)=>{
//             let response = {
//                 message: "ok",
//                 content: skills
//             }
//             res.status(200).send(response);            
//        })
//     },
//     create: (req:any, res:Response)=>{
//         // Skill.create(req.body).then((skillCreado:any)=>{
//         //     let response = {
//         //         message: "created",
//         //         content: skillCreado
//         //     }
//         //     res.status(201).send(response)
//         // }).catch(()=>{
//         // })
//         if(req.files){
//             console.log("tiene archivos");
//             res.send("tiene archivos");            
//         }else{
//             console.log("no tiene archivos");
//             res.send("no tiene archivos");   
//         }
//     },
//     update: (req:Request,res:Response)=>{     
//         Skill.update(
//             {
//                 skill_desc: req.body.skill_desc,
//                 skill_nom: req.body.skill_nom,
//                 skill_img: req.body.skill_img
//             },
//             {    where: {
//                     skill_id: req.body.skill_id
//                 }
//             }).then((respuesta:any)=>{
//                 // respuesta[0] es 1 cuando se ha actualizado el registro correctamente
//                 // respuesta[0] es 0 cuando hubo un error
//                 if (respuesta[0]===1) { 
//                     Skill.findById(req.body.skill_id).then((skill:any)=>{
//                         let response = {
//                             message: "update",
//                             content: skill
//                         }
//                         res.status(200).send(response);
//                     })                    
//                 }else{
//                     let response = {
//                         message: "error",
//                         content: "error"
//                     }
//                     res.status(500).send(response);
//                 }
//         })
//     },
//     delete:(req:Request,res:Response)=>{     
//         Skill.destroy()
//     }
// }
