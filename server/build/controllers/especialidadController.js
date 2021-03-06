"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EspecialidadController {
    //list the user
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipo = yield database_1.default.query('SELECT * FROM especialidad');
            res.json(tipo);
        });
    }
    //get user for id
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM especialidad WHERE id_especialidad = ?', [req.params.id]);
            if (result.length > 0) {
                return res.json(result[0]);
            }
            res.status(404).json({ text: 'User don`t finder' });
        });
    }
    //create new user
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO especialidad set ?', [req.body]);
            res.json({ message: 'User is Created!!!' });
        });
    }
    // delete user by id
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM especialidad WHERE id_especialidad = ?', [id]);
            res.json({ message: 'The user is Deleted' });
        });
    }
    //update user by id
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE especialidad set ? WHERE id_especialidad = ?', [req.body, id]);
            res.json({ message: 'The user in Updated' });
        });
    }
}
exports.especialidadController = new EspecialidadController();
