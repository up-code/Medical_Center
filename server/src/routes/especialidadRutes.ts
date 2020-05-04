import { Router } from 'express';

import {especialidadController} from '../controllers/especialidadController';

class Especialidad{
    public router : Router = Router();
    constructor(){
        this.config();
      }
    
      config(){
          this.router.get('/', especialidadController.list);
          this.router.get('/:id', especialidadController.getOne);
          this.router.post('/', especialidadController.create);
          this.router.delete('/:id', especialidadController.delete);
          this.router.put('/:id', especialidadController.update);
      }
    }
    
    const especialidad = new Especialidad();
    export default especialidad.router;