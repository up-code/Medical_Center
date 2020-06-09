import { Router } from 'express';

import {tipoUsuarioController} from '../controllers/tipoUsuarioController';

class TipoUsuario{
    public router : Router = Router();
    constructor(){
        this.config();
      }
    
      config(){
          this.router.get('/', tipoUsuarioController.list);
          this.router.get('/:id', tipoUsuarioController.getOne);
          this.router.post('/', tipoUsuarioController.create);
          this.router.delete('/:id', tipoUsuarioController.delete);
          this.router.put('/:id', tipoUsuarioController.update);
      }
    }
    
    const tipoUsuario = new TipoUsuario();
    export default tipoUsuario.router;