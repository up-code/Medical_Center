import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import tipoPaciente from './routes/tipoPacienteRutes';
import usuario from './routes/usuarioRutes';
import especialidad from './routes/especialidadRutes';
import paciente from './routes/pacienteRuetes';
import tipoUsuario from './routes/tipoUsuarioRutes';

class Server{
  public app : Application;
    constructor(){
      this.app = express();
      this.config();
      this.routes();
    }

    config(): void{
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(){
       this.app.use(indexRoutes);
       this.app.use('/api/tipoPaciente', tipoPaciente);
       this.app.use('/api/usuario', usuario);
       this.app.use('/api/especialidad',especialidad );
       this.app.use('/api/paciente', paciente);
       this.app.use('/api/tipoUsuario', tipoUsuario);
    }

    start(): void{
     this.app.listen(this.app.get('port'), () => {
         console.log('Server Working! in Port: ', this.app.get('port'));
     });
    }
}

const server = new Server();
server.start();
