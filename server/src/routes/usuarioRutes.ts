import { Router } from 'express';

import {usuarioController} from '../controllers/usuarioController';

class Usuario{
    public router : Router = Router();
    constructor(){
        this.config();
      }
    
      config(){
          this.router.get('/', usuarioController.list);
          this.router.get('/:id', usuarioController.getOne);
          this.router.post('/', usuarioController.create);
          this.router.delete('/:id', usuarioController.delete);
          this.router.put('/:id', usuarioController.update);
      }
    }
    
    const usuario = new Usuario();
    export default usuario.router;