"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoPacienteController_1 = require("../controllers/tipoPacienteController");
class TipoPaciente {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoPacienteController_1.tipoPacienteController.list);
        this.router.get('/:id', tipoPacienteController_1.tipoPacienteController.getOne);
        this.router.post('/', tipoPacienteController_1.tipoPacienteController.create);
        this.router.delete('/:id', tipoPacienteController_1.tipoPacienteController.delete);
        this.router.put('/:id', tipoPacienteController_1.tipoPacienteController.update);
    }
}
const tipoPaciente = new TipoPaciente();
exports.default = tipoPaciente.router;
