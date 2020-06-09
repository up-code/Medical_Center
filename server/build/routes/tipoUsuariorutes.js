"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoUsuarioController_1 = require("../controllers/tipoUsuarioController");
class TipoUsuario {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoUsuarioController_1.tipoUsuarioController.list);
        this.router.get('/:id', tipoUsuarioController_1.tipoUsuarioController.getOne);
        this.router.post('/', tipoUsuarioController_1.tipoUsuarioController.create);
        this.router.delete('/:id', tipoUsuarioController_1.tipoUsuarioController.delete);
        this.router.put('/:id', tipoUsuarioController_1.tipoUsuarioController.update);
    }
}
const tipoUsuario = new TipoUsuario();
exports.default = tipoUsuario.router;
