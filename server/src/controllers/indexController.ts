import { Request, Response } from 'express';

class IndexController{

   public index(req: Request, res:Response){
        res.json({text: 'This is an API Rest Full'});
    }
}

export const indexController = new IndexController();
