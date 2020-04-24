import { Router } from 'express';

import {gameController} from '../controllers/gameController';

class GameRoutes{
  public router : Router = Router();

  constructor(){
    this.config();
  }

  config(){
      this.router.get('/', gameController.list);
      this.router.get('/:id', gameController.getOne);
      this.router.post('/', gameController.create);
      this.router.delete('/:id', gameController.delete);
      this.router.put('/:id', gameController.update);
  }
}

const gameRoute = new GameRoutes();
export default gameRoute.router;