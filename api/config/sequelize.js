"use strict";
// En este archivo ira la configuración 
// e inicializacion, migracion de niestros modelos a la base de datos
// udando el principio CODE FIRST
Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = require("../models/skill");
const proyecto_1 = require("../models/proyecto");
const proyectoskill_1 = require("../models/proyectoskill");
const empresa_1 = require("../models/empresa");
const persona_1 = require("../models/persona");
const usuario_1 = require("../models/usuario");
const imagenProyecto_1 = require("../models/imagenProyecto");
const usuarioEmpresa_1 = require("../models/usuarioEmpresa");
const usuarioskill_1 = require("../models/usuarioskill");
const usuarioproyecto_1 = require("../models/usuarioproyecto");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('pyaePU6hjB', 'pyaePU6hjB', 'DWCN8Ef4E2', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '-05:00',
});
exports.Skill = skill_1.skill_model(sequelize, Sequelize);
exports.Proyecto = proyecto_1.proyecto_model(sequelize, Sequelize);
exports.ProyectoSkill = proyectoskill_1.proyectoskill_model(sequelize, Sequelize);
exports.Empresa = empresa_1.empresa_model(sequelize, Sequelize);
exports.Persona = persona_1.persona_model(sequelize, Sequelize);
exports.Usuario = usuario_1.usuario_model(sequelize, Sequelize);
exports.ImagenProyecto = imagenProyecto_1.imagenProyecto_model(sequelize, Sequelize);
exports.UsuarioEmpresa = usuarioEmpresa_1.usuarioEmpresa_model(sequelize, Sequelize);
exports.UsuarioSkill = usuarioskill_1.usuarioSkill_model(sequelize, Sequelize);
exports.UsuarioProyecto = usuarioproyecto_1.usuarioProyecto_model(sequelize, Sequelize);
// Crea una clave foranea
exports.Usuario.belongsTo(exports.Persona, { foreignKey: 'per_id' });
exports.UsuarioSkill.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.UsuarioSkill.belongsTo(exports.Skill, { foreignKey: 'skill_id' });
exports.ProyectoSkill.belongsTo(exports.Skill, { foreignKey: 'skill_id' });
exports.ProyectoSkill.belongsTo(exports.Proyecto, { foreignKey: 'pro_id' });
exports.UsuarioProyecto.belongsTo(exports.Proyecto, { foreignKey: 'pro_id' });
exports.UsuarioProyecto.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.UsuarioEmpresa.belongsTo(exports.Empresa, { foreignKey: 'emp_id' });
exports.UsuarioEmpresa.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.ImagenProyecto.belongsTo(exports.Proyecto, { foreignKey: 'pro_id' });
// force => true; cada vez que el proyecto inicie (npm start)
//          toda la dara y tablas se van a crear nuevamente sin datos.
// force => false; solo va a crear las tablas y/o campos que bno figuren actualmente
//          en nuetra base de datos, los datos no se van a borrar.
sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(() => {
    sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con exito");
    });
});
