import { Router } from 'express';

import {pacienteController} from '../controllers/pacienteController';

class Paciente{
    public router : Router = Router();
    constructor(){
        this.config();
      }
    
      config(){
          this.router.get('/', pacienteController.list);
          this.router.get('/:id', pacienteController.getOne);
          this.router.post('/', pacienteController.create);
          this.router.delete('/:id', pacienteController.delete);
          this.router.put('/:id', pacienteController.update);
      }
    }
    
    const paciente = new Paciente();
    export default paciente.router;