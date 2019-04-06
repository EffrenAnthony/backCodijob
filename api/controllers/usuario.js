"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const sequelize_2 = require("../config/sequelize");
var jwt = require('jsonwebtoken');
// var fs = require('fs');
// var path = require('path');
exports.controller_usuario = {
    getAll: (req, res) => {
        sequelize_1.Usuario.findAll().then((usuarios) => {
            let response = {
                message: "ok",
                content: usuarios
            };
            res.status(200).send(response);
        });
    },
    create: (req, res) => {
        let per_id = req.params.per_id;
        var objUsuario = sequelize_1.Usuario.build(req.body);
        sequelize_2.Persona.findById(per_id).then((persona) => {
            if (persona) {
                objUsuario.per_id = req.params.per_id;
                objUsuario.setPassword(req.body.password);
                return objUsuario.save();
            }
        }).then((usuarioCreado) => {
            return usuarioCreado.generateJWT();
        }).then((token) => {
            let response = {
                message: "created",
                content: objUsuario,
                token: token
            };
            res.status(201).send(response);
        });
    },
    privado: (req, res) => {
        // el error es de type script no de nodejs
        jwt.verify(req.token, 'sape', (err, payload) => {
            if (err) {
                res.status(403).send("Error colorao");
            }
            else {
                let response = {
                    message: "validado",
                    content: payload
                };
                res.status(200).send(response);
            }
        });
    }
    // create: (req:any, res:Response)=>{
    //     Persona.findById(req.body.per_id).then((persona:any)=>{
    //         if(persona != null){
    //             if(req.files){
    //                 // path => la ruta en la que se guardó
    //                 // la imagen
    //                 let path = req.files.usu_img.path;
    //                 console.log(path);            
    //                 let pathSplit = path.split("/");
    //                 console.log(pathSplit);            
    //                 let nombreArchivo = pathSplit[1];
    //                 console.log(nombreArchivo);            
    //                 let extensionSplit = nombreArchivo.split(".");
    //                 console.log(extensionSplit);            
    //                 let extension = extensionSplit[extensionSplit.length-1];
    //                 console.log(extension);   
    //                 if(extension.toLowerCase()=="png"||
    //                     extension.toLowerCase()=="jpg"||
    //                     extension.toLowerCase()=="jpeg"){         
    //                         let objUsuario = {
    //                             usu_tipo: req.body.usu_tipo,
    //                             usu_hash: req.body.usu_hash,
    //                             usu_salt: req.body.usu_salt,
    //                             usu_lat: req.body.usu_lat,
    //                             usu_lng: req.body.usu_dni,
    //                             usu_www: req.body.usu_www,
    //                             usu_git: req.body.usu_git,
    //                             usu_fb: req.body.usu_fb,
    //                             usu_img: path,
    //                         };
    //                 return Usuario.create(objUsuario)
    //                 // .then((usuarioCreado:any)=>{
    //                 //     let response = {
    //                 //         message:"created",
    //                 //         content:usuarioCreado
    //                 //     }
    //                 //     res.status(200).send(response);
    //                 // });
    //             }else{
    //                 //unlink([ruta_del_archivo],(err)=>{})
    //                 //borra un archivo del sistema 
    //                 fs.unlink(path,(err:any)=>{
    //                     if(err){
    //                         console.log("Error al borrar el archivo");
    //                     }else{
    //                         let response = {
    //                             message:"error",
    //                             content:"El archivo no es una imagen"
    //                         };
    //                         res.status(500).send(response);
    //                     }
    //                 });
    //             }
    //         }else{
    //             console.log("no tiene archivos");
    //             res.send("no tiene archivos");
    //         }                
    //     }
    // }).then((usuarioCreado:any)=>{
    //     if(usuarioCreado =! null){
    //         let response = {
    //             message:"created",
    //             content:usuarioCreado
    //         }
    //         res.status(201).send(response);
    //     }else{
    //         console.log("error con el usuario");
    //         let response = {
    //             message:"error",
    //             content:"Error al crear el Usuario"
    //         }
    //         res.status(500).send(response);
    //         throw ("ERROR => No se pudo crear el Usuario");
    //     }
    // }).catch((error:any)=>{
    //     console.log("ERROR => ", error);
    // })
    // } 
};
