"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const especialidadController_1 = require("../controllers/especialidadController");
class Especialidad {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', especialidadController_1.especialidadController.list);
        this.router.get('/:id', especialidadController_1.especialidadController.getOne);
        this.router.post('/', especialidadController_1.especialidadController.create);
        this.router.delete('/:id', especialidadController_1.especialidadController.delete);
        this.router.put('/:id', especialidadController_1.especialidadController.update);
    }
}
const especialidad = new Especialidad();
exports.default = especialidad.router;
