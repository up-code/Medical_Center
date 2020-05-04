"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gameRutes_1 = __importDefault(require("./routes/gameRutes"));
const tipoPacienteRutes_1 = __importDefault(require("./routes/tipoPacienteRutes"));
const usuarioRutes_1 = __importDefault(require("./routes/usuarioRutes"));
const especialidadRutes_1 = __importDefault(require("./routes/especialidadRutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/games', gameRutes_1.default);
        this.app.use('/api/tipoPaciente', tipoPacienteRutes_1.default);
        this.app.use('/api/usuario', usuarioRutes_1.default);
        this.app.use('/api/especialidad', especialidadRutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server Working! in Port: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
