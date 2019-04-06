"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
class EmpresaDTO {
    static getAll() {
        let query = "SELECT * FROM t_empresa";
        index_1.connection.query(query, (err, result) => {
            console.log(result);
        });
    }
}
exports.EmpresaDTO = EmpresaDTO;
