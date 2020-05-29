"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = require("../controllers/pacienteController");
class Paciente {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pacienteController_1.pacienteController.list);
        this.router.get('/:id', pacienteController_1.pacienteController.getOne);
        this.router.post('/', pacienteController_1.pacienteController.create);
        this.router.delete('/:id', pacienteController_1.pacienteController.delete);
        this.router.put('/:id', pacienteController_1.pacienteController.update);
    }
}
const paciente = new Paciente();
exports.default = paciente.router;
