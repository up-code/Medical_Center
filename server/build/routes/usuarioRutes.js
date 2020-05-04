"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class Usuario {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.usuarioController.list);
        this.router.get('/:id', usuarioController_1.usuarioController.getOne);
        this.router.post('/', usuarioController_1.usuarioController.create);
        this.router.delete('/:id', usuarioController_1.usuarioController.delete);
        this.router.put('/:id', usuarioController_1.usuarioController.update);
    }
}
const usuario = new Usuario();
exports.default = usuario.router;
