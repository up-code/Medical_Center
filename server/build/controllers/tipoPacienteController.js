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
class TipoPacienteController {
    //list the type
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipo = yield database_1.default.query('SELECT * FROM tipo_paciente');
            res.json(tipo);
        });
    }
    //get type for id
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM tipo_paciente WHERE id = ?', [req.params.id]);
            if (result.length > 0) {
                return res.json(result[0]);
            }
            res.status(404).json({ text: 'Gamon dont finder' });
        });
    }
    //create new type
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tipo_paciente set ?', [req.body]);
            res.json({ message: 'tipo_paciente is Created!!!' });
        });
    }
    // delete type by id
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tipo_paciente WHERE id = ?', [id]);
            res.json({ message: 'The tipo_paciente is Deleted' });
        });
    }
    //update type by id
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tipo_paciente set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'the tipo_paciente in Updated' });
        });
    }
}
exports.tipoPacienteController = new TipoPacienteController();
