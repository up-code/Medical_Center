import { Router } from 'express';

import {tipoPacienteController} from '../controllers/tipoPacienteController';

class TipoPaciente{
    public router : Router = Router();
    constructor(){
        this.config();
      }
    
      config(){
          this.router.get('/', tipoPacienteController.list);
          this.router.get('/:id', tipoPacienteController.getOne);
          this.router.post('/', tipoPacienteController.create);
          this.router.delete('/:id', tipoPacienteController.delete);
          this.router.put('/:id', tipoPacienteController.update);
      }
    }
    
    const tipoPaciente = new TipoPaciente();
    export default tipoPaciente.router;